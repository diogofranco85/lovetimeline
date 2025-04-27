import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Clock, Link, Eye } from "lucide-react"
import Image from "next/image"

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

export function PostCard({ post }: IFeaturedPostCard) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-primary">{post.category}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2 text-xl">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
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
      </CardFooter>
    </Card>
  )
}
