<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type ButtonLinkProps = HTMLAnchorAttributes & {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'default' | 'large';
    textSize?: 'default' | 'compact';
    fullWidth?: boolean;
    children?: Snippet;
  };

  let {
    href = '#',
    variant = 'secondary',
    size = 'default',
    textSize = 'default',
    fullWidth = false,
    children,
    class: className,
    ...anchorProps
  }: ButtonLinkProps = $props();

  const baseClasses =
    'inline-flex items-center justify-center rounded-[7px] font-normal leading-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950';

  const sizeClasses = {
    small: 'h-[36px] px-[14px]',
    default: 'h-[43px] px-[16px] sm:h-[40px]',
    large: 'h-[50px] px-[23px]'
  };

  const textSizeClasses = {
    default: {
      small: 'text-[14px]',
      default: 'text-[15px]',
      large: 'text-[17px]'
    },
    compact: {
      small: 'text-[13px]',
      default: 'text-[14px]',
      large: 'text-[15px]'
    }
  };

  const variantClasses = {
    primary: 'bg-stone-800 text-white hover:bg-stone-950',
    secondary: 'border border-stone-300 bg-white text-stone-950 hover:bg-stone-50'
  };
</script>

<a
  {...anchorProps}
  {href}
  class={[
    baseClasses,
    sizeClasses[size],
    textSizeClasses[textSize][size],
    variantClasses[variant],
    { 'w-full': fullWidth },
    className
  ]}
>
  {@render children?.()}
</a>
