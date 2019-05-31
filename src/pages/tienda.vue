<template>
  <q-page padding class="column items-center">
    <div class="contenedor column items-center" style="background: white">
      <div class="column items-center" style="width: 90%; background: white">
        <div class="row" style="width:100%">
          <div class="col-2 filtro" style="background:red">
          </div>
          <div class="col-10 catalogo column items-center" style="background:green">
            <div class="q-pa-md row items-start q-gutter-md">
              <q-card v-for="articulo in articulos" :key="articulo" class="my-card">
                <img :src="articulo.foto">
                <q-card-section>
                  <div class="text-h6">{{ articulo.descripcion }}</div>
                  <div class="">{{ articulo.metal }}</div>
                  <div class="">Precio: ${{ articulo.precio }}</div>
                </q-card-section>
                <q-card-section>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
  .my-card{
    width: 100%;
    max-width: 240px;
  }
</style>

<script>
export default {
  name: 'Tienda',
  data () {
    return {
      articulos: [
        {
          id: '1',
          producto: 'anillo',
          metal: 'plata',
          descripcion: 'Anillo de Plata con piedra',
          tipo: 'anillo',
          precio: '745.53',
          foto: 'assets/img/Fotos Tienda/anillo1.jpg'
        },
        {
          id: '2',
          producto: 'cadena',
          metal: 'oro',
          descripcion: 'Cadena de oro',
          tipo: 'anillo',
          precio: '4553.53',
          foto: 'assets/img/Fotos Tienda/cadena1.jpg'
        },
        {
          id: '3',
          producto: 'pulsera',
          metal: 'acero',
          descripcion: 'Pulsera de Acero',
          tipo: 'pulsera',
          precio: '125.53',
          foto: 'assets/img/Fotos Tienda/pulsera1.jpg'
        }
      ]
    }
  }
}
</script>
