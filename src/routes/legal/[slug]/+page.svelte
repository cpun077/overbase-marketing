<script lang="ts">
  import LegalPage from '$lib/legal/LegalPage.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  {#if data.legalPage.robots}
    <meta name="robots" content={data.legalPage.robots} />
  {/if}
</svelte:head>

<LegalPage page={data.legalPage} />
