<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Configuración</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- Sección: Materiales -->
      <ion-list>
        <ion-list-header>
          <ion-label>Base de datos</ion-label>
        </ion-list-header>

        <ion-item button>
          <ion-icon slot="start" :icon="cube"></ion-icon>
          <ion-label>Materiales</ion-label>
        </ion-item>

        <ion-item button>
          <ion-icon slot="start" :icon="construct"></ion-icon>
          <ion-label>Mano de obra</ion-label>
        </ion-item>

        <ion-item button>
          <ion-icon slot="start" :icon="people"></ion-icon>
          <ion-label>Clientes</ion-label>
        </ion-item>
      </ion-list>

      <!-- Sección: Empresa -->
      <ion-list class="ion-margin-top">
        <ion-list-header>
          <ion-label>Empresa</ion-label>
        </ion-list-header>

        <ion-item button>
          <ion-icon slot="start" :icon="business"></ion-icon>
          <ion-label>Datos de la empresa</ion-label>
        </ion-item>

        <ion-item button>
          <ion-icon slot="start" :icon="cash"></ion-icon>
          <ion-label>Parámetros de costos</ion-label>
        </ion-item>
      </ion-list>

      <!-- Sección: Sistema -->
      <ion-list class="ion-margin-top">
        <ion-list-header>
          <ion-label>Sistema</ion-label>
        </ion-list-header>

        <ion-item button>
          <ion-icon slot="start" :icon="settings"></ion-icon>
          <ion-label>Preferencias</ion-label>
        </ion-item>

        <ion-item button>
          <ion-icon slot="start" :icon="logOut"></ion-icon>
          <ion-label>Salir</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  cube,
  construct,
  business,
  cash,
  people,
  settings,
  logOut
} from 'ionicons/icons';
</script>
