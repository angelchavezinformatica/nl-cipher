<script setup lang="ts">
import { computed, ref } from "vue";
import { crypt } from "./nl-cipher/crypt";
import PrettyInput from "./components/pretty-input.vue";
import { decrypt } from "./nl-cipher/decrypt";

const encrypt = ref({
  key: "",
  message: "",
});

const encriptedMessage = computed(() => {
  try {
    return crypt(encrypt.value.key, encrypt.value.message);
  } catch {
    return "Error...";
  }
});

const decripted = ref({
  key: "",
  crypted: "",
});

const decriptedMessage = computed(() => {
  try {
    return decrypt(decripted.value.key, decripted.value.crypted);
  } catch {
    return "Error...";
  }
});
</script>

<template>
  <main
    class="flex flex-col justify-center items-center gap-4 px-6 py-8 w-full"
  >
    <h1 class="font-bold text-slate-300 text-4xl underline">nL Cipher</h1>

    <section>
      <h2 class="font-bold text-2xl">Encriptar mensaje</h2>

      <div class="flex flex-col gap-4 mt-4 w-full">
        <PrettyInput label="Clave" v-model="encrypt.key" />
        <PrettyInput label="Mensaje" v-model="encrypt.message" />
        <PrettyInput label="Resultado" v-model="encriptedMessage" readonly />
      </div>
    </section>

    <section>
      <h2 class="font-bold text-2xl">Desencriptar mensaje</h2>

      <div class="flex flex-col gap-4 mt-4 w-full">
        <PrettyInput label="Clave" v-model="decripted.key" />
        <PrettyInput label="Mensaje" v-model="decripted.crypted" />
        <PrettyInput label="Resultado" v-model="decriptedMessage" readonly />
      </div>
    </section>
  </main>
</template>
