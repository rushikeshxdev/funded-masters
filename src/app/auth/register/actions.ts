'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import prisma from '@/lib/prisma'

export async function signup(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string

  if (!email || !password || !name) {
    return { error: 'All fields are required' }
  }

  // 1. Sign up with Supabase Auth
  const { data, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  })

  if (authError) {
    return { error: authError.message }
  }

  if (data.user) {
    // 2. Create user in our own Database via Prisma
    try {
      await prisma.user.create({
        data: {
          id: data.user.id, // Link to Supabase Auth ID
          email,
          name,
        },
      })
    } catch (e) {
      console.error('Error creating user in DB:', e)
      // Note: User is still created in Supabase Auth, but DB sync failed.
      // In a real app, you might want to handle this or use a webhook.
    }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}
