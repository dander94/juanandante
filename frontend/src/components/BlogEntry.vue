<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  imgAlt: {
    type: String,
    required: false,
    default: '',
  },
  imgSrc: {
    type: String,
    required: false,
    default: '',
  },
  maxLines: {
    type: Number,
    required: false,
    default: null,
  },
  small: {
    type: Boolean,
    required: false,
    default: false,
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
});

const contentStyle = computed(() => ((props.maxLines)
  ? {
    '-webkit-line-clamp': props.maxLines,
  }
  : {}));
</script>

<template>
  <q-card class="my-card">
    <q-img
        :alt="imgAlt"
        class="tw-max-h-[300rem]"
        :ratio="16/9"
        :src="imgSrc"
    >
      <div class="absolute-bottom text-h6">
        {{ title }}
      </div>
    </q-img>

    <q-card-section>
      <div
          class="content"
          :class="{ 'truncated': !!maxLines }"
          :style="contentStyle">
        <slot />
      </div>
      <p class="tw-mt-4">
        <a class="text-primary" href="">Leer artículo completo</a>
      </p>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.image {
  position: relative;

  img {
    object-fit: cover;
  }

  &::after {
    background-color: black;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    opacity: 0.2;
    right: 0;
    top: 0;
  }
}

.content {

  &.truncated {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
