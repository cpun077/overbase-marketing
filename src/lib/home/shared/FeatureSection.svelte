<script lang="ts">
  import type { Snippet } from 'svelte';
  import HomeSection from './HomeSection.svelte';

  let {
    title,
    body,
    children
  }: {
    title: string;
    body: string;
    children: Snippet;
  } = $props();
</script>

<HomeSection>
    <h2 class="font-heading text-[28px] font-medium leading-[1.14] tracking-normal text-stone-800 md:text-[26px] md:leading-[1.18]">
      {title}
    </h2>

    <p class="mt-[18px] max-w-[700px] text-[15px] font-normal leading-[1.55] tracking-normal text-stone-500 md:text-[16px]">
      {body}
    </p>

    <div class="mt-[42px]">
      {@render children()}
    </div>
</HomeSection>
