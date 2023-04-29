<template>
  <div class="tw-bg-emerald-700">
    <div class="tw-container tw-mx-auto">
      <div class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center lg:tw-items-center tw-p-6 lg:tw-h-[7rem] text-white">
        <JaLogo class="hidden lg:block tw-h-[5rem]" />
        <span class="rokkitt text-bold tw-text-[3rem] lg:tw-text-[4rem] tw-leading-none">SEGUIMOS</span>
        <span class="rokkitt text-bold tw-text-[3rem] lg:tw-text-[4rem] tw-leading-none lg:tw-order-last">CAMINANDO</span>
        <img class="tw-h-[5rem]" :src="BetisWhiteSrc" />
        <JaLogo class="hidden lg:block tw-h-[5rem]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BetisWhiteSrc from 'assets/img/betis_white.png';
import JaLogo from 'components/JaLogo.vue';
</script>
