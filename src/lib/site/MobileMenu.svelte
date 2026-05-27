<script lang="ts">
  import { headerActionItems, siteNavItems } from './navigation';
  import { createPortalAuthHrefForCurrentPage } from '$lib/portalAuthLinks';

  let {
    activePath = '/',
    currentUrl,
    currentHash = ''
  }: {
    activePath?: string;
    currentUrl: URL;
    currentHash?: string;
  } = $props();
</script>

<nav
  class="absolute left-0 top-full z-20 w-full border-t border-stone-200/70 bg-white px-[20px] py-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.07)]"
  aria-label="Mobile primary"
>
  <div class="flex flex-col">
    {#each siteNavItems as link (link.href)}
      <a
        href={link.href}
        class={[
          'py-[11px] text-[16px] leading-none',
          activePath === link.href ? 'text-stone-900' : 'text-stone-600'
        ]}
      >
        {link.label}
      </a>
    {/each}
    {#each headerActionItems as link (link.authRoute)}
      <a
        href={createPortalAuthHrefForCurrentPage(link.authRoute, currentUrl, currentHash)}
        target="_blank"
        rel="noopener noreferrer"
        class="py-[11px] text-[16px] leading-none text-stone-500"
      >
        {link.label}
      </a>
    {/each}
  </div>
</nav>
