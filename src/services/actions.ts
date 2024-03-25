'use server'

import { cookies } from 'next/headers'

export const setCookie = async (name: string, value: string) => {
  const cookiesStore = cookies()

  cookiesStore.set(name, value)
}

export const getCookie = async (name: string) => {
  const cookiesStore = cookies()

  return cookiesStore.get(name)
}
