import type React from "react"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { ArrowLeft, Heart } from "lucide-react"
import { bucketUrl } from "@/helper/url"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {

  const t = useTranslations('header');


  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 px-10">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-purple-900">
          <Image
            src={bucketUrl("cover-login.png")}
            width={1920}
            height={1080}
            alt="Authentication background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-purple-800/80 mix-blend-multiply opacity-35" />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center">
            <Heart className="h-6 w-6 text-purple-500 ml-2 md:ml-8 lg:ml-8" />

            <span className="text-sm text-center md:text-xl font-bold">{t("title")}</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Esta plataforma transformou completamente a maneira como gerencio meus projetos. A interface
              intuitiva e as ferramentas poderosas tornaram meu trabalho muito mais eficiente.&rdquo;
            </p>
            <footer className="text-sm">Sofia Oliveira</footer>
          </blockquote>
        </div>
      </div>
      <div >
        <div>
          <Link href="/" className="flex text-purple-700 m-10">
            <ArrowLeft />
            Voltar para a Home
          </Link>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            {children}
            <p className="px-8 text-center text-sm text-muted-foreground">
              Ao clicar em continuar, você concorda com nossos{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
