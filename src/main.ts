import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'

/* 🔹 IMPORTANTE: jeep-sqlite (ANTES de crear la app) */
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader'
jeepSqlite(window)

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

/* Dark mode */
import '@ionic/vue/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'

/* 🔹 Inicializar base de datos */
import { initDB } from '@/services/database'

const app = createApp(App)
  .use(IonicVue)
  .use(router)

router.isReady().then(async () => {
  await initDB()
  app.mount('#app')
})
