'use client'
import ProfileHeader from '@/components/profileHeader';
import { useProfile } from "@/contexts/profileContext"


export default function Home() {
  return (
    <main>
      <ProfileHeader></ProfileHeader>
      <div>FAQ</div>
    </main>
  );
}
