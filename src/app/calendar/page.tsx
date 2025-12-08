'use client'
import { useEffect, useState } from "react"
import { RaceInfo } from "@/types/races"

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
            Race Schedule
                <div className="mx-auto max-w-3xl mt-6">
                    <ul role="list" className="space-y-3">
                        {races.map((race) => (
                            <li key={race.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm">
                                <h1>{race.racename}</h1>
                                <h2>Date: {race.racedate}</h2>
                                <h2>Time: {race.racetime}</h2>
                                <h3>Location: {race.water}</h3>
                                <p>Class: {race.boatclass}</p>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}
