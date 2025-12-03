'use client'
import { useProfile } from "@/contexts/profileContext"
import PageHeader from '@/components/pageHeader'


export default function Home() {
  const { signOut } = useProfile()
  return (
    <main>
      <PageHeader />
      <div>Hello world!</div>
      <button onClick={signOut}>Sign Out</button>
    </main>
  );
}
