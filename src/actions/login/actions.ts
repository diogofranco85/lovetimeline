'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signin(formData: FormData) {
  const supabase = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  console.log(data)
  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    redirect('/error?errorMessage=' + error.message)
  }
  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const {data: supabaseData, error} = await supabase.auth.signUp(data)

  if(supabaseData.user){
    const first_name = formData.get("firstName") as string
    const last_name = formData.get("lastName") as string
    const update = {
      first_name,
      last_name,
      full_name: `${first_name} ${last_name}`
    }
    await supabase.from("users").update(update).eq('id', supabaseData.user?.id)

  }
  
  if (error) {
    redirect('/error?errorMessage=' + error.message)
  }
  revalidatePath('/', 'layout')
  redirect('/sign-up-confirm')
}