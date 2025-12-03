import { login, signup } from './actions'

export default function loginPage() {
    return (
        <div className='flex justify-center align-middle h-1vh mt-36 p-5 border'>
            <form className='flex justify-center align-middle'>
                <label htmlFor='email'>Email:</label>
                <input id="email" name='email' type='email' required />
                <label htmlFor='password'>Password: </label>
                <input id='password' name='password' type='password' required />
                <button formAction={login}>Login</button>
                <button formAction={signup}>Signup</button>
            </form>
        </div>
    )
}