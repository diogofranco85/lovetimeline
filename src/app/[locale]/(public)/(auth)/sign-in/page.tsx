import type { Metadata } from "next"
import { ArrowRight, CircleFadingPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AuthLayout } from "@/features/auth-layout"
import { Link } from "@/i18n/navigation"


export const metadata: Metadata = {
  title: "Entrar",
  description: "Faça login na sua conta",
}

export default function LoginPage() {
  return (
    <AuthLayout title="Login" subtitle="Bem-vindo de volta! Faça login na sua conta para continuar.">
      <div className="grid gap-6">
        <form>
          <div className="grid gap-4">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forget-password"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
                required
                className="border-purple-200 focus-visible:ring-purple-500"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Entrar <ArrowRight className="ml-2 h-4 w-4" />
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
          <CircleFadingPlus />
          Google
        </Button>
        <div className="text-center text-sm">
          Não tem uma conta?{" "}
          <Link href="/sign-up" className="font-medium text-purple-600 underline-offset-4 hover:underline">
            Inscreva-se
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
