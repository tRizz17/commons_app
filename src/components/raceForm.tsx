import ProfileHeader from "./profileHeader"

export default function RaceForm() {
    return (
        <div>
            <ProfileHeader />
        <form className="flex flex-col border m-30 justify-center align-middle">
            <label className="border m-2"> Race Name
                <input className="border m-2" />
            </label>
            
            <label className="border m-2"> Location
                <input className="border m-2"/>
            </label>

            <label className="border m-2"> Time
                <input className="border m-2" />
            </label>

        </form>
        </div>
    )
}