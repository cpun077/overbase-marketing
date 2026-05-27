<script lang="ts">
  import type { Snippet } from 'svelte';

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

<section class="px-[18px] md:px-8">
  <div class="mx-auto w-full max-w-[740px]">
    <h2 class="font-heading text-[24px] font-medium leading-[1.18] tracking-normal text-stone-800 md:text-[26px]">
      {title}
    </h2>

    <p class="mt-[18px] max-w-[700px] text-[15px] font-normal leading-[1.55] tracking-normal text-stone-500 md:text-[16px]">
      {body}
    </p>

    <div class="mt-[42px]">
      {@render children()}
    </div>
  </div>
</section>
