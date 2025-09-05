// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

// const CommentSection = () => {
//   const [newComment, setNewComment] = useState("");

//   const comments = [
//     {
//       id: "1",
//       author: "Sarah Mitchell",
//       content: "I've been hearing this for the last 5 years. What I've learned is that timing the market is a bad idea. If you're in a position to keep money in the market long term, don't panic and keep investing.",
//       timestamp: "5 days ago",
//       likes: 92,
//       replies: 1,
//       avatar: "SM"
//     },
//     {
//       id: "2",
//       author: "Alexandra Chen",
//       content: "This year the market has already dropped by 20%. And that wasn't due to major systemic problems, but merely because of external factors. One can only imagine what will happen when a real crisis comes — at least a 50% decline.",
//       timestamp: "4 days ago",
//       likes: 37,
//       replies: 4,
//       avatar: "AC"
//     },
//     {
//       id: "3",
//       author: "Emma Rodriguez",
//       content: "Good article! I think this is a very important reminder. When markets are in a state of euphoria, it often feels like prices can only go higher, but that's usually when risk is at its peak. Staying cautious and disciplined during those times can make a big difference for long-term investors.",
//       timestamp: "Aug 19",
//       likes: 93,
//       replies: 1,
//       avatar: "ER"
//     }
//   ];

//   const handleSubmitComment = () => {
//     if (newComment.trim()) {
//       // Handle comment submission
//       console.log("Submitting comment:", newComment);
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-6 py-12 border-t border-border/50">
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold text-foreground mb-1">
//           Responses ({comments.length})
//         </h3>
//       </div>

//       {/* Comment Input */}
//       <div className="mb-12">
//         <div className="flex items-start gap-4">
//           <Avatar className="w-10 h-10 flex-shrink-0">
//             <AvatarFallback className="bg-pink-100 text-primary-one font-medium">
//               YU
//             </AvatarFallback>
//           </Avatar>
//           <div className="flex-1">
//             <Textarea
//               placeholder="What are your thoughts?"
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="min-h-[80px] border-border/50 bg-background resize-none text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-0"
//             />
//             <div className="flex justify-end mt-3">
//               <Button
//                 onClick={handleSubmitComment}
//                 disabled={!newComment.trim()}
//                 className="bg-pink-500 px-6 py-2 text-sm"
//               >
//                 Respond
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Comments List */}
//       <div className="space-y-8">
//         {comments.map((comment) => (
//           <div key={comment.id} className="group">
//             <div className="flex items-start gap-4">
//               <Avatar className="w-10 h-10 flex-shrink-0">
//                 <AvatarFallback className="bg-muted text-muted-foreground font-medium text-sm">
//                   {comment.avatar}
//                 </AvatarFallback>
//               </Avatar>

//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-3 mb-2">
//                   <h4 className="font-medium text-foreground text-sm">
//                     {comment.author}
//                   </h4>
//                   <span className="text-muted-foreground text-sm">
//                     {comment.timestamp}
//                   </span>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 ml-auto"
//                   >
//                     <MoreHorizontal className="w-4 h-4" />
//                   </Button>
//                 </div>

//                 <p className="text-foreground leading-relaxed mb-4 text-sm">
//                   {comment.content}
//                 </p>

//                 <div className="flex items-center gap-6">
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="text-muted-foreground hover:text-foreground h-auto p-0 font-normal"
//                   >
//                     <Heart className="w-4 h-4 mr-2" />
//                     {comment.likes}
//                   </Button>

//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="text-muted-foreground hover:text-foreground h-auto p-0 font-normal"
//                   >
//                     <MessageCircle className="w-4 h-4 mr-2" />
//                     {comment.replies} {comment.replies === 1 ? 'reply' : 'replies'}
//                   </Button>

//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="text-muted-foreground hover:text-foreground h-auto p-0 font-normal"
//                   >
//                     Reply
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;

"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

function getInitials(name = "") {
  if (!name) return "??";
  const names = name.split(" ");
  return (names[0][0] || "") + (names[1]?.[0] || "");
}

const CommentSection = ({ postId }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

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
    if (newComment.trim()) {
      // TODO: Implement comment POST request here
      setNewComment("");
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
            <div key={comment.id} className="group">
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
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 ml-auto"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-foreground leading-relaxed mb-4 text-sm">
                    {comment.desc}
                  </p>

                  <div className="flex items-center gap-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground h-auto p-0 font-normal"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      {comment.likes ?? 0}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground h-auto p-0 font-normal"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {comment.replies ?? 0}{" "}
                      {comment.replies === 1 ? "reply" : "replies"}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground h-auto p-0 font-normal"
                    >
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
