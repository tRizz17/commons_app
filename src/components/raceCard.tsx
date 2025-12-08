import { RaceInfo } from "@/types/races"




export default function RaceCard(props: {race: RaceInfo}) {
    return (
        <li key={props.race.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm">
            <h1>{props.race.racename}</h1>
            {/* Your content */}
        </li>
    )
}