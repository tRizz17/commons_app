import type { Metadata } from "next";
import { getUser } from '@/utils/auth';
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { ProfileProvider } from "@/contexts/profileContext";
import { AuthProvider } from "@/contexts/authProvider";
import { Profile, profileSelectString } from "@/types/profile";
import "./globals.css";
import NavWrapper from "@/components/navWrapper";

export const metadata: Metadata = {
  title: "Commons Yacht Club",
  description: "Public Sailing Race Organizer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getUser();
  const profile = await getProfile(user)

  return (
    <html lang="en">
      <body>
        <AuthProvider initialUser={user}>
          <ProfileProvider profile={profile}>
            <NavWrapper />
            {children}
          </ProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}


async function getProfile(user: User | null): Promise<Profile | undefined> {
  const supabase = await createClient()

  if (!user) {
    return undefined
  }

  const data = await supabase
    .from('profiles')
    .select(profileSelectString)
    .eq('id', user.id)

  let profile: Profile | undefined = undefined

  if (data.data && data.data.length > 0) {
    profile = data.data[0]
  }

  if (profile) {
    profile.username = user.email ?? null
  }

  // console.log(profile)

  return profile

}
