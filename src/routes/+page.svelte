<script lang="ts">
  import DataSourceGridGraphic from '$lib/home/features/data-sources/DataSourceGridGraphic.svelte';
  import OpportunityEmailGraphic from '$lib/home/features/opportunity-email/OpportunityEmailGraphic.svelte';
  import PartnerDataSharingGraphic from '$lib/home/features/partner-sharing/PartnerDataSharingGraphic.svelte';
  import TestimonialsSection from '$lib/home/features/testimonials/TestimonialsSection.svelte';
  import Hero from '$lib/home/hero/Hero.svelte';
  import FeatureSection from '$lib/home/shared/FeatureSection.svelte';
</script>

<main>
  <Hero />
  <div class="flex flex-col gap-[112px] pb-[112px] pt-[160px] md:gap-[150px] md:pb-[150px] md:pt-[220px]">
    <FeatureSection
      title="Share your data"
      body="Share any structured data like CRM and share any unstructured data like email. Easily share even your most disconnected data"
    >
      <DataSourceGridGraphic />
    </FeatureSection>

    <FeatureSection
      title="Partners share their data"
      body="Your ecosystem partners can share data with you for free and securely. They stay in full control of what gets shared"
    >
      <PartnerDataSharingGraphic />
    </FeatureSection>

    <FeatureSection
      title="Get opportunities by email"
      body="We compare both sides, then we send revenue opportunities to your team by email"
    >
      <OpportunityEmailGraphic />
    </FeatureSection>

    <TestimonialsSection />
  </div>
</main>
