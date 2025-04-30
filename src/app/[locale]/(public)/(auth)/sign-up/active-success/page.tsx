import { AuthLayout } from "@/features/auth-layout";
import { CheckCircle2Icon } from "lucide-react";

export default function SignUpConfirm() {
  return (
    <AuthLayout title="Inscrição" subtitle="Como confirma sua inscrição">
      <div className="flex flex-col items-center my-10">
        <CheckCircle2Icon className="text-green-500" size={76} />
        <p className="text-center mt-4">Sua conta foi ativada com sucesso</p>
      </div>
    </AuthLayout>
  )
}