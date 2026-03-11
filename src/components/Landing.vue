<template>
  <div class="column items-center justify-center q-pa-xl">
    <img :src="logo" alt="FoodSaving logo" style="max-width: 100%; width: 600px;" />
    <div class="row q-gutter-md q-mt-md">
      <QBtn unelevated color="primary" label="Log in" to="/login" />
      <QBtn unelevated outline color="primary" label="Sign up" to="/signup" />
    </div>
  </div>
</template>

<script setup>
import { QBtn } from 'quasar'
const logo = new URL('../assets/fwdloggafss/FSS logga 6.6.png', import.meta.url).href
</script>
