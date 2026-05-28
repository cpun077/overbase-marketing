<script lang="ts">
  let { email }: { email: string } = $props();
</script>

<div class="min-h-0 flex-1 overflow-auto bg-white">
  <div>
    <pre
      class="whitespace-pre-wrap px-[17px] pb-[4px] pt-[20px] text-[13px] font-normal leading-[1.65] tracking-normal text-stone-600 md:px-[19px] md:pt-[22px]"
    ><code>{email}</code></pre>
    <img class="ml-[17px] mt-[26px] block w-[126px] md:ml-[19px]" src="/logo_full.png" alt="Overbase" />
  </div>
</div>
