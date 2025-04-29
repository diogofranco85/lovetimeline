"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, CircleFadingPlus } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { signin } from "@/actions/login/actions"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AuthLayout } from "@/features/auth-layout"
import { Link } from "@/i18n/navigation"

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type LoginFormValues = z.infer<typeof loginSchema>

// export const metadata: Metadata = {
//   title: "Entrar",
//   description: "Faça login na sua conta",
// }

export default function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: LoginFormValues) {
    try {
      const formData = new FormData()
      formData.append("email", data.email)
      formData.append("password", data.password)
      await signin(formData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthLayout title="Login" subtitle="Bem-vindo de volta! Faça login na sua conta para continuar.">
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="nome@exemplo.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      className="border-purple-200 focus-visible:ring-purple-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Senha</FormLabel>
                    <Link
                      href="/forget-password"
                      className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                      className="border-purple-200 focus-visible:ring-purple-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Entrar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
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
