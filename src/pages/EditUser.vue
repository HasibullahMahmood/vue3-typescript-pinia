<template>
	<div class="mt-[10%] flex justify-center">
		<UserForm
			title="Edit User"
			class="w-[600px]"
			:name="currentUser?.name"
			:age="currentUser?.age"
			:hometown="currentUser?.hometown"
			@cancel-click="cancelClickHandler"
			@submit-click="handleSubmit"
		/>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'
import UserForm, { IFormValues } from '@/components/UserForm.vue'

const router = useRouter()
const userId = Number(router.currentRoute.value.params.id)
const userStore = useUserStore()
const currentUser = userStore.getUserById(userId)

const cancelClickHandler = () => router.back()

const handleSubmit = (values: IFormValues) => {
	userStore.updateUser({ id: userId, ...values, age: +values.age })
	router.back()
}
</script>
