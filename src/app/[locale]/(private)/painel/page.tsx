import { useRouter } from "@/i18n/navigation";
import { createClient } from "@/utils/supabase/server";
import { useEffect } from "react";

export default function PerfilPage() {

  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const supabase = await createClient();
      const { data: { session }, error } = await supabase.auth.getSession();

      if (session) {
        router.replace("/sign-in");
      }
    }

    getSession()
  })

  return (
    <div>
      <h1>Perfil</h1>
    </div>
  )
}