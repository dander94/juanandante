<template>
  <div class="lg:tw-grid lg:tw-grid-cols-5 lg:tw-gap-5">
    <q-input
        label="DNI"
        :model-value="props.personId"
        :rules="[val => !!val || 'Campo requerido']"
        @update:model-value="(val) => emit('update:personId', val)"
    />
    <q-input
        label="Nombre"
        :model-value="props.firstName"
        :rules="[val => !!val || 'Campo requerido']"
        @update:model-value="(val) => emit('update:firstName', val)"
    />
    <q-input
        label="Apellidos"
        :model-value="props.lastName"
        :rules="[val => !!val || 'Campo requerido']"
        @update:model-value="(val) => emit('update:lastName', val)"
    />
    <q-input
        label="Nº de teléfono"
        :model-value="props.phoneNumber"
        :rules="[val => !!val || 'Campo requerido']"
        @update:model-value="(val) => emit('update:phoneNumber', val)"
    />
    <InputDatetime
        label="Fecha de nacimiento"
        :value="props.birthdate"
        :rules="[(val: string) => !!val || 'Campo requerido']"
        @update="(val: string) => emit('update:birthdate', val)"
    />
  </div>
</template>

<script setup lang="ts">
import InputDatetime from 'src/components/common/InputDatetime.vue';

const emit = defineEmits([
  'update:firstName',
  'update:lastName',
  'update:personId',
  'update:birthdate',
  'update:phoneNumber',
]);

const props = defineProps<{
  firstName: string,
  lastName: string,
  personId: string,
  birthdate: string,
  phoneNumber: string,
}>();
</script>
