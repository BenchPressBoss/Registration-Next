export interface IUser {
	email: string
	name: string
	id: number
}
export interface IFormData extends Pick<IUser, 'email'> {
	password: string
}
