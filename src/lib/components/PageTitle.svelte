<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  export let customTitle: string;
</script>

<div class="mt-6 flex justify-center">
  <div class="mb-3 bg-base-300 px-6 py-2 shadow-sm">
    <h1 class="pb-1.5 text-4xl font-extrabold">
      {customTitle || "Page Title"}
    </h1>
  </div>
</div>
