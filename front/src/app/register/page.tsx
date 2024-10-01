import { Metadata } from 'next'
import { AuthForm } from '../login/auth-form/AuthForm'

export const metadata: Metadata = {
	title: 'Login',
}

export default function RegisterPage() {
	return (
		<div>
			<AuthForm isLogin={false} />
		</div>
	)
}
