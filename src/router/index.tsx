import React from 'react'
import Auth from 'modules/auth'
import Home from 'modules/Home'
import { Routes, Route, Navigate } from 'react-router-dom'

const AppRouter = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='auth' element={<Auth />} />
		<Route path='/*' element={<Navigate replace to='/' />} />
	</Routes>
)

export default AppRouter
