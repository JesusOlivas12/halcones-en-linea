import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { Database } from 'database.types'
import { NextRequest, NextResponse } from 'next/server'

export const createClient = (req: NextRequest, res: NextResponse) => createMiddlewareClient<Database>({
  req,
  res
})
