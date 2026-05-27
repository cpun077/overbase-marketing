<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';
  import { ArrowUpRightIcon } from 'phosphor-svelte';
  import { careersPageContent } from './careersContent';
</script>

<PageFrame topPadding="standard">
  <ContentMeasure as="section" width="narrow">
    <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
      {careersPageContent.title}
    </h1>

    <div class="mt-[24px] flex max-w-[620px] flex-col gap-[22px]">
      {#each careersPageContent.paragraphs as paragraph}
        <p class="text-[16px] font-normal leading-[1.55] tracking-normal text-stone-700">
          {paragraph}
        </p>
      {/each}
    </div>

    <nav class="mt-[42px]" aria-label="Page links">
      {#each careersPageContent.links as link}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between gap-8 border-b border-stone-200/70 py-[24px] text-[15px] font-normal leading-none tracking-normal text-stone-700 transition-colors hover:text-stone-900 md:text-[16px]"
        >
          <span>{link.label}</span>
          <ArrowUpRightIcon size={21} weight="regular" class="shrink-0 text-stone-900" aria-hidden="true" />
        </a>
      {/each}
    </nav>
  </ContentMeasure>

  <ContentMeasure as="section" width="narrow" class="mt-[64px] pb-[96px]">
    <p class="max-w-[620px] text-[15px] font-normal leading-[1.55] tracking-normal text-stone-700 md:text-[16px]">
      {careersPageContent.closingParagraph}
    </p>
  </ContentMeasure>
</PageFrame>
