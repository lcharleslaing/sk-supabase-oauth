<script lang="ts">
</script>

<nav class="text-base-content p-1 flex justify-between items-center shadow-md sticky top-0">
	<div class="flex items-center">
		<a href="/" class="">
			<!-- <CompanyAvatar /> -->
		</a>
		<a href="/" class="font-bold ml-1 uppercase">
			{import.meta.env.VITE_APPNAME || 'Your Company'}
		</a>
	</div>
	<div class="flex items-center">
		<a href="/theme" class=" btn btn-sm btn-ghost">
			<img src="theme-svgrepo-com.svg" alt="" class="w-6" />
		</a>
		<button class="btn btn-sm btn-ghost">
			<img src="github-color-svgrepo-com.svg" alt="" class="w-6" />
		</button>
		<button class="btn btn-sm btn-ghost">
			<img src="discord-v2-svgrepo-com.svg" alt="" class="w-6" />
		</button>
		<button class="btn btn-sm btn-ghost">
			<img src="google-color-svgrepo-com.svg" alt="" class="w-6" />
		</button>

		<button class="btn btn-sm btn-ghost">
			<img src="logout-svgrepo-com.svg" alt="" class="w-6" />
		</button>
		<div
			class="flex flex-row justify-center items-center py-1 pl-2 shadow-md bg-slate-100 gap-2 rounded"
		>
			<span class="">Username</span>
			<img src="" alt="User Avatar" class="w-12 h-12 rounded mr-2" />
		</div>
	</div>
</nav>
