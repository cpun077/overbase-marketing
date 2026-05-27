<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import type { Snippet } from 'svelte';
  import SiteShell from '$lib/site/SiteShell.svelte';
  import '../app.css';

  let { children }: { children: Snippet } = $props();
  let currentHash = $state('');

  $effect(() => {
    if (browser && page.url) {
      currentHash = window.location.hash;
    }
  });
</script>

<svelte:window
  onhashchange={() => {
    currentHash = window.location.hash;
  }}
/>

<SiteShell activePath={page.url.pathname} currentUrl={page.url} {currentHash}>
  {@render children()}
</SiteShell>
