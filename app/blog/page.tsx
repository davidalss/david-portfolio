import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { getAllPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog - David Alisson",
  description: "Thoughts on web development, automation, and software engineering.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-16">
      <BlogHero />
      <BlogGrid posts={posts} />
    </div>
  )
}
