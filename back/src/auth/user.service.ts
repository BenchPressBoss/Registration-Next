import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaService } from 'src/prisma.service'
import { AuthDto } from './dto/auth.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getUsers() {
		return this.prisma.user.findMany({
			select: {
				name: true,
				email: true,
				id: true,
				password: false,
			},
		})
	}

	async getById(id: number) {
		return this.prisma.user.findUnique({
			where: {
				id,
			},
		})
	}

	async getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email,
			},
		})
	}

	async create(dto: AuthDto) {
		const users = await this.getUsers()

		const user = {
			id: users.length + 1,
			email: dto.email,
			name: dto.email,
			password: await hash(dto.password),
		}

		return this.prisma.user.create({
			data: user,
		})
	}
}
