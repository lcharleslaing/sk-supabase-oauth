<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const navLinks = [
		{ label: 'Home', route: '/' },
		{ label: 'Project List', route: '/projectlist' },
		{ label: 'New', route: '/newtask' },
		{ label: 'Reports', route: '/reports' },
		{ label: 'Categories', route: '/categories' }
	];

	let activeRoute = $page.url.pathname; // This will hold the current active route

	/**
	 * @param {string | URL} route
	 */
	function setActive(route) {
		// @ts-ignore
		activeRoute = route; // Update the active route
		goto(route); // Navigate to the route
	}
</script>

<div class="btm-nav">
	{#each navLinks as link}
		<button class:active={activeRoute === link.route} on:click={() => setActive(link.route)}>
			{link.label}
		</button>
	{/each}
</div>

<style>
	.active {
		background-color: #f3f4f6; /* Light gray background for active button */
		color: #000; /* Black text for active button */
	}
	button {
		padding: 10px; /* Padding for better touch interaction */
		border: none; /* No border for a cleaner look */
		background: none; /* Transparent background */
		cursor: pointer; /* Pointer cursor on hover */
	}
</style>
