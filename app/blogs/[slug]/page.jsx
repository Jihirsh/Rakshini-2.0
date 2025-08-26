"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import { useParams } from "next/navigation";
import Link from "next/link";
import CommentSection from "@/app/_components/CommentSection";


const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog data (in a real app, this would come from an API)
  const blogData = {
    "breaking-the-glass-ceiling-women-in-tech": {
      title: "Breaking the Glass Ceiling: Women in Tech",
      excerpt: "Exploring how women are revolutionizing the technology industry and creating pathways for future generations.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "/blog-tech-women.jpg",
      content: `
        <p>The technology industry has long been dominated by men, but women are steadily breaking through barriers and making their mark in this dynamic field. From coding to leadership roles, women are not just participating—they're leading the charge toward innovation.</p>
        
        <h2>The Current Landscape</h2>
        <p>While women still represent a smaller percentage of tech workers, their impact is undeniable. Companies with diverse teams consistently outperform their homogeneous counterparts, and women bring unique perspectives that drive creativity and problem-solving.</p>
        
        <h2>Pioneering Women in Tech</h2>
        <p>From Ada Lovelace, often considered the first computer programmer, to modern leaders like Susan Wojcicki and Reshma Saujani, women have been instrumental in shaping the digital world we live in today.</p>
        
        <h2>Overcoming Challenges</h2>
        <p>Despite progress, challenges remain. Issues like pay gaps, underrepresentation in leadership, and workplace culture continue to be areas where improvement is needed. However, initiatives focusing on mentorship, education, and advocacy are making real differences.</p>
        
        <h2>The Path Forward</h2>
        <p>The future looks bright as more organizations recognize the value of diversity and inclusion. With continued support and opportunities, the next generation of women in tech will undoubtedly achieve even greater heights.</p>
      `
    },
    "the-power-of-female-leadership": {
      title: "The Power of Female Leadership",
      excerpt: "Understanding the unique qualities that women bring to leadership roles and their impact on organizations.",
      author: "Dr. Priya Sharma",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Leadership",
      image: "/blog-leadership.jpg",
      content: `
        <p>Leadership comes in many forms, and research consistently shows that women bring distinctive qualities to leadership roles that benefit organizations across all sectors.</p>
        
        <h2>Collaborative Leadership Style</h2>
        <p>Women leaders often excel at collaborative decision-making, creating inclusive environments where team members feel valued and heard. This approach leads to higher employee engagement and better business outcomes.</p>
        
        <h2>Emotional Intelligence</h2>
        <p>Studies indicate that women typically score higher on emotional intelligence measures, allowing them to navigate complex interpersonal dynamics and build stronger relationships with team members and stakeholders.</p>
        
        <h2>Risk Assessment and Management</h2>
        <p>Research suggests that women tend to take a more thorough approach to risk assessment, often leading to more sustainable and well-considered business decisions.</p>
        
        <h2>Developing Future Leaders</h2>
        <p>Female leaders are often excellent mentors, investing time in developing others and creating pipelines for future leadership. This commitment to growth benefits entire organizations.</p>
      `
    }
  };

  // Get the specific blog post or use a default
  const currentBlog = blogData[slug] || {
    title: "Sample Blog Post",
    excerpt: "This is a sample blog post to demonstrate the blog layout and structure.",
    author: "Jane Doe",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    category: "General",
    image: "/blog-tech-women.jpg",
    content: `
      <p>This is a sample blog post that demonstrates how individual blog posts are displayed on this platform. The content is structured to be easily readable and engaging for our community.</p>
      
      <h2>About This Post</h2>
      <p>This skeleton template provides a consistent format for all blog posts on the platform, ensuring a uniform reading experience while maintaining the minimalistic design principles of the site.</p>
      
      <h2>Content Structure</h2>
      <p>Each blog post includes a featured image, title, author information, reading time, and well-structured content with headings and paragraphs for optimal readability.</p>
      
      <h2>Community Engagement</h2>
      <p>Readers can engage with posts through various interaction options, fostering a sense of community and encouraging meaningful discussions around important topics.</p>
      
      <h2>Conclusion</h2>
      <p>This template ensures that all blog content maintains consistency while allowing authors to focus on creating valuable, insightful content for our community of empowered women.</p>
    `
  };

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
              {currentBlog.title}
            </h1>

            {/* Author and Meta Information */}
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-one" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">{currentBlog.author}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{currentBlog.date}</span>
                    <span>·</span>
                    <span>{currentBlog.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary h-10 w-10 p-0">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary h-10 w-10 p-0">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary h-10 w-10 p-0">
                  <Bookmark className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary h-10 w-10 p-0">
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
                src={currentBlog.image} 
                alt={currentBlog.title}
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
              dangerouslySetInnerHTML={{ __html: currentBlog.content }}
            />
            
            {/* Category Badge at bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <Badge variant="secondary" className="rounded-3xl text-primary-one bg-pink-100 border-pink-300 text-sm px-4 py-2">
                {currentBlog.category}
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
                  <h3 className="text-xl font-bold text-foreground mb-3">About {currentBlog.author}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {currentBlog.author} is a passionate advocate for women's empowerment and professional development. 
                    Through her writing and speaking engagements, she continues to inspire and guide women on their journey to success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <CommentSection />

        {/* Call to Action */}
        <div className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-pink-50 to-violet-50 rounded-xl p-8 text-center border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Community</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
                Connect with like-minded women, share your experiences, and continue growing together in our supportive community.
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