import { Clock, Link, Eye } from "lucide-react";
import Image from "next/image";

export interface IAuthor {
  name: string,
  avatar: string,
}

export interface IPost {
  id: number,
  title: string,
  excerpt: string
  image: string,
  category: string,
  date: string
  views: number
  author: IAuthor
}

export interface IFeaturedPostCard {
  post: IPost
}

export function FeaturedPostCard({ post }: IFeaturedPostCard) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="relative aspect-video w-full md:w-2/5 overflow-hidden rounded-lg">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center md:w-3/5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-primary">{post.category}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
        </div>
        <h3 className="mt-2 text-xl font-bold">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-sm">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Eye className="h-3 w-3" />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}