<template>
  <q-input
      v-model="date"
      :label="label"
  >
    <template #prepend>
      <q-icon
          name="event"
          class="cursor-pointer"
      >
        <q-popup-proxy
            cover
            transition-show="scale"
            transition-hide="scale"
        >
          <q-date
              v-model="date"
              :mask="mask"
          >
            <div class="row items-center justify-end">
              <q-btn
                  v-close-popup
                  label="Close"
                  color="primary"
                  flat
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template
        v-if="withTime"
        #append
    >
      <q-icon
          name="access_time"
          class="cursor-pointer"
      >
        <q-popup-proxy
            cover
            transition-show="scale"
            transition-hide="scale"
        >
          <q-time
              v-model="date"
              :mask="mask"
              format24h
          >
            <div class="row items-center justify-end">
              <q-btn
                  v-close-popup
                  label="Close"
                  color="primary"
                  flat
              />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits<{(e: 'update', value: string): void}>();
const props = withDefaults(defineProps<{
  label?: string,
  value: string,
  withTime?: boolean,
}>(), {
  label: '',
  withTime: false,
});

const date = computed({
  get() {
    return props.value;
  },
  set(nV: string) {
    emit('update', nV);
  },
});

const mask = computed(() => (
  (props.withTime)
    ? 'YYYY-MM-DD HH:mm'
    : 'YYYY-MM-DD'
));
</script>
