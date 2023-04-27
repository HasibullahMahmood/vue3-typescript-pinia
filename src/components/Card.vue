<template>
	<article class="rounded-[4px] border shadow-md" :class="class">
		<slot></slot>
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Card',
	props: {
		class: {
			type: String,
			default: '',
		},
	},
})
</script>
