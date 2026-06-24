<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import ButtonLink from '$lib/ui/ButtonLink.svelte';

  type HeroCtaButtonProps = HTMLAnchorAttributes & {
    children?: Snippet;
  };

  let { children, class: className, ...anchorProps }: HeroCtaButtonProps = $props();
</script>

<ButtonLink
  {...anchorProps}
  variant="primary"
  size="xlarge"
  textSize="compact"
  shape="pill"
  class={[
    'hero-cta-shine relative overflow-hidden shadow-[0_5px_12px_rgba(41,37,36,0.2)] hover:-translate-y-[2px] hover:shadow-[0_8px_16px_rgba(41,37,36,0.28)]',
    className
  ]}
>
  {@render children?.()}
</ButtonLink>

<style>
  :global(.hero-cta-shine)::after {
    content: '';
    position: absolute;
    inset: -40% auto -40% -55%;
    width: 42%;
    transform: skewX(-24deg) translateX(0);
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.04) 24%,
      rgba(255, 255, 255, 0.18) 50%,
      rgba(255, 255, 255, 0.04) 76%,
      transparent 100%
    );
    pointer-events: none;
  }

  :global(.hero-cta-shine:hover)::after {
    animation: hero-cta-shine-sweep 1160ms cubic-bezier(0.22, 1, 0.36, 1) 160ms;
  }

  @keyframes hero-cta-shine-sweep {
    to {
      transform: skewX(-24deg) translateX(430%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(.hero-cta-shine:hover)::after {
      animation: none;
    }
  }
</style>
