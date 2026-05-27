<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';

  const inlineLinkClasses =
    'font-normal text-stone-500 underline decoration-stone-300 decoration-1 underline-offset-[3px] hover:text-stone-900';
</script>

<PageFrame topPadding="standard">
  <ContentMeasure as="section" width="narrow">
    <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
      About
    </h1>

    <div class="mt-[24px] flex max-w-[620px] flex-col gap-[22px]">
      <p class="text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
        We are machine learning engineers who have been building sales tech together for over 10 years
      </p>
      <p class="text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
        We work exclusively with the best and most client-focused professional services firms
      </p>
      <p class="text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
        We believe business software should be invisible. And we believe that sales tech should let
        companies be more client-focused rather than distract them from what truly matters
      </p>
      <p class="text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
        If you'd like to join us, check out <a href="/careers" class={inlineLinkClasses}>our open roles</a>
      </p>
    </div>
  </ContentMeasure>
</PageFrame>
