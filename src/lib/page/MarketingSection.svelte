<script lang="ts">
  import type { Snippet } from 'svelte';
  import ContentMeasure from './ContentMeasure.svelte';

  type MarketingSectionWidth = 'hero' | 'standard' | 'narrow' | 'proof';
  type MarketingSectionAlign = 'left' | 'center';

  let {
    width = 'standard',
    align = 'left',
    children,
    class: className
  }: {
    width?: MarketingSectionWidth;
    align?: MarketingSectionAlign;
    children: Snippet;
    class?: string;
  } = $props();
</script>

<section class={['px-[18px] md:px-8', className]}>
  <ContentMeasure {width} {align}>
    {@render children()}
  </ContentMeasure>
</section>
