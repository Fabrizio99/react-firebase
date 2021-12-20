/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useForm } from 'react-hook-form'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

type FormData = {
	email: string
	password: string
}

const LogIn = () => {
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<FormData>({ mode: 'onChange' })
	const onSubmit = handleSubmit(({ email, password }) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password).then(result => {
			console.log(result)
			if (result.user.emailVerified) {
				console.log('usuario inicio sesión')
			} else {
				signOut(auth).then(r => {
					console.log(r)
					console.log('se eliminó la sesión')
				})
			}
		})
	})

	return (
		<div>
			<h2>Log In</h2>
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
		</div>
	)
}

export default LogIn
