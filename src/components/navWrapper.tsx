'use client'
import { useAuth } from '@/contexts/authProvider'
import LoggedInNav from './loggedInNav'
import LoggedOutNav from './loggedOutNav'

export default function NavWrapper() {

  const { user } = useAuth()

  return user ? <LoggedInNav /> : <LoggedOutNav />

}