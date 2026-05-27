<script lang="ts">
  import { ArrowUpRightIcon } from 'phosphor-svelte';
  import type { ContentLink } from './contentTypes';

  let { links }: { links: readonly ContentLink[] } = $props();
</script>

<nav class="mt-[42px]" aria-label="Page links">
  {#each links as link}
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      class="flex items-center justify-between gap-8 border-b border-stone-200/70 py-[24px] text-[15px] font-normal leading-none tracking-normal text-stone-700 transition-colors hover:text-stone-900 md:text-[16px]"
    >
      <span>{link.label}</span>
      <ArrowUpRightIcon size={21} weight="regular" class="shrink-0 text-stone-900" aria-hidden="true" />
    </a>
  {/each}
</nav>
