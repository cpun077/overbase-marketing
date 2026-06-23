<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';
  import SurveyResultsSignup from '$lib/survey/SurveyResultsSignup.svelte';
  import type { SurveyResultsSignupForm } from './SurveyResultsSignup.svelte';
  import { surveyLandingContent } from './surveyLandingContent';

  let { form }: { form?: SurveyResultsSignupForm | null } = $props();
</script>

<svelte:head>
  <meta name="description" content={surveyLandingContent.metaDescription} />
</svelte:head>

<PageFrame topPadding="standard">
  <ContentMeasure as="section" width="copy">
    <header>
      <p class="text-[14px] font-medium leading-none tracking-normal text-stone-500">
        {surveyLandingContent.hero.eyebrow}
      </p>
      <h1
        class="mt-[14px] font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900"
      >
        {surveyLandingContent.hero.title}
      </h1>

      <p class="mt-[20px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
        {surveyLandingContent.hero.description}
      </p>

      <img
        src={surveyLandingContent.hero.image.src}
        alt={surveyLandingContent.hero.image.alt}
        class="mt-[34px] block w-full rounded-[8px] object-cover"
        loading="eager"
        decoding="async"
      />
    </header>

    <SurveyResultsSignup form={form ?? undefined} />

    <p class="mt-[44px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
      {surveyLandingContent.introParagraph}
    </p>

    <h2
      class="mt-[50px] font-heading text-[22px] font-medium leading-[1.05] tracking-normal text-stone-900"
    >
      {surveyLandingContent.industrySection.heading}
    </h2>
    <div
      class="mt-[20px] flex flex-col gap-[20px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700"
    >
      {#each surveyLandingContent.industrySection.paragraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>

    <h2
      class="mt-[50px] font-heading text-[22px] font-medium leading-[1.05] tracking-normal text-stone-900"
    >
      {surveyLandingContent.methodologySection.heading}
    </h2>
    <div
      class="mt-[20px] flex flex-col gap-[20px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700"
    >
      {#each surveyLandingContent.methodologySection.paragraphsBeforeList as paragraph}
        <p>{paragraph}</p>
      {/each}
      <ul class="list-disc pl-[32px]">
        {#each surveyLandingContent.methodologySection.firmCriteria as criterion}
          <li>{criterion}</li>
        {/each}
      </ul>

      <p>{surveyLandingContent.methodologySection.closingParagraph}</p>
    </div>

    <h2
      class="mt-[50px] font-heading text-[22px] font-medium leading-[1.05] tracking-normal text-stone-900"
    >
      {surveyLandingContent.previousListsSection.heading}
    </h2>
    <p class="mt-[20px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
      {surveyLandingContent.previousListsSection.description}
    </p>
    <div
      class="mt-[20px] flex flex-col gap-[20px] text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700 [&_a]:underline [&_a]:decoration-stone-400 [&_a]:underline-offset-[4px] [&_a:hover]:text-stone-950"
    >
      {#each surveyLandingContent.previousListsSection.links as link}
        <p>
          <a href={link.href}>{link.label}</a>
        </p>
      {/each}
    </div>
  </ContentMeasure>
</PageFrame>
