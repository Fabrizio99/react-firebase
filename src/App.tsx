import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import AppRouter from './router'

const App = () => {
	const app = initializeApp({
		apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_APP_ID,
		measurementId: process.env.REACT_APP_MEASUREMENT_ID,
	})
	getAnalytics(app)

	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, user => {
			console.log('onAuthStateChanged')
			console.log(user)
			if (user) {
				console.log('inicio sesión')
			} else {
				console.log('no inicio sesión')
			}
		})
	}, [])

	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
