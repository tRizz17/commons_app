'use client'
import { useEffect, useState } from "react"
import { RaceInfo } from "@/types/races"
import { createClient } from "@/utils/supabase/client"


export default function Calendar() {

    // Need to call supabase and get races. 
    // Extract month from date and map each block of races to races within that month
    // Fill in information within each race card

    const [races, setRaces] = useState<RaceInfo[]>([])


    useEffect(() => {
        fetch("/api/races")
            .then(r => r.json())
            .then(data => setRaces(data))
    }, [])

    useEffect(()=>{
        console.log(races)
    },[races])

    return (
        <div className="mx-auto pt-10 max-w-7xl px-4 sm:px-6 lg:px-8 h-screen">
            <h1 className="text-center text-3xl font-bold mb-6">Race Schedule</h1>
                <div className="mx-auto max-w-3xl mt-6">
                    <ul role="list" className="space-y-3">
                        {races.map((race) => (
                            <li key={race.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm">
                                <h1 className="font-bold text-xl mb-3">{race.racename}</h1>
                                <h2 className="text-lg mb-1">Date: {race.racedate}</h2>
                                <h2 className="text-lg mb-1">Time: {race.racetime}</h2>
                                <h3 className="text-base mb-1">Location: {race.water}</h3>
                                <p className="text-sm text-gray-600">Class: {race.boatclass}</p>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}
