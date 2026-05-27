<script lang="ts">
  import type { Snippet } from 'svelte';

  type PageFrameTopPadding = 'standard' | 'compact';

  let {
    topPadding = 'standard',
    children,
    class: className
  }: {
    topPadding?: PageFrameTopPadding;
    children: Snippet;
    class?: string;
  } = $props();

  const topPaddingClasses = {
    standard: 'pt-[74px] md:pt-[43px]',
    compact: 'pt-[43px]'
  };
</script>

<main class={['px-[22px] pb-[120px] md:px-0', topPaddingClasses[topPadding], className]}>
  {@render children()}
</main>
