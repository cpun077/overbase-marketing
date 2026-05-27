<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';
  import SeoHead from '$lib/page/SeoHead.svelte';
  import { createPortalAuthUrlForMarketingPath } from '$lib/portalAuthLinks';
  import PricingCard from './PricingCard.svelte';
  import PricingFaqSection from './PricingFaqSection.svelte';
  import { pricingFaqItems, pricingPageContent, pricingPlan } from './pricingContent';

  const joinHref = createPortalAuthUrlForMarketingPath('join', '/pricing');
</script>

<SeoHead meta={pricingPageContent} />

<PageFrame topPadding="compact">
  <ContentMeasure as="section" width="narrow">
    <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
      {pricingPageContent.heading}
    </h1>

    <p class="mt-[24px] max-w-[620px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
      {pricingPageContent.intro}
    </p>

    <PricingCard {joinHref} plan={pricingPlan} />
  </ContentMeasure>

  <PricingFaqSection items={pricingFaqItems} />
</PageFrame>
