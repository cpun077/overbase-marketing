<script lang="ts">
  import { siteNavItems } from './navigation';

  let { activePath = '/' }: { activePath?: string } = $props();
</script>

<aside class="fixed left-[54px] top-[36px] hidden md:block" aria-label="Primary">
  <a
    href="/"
    class="mb-[28px] block h-[25px] w-[41px]"
    aria-label="Home"
  >
    <img src="/logo.png" alt="" class="h-full w-full object-contain" />
  </a>

  <nav class="flex flex-col gap-[15px] text-[13.5px] font-normal leading-none text-stone-500">
    {#each siteNavItems as item (item.href)}
      <a
        href={item.href}
        class={[
          'w-fit hover:text-stone-700',
          { 'text-stone-900': activePath === item.href }
        ]}
      >
        {item.label}
      </a>
    {/each}
  </nav>
</aside>
