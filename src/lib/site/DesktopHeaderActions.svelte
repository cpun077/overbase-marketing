<script lang="ts">
  import ButtonLink from '$lib/ui/ButtonLink.svelte';
  import { headerActionItems } from './navigation';
  import { createPortalAuthHrefForCurrentPage } from '$lib/portalAuthLinks';

  let {
    currentUrl,
    currentHash = ''
  }: {
    currentUrl: URL;
    currentHash?: string;
  } = $props();
</script>

<div class="fixed right-[42px] top-[31px] hidden items-center gap-[10px] md:flex">
  {#each headerActionItems as item (item.authRoute)}
    <ButtonLink
      href={createPortalAuthHrefForCurrentPage(item.authRoute, currentUrl, currentHash)}
      target="_blank"
      rel="noopener noreferrer"
      variant={item.variant}
      size="small"
    >
      {item.label}
    </ButtonLink>
  {/each}
</div>
