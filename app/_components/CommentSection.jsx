"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MoreHorizontal } from "lucide-react";

function getInitials(name = "") {
  if (!name) return "??";
  const names = name.split(" ");
  return (names[0][0] || "") + (names[1]?.[0] || "");
}

const CommentSection = ({ postId }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpenId, setMenuOpenId] = useState(null); // track which comment's menu is open
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      const res = await fetch(`/api/comments/${postId}`);
      const data = await res.json();
      setComments(Array.isArray(data) ? data : []);
      setLoading(false);
    }
    if (postId) fetchComments();
  }, [postId]);

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return;
    try {
      const res = await fetch(`/api/comments/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ desc: newComment }),
      });

      if (res.ok) {
        setNewComment("");
        const updated = await fetch(`/api/comments/${postId}`);
        const data = await updated.json();
        setComments(Array.isArray(data) ? data : []);
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to post comment.");
      }
    } catch (error) {
      alert("Network error posting comment.");
    }
  };

  // delete and edit comment
  const handleDeleteComment = async (commentId) => {
    try {
      const res = await fetch(
        `/api/comments/${postId}?commentId=${commentId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setComments(comments.filter((c) => c.id !== commentId));
      } else {
        alert("Failed to delete comment.");
      }
    } catch {
      alert("Network error.");
    }
  };

  const handleEditComment = async (commentId) => {
    try {
      const res = await fetch(
        `/api/comments/${postId}?commentId=${commentId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ desc: editValue }),
        }
      );
      if (res.ok) {
        const updatedComment = await res.json();
        setComments((prev) =>
          prev.map((c) => (c.id === commentId ? updatedComment : c))
        );
        setEditingId(null);
        setEditValue("");
      } else {
        alert("Failed to edit comment.");
      }
    } catch {
      alert("Network error.");
    }
  };

  function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "today";
    if (diff === 1) return "1 day ago";
    if (diff < 7) return `${diff} days ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 border-t border-border/50">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-1">
          Responses ({comments.length})
        </h3>
      </div>

      {/* Comment Input */}
      <div className="mb-12">
        <div className="flex items-start gap-4">
          <Avatar className="w-10 h-10 flex-shrink-0">
            <AvatarFallback className="bg-pink-100 text-primary-one font-medium">
              YU
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What are your thoughts?"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[80px] border-border/50 bg-background resize-none text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-0"
            />
            <div className="flex justify-end mt-3">
              <Button
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="bg-pink-500 px-6 py-2 text-sm"
              >
                Respond
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-8">
        {loading ? (
          <div className="text-muted-foreground">Loading...</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="group relative">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarFallback className="bg-muted text-muted-foreground font-medium text-sm">
                    {getInitials(comment.user?.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-foreground text-sm">
                      {comment.user?.name || "Anonymous"}
                    </h4>
                    <span className="text-muted-foreground text-sm">
                      {timeAgo(comment.createdAt)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:opacity-100 transition-opacity h-6 w-6 p-0 ml-auto"
                      onClick={() =>
                        setMenuOpenId(menuOpenId === comment.id ? null : comment.id)
                      }
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  {/* Comment text or editing UI */}
                  {editingId === comment.id ? (
                    <div>
                      <Textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <div className="flex gap-2 mt-2">
                        <Button
                          size="sm"
                          onClick={() => handleEditComment(comment.id)}
                          className="bg-pink-500 px-3 py-1 text-xs"
                        >
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1 text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-foreground leading-relaxed mb-4 text-sm">
                      {comment.desc}
                    </p>
                  )}
                  <div className="flex items-center gap-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground h-auto p-0 font-normal"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      {comment.likes ?? 0}
                    </Button>
                  </div>
                </div>
              </div>
              {/* Edit/Delete Menu */}
              {menuOpenId === comment.id && (
                <div className="absolute right-2 top-8 bg-white shadow rounded z-10 py-1 px-2 flex flex-col gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs"
                    onClick={() => {
                      setEditingId(comment.id);
                      setEditValue(comment.desc);
                      setMenuOpenId(null);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs text-red-500"
                    onClick={() => {
                      handleDeleteComment(comment.id);
                      setMenuOpenId(null);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
