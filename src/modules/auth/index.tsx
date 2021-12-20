import React, { useState } from 'react'
import LogIn from './components/log-in/LogIn'
import SignUp from './components/sign-up/SignUp'

type AuthViewType = 'LOGIN' | 'SIGNUP'
const Auth = () => {
	const [authView, setAuthView] = useState<AuthViewType>('LOGIN')

	return (
		<div>
			<h1>Firebase Authentication</h1>
			<button type='button' onClick={() => setAuthView('LOGIN')}>
				Log In
			</button>
			<button type='button' onClick={() => setAuthView('SIGNUP')}>
				Sign Up
			</button>
			<hr />
			{authView === 'LOGIN' && <LogIn />}
			{authView === 'SIGNUP' && <SignUp />}
		</div>
	)
}

export default Auth
