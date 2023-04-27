import { createRouter, createWebHistory } from 'vue-router'

import Users from '@/pages/Users.vue'
import AddUser from '@/pages/AddUser.vue'
import EditUser from '@/pages/EditUser.vue'

const routes = [
	{ path: '/', component: Users },
	{ path: '/add-user', component: AddUser },
	{ path: '/edit-user/:id', component: EditUser },
	{ path: '/:notFound(.*)', redirect: '/' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
