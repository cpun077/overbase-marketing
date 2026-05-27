<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';
  import SeoHead from '$lib/page/SeoHead.svelte';
  import type { TextPageContent } from './textPageTypes';
  import PageLinkList from './PageLinkList.svelte';
  import RichTextParagraph from './RichTextParagraph.svelte';

  let { content }: { content: TextPageContent } = $props();
</script>

<SeoHead meta={content} />

<PageFrame topPadding="standard">
  <ContentMeasure as="section" width="narrow">
    <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
      {content.heading}
    </h1>

    <div class="mt-[24px] flex max-w-[620px] flex-col gap-[22px]">
      {#each content.introParagraphs as paragraph, index (index)}
        <RichTextParagraph {paragraph} />
      {/each}
    </div>

    {#if content.links.length}
      <PageLinkList links={content.links} />
    {/if}
  </ContentMeasure>

  {#each content.sections as section (section.body)}
    <ContentMeasure as="section" width="narrow" class="mt-[64px] pb-[96px]">
      <p class="max-w-[620px] text-[15px] font-normal leading-[1.55] tracking-normal text-stone-700 md:text-[16px]">
        {section.body}
      </p>
    </ContentMeasure>
  {/each}
</PageFrame>
