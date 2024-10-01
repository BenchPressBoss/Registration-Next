import { Metadata } from 'next'
import { AuthForm } from './auth-form/AuthForm'

export const metadata: Metadata = {
	title: 'Login',
}

export default function LoginPage() {
	return (
		<div>
			<div>
				<AuthForm isLogin={true} />
			</div>
		</div>
	)
}
