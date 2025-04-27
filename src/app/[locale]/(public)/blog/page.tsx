import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeaturedPostCard } from "@/features/featured-post-card";
import { Footer } from "@/features/footer";
import { Header } from "@/features/header";
import { PostCard } from "@/features/post-card";
import { appConfig } from "@/utils/app.config";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {

  const { blog: { featuredPosts, popularPosts, recentPosts } } = appConfig;

  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bem-vindo ao MeuBlog</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Seu portal de notícias, artigos e conteúdos interessantes
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 md:px-6 py-6">
          <Tabs defaultValue="recentes" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="recentes">Últimos Posts</TabsTrigger>
                <TabsTrigger value="populares">Mais Vistos</TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm" className="gap-1">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <TabsContent value="recentes" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="populares" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {popularPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        <section className="container px-4 md:px-6 py-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Posts em Destaque</h2>
              <Button variant="ghost" size="sm" className="gap-1">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <Separator className="my-2" />
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}