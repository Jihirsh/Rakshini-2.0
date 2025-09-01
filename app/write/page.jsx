"use client";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Eye, Image, Bold, Italic, List, Quote, Type, Upload, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const WriteBlog = () => {
  const { data: session, status } = useSession();
  const user = session?.user;         
  const loading = status === "loading"; 
  const { toast } = useToast();
  const router = useRouter();
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    featuredImage: null
  });
  
  const [isPreview, setIsPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [featuredImageUrl, setFeaturedImageUrl] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    
    // mock image upload - simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const imageUrl = URL.createObjectURL(file);
    setFeaturedImageUrl(imageUrl);
    setFormData({ ...formData, featuredImage: file });
    
    toast({
      title: "Image uploaded",
      description: "Your featured image has been uploaded successfully."
    });
    
    setUploading(false);
  };

  const insertTextAtCursor = (before, after = "") => {
    const textarea = document.getElementById("content");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = before + selectedText + after;
    
    const newValue = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
    setFormData({ ...formData, content: newValue });
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  const handleSave = async (status) => {
    if (!formData.title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for your blog post.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.content.trim()) {
      toast({
        title: "Content required",
        description: "Please write some content for your blog post.",
        variant: "destructive"
      });
      return;
    }

    setSaving(true);
    
    // Mock save
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: status === "published" ? "Blog published!" : "Draft saved!",
      description:
        status === "published"
          ? "Your blog post has been published successfully."
          : "Your draft has been saved successfully."
    });

    setSaving(false);
    router.push("/profile");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/profile">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Profile
              </Button>
            </Link>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsPreview(!isPreview)}
                className="cursor-pointer"
              >
                <Eye className="w-4 h-4 mr-2" />
                {isPreview ? "Edit" : "Preview"}
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSave("draft")}
                disabled={saving}
                className="cursor-pointer"
              >
                {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                Save Draft
              </Button>
              <Button
                onClick={() => handleSave("published")}
                disabled={saving}
                className="gradient-primary text-white cursor-pointer"
              >
                {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Publish
              </Button>
            </div>
          </div>

          {isPreview ? (
            /* Preview Mode */
            <Card className="shadow-soft border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {featuredImageUrl && (
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={featuredImageUrl}
                        alt="Featured"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                  
                  <div>
                    <h1 className="text-3xl font-bold text-gradient mb-4">
                      {formData.title || "Your Blog Title"}
                    </h1>
                    {formData.excerpt && (
                      <p className="text-lg text-muted-foreground mb-4">{formData.excerpt}</p>
                    )}
                    {formData.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {formData.tags.split(",").map((tag, index) => (
                          <Badge key={index} variant="outline">
                            {tag.trim()}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <div style={{ whiteSpace: "pre-wrap" }}>
                      {formData.content || "Start writing your blog content..."}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Edit Mode */
            <div className="space-y-6">
              {/* Featured Image Upload */}
              <Card className="shadow-soft border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Image className="w-5 h-5 mr-2" />
                    Featured Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {featuredImageUrl ? (
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={featuredImageUrl}
                          alt="Featured"
                          className="w-full h-48 object-cover"
                        />
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => {
                            setFeaturedImageUrl(null);
                            setFormData({ ...formData, featuredImage: null });
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {uploading ? (
                          <div className="space-y-2">
                            <Loader2 className="w-8 h-8 mx-auto animate-spin text-primary" />
                            <p className="text-muted-foreground">Uploading...</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                            <p className="text-muted-foreground">Click to upload featured image</p>
                          </div>
                        )}
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Blog Form */}
              <Card className="shadow-soft border-border">
                <CardHeader>
                  <CardTitle>Write Your Blog Post</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter an engaging title for your blog post"
                      className="text-lg"
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt (Optional)</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Write a brief description of your blog post..."
                      rows={3}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <div className="border border-input rounded-md">
                      {/* Formatting Toolbar */}
                      <div className="flex items-center space-x-1 p-2 border-b border-border bg-muted/20">
                        <Button type="button" variant="ghost" size="sm" onClick={() => insertTextAtCursor("# ", "")}>
                          <Type className="w-4 h-4" /> H1
                        </Button>
                        <Button type="button" variant="ghost" size="sm" onClick={() => insertTextAtCursor("## ", "")}>
                          <Type className="w-4 h-4" /> H2
                        </Button>
                        <Button type="button" variant="ghost" size="sm" onClick={() => insertTextAtCursor("**", "**")}>
                          <Bold className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="sm" onClick={() => insertTextAtCursor("*", "*")}>
                          <Italic className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="sm" onClick={() => insertTextAtCursor("> ", "")}>
                          <Quote className="w-4 h-4" />
                        </Button>
                        <Button type="button" variant="ghost" size="sm" onClick={() => insertTextAtCursor("- ", "")}>
                          <List className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Start writing your amazing blog post..."
                        rows={15}
                        className="border-0 resize-none focus-visible:ring-0"
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (Optional)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="Enter tags separated by commas (e.g., health, wellness, lifestyle)"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WriteBlog;
