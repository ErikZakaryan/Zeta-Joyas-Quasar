<template>
  <q-page class="column items-center">
    <div class="contenedor column items-center" style="background: white; height: calc(100vh)">
      <div class="flex flex-center" style="width: 90%; background: white">
        <div class="column items-center fixed-center" style="width: 100%">
          <div class="col" style="width: 200px; height: 200px">
            <img src="assets/img/logoZetaJ.jpg" alt="Foto del Frente de la Joyería" style="height: 100%; width: 100%">
          </div>
          <h1 style="text-align: center; margin:0">Bienvenidos a</h1>
          <h1 style="text-align: center; margin-top:0">Zeta Joyas</h1>
          <q-btn id="btnTienda" color="amber" glossy label="Ingrese a nuestra Página" @click="ahome()" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Index',
  methods: {
    ahome () {
      window.location.href = '/#/home'
    }
  }
}
</script>
