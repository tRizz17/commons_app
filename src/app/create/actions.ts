'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { getUser } from '@/utils/auth'

//   racename text not null,
//   about text,
//   photo text,
//   organizer text,
//   boatclass text not null,
//   water text not null,
//   racedate date not null,
//   racetime time not null,
//   country text,
//   addr text,
//   city text,
//   state text,
//   postal text,

export async function createrace(formData: FormData) {
  const supabase = await createClient()
  const user = await getUser()

  if (!user) {
    return
  }
  const user_id = user.id

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    racename: formData.get('racename') as string,
    about: formData.get('about') as string,
    photo: formData.get('photo') as string,
    organizer: formData.get('organizer') as string,
    boatclass: formData.get('boat-class') as string,
    water: formData.get('race-location') as string,
    racedate: formData.get('race-date') as string,
    racetime: formData.get('race-time') as string,
    country: formData.get('country') as string,
    addr: formData.get('street-address') as string,
    city: formData.get('city') as string,
    state: formData.get('region') as string,
    postal: formData.get('postal-code') as string,
    creator: user_id
  }

  const { error } = await supabase
  .from('races')
  .insert( data )

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}