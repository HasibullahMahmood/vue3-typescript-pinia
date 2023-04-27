<template>
	<label :for="id" v-if="label" :class="['font-roboto text-sm text-black', labelClass]">{{ label }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		id: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		labelClass: {
			type: String,
			default: '',
		},
	},
})
</script>
