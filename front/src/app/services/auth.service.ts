import { IFormData, IUser } from '@/types'
import { API_URL } from '../constants'

interface IAuthResponse {
	accessToken: string
	user: IUser
}

class AuthService {
	async login(data: IFormData): Promise<IAuthResponse> {
		const response = await fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IAuthResponse = await response.json()
		return responseData
	}

	async register(data: IFormData): Promise<IAuthResponse> {
		const response = await fetch(`${API_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IAuthResponse = await response.json()
		return responseData
	}

	async profile(): Promise<IUser> {
		const token = localStorage.getItem('token')

		const response = await fetch(`${API_URL}/auth/profile`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IUser = await response.json()
		return responseData
	}
}

export default new AuthService()

import { useToken } from '@context/AuthContext';
import { useQuery } from '@tanstack/react-query';

import { _getTrack } from './spotify';

const endPoint =
  'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6';

const fetchArtists = async (token, endPoint) => {
  const data = await _getTrack(token, endPoint);
  return data.artists;
};

export const _getArtists = () => {
  const token = useToken();
  const { data: artists = [], isLoading } = useQuery({
    queryKey: ['artists', token],
    queryFn: () => fetchArtists(token, endPoint),
    enabled: !!token,
    initialData: () => {
      const storedTracks = localStorage.getItem('artists');
      return storedTracks ? JSON.parse(storedTracks) : [];
    },
    onSuccess: (data) => {
      localStorage.setItem('artists', JSON.stringify(data));
      console.log(data);
    },
  });

  return { artists, isLoading };
};
