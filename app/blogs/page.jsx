// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ArrowRight, Search } from "lucide-react";
// import { useState } from "react";
// import Footer from "../_components/Footer";
// import Navbar from "../_components/Navbar";
// import Link from "next/link";
// import CategoryList from "../_components/CategoryList";

// const Community = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const blogPosts = [
//     {
//       title: "Breaking the Glass Ceiling: Women in Tech",
//       excerpt:
//         "Exploring how women are revolutionizing the technology industry and creating pathways for future generations.",
//       author: "Sarah Chen",
//       date: "Dec 15, 2024",
//       readTime: "5 min read",
//       category: "Technology",
//       image: "/blog-tech-women.jpg",
//       slug: "breaking-the-glass-ceiling-women-in-tech",
//     },
//     {
//       title: "The Power of Female Leadership",
//       excerpt:
//         "Understanding the unique qualities that women bring to leadership roles and their impact on organizations.",
//       author: "Dr. Priya Sharma",
//       date: "Dec 12, 2024",
//       readTime: "7 min read",
//       category: "Leadership",
//       image: "/blog-leadership.jpg",
//       slug: "the-power-of-female-leadership",
//     },
//     {
//       title: "Women's Health: Taking Control",
//       excerpt:
//         "Essential health tips and insights for women to prioritize their physical and mental well-being.",
//       author: "Dr. Maya Patel",
//       date: "Dec 10, 2024",
//       readTime: "6 min read",
//       category: "Health",
//       image: "/blog-health.jpg",
//       slug: "womens-health-taking-control",
//     },
//     {
//       title: "Financial Independence for Women",
//       excerpt:
//         "Practical strategies for achieving financial freedom and building wealth as a woman.",
//       author: "Rachel Thompson",
//       date: "Dec 8, 2024",
//       readTime: "8 min read",
//       category: "Finance",
//       image: "/blog-finance.jpg",
//       slug: "financial-independence-for-women",
//     },
//     {
//       title: "Supporting Working Mothers",
//       excerpt:
//         "Creating inclusive workplaces that support mothers and their unique challenges.",
//       author: "Lisa Rodriguez",
//       date: "Dec 5, 2024",
//       readTime: "5 min read",
//       category: "Workplace",
//       image: "/blog-workplace.jpg",
//       slug: "supporting-working-mothers",
//     },
//     {
//       title: "Women in Entrepreneurship",
//       excerpt:
//         "Success stories and challenges faced by women entrepreneurs in today's business landscape.",
//       author: "Amanda Johnson",
//       date: "Dec 3, 2024",
//       readTime: "9 min read",
//       category: "Business",
//       image: "/blog-business.jpg",
//       slug: "women-in-entrepreneurship",
//     },
//     {
//       title: "Self-Care Essentials for Busy Women",
//       excerpt:
//         "Discover practical self-care strategies that fit into your hectic schedule and prioritize your well-being.",
//       author: "Dr. Ananya Gupta",
//       date: "Dec 1, 2024",
//       readTime: "4 min read",
//       category: "Wellness",
//       image: "/blog-wellness.jpg",
//       slug: "self-care-essentials-for-busy-women",
//     },
//     {
//       title: "Women's Rights: Progress and Challenges",
//       excerpt:
//         "A comprehensive look at the advancement of women's rights globally and the work that still lies ahead.",
//       author: "Kavitha Singh",
//       date: "Nov 28, 2024",
//       readTime: "10 min read",
//       category: "Rights",
//       image: "/blog-rights.jpg",
//       slug: "womens-rights-progress-and-challenges",
//     },
//     {
//       title: "Balancing Career and Motherhood",
//       excerpt:
//         "Real stories and practical advice from mothers who are navigating their professional and personal lives.",
//       author: "Meera Sharma",
//       date: "Nov 25, 2024",
//       readTime: "6 min read",
//       category: "Lifestyle",
//       image: "/blog-lifestyle.jpg",
//       slug: "balancing-career-and-motherhood",
//     },
//   ];

//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesSearch =
//       post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.author.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || post.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-30 pb-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Explore <span className="text-gradient">Our Blogs</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Discover inspiring stories, expert advice, and valuable insights
//             from our community of empowered women.
//           </p>
//         </div>
//       </section>

//       {/* Search and Filter Section */}
//       <section className="pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
//             <div className="md:flex-row gap-6">
//               <div className="relative w-full mb-7">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                 <Input
//                   placeholder="Search articles, authors, or topics..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-12 h-12 bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/15 rounded-2xl"
//                 />
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 <CategoryList
//                   selectedCategory={selectedCategory}
//                   setSelectedCategory={setSelectedCategory}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Grid Section */}
//       <section className="pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {filteredPosts.length === 0 ? (
//             <div className="text-center py-16">
//               <p className="text-xl text-muted-foreground">
//                 No articles found matching your search criteria.
//               </p>
//               <Button
//                 onClick={() => {
//                   setSearchTerm("");
//                   setSelectedCategory("All");
//                 }}
//                 variant="outline"
//                 className="mt-4 border-pink-100 text-gradient hover:cursor-pointer hover:scale-105"
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                 {filteredPosts.map((post, index) => (
//                   <Link
//                     key={index}
//                     href={`/blogs/${post.slug || "sample-post"}`}
//                   >
//                     <article className="group cursor-pointer">
//                       <div className="space-y-6">
//                         {/* Image */}
//                         <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
//                           <img
//                             src={post.image}
//                             alt={post.title}
//                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                           />
//                         </div>

//                         {/* Content */}
//                         <div className="space-y-4">
//                           {/* Category and Read Time */}
//                           <div className="flex items-center justify-between">
//                             <span className="text-sm font-medium text-primary-one uppercase tracking-wider">
//                               {post.category}
//                             </span>
//                             <span className="text-sm text-muted-foreground">
//                               {post.readTime}
//                             </span>
//                           </div>

//                           {/* Title */}
//                           <h3 className="text-xl font-bold text-foreground group-hover:text-primary-one transition-colors duration-200 leading-tight">
//                             {post.title}
//                           </h3>

//                           {/* Excerpt */}
//                           <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
//                             {post.excerpt}
//                           </p>

//                           {/* Author and Date */}
//                           <div className="flex items-center justify-between pt-4 border-t border-border/50">
//                             <div>
//                               <p className="text-sm font-medium text-foreground">
//                                 {post.author}
//                               </p>
//                               <p className="text-xs text-muted-foreground">
//                                 {post.date}
//                               </p>
//                             </div>
//                             <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                               <ArrowRight className="w-4 h-4 text-primary-one" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   </Link>
//                 ))}
//               </div>

//               <div className="text-center mt-12">
//                 <p className="text-muted-foreground mb-4">
//                   Showing {filteredPosts.length} of {blogPosts.length} articles
//                 </p>
//                 <Button
//                   size="lg"
//                   className="gradient-primary text-white px-8 py-4 shadow-soft"
//                 >
//                   Load More Articles
//                   <ArrowRight className="w-5 h-5 ml-2" />
//                 </Button>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Community;


"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import Link from "next/link";
import CategoryList from "../_components/CategoryList";

const Community = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      let url = `/api/posts?cat=${encodeURIComponent(selectedCategory)}&search=${encodeURIComponent(searchTerm)}`;
      const res = await fetch(url, { cache: "no-store" });
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
      setLoading(false);
    }
    fetchPosts();
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-30 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore <span className="text-gradient">Our Blogs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover inspiring stories, expert advice, and valuable insights
            from our community of empowered women.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <div className="md:flex-row gap-6">
              <div className="relative w-full mb-7">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-white/15 rounded-2xl"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <CategoryList
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Loading...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles found matching your search criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                variant="outline"
                className="mt-4 border-pink-100 text-gradient hover:cursor-pointer hover:scale-105"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.slug || "sample-post"}`}
                  >
                    <article className="group cursor-pointer">
                      <div className="space-y-6">
                        {/* Image */}
                        <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                          <img
                            src={post.img || "/default-blog.jpg"}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          {/* Category and Read Time */}
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-primary-one uppercase tracking-wider">
                              {post.cat?.title}
                            </span>
                            {/* You can add a field for readTime to your Post model if desired */}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary-one transition-colors duration-200 leading-tight">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                            {post.desc}
                          </p>

                          {/* Author and Date */}
                          <div className="flex items-center justify-between pt-4 border-t border-border/50">
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {post.user?.name || post.userEmail}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(post.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <ArrowRight className="w-4 h-4 text-primary-one" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Showing {posts.length} articles
                </p>
                <Button
                  size="lg"
                  className="gradient-primary text-white px-8 py-4 shadow-soft"
                >
                  Load More Articles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;