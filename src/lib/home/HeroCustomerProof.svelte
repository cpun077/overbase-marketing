<script lang="ts">
  import ContentMeasure from '$lib/page/ContentMeasure.svelte';
  import { heroCustomerProofItems } from './homeContent';

  let selectedIndex = $state<number | null>(null);
  const selectedCustomer = $derived(
    selectedIndex === null ? null : (heroCustomerProofItems[selectedIndex] ?? null)
  );
</script>

<ContentMeasure width="proof" class="md:text-center">
  <div
    class="-mx-[18px] flex gap-[22px] overflow-x-auto px-[18px] pb-[4px] md:mx-0 md:flex-wrap md:justify-center md:gap-x-[26px] md:gap-y-[10px] md:overflow-visible md:px-0"
    aria-label="Reference customers"
    role="group"
  >
    {#each heroCustomerProofItems as customer, index (customer.customerName)}
      <button
        type="button"
        class={[
          'shrink-0 text-[14px] font-medium leading-none tracking-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950 md:text-[15px]',
          selectedIndex === index ? 'text-stone-800' : 'text-stone-300 hover:text-stone-500'
        ]}
        aria-describedby={selectedIndex === index ? 'hero-customer-proof-detail' : undefined}
        onfocus={() => {
          selectedIndex = index;
        }}
        onmouseenter={() => {
          selectedIndex = index;
        }}
      >
        {customer.customerName}
      </button>
    {/each}
  </div>

  <div class="mt-[28px] min-h-[28px]">
    {#if selectedCustomer}
      <div id="hero-customer-proof-detail" class="flex items-center gap-[10px] md:justify-center">
        <div
          class="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-[11px] font-semibold leading-none text-stone-700"
          aria-hidden="true"
        >
          {selectedCustomer.customerName.slice(0, 1)}
        </div>

        <div class="flex min-w-0 flex-wrap items-center gap-x-[10px] gap-y-[6px] text-[14px] leading-none tracking-normal">
          <span class="font-medium text-stone-800">{selectedCustomer.customerName}</span>
          <span class="hidden h-[14px] w-px bg-stone-200 md:block" aria-hidden="true"></span>
          <span class="leading-[1.35] text-stone-400">{selectedCustomer.proofLabel}</span>
        </div>
      </div>
    {/if}
  </div>
</ContentMeasure>
