export default {
	required: 'This field is required',
	min: (num: number) => `This field must be at least ${num} characters long`,
	max: (num: number) => `This field must be at most ${num} characters long`,
	minAge: (num: number) => `You must be at least ${num} years old`,
	maxAge: (num: number) => `You must be at most ${num} years old`,
}
