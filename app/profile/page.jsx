"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Edit,
  Save,
  MessageCircle,
  Calendar,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const Profile = () => {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState(null);
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    username: "",
    full_name: "",
    bio: "",
  });

  // Mock data initialization
  useEffect(() => {
    if (user) {
      // Initialize with mock profile data
      const mockProfile = {
        id: "1",
        username: "johndoe",
        full_name: user.user_metadata?.full_name || "John Doe",
        bio: "This is a sample bio. Edit your profile to update this information.",
        avatar_url: null,
      };

      // Mock comments data
      const mockComments = [
        {
          id: "1",
          content:
            "Great article! Really enjoyed reading this perspective on women in tech.",
          created_at: "2024-01-15T10:30:00Z",
          blog_post_id: "1",
          blog_posts: {
            title: "Women in Technology: Breaking Barriers",
          },
        },
        {
          id: "2",
          content:
            "Thank you for sharing these insights about workplace wellness.",
          created_at: "2024-01-10T14:20:00Z",
          blog_post_id: "2",
          blog_posts: {
            title: "Wellness in the Workplace",
          },
        },
      ];

      setProfile(mockProfile);
      setComments(mockComments);
      setEditForm({
        username: mockProfile.username || "",
        full_name: mockProfile.full_name || "",
        bio: mockProfile.bio || "",
      });
    }
  }, [user]);

  const handleSaveProfile = async () => {
    // Mock save - in real app this would be an API call
    const updatedProfile = {
      ...profile,
      username: editForm.username,
      full_name: editForm.full_name,
      bio: editForm.bio,
    };

    setProfile(updatedProfile);

    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });

    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  const router = useRouter();
  if (!user) {
    router.push("/");
    return null; // prevent rendering while redirecting
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="space-y-8">
            {/* Profile Header */}
            <Card className="shadow-soft border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary-one" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gradient">
                        {profile?.full_name || "Anonymous User"}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        @{profile?.username || "no-username"}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                    <Edit className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name</Label>
                      <Input
                        id="full_name"
                        value={editForm.full_name}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            full_name: e.target.value,
                          })
                        }
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={editForm.username}
                        onChange={(e) =>
                          setEditForm({ ...editForm, username: e.target.value })
                        }
                        placeholder="Choose a username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={editForm.bio}
                        onChange={(e) =>
                          setEditForm({ ...editForm, bio: e.target.value })
                        }
                        placeholder="Tell us about yourself..."
                        rows={3}
                      />
                    </div>
                    <Button
                      onClick={handleSaveProfile}
                      className="gradient-primary text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <div>
                    <p className="text-muted-foreground">
                      {profile?.bio || "No bio available."}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Profile Content */}
            <Tabs defaultValue="comments" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="comments">My Comments</TabsTrigger>
                <TabsTrigger value="blogs">My Blogs</TabsTrigger>
              </TabsList>

              <TabsContent value="comments" className="space-y-4">
                <Card className="shadow-soft border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      My Comments ({comments.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {comments.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>You haven't made any comments yet.</p>
                        <p className="text-sm">
                          Start engaging with blog posts to see your comments
                          here.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {comments.map((comment) => (
                          <div
                            key={comment.id}
                            className="border-l-4 border-pink-200 pl-4 py-2"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="text-xs border-pink-100">
                                {comment.blog_posts?.title || "Blog Post"}
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3 mr-1" />
                                {new Date(
                                  comment.created_at
                                ).toLocaleDateString()}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {comment.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="blogs" className="space-y-4">
                <Card className="shadow-soft border-border">
                  <CardHeader>
                    <CardTitle>My Blog Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      <Edit className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>You haven't written any blog posts yet.</p>
                      <Link href="/write">
                        <Button className="mt-4 gradient-primary text-white cursor-pointer">
                          Write Your First Blog
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
