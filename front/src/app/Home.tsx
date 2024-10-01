'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styles from './Home.module.scss'
import authService from './services/auth.service'

export default function Home() {
	const { push } = useRouter()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (!token) push('/login')
	}, [push])

	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => authService.profile(),
	})

	return (
		<div className={styles.home}>
			<h2>Home page</h2>
			<p>{data?.email}</p>
			<button
				onClick={() => {
					localStorage.removeItem('token')
					push('/login')
				}}
			>
				Exit
			</button>
		</div>
	)
}
