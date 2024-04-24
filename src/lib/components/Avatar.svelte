<script>
	export let companyName = import.meta.env.VITE_COMPANY_NAME || 'Add to .env';
	export let showName = false;

	export let initials = companyName
		.split(' ')
		.map((/** @type {any[]} */ word) => word[0])
		.join('')
		.toUpperCase();

	$: initials;
</script>

{#if showName}
	<div id={initials} class="{initials} flex flex-col justify-center items-center mx-auto w-96">
		<h1 class="text-center text-base-content my-4 text-4xl uppercase font-extrabold">
			Big2Tiny Solutions
		</h1>
		<h1 class="text-center text-base-content my-4 text-4xl uppercase font-extrabold">
			{companyName}
		</h1>
		<svg
			class="text-base-content"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 64 64"
			version="1.1"
			><circle fill="currentColor" width="64" height="64" cx="32" cy="32" r="32" /><text
				x="50%"
				y="50%"
				style="color: currentColor;line-height: 1;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
				alignment-baseline="middle"
				text-anchor="middle"
				font-size="26"
				font-weight="400"
				dy=".1em"
				dominant-baseline="middle"
				fill="#ffffff">{initials}</text
			></svg
		>
		<h1 class="text-center text-base-content my-12 text-4xl uppercase font-extrabold">
			Made Specifically for You!
		</h1>
	</div>
{/if}

{#if !showName}
	<div
		id={initials}
		class="{initials} flex flex-col justify-center items-center mx-auto w-96 h-screen"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 64 64"
			version="1.1"
			><circle fill="currentColor" width="64" height="64" cx="32" cy="32" r="32" /><text
				x="50%"
				y="50%"
				style="color: currentColor;line-height: 1;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
				alignment-baseline="middle"
				text-anchor="middle"
				font-size="26"
				font-weight="400"
				dy=".1em"
				dominant-baseline="middle"
				fill="#ffffff">{initials}</text
			></svg
		>
	</div>
{/if}
