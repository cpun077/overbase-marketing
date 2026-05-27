<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';
  import { aboutPageContent } from './aboutContent';

  const inlineLinkClasses =
    'font-normal text-stone-500 underline decoration-stone-300 decoration-1 underline-offset-[3px] hover:text-stone-900';
</script>

<PageFrame topPadding="standard">
  <ContentMeasure as="section" width="narrow">
    <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
      {aboutPageContent.title}
    </h1>

    <div class="mt-[24px] flex max-w-[620px] flex-col gap-[22px]">
      {#each aboutPageContent.paragraphs as paragraph}
        <p class="text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
          {paragraph}
        </p>
      {/each}

      <p class="text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
        {aboutPageContent.careersLink.leadIn}
        <a href={aboutPageContent.careersLink.href} class={inlineLinkClasses}>
          {aboutPageContent.careersLink.label}
        </a>
      </p>
    </div>
  </ContentMeasure>
</PageFrame>
