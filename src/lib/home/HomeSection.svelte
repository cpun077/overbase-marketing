<script lang="ts">
  import type { Snippet } from 'svelte';
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';

  let {
    children
  }: {
    children: Snippet;
  } = $props();
</script>

<section class="px-[18px] md:px-8">
  <ContentMeasure>
    {@render children()}
  </ContentMeasure>
</section>
