'use client'

import authService from '@/app/services/auth.service'
import { IFormData } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './AuthForm.module.scss'
interface IIsLogin {
	isLogin: boolean
}

export const AuthForm = ({ isLogin }: IIsLogin) => {
	const { register, handleSubmit, reset } = useForm<IFormData>()

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) => authService.login(data),
		onSuccess(data) {
			localStorage.setItem('token', data.accessToken)
			reset()
			router.push('/')
		},
	})

	const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) => authService.register(data),
		onSuccess(data) {
			localStorage.setItem('token', data.accessToken)
			reset()
			router.push('/')
		},
	})

	const isPending = isLoginPending || isRegisterPending

	const onSubmit: SubmitHandler<IFormData> = data => {
		isLogin ? mutateLogin(data) : mutateRegister(data)
	}

	const router = useRouter()
	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.formTitle}>{isLogin ? 'Вход' : 'Регистрация'}</h2>
				<div className={styles.formGroup}>
					<label className={styles.formLabel}>Email:</label>
					<input
						type='email'
						className={styles.formInput}
						{...register('email', { required: 'Email is required' })}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label className={styles.formLabel}>Password:</label>
					<input
						type='password'
						className={styles.formInput}
						{...register('password', { required: 'Password is required' })}
						required
					/>
				</div>
				<button
					type='submit'
					className={styles.formButton}
					disabled={isPending}
				>
					{isLogin ? 'Войти' : 'Зарегистрироваться'}
				</button>
			</form>
		</div>
	)
}
