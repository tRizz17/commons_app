import { login, signup } from './actions'

export default function loginPage() {
    return (
        <form>
            <label htmlFor='email'>Email:</label>
            <input id="email" name='email' type='email' required/>
            <label htmlFor='password'>Password: </label>
            <input id='password' name='password' type='password' required/>
            <button formAction={login}>Login</button>
            <button formAction={signup}>Signup</button>
        </form>
    )
}