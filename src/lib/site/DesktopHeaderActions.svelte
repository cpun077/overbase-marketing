<script lang="ts">
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import ButtonLink from '$lib/ui/ButtonLink.svelte';
  import { headerActionItems } from './navigation';
  import { createPortalAuthHrefForCurrentPage } from '$lib/portalAuthLinks';

  let currentHash = $state('');

  function syncHash() {
    if (browser) {
      currentHash = window.location.hash;
    }
  }

  afterNavigate(syncHash);
</script>

<svelte:window onhashchange={syncHash} />

<div class="fixed right-[42px] top-[31px] hidden items-center gap-[10px] md:flex">
  {#each headerActionItems as item (item.authRoute)}
    <ButtonLink
      href={createPortalAuthHrefForCurrentPage(item.authRoute, page.url, currentHash)}
      target="_blank"
      rel="noopener noreferrer"
      variant={item.variant}
      size="small"
    >
      {item.label}
    </ButtonLink>
  {/each}
</div>
