/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useForm } from 'react-hook-form'
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'

type FormData = {
	email: string
	password: string
}

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<FormData>({ mode: 'onChange' })
	const onSubmit = handleSubmit(({ email, password }) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				console.log(userCredential)
				console.log(auth.currentUser)
				console.log(auth)
				sendEmailVerification(auth.currentUser!)
				signOut(auth).then(() => console.log(auth))
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorCode, errorMessage)
			})
	})

	const handleSignUpWithGoogle = () => {
		console.log('sign up with google')
		const auth = getAuth()
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider)
			.then(result => {
				console.log(result)
			})
			.catch(error => console.log(error))
	}

	return (
		<div>
			<h2>Sign Up</h2>
			<hr />
			<form onSubmit={onSubmit}>
				<label>
					Email
					<input type='email' {...register('email', { required: true })} />
				</label>
				<label>
					Password
					<input
						type='password'
						{...register('password', { required: true })}
					/>
				</label>

				<button type='submit' disabled={!isValid}>
					Log In
				</button>
			</form>

			<button type='button' onClick={handleSignUpWithGoogle}>
				Sign up with google
			</button>
		</div>
	)
}

export default SignUp
