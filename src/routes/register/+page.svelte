<script lang="ts">
</script>

<main class="flex flex-col justify-center items-center mx-auto gap-2 h-screen">
	<h1 class="m-6 text-4xl font-extrabold">Register</h1>
	<form
		action="?/register"
		method="POST"
		class="auth-form flex flex-col justify-center items-center mx-auto gap-2"
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
		<button class="btn btn-primary">Register</button>
	</form>
</main>
