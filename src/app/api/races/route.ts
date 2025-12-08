import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"


export async function GET(request: Request) {
    
    const supabase = await createClient()
    const user = await supabase.auth.getUser()

    if (!user || !user.data) {
        return Response.json("Must be logged in")
    }


    const { data, error } = await supabase
        .from('races')
        .select('*')
        .order('racedate')

    console.log(data)
    return NextResponse.json(data)
    
}