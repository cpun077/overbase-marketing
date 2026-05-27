<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import PageFrame from '$lib/page/PageFrame.svelte';
  import IndustrySectionPills from './IndustrySectionPills.svelte';
  import type { IndustryPageContent } from './industryPageContent';

  let { content }: { content: IndustryPageContent } = $props();

  let selectedSectionGroupId = $state('');
  const defaultSectionGroupId = $derived(content.sectionGroups[0].id);
  const activeSectionGroupId = $derived(selectedSectionGroupId || defaultSectionGroupId);

  const selectedSectionGroup = $derived(
    content.sectionGroups.find((group) => group.id === activeSectionGroupId) ?? content.sectionGroups[0]
  );

  $effect(() => {
    if (
      selectedSectionGroupId &&
      !content.sectionGroups.some((group) => group.id === selectedSectionGroupId)
    ) {
      selectedSectionGroupId = '';
    }
  });

  const selectSectionGroup = (groupId: string) => {
    selectedSectionGroupId = groupId;
  };
</script>

<PageFrame topPadding="standard">
  <ContentMeasure as="article" width="narrow">
    <header>
      <h1 class="font-heading text-[32px] font-medium leading-[1.05] tracking-normal text-stone-900">
        {content.heading}
      </h1>

      <div class="mt-[24px] flex max-w-[620px] flex-col gap-[22px]">
        {#each content.introParagraphs as paragraph}
          <p class="text-[15px] font-normal leading-[1.6] tracking-normal text-stone-700 md:text-[16px]">
            {paragraph}
          </p>
        {/each}
      </div>

      {#if content.sectionGroups.length > 1}
        <IndustrySectionPills
          groups={content.sectionGroups}
          label={content.sectionSelectorLabel}
          selectedGroupId={activeSectionGroupId}
          onselect={selectSectionGroup}
        />
      {/if}
    </header>

    <div class="mt-[72px] flex flex-col gap-[78px]">
      {#each selectedSectionGroup.sections as section}
        <section>
          <h2 class="font-heading text-[24px] font-medium leading-[1.15] tracking-normal text-stone-900">
            {section.heading}
          </h2>

          <p class="mt-[18px] max-w-[620px] text-[15px] font-normal leading-[1.6] tracking-normal text-stone-700 md:text-[16px]">
            {section.body}
          </p>

          <div class="mt-[32px]">
            <div class="aspect-[16/10] overflow-hidden rounded-[8px] border border-stone-200 bg-stone-50">
              <img
                src={section.screenshot.src}
                alt={section.screenshot.alt}
                loading="lazy"
                class="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>
      {/each}
    </div>
  </ContentMeasure>
</PageFrame>
