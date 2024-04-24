<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { Provider } from '@supabase/supabase-js';

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider
		});
	};

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await signInWithProvider('google');
				break;
			case 'discord':
				await signInWithProvider('discord');
				break;
			case 'github':
				await signInWithProvider('github');
				break;
			default:
				break;
		}
		cancel();
	};
</script>

<main class="flex flex-col justify-center items-center mx-auto gap-2 h-screen">
	<h1 class="m-6 text-4xl font-extrabold">Login</h1>
	<form
		class="auth-form flex flex-col justify-center items-center mx-auto gap-2"
		action="?/login"
		method="POST"
	>
		<input
			type="text"
			name="email"
			placeholder="Email..."
			class="input input-bordered w-full max-w-xs"
		/>
		<input
			type="password"
			name="password"
			placeholder="Password..."
			class="input input-bordered w-full max-w-xs"
		/>
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
	<h1 class="m-6 text-xl font-thin">Or Login with...</h1>
	<form class="socials" method="POST" use:enhance={submitSocialLogin}>
		<button formaction="?/login&provider=github" class="btn btn-primary">Github</button>
		<button formaction="?/login&provider=discord" class="btn btn-primary">Discord</button>
		<button formaction="?/login&provider=google" class="btn btn-primary">Google</button>
	</form>
</main>
