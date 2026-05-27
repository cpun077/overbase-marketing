<script lang="ts">
  import type { IndustryPageSectionGroup } from './industryPageContent';

  let {
    groups,
    label,
    selectedGroupId,
    onselect
  }: {
    groups: readonly IndustryPageSectionGroup[];
    label?: string;
    selectedGroupId: string;
    onselect: (groupId: string) => void;
  } = $props();
</script>

<div class="mt-[30px] flex max-w-[620px] flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between sm:gap-[16px]">
  {#if label}
    <div class="shrink-0 text-[13px] font-normal leading-none tracking-normal text-stone-500 md:text-[14px]">
      {label}
    </div>
  {/if}

  <div class="-mx-[3px] ml-auto flex flex-wrap items-center justify-end gap-[6px] px-[3px]" role="group" aria-label="Industry page sections">
    {#each groups as group (group.id)}
      <button
        type="button"
        class={[
          'inline-flex h-[31px] items-center rounded-full border px-[13px] text-[13px] font-normal leading-none tracking-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950 md:text-[14px]',
          selectedGroupId === group.id
            ? 'border-stone-300 bg-stone-100 text-stone-800 shadow-[0_1px_0_rgba(48,47,45,0.03)]'
            : 'border-stone-200 bg-white text-stone-500 hover:border-stone-300 hover:bg-stone-50 hover:text-stone-700'
        ]}
        aria-pressed={selectedGroupId === group.id}
        onclick={() => onselect(group.id)}
      >
        {group.label}
      </button>
    {/each}
  </div>
</div>
