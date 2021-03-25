import React from 'react'
import { NextPage } from 'next'

const Home: NextPage = () => {
	const { SITE_NAME } = process.env

	return (
		<div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 ...">
		</div>
	)
}

export default Home
