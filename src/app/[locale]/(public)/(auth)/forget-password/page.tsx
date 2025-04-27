import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/features/auth-layout"
import { Link } from "@/i18n/navigation"

export const metadata: Metadata = {
  title: "Recuperar Senha",
  description: "Recupere sua senha",
}

export default function PasswordResetPage() {
  return (
    <AuthLayout title="Recuperar Senha" subtitle="Enviaremos um link para o seu email para redefinir sua senha.">
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
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Enviar link de recuperação <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
        <div className="text-center text-sm">
          <Link
            href="/sign-in"
            className="flex items-center justify-center font-medium text-purple-600 underline-offset-4 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o login
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
