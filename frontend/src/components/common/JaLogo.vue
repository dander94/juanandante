<script setup lang="ts">
  import { computed, ref } from 'vue';
  
  import logo128 from '@/assets/img/ja/ja_128.png';
  import logo512 from '@/assets/img/ja/ja_512.png';
  import logo1024 from '@/assets/img/ja/ja_1024.png';
  import logo1500 from '@/assets/img/ja/ja_1500.png';
  import logoFull from '@/assets/img/ja/ja_full.png';

  const logoElm = ref<HTMLElement | null>(null);

  const heightPx = computed(() => {
    if (logoElm.value === null) return 0;

    return logoElm.value.clientHeight;
  });

  const imgSrc = computed(() => {
    if (heightPx.value <= 128) {
      return logo128;
    } else if (heightPx.value <= 512) { 
      return logo512;
    } else if (heightPx.value <= 1024) {
      return logo1024;
    } else if (heightPx.value <= 1500) {
      return logo1500;
    } else {
      return logoFull;
    }
  });
</script>

<template>
  <img
    ref="logoElm"
    :src="imgSrc"
    alt="Logo Juan Andante"
    v-bind="$attrs"
  >
</template>