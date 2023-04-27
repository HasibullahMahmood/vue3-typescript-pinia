import { defineStore } from 'pinia'
import User from '@/types/user'

const dummyUsers = [
	{
		id: 1,
		name: 'John Doe',
		age: 30,
		hometown: 'New York',
	},
	{
		id: 2,
		name: 'Jane Doe',
		age: 25,
		hometown: 'Los Angeles',
	},
	{
		id: 3,
		name: 'Sam Smith',
		age: 35,
		hometown: 'Chicago',
	},
]

interface State {
	users: User[]
}

export const useUserStore = defineStore('users', {
	state: (): State => ({
		users: dummyUsers,
	}),
	getters: {
		getUsers(state: State) {
			return state.users
		},
		getUserById(state: State) {
			return (id: number) => {
				return state.users.find((u) => u.id === id)
			}
		},
	},
	actions: {
		addUser(user: User) {
			this.users.push(user)
		},
		updateUser(user: User) {
			this.users = this.users.map((u) => {
				if (u.id === user.id) {
					return user
				}
				return u
			})
		},
		removeUser(id: number) {
			this.users = this.users.filter((u) => u.id !== id)
		},
	},
})
