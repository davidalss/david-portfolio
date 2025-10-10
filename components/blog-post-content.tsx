"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"

interface BlogPostContentProps {
  post: BlogPost
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
  },
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="pt-16 min-h-screen bg-background">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button asChild variant="ghost" className="mb-8 group">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Button>

          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 text-foreground-subtle text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{post.readingTime}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                <span className="gradient-text">{post.title}</span>
              </h1>

              <p className="text-lg text-foreground-muted leading-relaxed mb-6">{post.excerpt}</p>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium text-primary bg-primary-muted rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Button variant="ghost" size="sm" className="group">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:gradient-text prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-surface-elevated prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface-elevated prose-pre:border prose-pre:border-border">
              <MDXRemote source={post.content} options={mdxOptions} />
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  )
}
