<script lang="ts">
	import '../app.pcss';
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	import { selectedTheme } from '$lib/theme';
	import Navbar from '$lib/components/Navbar.svelte';
	import BottomNavbar from '$lib/components/BottomNavbar.svelte';

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;
			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('New version available. Load new version?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		detectSWUpdate();
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<svelte:head>
	<title>Time Tracker App</title>
</svelte:head>

<html lang="en" data-theme={$selectedTheme}>
	<div id="" class="" data-theme={$selectedTheme}>
		<!-- <Navbar /> -->
		<slot />

		<BottomNavbar />
	</div>
</html>
