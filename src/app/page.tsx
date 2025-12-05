'use client'
import ProfileHeader from '@/components/loggedInNav';
import LoggedOutNav from '@/components/loggedOutNav';
import { useProfile } from "@/contexts/profileContext"


export default function Home() {
  return (
    <main>
      <div>Home Page</div>
      <div>There should be a sweet gif of sailing here</div>
    </main>
  );
}
