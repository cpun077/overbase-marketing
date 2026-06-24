<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import ButtonLink from '$lib/ui/ButtonLink.svelte';
  import { createPortalAuthUrlForMarketingPath } from '$lib/portalAuthLinks';

  const joinHref = createPortalAuthUrlForMarketingPath('join', '/');
</script>

<section class="border-t border-stone-200/70 bg-stone-50/80 px-[18px] py-[72px] md:px-8 md:py-[90px]">
  <ContentMeasure class="flex !max-w-[620px] flex-col items-center text-center">
    <h2
      class="font-heading text-[30px] font-semibold leading-[1.08] tracking-normal text-stone-800 md:text-[36px] md:leading-[1.06]"
    >
      Accelerate revenue growth
    </h2>

    <p
      class="mt-[18px] max-w-[400px] text-[15px] font-normal leading-[1.6] tracking-normal text-stone-500 md:mt-[20px] md:text-[16px]"
    >
      You're leaving easy revenue on the table every day your data is siloed from your partners
    </p>

    <div class="mt-[34px] flex items-center gap-[10px]">
      <ButtonLink
        href={joinHref}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="large"
        textSize="compact"
      >
        Join now
      </ButtonLink>
      <ButtonLink
        href="https://cal.com/juliennewman"
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="large"
        textSize="compact"
      >
        Request demo
      </ButtonLink>
    </div>
  </ContentMeasure>
</section>
