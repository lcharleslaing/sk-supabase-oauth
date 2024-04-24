<script>
	import PageTitle from '../../lib/components/PageTitle.svelte';
	import { enhance } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';

	/**
	 * @type {{ session: { user: { email: any; }; }; }}
	 */
	export let data;

	// @ts-ignore
	const submitLogout = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<main>
	<PageTitle customTitle="Time Tracker App" />

	{#if data && data.session}
		<p>Welcome, {data.session.user.email}</p>
		<form action="/logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn btn-primary">Logout</button>
		</form>
	{:else}
		<p>Let's learn how to register and login users!</p>
		<div class="auth-buttons">
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-secondary">Register</a>
		</div>
	{/if}
</main>
