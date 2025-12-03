export type Profile = {
    id: string,
    username: string | null,
    full_name: string | null,
    website: string | null,
}

export const profileSelectString = "id, username, full_name, website"
