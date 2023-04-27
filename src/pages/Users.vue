<template>
	<div class="mt-[10%] flex justify-center">
		<Card class="min-w-[80%]">
			<div class="mb-5 flex flex-row items-center justify-between border-b border-b-gray-200 px-8 py-6">
				<h3 class="text-2xl">User list</h3>
				<Button :variant="VariantTerm.primary" class="px-3 py-2" @click="addClickHandler">ADD NEW</Button>
			</div>
			<div class="px-7 pb-10">
				<Table
					v-if="userStore.users.length > 0"
					:headers="headers"
					:rows="userStore.users"
					@edit-click="editClickHandler"
					@delete-click="deleteClickHandler"
				/>
				<div v-else class="flex items-center justify-center">
					<p>No users found. Please add a new user by clicking the button above.</p>
				</div>
			</div>
		</Card>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store/userStore'
import Table from '@/components/Table.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import VariantTerm from '@/types/variant-term'

const headers = ['Name', 'Age', 'HomeTown', 'Edit', 'Delete']

const router = useRouter()
const userStore = useUserStore()

const addClickHandler = () => router.push('add-user')

const editClickHandler = (id: string | number) => {
	router.push(`/edit-user/${id}`)
}

const deleteClickHandler = (id: string | number) => {
	userStore.removeUser(id as number)
}
</script>
