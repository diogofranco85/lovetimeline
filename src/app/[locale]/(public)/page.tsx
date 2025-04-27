import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/features/footer";
import { Header } from "@/features/header";
import { PlanCard } from "@/features/plan-card";
import { bucketUrl } from "@/helper/url";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, Clock, Gift, ImageIcon, Lock, Users } from "lucide-react";
import Image from "next/image";
import LinkNext from "next/link";

export default function Home() {


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-col items-center flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Eternize cada momento do seu <span className="text-purple-600">amor</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Crie uma timeline interativa do seu relacionamento. Guarde memórias, datas especiais e momentos
                  inesquecíveis em um só lugar.
                </p>
                <div className="flex flex-col  sm:flex-row gap-4">
                  <Link href="/sign-up">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Comece agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <LinkNext href="#demo">
                    <Button size="lg" variant="outline">
                      Ver demonstração
                    </Button>
                  </LinkNext>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background md:aspect-square lg:aspect-video">
                <Image
                  src={bucketUrl("happy-couple.png")}
                  alt="Timeline de um casal mostrando fotos e momentos especiais"
                  className="object-cover"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Recursos que tornam sua história única
              </h2>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Tudo o que você precisa para criar uma timeline perfeita do seu relacionamento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Datas Especiais</CardTitle>
                  <CardDescription>
                    Registre aniversários, primeiro encontro, primeiro beijo e outras datas importantes.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <ImageIcon className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Galeria de Memórias</CardTitle>
                  <CardDescription>
                    Faça upload de fotos e vídeos para cada momento especial do relacionamento.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Gift className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Presentes e Surpresas</CardTitle>
                  <CardDescription>Registre presentes dados e recebidos, e planeje surpresas futuras.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Compartilhamento</CardTitle>
                  <CardDescription>Compartilhe sua timeline com seu parceiro(a) ou mantenha-a privada.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Lembretes</CardTitle>
                  <CardDescription>Receba notificações de datas importantes e aniversários.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Privacidade Total</CardTitle>
                  <CardDescription>Controle quem pode ver sua timeline e quais momentos são privados.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-purple-50 dark:bg-purple-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Veja como funciona</h2>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Uma timeline interativa que conta a história do seu amor.
              </p>
            </div>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border bg-background shadow-lg">
              <Image
                src="https://placehold.co/600X1000"
                alt="Demonstração da interface da timeline"
                className="w-full object-cover"
                width={1000}
                height={600}
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PlanCard />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-purple-50 dark:bg-purple-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Histórias de amor que inspiram
              </h2>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Veja o que nossos usuários estão dizendo sobre o LoveTimeline.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 bg-purple-100">
                      <Image
                        src="https://placehold.co/48x48"
                        alt="Foto de perfil"
                        className="h-full w-full object-cover"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ana e Pedro</h4>
                      <p className="text-sm text-muted-foreground">Juntos há 3 anos</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;Adoramos poder registrar cada momento especial do nosso relacionamento. É incrível olhar para trás
                    e ver como crescemos juntos.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 bg-purple-100">
                      <Image
                        src="https://placehold.co/48x48"
                        alt="Foto de perfil"
                        className="h-full w-full object-cover"
                        height={48}
                        width={48}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Carla e Marcos</h4>
                      <p className="text-sm text-muted-foreground">Casados há 1 ano</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;Usamos o LoveTimeline para planejar nosso casamento e agora continuamos registrando nossa vida de
                    casados. É um tesouro digital para nós.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 bg-purple-100">
                      <Image
                        src="https://placehold.co/48x48"
                        alt="Foto de perfil"
                        className="h-full w-full object-cover"
                        height={48}
                        width={48}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Lucas e Juliana</h4>
                      <p className="text-sm text-muted-foreground">Namorando à distância</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;Mesmo morando em cidades diferentes, conseguimos manter nossa conexão forte registrando momentos
                    especiais no LoveTimeline.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comece a escrever sua história de amor hoje
              </h2>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Registre, celebre e compartilhe os momentos especiais do seu relacionamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/sign-up">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Criar minha timeline
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
