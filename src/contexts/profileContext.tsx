'use client'
import { createContext, useContext } from 'react'
import { Profile } from '@/types/profile'
import { useRouter } from 'next/navigation'


// data structure
type ProfileProps = {
    profile: Profile | undefined
    updateProfile: (profile: Profile, images: File[] | undefined) => Promise<void>
    signOut: () => void
}

// create context
const ProfileContext = createContext<ProfileProps | undefined>(undefined)


export function ProfileProvider(props: { profile: Profile | undefined, children: React.ReactNode }) {

    const router = useRouter()


    async function updateProfile(profile: Profile, images: File[] | undefined){

        if (images) {
            for (let i = 0; i < images.length; i++) {
                const formData = new FormData()
                formData.append("id", profile.id)
                formData.append("image", images[i])
                const res = await fetch("/api/images",
                    {
                        method: "POST",
                        body: formData
                    }
                )

                const data = await res.json()
            }
        }
    }

    async function signOut() {
        await fetch("api/signOut")
        router.push("/login")
    }


    return (
        <ProfileContext.Provider value={{ profile: props.profile, updateProfile, signOut }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

// use
export function useProfile() {
    const context = useContext(ProfileContext)
    if (!context) {
        throw new Error("useProfile must be used within ProfileProvider")
    }
    return context
}