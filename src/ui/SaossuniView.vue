<script setup lang="ts">
import TarjetPoints from '@/components/TarjetPoints.vue'
// import TarjejtInforImages2 from '@/components/TarjejtInforImages2.vue'
// import TarjetInfoImagesGrummons from '@/components/TarjetInfoImagesGrummons.vue'
</script>

<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1 class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles">
            04
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Saossuni</h1>
            <h3 class="text-sm font-serif text-border-primary/80">Por: 1. Oscar - 2. William</h3>
          </div>
        </div>
        <div class="w-full bg-gray-300 rounded">
          <div class="bg-text-titles h-0.5 rounded" style="width: 7%"></div>
        </div>
      </div>
      <!-- CUERPO SECCIÓN -->
      <div class="flex flex-col gap-5">
        <!--! PUNTOS CEFALOMETRICOS -->
        <div class="flex flex-col gap-4" id="PuntosCefalometricosSaossuni" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Puntos Cefalométricos
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <TarjetPoints title="Ro" body="Punto más superior del techo de la órbita." />
            <TarjetPoints
              title="Te"
              body="Punto de corte de la línea MTZ con la base del cráneo."
            />
            <TarjetPoints
              title="Cla"
              body="Punto más superior de la apófisis clinoides anterior del esfenoides."
            />
            <TarjetPoints
              title="Si"
              body="Punto más inferior del contorno interno de la fosa pituitaria. (Silla turca del H.Esfenoides)."
            />
            <TarjetPoints
              title="Sp"
              body="Punto más posterior del contorno interno de la pared posterior de la silla turca."
            />
            <TarjetPoints
              title="Punto (0)"
              body="Prolongación de los planos de base mandibular,plano oclusal, plano palatino y plano de base craneal anterior."
            />
            <TarjetPoints title="ENA" body="Punto más anterior del proceso espinoso." />
            <TarjetPoints
              title="Go"
              body="Punto ubicado parte más posteroinferior de la silueta mandibular."
            />
            <TarjetPoints title="Me" body="Punto más inferior de la sínfisis mandibular." />
            <TarjetPoints title="N" body="Punto más anterior de la sutura frontonasal." />
            <TarjetPoints
              title="Punto A"
              body="Punto más posterior de la concavidad anterior en el perfil óseo del maxilar superior."
            />
            <TarjetPoints
              title="Punto B"
              body="Punto más posterior de la cavidad anterior en el perfil óseo del borde anterior de la mandibular."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
