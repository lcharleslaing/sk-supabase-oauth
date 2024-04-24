<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageTitle customTitle="Add New Task" />
<p class="text-center">{data.session?.user.email}</p>
