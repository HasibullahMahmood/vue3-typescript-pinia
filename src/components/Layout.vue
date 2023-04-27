<template>
	<header class="flex h-16 items-center justify-center border">
		<div class="container mx-auto">
			<h1 class="cursor-pointer text-2xl font-medium" @click="$router.push('/')">Dashboard</h1>
		</div>
	</header>
	<main class="container mx-auto">
		<slot></slot>
	</main>
	<footer></footer>
</template>
