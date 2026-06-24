<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type ButtonLinkProps = HTMLAnchorAttributes & {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'default' | 'large' | 'hero' | 'xlarge';
    textSize?: 'default' | 'compact';
    shape?: 'default' | 'pill';
    fullWidth?: boolean;
    children?: Snippet;
  };

  let {
    href = '#',
    variant = 'secondary',
    size = 'default',
    textSize = 'default',
    shape = 'default',
    fullWidth = false,
    children,
    class: className,
    ...anchorProps
  }: ButtonLinkProps = $props();

  const baseClasses =
    'inline-flex items-center justify-center font-normal leading-none transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950';

  const shapeClasses = {
    default: 'rounded-[7px]',
    pill: 'rounded-full'
  };

  const sizeClasses = {
    small: 'h-[36px] px-[14px]',
    default: 'h-[43px] px-[16px] sm:h-[40px]',
    large: 'h-[50px] px-[23px]',
    hero: 'h-[54px] px-[28px]',
    xlarge: 'h-[58px] px-[32px]'
  };

  const textSizeClasses = {
    default: {
      small: 'text-[14px]',
      default: 'text-[15px]',
      large: 'text-[17px]',
      hero: 'text-[17px]',
      xlarge: 'text-[18px]'
    },
    compact: {
      small: 'text-[13px]',
      default: 'text-[14px]',
      large: 'text-[15px]',
      hero: 'text-[16px]',
      xlarge: 'text-[16px]'
    }
  };

  const variantClasses = {
    primary: 'bg-stone-800 text-white hover:bg-[#3c3835]',
    secondary: 'border border-stone-300 bg-white text-stone-950 hover:bg-stone-50'
  };
</script>

<a
  {...anchorProps}
  {href}
  class={[
    baseClasses,
    shapeClasses[shape],
    sizeClasses[size],
    textSizeClasses[textSize][size],
    variantClasses[variant],
    { 'w-full': fullWidth },
    className
  ]}
>
  {@render children?.()}
</a>
