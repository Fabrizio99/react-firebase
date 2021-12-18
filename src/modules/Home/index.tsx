import React from 'react'
import HomeStyles from './home.module.scss'

const Home = () => (
	<div className={HomeStyles.container}>
		<h1 className={HomeStyles.container__title}>Home Component</h1>
		<p className={HomeStyles.text}>Text random</p>
		<p className={`${HomeStyles.text} ${HomeStyles.underline}`}>
			Text random underline
		</p>
	</div>
)

export default Home
