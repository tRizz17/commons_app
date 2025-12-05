import { login, signup } from './actions'
import ProfileHeader from '@/components/profileHeader'

export default function loginPage() {
    return (
        <div>
            {/* <ProfileHeader /> */}
            <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
                <form className='flex-col justify-center align-middle'>
                    <label htmlFor='email'>Email:</label>
                    <input id="email" name='email' type='email' required />
                    <label htmlFor='password'>Password: </label>
                    <input id='password' name='password' type='password' required />
                    <button formAction={login}>Login</button>
                    <button formAction={signup}>Signup</button>
                </form>
            </div>
        </div>
    )
}