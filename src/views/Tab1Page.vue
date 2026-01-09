<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h2>Bienvenida Sandra 👷‍♀️</h2>
      <p>Gestiona tus cotizaciones de construcción</p>

      <!-- Crear cotización -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-icon :icon="documentTextOutline" />
            Nueva cotización
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-button expand="block" color="success" @click="irANueva">
            <ion-icon slot="start" :icon="addCircleOutline" />
            Crear cotización
          </ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Últimas cotizaciones -->
      <ion-list v-if="cotizaciones.length">
        <ion-list-header>
          <ion-label>Últimas cotizaciones</ion-label>
        </ion-list-header>

        <ion-card v-for="c in cotizaciones" :key="c.id">
          <ion-card-header>
            <ion-card-title>{{ c.proyecto }}</ion-card-title>
            <ion-card-subtitle>{{ c.cliente }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            <p>Área: {{ c.area }} m²</p>
            <p>Total: ${{ c.total }}</p>
          </ion-card-content>
        </ion-card>
      </ion-list>

      <p v-else>No hay cotizaciones aún</p>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { obtenerCotizaciones } from '@/services/database';
import {
  addCircleOutline,
  documentTextOutline
} from 'ionicons/icons';
import { Cotizacion } from '@/models/Cotizacion';
import { useRouter } from 'vue-router';

const router = useRouter();

const cotizaciones = ref<Cotizacion[]>([]);

const irANueva = () => {
  alert('Navegando a nueva cotización');
  router.push('/cotizaciones/nueva');
};

onMounted(async () => {
  cotizaciones.value = await obtenerCotizaciones();
});
</script>
