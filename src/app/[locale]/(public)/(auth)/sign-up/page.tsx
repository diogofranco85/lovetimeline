import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AuthLayout } from "@/features/auth-layout"
import { Checkbox } from "@radix-ui/react-checkbox"

export const metadata: Metadata = {
  title: "Inscrição",
  description: "Crie uma nova conta",
}

export default function SignupPage() {
  return (
    <AuthLayout title="Inscrição" subtitle="Crie uma nova conta para começar a usar nossa plataforma.">
      <div className="grid gap-6">
        <form>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Nome</Label>
                <Input
                  id="first-name"
                  placeholder="João"
                  autoCapitalize="words"
                  autoComplete="given-name"
                  autoCorrect="off"
                  required
                  className="border-purple-200 focus-visible:ring-purple-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Sobrenome</Label>
                <Input
                  id="last-name"
                  placeholder="Silva"
                  autoCapitalize="words"
                  autoComplete="family-name"
                  autoCorrect="off"
                  required
                  className="border-purple-200 focus-visible:ring-purple-500"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="nome@exemplo.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
                className="border-purple-200 focus-visible:ring-purple-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect="off"
                required
                className="border-purple-200 focus-visible:ring-purple-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmar Senha</Label>
              <Input
                id="confirm-password"
                placeholder="••••••••"
                type="password"
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect="off"
                required
                className="border-purple-200 focus-visible:ring-purple-500"
              />
            </div>
            <div className="flex items-center">
              <Checkbox
                id="terms"
                required
                className="border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                Eu concordo com os{" "}
                <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                  Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                  Política de Privacidade
                </Link>
                .
              </Label>
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Criar conta <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full bg-purple-100" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
          </div>
        </div>
        <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50" type="button">
          <svg
            className="mr-2 h-4 w-4 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          Google
        </Button>
        <div className="text-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/sign-in" className="font-medium text-purple-600 underline-offset-4 hover:underline">
            Faça login
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
