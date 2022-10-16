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

const contentStyle = computed(() => {
  return (!!props.maxLines)
    ? {
      '-webkit-line-clamp' : props.maxLines,
    }
    : {};
});
</script>

<template>
  <div class="card blog-entry">
    <div
        v-if="!!imgSrc && !small"
        class="card-image"
    >
      <figure class="image is-3by1">
        <img
            :alt="imgAlt"
            :src="imgSrc"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p
              class="title"
              :class="{'is-4': !small, 'is-5': small}"
          >
            {{ title }}
          </p>
          <p
              v-if="!!subtitle && !small"
              class="subtitle is-6"
          >
            {{ subtitle }}
          </p>
        </div>
      </div>
  
      <div
          class="content"
          :class="{'truncated': !!maxLines}"
          :style="contentStyle"
      >
        <slot />
      </div>
      <a href="">Leer artículo completo</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
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