import { redirect } from 'next/navigation';
import { getUser } from '@/utils/auth';

export default async function CreateRacePage() {
    const user = await getUser();

    if (!user) {
        redirect('/login');
    }
    return (
        <div>
            <div>Create Race</div>
        </div>
    )
}