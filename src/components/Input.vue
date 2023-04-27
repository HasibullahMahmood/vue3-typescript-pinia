<template>
	<div :class="['relative flex flex-col', wrapperClass]">
		<BaseLabel :id="id" :label="label" :labelClass="['mb-[2px]', labelClass].join(' ')" />
		<input
			:id="id"
			:type="type"
			:class="['font-roboto rounded-[4px] border border-gray-200 px-2 py-1.5 text-sm', inputClass]"
			:value="modelValue"
			@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			v-bind="$attrs"
		/>
		<span v-if="errorMessage" class="font-roboto absolute top-full pt-[2px] text-[10px] text-red-400">{{
			errorMessage
		}}</span>
	</div>
</template>

<script lang="ts">
import { InputHTMLAttributes, PropType, defineComponent } from 'vue'
import BaseLabel from '@/components/BaseLabel.vue'

export default defineComponent({
	components: {
		BaseLabel,
	},
	props: {
		id: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		type: {
			type: String as PropType<InputHTMLAttributes['type']>,
			default: 'text',
		},
		wrapperClass: {
			type: String,
			default: '',
		},
		labelClass: {
			type: String,
			default: '',
		},
		inputClass: {
			type: String,
			default: '',
		},
		errorMessage: {
			type: String,
			default: '',
		},
		modelValue: {
			type: [String, Number],
			default: '',
		},
	},
	emits: {
		'update:modelValue': (_: string) => true,
	},
})
</script>
