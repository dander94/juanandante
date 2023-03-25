<script setup lang="ts">
  import BlogEntry from '@/components/common/BlogEntry.vue';
</script>

<template>
  <section class="recent-posts pt-6">
    <div class="container">
      <h2 class="is-size-3 has-text-primary mb-5">
        Últimas Publicaciones
      </h2>
      <div class="columns is-variable is-8">
        <div class="column is-8 recent-posts__main-article">
          <blog-entry
              img-src="https://phantom-marca.unidadeditorial.es/d738ae16fea0f90ce6e90feca79e2eed/resize/1200/f/jpg/assets/multimedia/imagenes/2022/10/13/16656666124808.jpg"
              :max-lines="12"
              title="Acto previa UD Almería"
          >
            Queridos socios,



            A continuación, podréis leer toda la información del que será nuestro primer evento oficial de la temporada, el Acto
            Bienvenida, que tendrá lugar en la previa del Real Betis Balompié - Villarreal CF



            Fecha: 11 de septiembre

            Citación: 14:00h

            Lugar: Bar el Seto de Reina Mercedes (C/Monzón nº10)

            Precios:

            - SOCIOS: GRATIS (Importante estar al corriente de pago. Si llegado la fecha límite de confirmación de asistencia y el
            socio no ha renovado, tendría que pagar como un no socio)

            - NO SOCIOS: 10€

            - NO SOCIOS menores de 14 años: 5€

            - Pueden pagar en efectivo el día del acto, mediante Bizum al número de teléfono +34623047735 o bien al número de cuenta
            de Openbank ES55 0073 0100 5706 2476 0511 poniendo en el concepto "Acto + nombre"

            Confirmación asistencia: Hasta el próximo jueves 8 de septiembre a las 23:59h



            Esperamos poder contar con la presencia de todos vosotros y volver a pasar un gran día de peñismo. Habrá tickets,
            comida, sorteos, juegos y muchas ganas de Betis. Si alguien tiene cualquier tipo de duda o sugerencia contactad con
            nosotros. Siempre es importante vuestra opinión.
          </blog-entry>
        </div>
        <div class="column is-4">
          <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-stretch">
            <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-stretch">
              <blog-entry
                  class="mb-3"
                  img-src="./seto.png"
                  title="Acto previa Real Betis - Atlético de Madrid"
                  :max-lines="3"
                  small
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare sapien non elementum maximus. Nunc facilisis
                felis vitae erat fringilla, id lacinia orci iaculis. Maecenas vestibulum magna erat, molestie cursus sem faucibus eu.
                Donec fringilla blandit congue. Aenean eu suscipit tellus. Sed egestas malesuada imperdiet. Proin eget quam lacinia,
                tempor leo eget, consectetur risus. Donec et est eget sem pharetra sollicitudin eu eget eros.
              </blog-entry>
              <blog-entry
                  class="mb-3"
                  img-src="./seto.png"
                  title="Acto previa Real Betis - Atlético de Madrid"
                  :max-lines="3"
                  small
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare sapien non elementum maximus. Nunc facilisis
                felis vitae erat fringilla, id lacinia orci iaculis. Maecenas vestibulum magna erat, molestie cursus sem faucibus eu.
                Donec fringilla blandit congue. Aenean eu suscipit tellus. Sed egestas malesuada imperdiet. Proin eget quam lacinia,
                tempor leo eget, consectetur risus. Donec et est eget sem pharetra sollicitudin eu eget eros.
              </blog-entry>
            </div>
            <div class="box">
              <a href="">Ver todas las entradas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/bulma';

.recent-posts {
  min-height: calc(100vh - 6rem);

  .recent-posts__main-article {
    .image {
      max-height: 15rem;
    }
  }
}
</style>

<style lang="scss">
.recent-posts {
  .recent-posts__main-article {
    .blog-entry {
    }
  }
}
</style>
