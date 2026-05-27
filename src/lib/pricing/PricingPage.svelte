<script lang="ts">
  import PageFrame from '$lib/content/PageFrame.svelte';
  import PageHead from '$lib/content/PageHead.svelte';
  import { createPortalAuthHrefForPath } from '$lib/portalAuthLinks';
  import PricingCard from './PricingCard.svelte';
  import PricingFaqSection from './PricingFaqSection.svelte';
  import { pricingFaqItems, pricingPageContent, pricingPlan } from './pricingContent';

  const joinHref = createPortalAuthHrefForPath('join', '/pricing');
</script>

<PageHead meta={pricingPageContent} />

<PageFrame topPadding="compact">
  <section class="mx-auto w-full max-w-[680px]">
    <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
      {pricingPageContent.heading}
    </h1>

    <p class="mt-[24px] max-w-[620px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
      {pricingPageContent.intro}
    </p>

    <PricingCard {joinHref} plan={pricingPlan} />
  </section>

  <PricingFaqSection items={pricingFaqItems} />
</PageFrame>
