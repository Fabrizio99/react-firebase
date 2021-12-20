import LazyLoading from 'library/components/lazy-loading/lazyLoading'
import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const AppRouter = () => {
	const Home = React.lazy(() => import('../modules/Home/index'))
	const Auth = React.lazy(() => import('../modules/auth/index'))

	return (
		<Suspense fallback={<LazyLoading />}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='auth' element={<Auth />} />
				<Route path='/*' element={<Navigate replace to='/' />} />
			</Routes>
		</Suspense>
	)
}

export default AppRouter
