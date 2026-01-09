<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Nueva cotización</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-input v-model="form.cliente" label="Cliente" />
      <ion-input v-model="form.proyecto" label="Proyecto" />

      <ion-input v-model.number="form.ancho" type="number" label="Ancho (m)" />
      <ion-input v-model.number="form.largo" type="number" label="Largo (m)" />
      <ion-input v-model.number="form.alto" type="number" label="Alto (m)" />

      <ion-input v-model.number="form.precio_m2" type="number" label="Precio m²" />

      <ion-card>
        <ion-card-content>
          <p>Área: <b>{{ area }} m²</b></p>
          <p>Total: <b>${{ total }}</b></p>
        </ion-card-content>
      </ion-card>

      <ion-button expand="block" @click="guardar">
        Guardar cotización
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { crearCotizacion } from '@/services/database';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  cliente: '',
  proyecto: '',
  ancho: 0,
  largo: 0,
  alto: 0,
  precio_m2: 0
});

const area = computed(() => form.ancho * form.largo);
const total = computed(() => area.value * form.precio_m2);

const guardar = async () => {
  await crearCotizacion({
    ...form,
    area: area.value,
    total: total.value
  });
  router.push('/cotizacionesView');
};
</script>
