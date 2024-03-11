import { supabase } from '../client'
import { redirectAndRevalidate } from '@/services/actions'

interface RegisterProps {
  email: string
  password: string
  phone: string
  firstName: string
  lastName: string
  role: number
  birthdate: Date
}

export const register = async ({ email, password, phone, birthdate, firstName, lastName, role }: RegisterProps, redirectUrl?: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    phone,
    options: {
      data: {
        phone,
        birthdate: birthdate.toISOString(),
        first_name: firstName,
        last_name: lastName,
        role
      }
    }
  })

  if (error != null) {
    throw new Error(error.message)
  }

  if (redirectUrl != null) {
    redirectAndRevalidate(redirectUrl)
      .catch((err) => {
        console.error(err)
      })
  }

  return data
}
