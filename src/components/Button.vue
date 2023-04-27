<template>
	<button
		class="min-w-[80px] cursor-pointer select-none rounded-[4px] px-2 py-1 text-base"
		:class="{
			'bg-blue-600 text-white hover:bg-blue-700': isPrimary,
			'bg-fuchsia-600 text-white hover:bg-fuchsia-700': isSecondary,
			'bg-rose-600 text-white hover:bg-rose-700': isDanger,
			'border bg-white hover:!text-white': outline,
			'border-blue-600 !text-blue-600': outline && isPrimary,
			'border-fuchsia-600 !text-fuchsia-600': outline && isSecondary,
			'border-rose-600 !text-rose-600': outline && isDanger,
			'pointer-events-none opacity-50': disabled,
		}"
		:type="type"
		@click="$emit('click')"
	>
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { ButtonHTMLAttributes, PropType, defineComponent } from 'vue'
import VariantTerm from '@/types/variant-term'

interface IProps {
	type: ButtonHTMLAttributes['type']
	variant: VariantTerm
	disabled: boolean
}

export default defineComponent({
	name: 'Button',
	props: {
		type: {
			type: String as PropType<IProps['type']>,
			default: 'button',
		},
		variant: {
			type: String as PropType<IProps['variant']>,
			default: VariantTerm.primary,
		},
		outline: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: {
		click: () => true,
	},
	computed: {
		isPrimary() {
			return this.variant === VariantTerm.primary
		},
		isSecondary() {
			return this.variant === VariantTerm.secondary
		},
		isDanger() {
			return this.variant === VariantTerm.danger
		},
	},
})
</script>
