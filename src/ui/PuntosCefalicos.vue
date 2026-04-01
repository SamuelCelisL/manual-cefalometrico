<script setup lang="ts">
import TarjetPoints from '@/components/TarjetPoints.vue'
import TarjetInfoImages from '@/components/TarjetInfoImages.vue'
</script>
<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1 class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles">
            01
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Steiner</h1>
            <h3 class="text-sm font-serif text-border-primary/80">
              Por: 1. Marcela Pabon - 2. Maria Mendez - 3. Laura Ortiz
            </h3>
          </div>
        </div>
        <div class="w-full bg-gray-300 rounded">
          <div class="bg-text-titles h-0.5 rounded" style="width: 7%"></div>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="flex w-full gap-2 justify-center items-center">
          <img
            src="../assets/images/calco cefalometria.png"
            alt="Puntos Cefalicos"
            class="size-90 rounded-lg shadow-lg"
          />
          <h1 class="text-2xl font-bold text-background-primary font-serif">Calco Cefamoletría</h1>
        </div>
        <!-- PUNTOS CEFALOMETRICOS -->
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Puntos Cefalométricos de Análisis de Steiner
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <TarjetPoints title="N" body="Punto más anterior de la sutura frontonasal." />
            <TarjetPoints
              title="S"
              body="Punto ubicado en el centro de la silla turca del hueso esfenoides."
            />
            <TarjetPoints title="ENA" body="Punto más anterior del proceso espinoso del maxila." />
            <TarjetPoints
              title="ENP"
              body="Punto más posterior del contorno horizontal de los huesos palatinos."
            />
            <TarjetPoints
              title="Gn"
              body="Punto más anterior e inferior del contorno mandibular."
            />
            <TarjetPoints
              title="Go"
              body="Punto ubicado parte más posteroinferior de la
              silueta mandibular."
            />
            <TarjetPoints
              title="Punto A"
              body="Punto más posterior de la concavidad anterior
              en el perfil óseo del maxilar superior."
            />
            <TarjetPoints
              title="Punto B"
              body="Punto más posterior de la cavidad anterior en
              el perfil óseo del borde anterior de la mandibular."
            />
            <TarjetPoints title="Punto D" body="Punto más central de la sínfisis mentoniana." />
            <TarjetPoints
              title="Pg"
              body="Punto más prominente en la parte más anterior de la
              sínfisis mentoniana."
            />
          </div>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Ángulo SNA"
              imageSrc="/images/anguloSNA.png"
              text1="Formado por los planos S-N y N-A"
              text2="Indica la ubicación anteroposterior del maxilar respecto a la base del cráneo."
              norma="Norma: 82.01° +/- 3.89°"
              rango="Rango: 78.12° - 85.9°"
              tabla1="Protrusión maxilar"
              tabla2="Normotrusión maxilar"
              tabla3="Retrusión maxila"
              citacion='Riedel, Richard A. "The relation of maxillary structures to cranium in malocclusion and in normal occlusion." The Angle Orthodontist 22.3 (1952): 142-145.'
            />
            <TarjetInfoImages
              title="Ángulo SNB"
              imageSrc="/images/anguloSNB.png"
              text1="Formado por los planos S-N y N-B"
              text2="Indica la ubicación anteroposterior de la mandíbula respecto a la base del cráneo"
              norma="Norma: 79.97° +/- 3.69°"
              rango="Rango: 76.28° - 83.66°"
              tabla1="Protrusión mandibular "
              tabla2="Normotrusión mandibular"
              tabla3="Retrusión mandibular"
              citacion='Riedel, Richard A. "The relation of maxillary structures to cranium in malocclusion and in normal occlusion." The Angle Orthodontist 22.3 (1952): 142-145.'
            />
            <TarjetInfoImages
              title="Ángulo ANB"
              imageSrc="/images/anguloANB.png"
              text1="Formado por los planos N-A y N-B"
              text2="Indica la relación anteroposterior que existe entre el maxilar y la mandíbula"
              norma="Norma: 2.04° +/- 1.81°"
              rango="Rango: 0.23°- 3.85°"
              tabla1="Clase II esquelética"
              tabla2="Clase I esquelética"
              tabla3="Clase III esquelética"
              citacion='Riedel, Richard A. "The relation of maxillary structures to cranium in malocclusion and in normal occlusion." The Angle Orthodontist 22.3 (1952): 142-145.'
            />
            <TarjetInfoImages
              title="Ángulo SND"
              imageSrc="/images/anguloSND.png"
              text1="Formado por los planos S-N y N-D"
              text2="Indica la ubicación anteroposterior del mentón respecto a la base del cráneo."
              norma="Norma: 76-77"
              rango="Rango:"
              tabla1="Protrusión mandibular"
              tabla2="Normotrusión mandibular"
              tabla3="Retrusión mandibular"
              citacion="Steiner CC. Cephalometrics in clinical practice. Cephalometrics.1959; 29(1):8-29"
            />
          </div>
        </div>
        <!-- Análisis de Steiner RELACION VERTICAL -->
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Análisis de Steiner: Relación Vertical
          </h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Ángulo SNA"
              imageSrc="/images/anguloSNA.png"
              text1="Formado por los planos S-N y N-A"
              text2="Indica la ubicación anteroposterior del maxilar respecto a la base del cráneo."
              norma="Norma: 82.01° +/- 3.89°"
              rango="Rango: 78.12° - 85.9°"
              tabla1="Protrusión maxilar"
              tabla2="Normotrusión maxilar"
              tabla3="Retrusión maxila"
              citacion='Riedel, Richard A. "The relation of maxillary structures to cranium in malocclusion and in normal occlusion." The Angle Orthodontist 22.3 (1952): 142-145.'
            />
            <TarjetInfoImages
              title="Ángulo SNB"
              imageSrc="/images/anguloSNB.png"
              text1="Formado por los planos S-N y N-B"
              text2="Indica la ubicación anteroposterior de la mandíbula respecto a la base del cráneo"
              norma="Norma: 79.97° +/- 3.69°"
              rango="Rango: 76.28° - 83.66°"
              tabla1="Protrusión mandibular "
              tabla2="Normotrusión mandibular"
              tabla3="Retrusión mandibular"
              citacion='Riedel, Richard A. "The relation of maxillary structures to cranium in malocclusion and in normal occlusion." The Angle Orthodontist 22.3 (1952): 142-145.'
            />
            <TarjetInfoImages
              title="Ángulo ANB"
              imageSrc="/images/anguloANB.png"
              text1="Formado por los planos N-A y N-B"
              text2="Indica la relación anteroposterior que existe entre el maxilar y la mandíbula"
              norma="Norma: 2.04° +/- 1.81°"
              rango="Rango: 0.23°- 3.85°"
              tabla1="Clase II esquelética"
              tabla2="Clase I esquelética"
              tabla3="Clase III esquelética"
              citacion='Riedel, Richard A. "The relation of maxillary structures to cranium in malocclusion and in normal occlusion." The Angle Orthodontist 22.3 (1952): 142-145.'
            />
            <TarjetInfoImages
              title="Ángulo SND"
              imageSrc="/images/anguloSND.png"
              text1="Formado por los planos S-N y N-D"
              text2="Indica la ubicación anteroposterior del mentón respecto a la base del cráneo."
              norma="Norma: 76-77"
              rango="Rango:"
              tabla1="Protrusión mandibular"
              tabla2="Normotrusión mandibular"
              tabla3="Retrusión mandibular"
              citacion="Steiner CC. Cephalometrics in clinical practice. Cephalometrics.1959; 29(1):8-29"
            />
          </div>
        </div>
        <p class="text-lg">
          En esta sección se presentan los puntos cefalométricos utilizados en el análisis de
          McNamara. Cada punto se define con precisión para garantizar mediciones consistentes y
          confiables.
        </p>
      </div>
    </div>
  </div>
</template>
