<script lang="ts">
  import type { IndustryScreenshot } from './types';

  let { screenshot }: { screenshot: IndustryScreenshot } = $props();
</script>

<div
  class="overflow-hidden rounded-[8px] bg-stone-50"
  style:aspect-ratio={`${screenshot.width} / ${screenshot.height}`}
>
  <img
    src={screenshot.src}
    alt={screenshot.alt}
    width={screenshot.width}
    height={screenshot.height}
    loading="lazy"
    class="h-full w-full object-contain"
  />
</div>
