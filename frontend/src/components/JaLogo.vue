<script setup lang="ts">
import logo128 from 'assets/img/ja/ja_128.png';
import logo512 from 'assets/img/ja/ja_512.png';
import logo1024 from 'assets/img/ja/ja_1024.png';
import logo1500 from 'assets/img/ja/ja_1500.png';
import logoFull from 'assets/img/ja/ja_full.png';

const srcset = [
  `${logo128} 91w`,
  `${logo512} 362w`,
  `${logo1024} 725w`,
  `${logo1500} 1062w`,
  `${logoFull} 1548w`,
].join(', ');

const sizes = [
  '(max-width: 91px) 91w',
  '(min-width: 91px) and(max-width: 362px) 362w',
  '(min-width: 362px) and(max-width: 725px) 725w',
  '(min-width: 725px) and(max-width: 1062px) 1062w',
  '(min-width: 1062px) 1548w',
].join(', ');

</script>

<template>
  <img
      alt="Logo Juan Andante"
      :src="logoFull"
      :srcset="srcset"
      :sizes="sizes"
  />
</template>
