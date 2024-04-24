<script>
	import { selectedTheme, themes } from '$lib/theme';

	/**
	 * @param {Event} event
	 */
	function setTheme(event) {
		if (event.target) {
			// @ts-ignore
			selectedTheme.set(event.target.value);
		}
	}
</script>

<h1 class="mb-4 text-center text-2xl font-bold uppercase underline">Theme</h1>
<div class="mx-6 grid grid-cols-3 gap-2 lg:w-1/2">
	<!-- Using grid to create 3 columns -->
	{#each themes as themeItem}
		<div class="form-control">
			<label class="label cursor-pointer gap-2 flex items-center">
				<!-- Adjusted gap and flex alignment -->
				<span class="label-text">{themeItem.toUpperCase()}</span>
				<input
					type="radio"
					name="theme-radios"
					class="radio"
					value={themeItem}
					on:change={setTheme}
				/>
			</label>
		</div>
	{/each}
</div>
