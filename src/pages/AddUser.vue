<template>
	<div class="mt-[10%] flex justify-center">
		<UserForm title="Add User" class="w-[600px]" @cancel-click="cancelClickHandler" @submit-click="submitHandler" />
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'
import UserForm, { IFormValues } from '@/components/UserForm.vue'

const router = useRouter()
const userStore = useUserStore()

const cancelClickHandler = () => router.back()
const submitHandler = (values: IFormValues) => {
	const newId = new Date().getDate() + Math.random()
	userStore.addUser({ id: newId, ...values })
	router.back()
}
</script>
