<template>
  <q-page class="column items-center">
    <div class="banner"></div>
    <div class="contenedor column items-center" style="background: white">
      <div class="column items-center" style="width: 90%; background: white">
      <div class="column items-center">
        <div class="row justify-center">
            <h1>Zeta Joyas</h1>
        </div>
      </div>
      <div class="row text-center">
      <div class="col-12">
        <p>{{ loremCorto }}</p>
      </div>
      </div>
      <div class="row justify-center" id="info">
        <div class="col-md-6">
          <img src="assets/img/logoZetaJ.jpg" alt="Foto del Frente de la Joyería" style="height: 100%; width: 100%">
        </div>
        <div class="col-md-6">
          <h1 class="font-weight-bold" style="">La Empresa</h1>
          <p style="width:100%">{{ loremLargo }}</p>
        </div>
      </div>
      <div class="q-pa-md text-center">
        <div class="column">
          <div class="col">
            <h1 class="font-weight-bold" style="height: 80px">Tienda Online</h1>
          </div>
          <div class="col">
            <p>Tenemos una increible variedad de productos y estilos para que usted pueda elegir su joya ideal</p>
          </div>
          <div class="col">
            <q-btn id="btnTienda" color="amber" glossy label="Ingrese a nuestra Tienda" @click="redirectMenu('tienda')" />
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          <h1 class="font-weight-bold" style="height: 80px">Contáctenos</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>{{ loremLargo }}</p>
          <!-- GOOGLE MAPS JOYERIA -->
          <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.539410166738!2d-58.524982985051885!3d-34.61580666564424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7d8547eaaab%3A0xaec8e208b39c111b!2sZeta+Joyas!5e0!3m2!1ses-419!2sar!4v1552339599971" width="100%" height="250" frameborder="0" style="border:1px solid gold" allowfullscreen></iframe>
          <div class="column" style="height: 200px; margin-top: 20px">
            <div class="col">
              <div class="detail-title"><i class="fas fa-map-marker-alt"> </i>
                <h6 class="font-weight-bolder">Dirección</h6>
              </div>
              <q-badge color="amber">Av. Lope de Vega 2859 (CABA)</q-badge>
              <q-separator />
            </div>
            <div class="col">
              <div class="detail-title"><i class="fa fa-phone"> </i>
                <h6 class="font-weight-bolder">Teléfonos</h6>
              </div>
              <q-badge color="amber">011 3398-7195</q-badge>
              <q-separator />
            </div>
            <div class="col">
              <div class="detail-title"><i class="fa fa-envelope"> </i>
                <h6 class="font-weight-bolder">Correo Electrónico</h6>
              </div>
              <q-badge color="amber">zetajoyas@gmail.com</q-badge>
              <q-separator />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row items-center text-center">
            <h2 class="" style="width: 100%; margin: 0">Envíanos un mensaje</h2>
              <div class="q-gutter-md" style="width:100%">
                <form action="">
                  <q-input ref="input" standar v-model="nombre" label="Nombre" :rules="[val => !!val || 'Field is required']"/>
                  <q-input ref="input" standar v-model="apellido" label="Apellido" :rules="[val => !!val || 'Field is required']"/>
                  <q-input ref="input" standar v-model="correo" label="Correo" :rules="[val => !!val || 'Field is required']"/>
                  <div class="q-pa-md">
                    <q-input v-model="text" standar label="Comentario" type="textarea" :rules="[val => !!val || 'Campo obligatorio']" />
                    <br>
                    <q-btn class="q-mt-sm" id="btnEnviar" label="Enviar" @click="enviar()" color="primary"/>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="amber" />
  </q-page-scroller>
  </q-page>
</template>

<style>
  .row > div {
    padding: 10px 15px;
  }
  #btnTienda, #mapa, #btnEnviar {
    -webkit-box-shadow: 7px 7px 12px 4px rgba(128,128,128,1);
    -moz-box-shadow: 7px 7px 12px 4px rgba(128,128,128,1);
    box-shadow: 7px 7px 12px 4px rgba(128,128,128,1);
  }
  .banner {
    width: 100%;
    height: 45vh;
    background-image: url('../assets/img/banner.jpg');
    background-repeat: no-repeat;
    background-size:100% 100%;
    border-bottom: 8px solid gold;
  }
  q-badge {
    font-size: 10px;
  }
  @media (max-width: 770px) {
  .banner {
    height: 35vh;
  }
}
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      model: '',
      loremLargo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus incidunt dignissimos est quam qui ullam? Ut, illum. Nobis perferendis corporis sunt voluptatibus nihil, minus quisquam alias hic tempora non.',
      loremCorto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus incidunt dignissimos'
    }
  },
  methods: {
    redirectMenu (url) {
      window.location.href = '/#/' + url
    },
    reset () {
      this.$refs.input.resetValidation()
    }
  }
}
</script>
