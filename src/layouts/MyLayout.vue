<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-fab color="amber" glossy icon="keyboard_arrow_down" direction="down">
          <q-btn color="amber" text-color="black" @click="redirectMenu('home')" label="Home" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('tienda')" label="Tienda" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('micuenta')" label="Mi Cuenta" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('favoritos')" label="Favoritos" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('carrito')" label="Carrito" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('login')" label="Iniciar Sesión" style="width:100px" />
        </q-fab>
        <q-toolbar-title>Zeta Joyas</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!-- <q-header elevated>
      <q-toolbar>
        <q-fab color="amber" glossy icon="keyboard_arrow_down" direction="down">
          <q-btn color="amber" text-color="black" @click="redirectMenu('home')" label="Home" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('tienda')" label="Tienda" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('micuenta')" label="Mi Cuenta" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('favoritos')" label="Favoritos" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('carrito')" label="Carrito" style="width:100px" />
          <q-btn color="amber" text-color="black" @click="redirectMenu('login')" label="Iniciar Sesión" style="width:100px" />
        </q-fab>
        <q-toolbar-title>
          Zeta Joyas
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    <q-footer elevated>
      <q-toolbar class="glossy">
        <q-toolbar-title>Zeta Joyas</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container style="height: 100%; background: #e5e5e5">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    redirectMenu (url) {
      window.location.href = '/#/' + url
    }
  }
}
</script>

<style>
</style>
