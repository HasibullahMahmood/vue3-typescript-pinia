<template>
	<table>
		<thead>
			<tr>
				<th v-for="header in headers" :key="header">
					{{ header.toUpperCase() }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="row in rows" :key="row.id">
				<td v-for="header in headers.slice(0, 3)" :key="header">
					{{ row[header.toLowerCase()] }}
				</td>
				<td>
					<Button :variant="VariantTerm.secondary" @click="$emit('editClick', row.id)">Edit</Button>
				</td>
				<td>
					<Button :variant="VariantTerm.danger" @click="$emit('deleteClick', row.id)">Delete</Button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Button from '@/components/Button.vue'
import VariantTerm from '@/types/variant-term'

interface IRowItem {
	id: string | number
	[key: string]: any
}

export default defineComponent({
	components: {
		Button,
	},
	setup() {
		return {
			VariantTerm,
		}
	},
	props: {
		headers: {
			type: Array as PropType<string[]>,
			required: true,
		},
		rows: {
			type: Array as PropType<Array<IRowItem>>,
			required: true,
		},
	},
	emits: {
		editClick: (_id: string | number) => true,
		deleteClick: (_id: string | number) => true,
	},
})
</script>

<style scoped>
table {
	@apply w-full border-collapse rounded-md;
}
th,
td {
	@apply border-b text-center;
}

th:first-child,
td:first-child {
	@apply text-left;
}

th {
	@apply py-3 font-semibold text-gray-700;
}

td {
	@apply py-2.5 align-middle text-gray-600;
}
</style>
