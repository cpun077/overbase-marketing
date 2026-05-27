<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';
  import { createPortalAuthUrlForMarketingPath } from '$lib/portalAuthLinks';
  import PricingCard from './PricingCard.svelte';
  import { pricingPageContent } from './pricingContent';
  import PricingFaqSection from './PricingFaqSection.svelte';

  const joinHref = createPortalAuthUrlForMarketingPath('join', '/pricing');
</script>

<PageFrame topPadding="compact">
  <ContentMeasure as="section" width="narrow">
    <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
      {pricingPageContent.title}
    </h1>

    <p class="mt-[24px] max-w-[620px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
      {pricingPageContent.intro}
    </p>

    <PricingCard {joinHref} plan={pricingPageContent.plan} />
  </ContentMeasure>

  <PricingFaqSection heading={pricingPageContent.faqHeading} items={pricingPageContent.faqItems} />
</PageFrame>
