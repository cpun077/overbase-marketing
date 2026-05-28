<script lang="ts">
  import IndustryPage from '$lib/industries/IndustryPage.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

{#key data.industryId}
  <IndustryPage content={data.content} />
{/key}
