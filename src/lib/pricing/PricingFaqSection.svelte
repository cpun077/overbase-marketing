<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import type { PricingFaqItem } from './pricingContent';

  let {
    heading,
    items
  }: {
    heading: string;
    items: readonly PricingFaqItem[];
  } = $props();
</script>

<ContentMeasure as="section" width="narrow" class="mt-[128px]">
  <h2 class="font-heading text-[22px] font-medium leading-[1.18] tracking-normal text-stone-800 md:text-[24px]">
    {heading}
  </h2>

  <div class="mt-[38px] flex flex-col gap-[32px]">
    {#each items as item (item.question)}
      <article>
        <h3 class="font-heading text-[17px] font-normal leading-[1.25] tracking-normal text-stone-800 md:text-[18px]">
          {item.question}
        </h3>
        <p class="mt-[12px] max-w-[620px] text-[14px] font-normal leading-[1.55] tracking-normal text-stone-500 md:text-[15px]">
          {item.answer}
        </p>
      </article>
    {/each}
  </div>
</ContentMeasure>
