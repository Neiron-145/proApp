<template>
  <ion-card v-for="c in cotizaciones" :key="c.id">
    <ion-card-header>
      <ion-card-title>{{ c.proyecto }}</ion-card-title>
      <ion-card-subtitle>{{ c.cliente }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <p>Área: {{ c.area }} m²</p>
      <p>Total: ${{ c.total }}</p>

      <ion-button size="small" @click="exportarPDF(c)">
        Exportar PDF
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { obtenerCotizaciones } from '@/services/database';
import { exportarPDF } from '@/utils/pdf';
import type { Cotizacion } from '@/models/Cotizacion';

const cotizaciones = ref<Cotizacion[]>([]);

onMounted(async () => {
  cotizaciones.value = await obtenerCotizaciones();
});
</script>