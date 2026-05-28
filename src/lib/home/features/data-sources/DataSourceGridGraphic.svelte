<script lang="ts">
  import { dataSourceItems } from './dataSourceContent';
</script>

<div class="grid grid-cols-1 gap-[12px] sm:grid-cols-2 md:grid-cols-3">
  {#each dataSourceItems as dataSource (dataSource.label)}
    {@const Icon = dataSource.icon}
    <div
      class="flex h-[45px] items-center rounded-[8px] border border-stone-200/70 bg-white px-[13px] text-stone-700"
    >
      <span class="flex h-[25px] w-[25px] shrink-0 items-center justify-center text-stone-300">
        <Icon size={24} weight="regular" />
      </span>
      <span class="ml-[16px] text-[14px] font-normal leading-none tracking-normal">
        {dataSource.label}
      </span>
    </div>
  {/each}
</div>
