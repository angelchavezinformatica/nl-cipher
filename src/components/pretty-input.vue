<script setup lang="ts">
interface Props {
  label: string;
  readonly?: boolean;
}
withDefaults(defineProps<Props>(), {
  readonly: false,
});

import { useId } from "vue";

const id = useId();
const model = defineModel<string>();
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="id" class="font-bold">{{ label }}</label>
    <input
      v-model="model"
      class="px-4 py-1 rounded-full outline-1 outline-slate-500 text-lg"
      type="text"
      :readonly
    />
  </div>
</template>
