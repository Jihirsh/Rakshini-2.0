"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import Link from "next/link";
import CommentSection from "@/app/_components/CommentSection";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      const res = await fetch(`/api/posts/${slug}`);
      const data = await res.json();
      setPost(data && !data.error ? data : null);
      setLoading(false);
    }
    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="text-center pt-32 text-xl text-muted-foreground">
          Loading...
        </div>
        <Footer />
      </div>
    );
  }
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="text-center pt-32 text-xl text-muted-foreground">
          Blog post not found.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Article */}
      <article className="pb-0">
        {/* Article Header */}
        <header className="px-4 sm:px-6 mb-12">
          <div className="pt-24 max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 tracking-tight">
              {post.title}
            </h1>

            {/* Author and Meta Information */}
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-one" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">
                    {post.author || post.user?.name}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    <span>·</span>
                    <span>
                      {post.readTime ? `${post.readTime} min read` : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Small Action buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary h-10 w-10 p-0"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary h-10 w-10 p-0"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary h-10 w-10 p-0"
                >
                  <Bookmark className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary h-10 w-10 p-0"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="px-4 sm:px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
              <img
                src={post.img || "/default-blog.jpg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div
              className="text-foreground leading-relaxed text-lg
                [&>p]:mb-8 [&>p]:text-foreground [&>p]:leading-8
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:leading-tight
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-12 [&>h3]:mb-4
                [&>ul]:mb-8 [&>ol]:mb-8 [&>li]:mb-2 [&>li]:text-foreground [&>li]:leading-8
                [&>blockquote]:border-l-4 [&>blockquote]:border-primary/30 [&>blockquote]:pl-6 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-muted-foreground
                [&>a]:text-primary [&>a]:underline [&>a]:decoration-primary/50 hover:[&>a]:decoration-primary
                [&>strong]:font-semibold [&>strong]:text-foreground
                [&>em]:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Category Badge at bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <Badge
                variant="secondary"
                className="rounded-3xl text-primary-one bg-pink-100 border-pink-300 text-sm px-4 py-2"
              >
                {post.category?.title}
              </Badge>
            </div>
          </div>
        </div>

        {/* Author Bio Section */}
        <div className="px-4 sm:px-6 mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-primary-one" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    About {post.author || post.user?.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {post.author || post.user?.name} is a passionate advocate
                    for women's empowerment and professional development.
                    Through her writing and speaking engagements, she continues
                    to inspire and guide women on their journey to success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <CommentSection postId={post.id} />

        {/* Call to Action */}
        <div className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-pink-50 to-violet-50 rounded-xl p-8 text-center border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Community
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
                Connect with like-minded women, share your experiences, and
                continue growing together in our supportive community.
              </p>
              <Link href="/blogs">
                <Button className="gradient-primary text-white px-8 py-3 text-base cursor-pointer">
                  Explore More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
