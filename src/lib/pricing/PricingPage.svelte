<script lang="ts">
  import { createPortalAuthHrefForPath } from '$lib/portalAuthLinks';
  import PricingCard from './PricingCard.svelte';
  import PricingFaqSection from './PricingFaqSection.svelte';
  import { pricingFaqItems, pricingPageContent, pricingPlan } from './pricingContent';

  const joinHref = createPortalAuthHrefForPath('join', '/pricing');
</script>

<svelte:head>
  <title>{pricingPageContent.title}</title>
  <meta name="description" content={pricingPageContent.description} />
</svelte:head>

<main class="px-[22px] pb-[120px] pt-[43px] md:px-0">
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
</main>
