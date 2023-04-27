<template>
	<Card>
		<h3 class="border-b px-4 py-5 text-xl font-normal">{{ title }}</h3>
		<form class="flex flex-col gap-4 px-4 py-4">
			<Input id="name" label="Name" v-model="name" :error-message="nameError" type="text" />
			<Input
				id="age"
				label="Age"
				v-model="age"
				:error-message="ageError"
				type="number"
				min="1"
				max="100"
				step="1"
			/>
			<Input id="hometown" label="Hometown" v-model="hometown" :error-message="hometownError" type="text" />
			<div class="flex flex-row justify-end gap-2">
				<Button @click="$emit('cancelClick')" :variant="VariantTerm.secondary" outline>Cancel</Button>
				<Button @click="handleSubmit">Submit</Button>
			</div>
		</form>
	</Card>
</template>

<script lang="ts">
import { useForm, useField } from 'vee-validate'
import { defineComponent } from 'vue'
import * as yup from 'yup'

import Card from '@/components/Card.vue'
import Input from '@/components/Input.vue'
import validationErrors from '@/utils/validationErrors'
import Button from '@/components/Button.vue'
import VariantTerm from '@/types/variant-term'

export interface IFormValues {
	name: string
	age: number
	hometown: string
}

export default defineComponent({
	components: {
		Card,
		Input,
		Button,
	},
	setup(props, { emit }) {
		const schema = yup.object({
			name: yup.string().required(validationErrors.required).min(3, validationErrors.min(3)),
			age: yup
				.number()
				.typeError(validationErrors.required)
				.required(validationErrors.required)
				.min(1, validationErrors.minAge(1))
				.max(100, validationErrors.maxAge(100)),
			hometown: yup.string().required(validationErrors.required).min(3, validationErrors.min(3)),
		})

		const initialValues: IFormValues = {
			name: props.name,
			age: props.age as number,
			hometown: props.hometown,
		}

		const form = useForm<IFormValues>({ validationSchema: schema, initialValues: initialValues })

		const { value: name, errorMessage: nameError } = useField('name')
		const { value: age, errorMessage: ageError } = useField('age')
		const { value: hometown, errorMessage: hometownError } = useField('hometown')

		const handleSubmit = form.handleSubmit((values) => {
			emit('submitClick', values)
		})

		return {
			VariantTerm,
			form,
			name,
			age,
			hometown,
			nameError,
			ageError,
			hometownError,
			handleSubmit,
		}
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			default: '',
		},
		age: {
			type: Number,
			default: undefined,
		},
		hometown: {
			type: String,
			default: '',
		},
	},
	emits: {
		cancelClick: () => true,
		submitClick: (_formValues: IFormValues) => true,
	},
})
</script>
