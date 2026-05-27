<script lang="ts">
  import type { Snippet } from 'svelte';
  import MarketingSection from '$lib/page/MarketingSection.svelte';

  let {
    title,
    body,
    children
  }: {
    title: string;
    body: string;
    children: Snippet;
  } = $props();
</script>

<MarketingSection>
    <h2 class="font-heading text-[24px] font-medium leading-[1.18] tracking-normal text-stone-800 md:text-[26px]">
      {title}
    </h2>

    <p class="mt-[18px] max-w-[700px] text-[15px] font-normal leading-[1.55] tracking-normal text-stone-500 md:text-[16px]">
      {body}
    </p>

    <div class="mt-[42px]">
      {@render children()}
    </div>
</MarketingSection>
