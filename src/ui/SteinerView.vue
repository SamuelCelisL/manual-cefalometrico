<script setup lang="ts">
import TarjetPoints from '@/components/TarjetPoints.vue'
import TarjetInfoImages from '@/components/TarjetInfoImages.vue'
</script>
<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <!-- TITULO SECCIÓN -->
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1
            class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles"
            id="inicioSteiner"
            data-seccion
          >
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
      <!-- CUERPO SECCIÓN -->
      <div class="flex flex-col gap-5">
        <div class="flex flex-col md:flex-row w-full gap-3 justify-center items-center">
          <img
            src="../assets/images/calco cefalometria.png"
            alt="Puntos Cefalicos"
            class="size-90 rounded-lg shadow-lg"
          />
          <h1 class="text-2xl font-bold text-background-primary font-serif">Calco Cefamoletría</h1>
        </div>

        <!--! PUNTOS CEFALOMETRICOS -->
        <div class="flex flex-col gap-4" id="PuntosCefalometricosSteiner" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Puntos Cefalométricos de Análisis de Steiner
          </h2>

          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col w-full gap-3 justify-center items-center">
              <img
                src="/images/Puntos cefalometricos de Steiner.png"
                alt="Puntos cefalometrico LeganBurstone 2"
                class="rounded-lg shadow-lg"
              />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <TarjetPoints
                title="<span class='text-blue-800/60'>N</span>"
                body="Punto más anterior de la sutura frontonasal."
              />
              <TarjetPoints
                title="<span class='text-green-800/60'>S</span>"
                body="Punto ubicado en el centro de la silla turca del hueso esfenoides."
              />
              <TarjetPoints
                title="<span class='text-red-800/60'>ENA</span>"
                body="Punto más anterior del proceso espinoso del maxila."
              />
              <TarjetPoints
                title="<span class='text-cyan-600'>ENP</span>"
                body="Punto más posterior del contorno horizontal de los huesos palatinos."
              />
              <TarjetPoints
                title="<span class='text-pink-500'>Gn</span>"
                body="Punto más anterior e inferior del contorno mandibular."
              />
              <TarjetPoints
                title="<span class='text-orange-400'>G0</span>"
                body="Punto ubicado parte más posteroinferior de la
              silueta mandibular."
              />
              <TarjetPoints
                title="<span class='text-blue-600'>Punto A</span>"
                body="Punto más posterior de la concavidad anterior
              en el perfil óseo del maxilar superior."
              />
              <TarjetPoints
                title="<span class='text-yellow-600'>Punto B</span>"
                body="Punto más posterior de la cavidad anterior en
              el perfil óseo del borde anterior de la mandibular."
              />
              <TarjetPoints
                title="<span class='text-green-600/80'>Punto D</span>"
                body="Punto más central de la sínfisis mentoniana."
              />
              <TarjetPoints
                title="<span class='text-purple-800'>Pg</span>"
                body="Punto más prominente en la parte más anterior de la
              sínfisis mentoniana."
              />
            </div>
          </div>

          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Ángulo SNA"
              imageSrc="/images/anguloSNA.png"
              text1="Formado por los planos S-N y N-A"
              text2="Indica la ubicación anteroposterior del maxilar respecto a la base del cráneo."
              norma="82.01°"
              SD="+/- 3.89°"
              rango="78.12° - 85.9°"
              tabla1="Protrusión maxilar"
              tabla2="Normotrusión maxilar"
              tabla3="Retrusión maxila"
              citacion="Anexo: El autor no da desviaciòn estandar"
            />
            <TarjetInfoImages
              title="Ángulo SNB"
              imageSrc="/images/anguloSNB.png"
              text1="Formado por los planos S-N y N-B"
              text2="Indica la ubicación anteroposterior de la mandíbula respecto a la base del cráneo"
              norma="79.97° "
              SD="+/- 3.69°"
              rango="76.28° - 83.66°"
              tabla1="Protrusión mandibular "
              tabla2="Normotrusión mandibular"
              tabla3="Retrusión mandibular"
            />
            <TarjetInfoImages
              title="Ángulo ANB"
              imageSrc="/images/anguloANB.png"
              text1="Formado por los planos N-A y N-B"
              text2="Indica la relación anteroposterior que existe entre el maxilar y la mandíbula"
              norma="2.04°"
              SD="+/- 1.81°"
              rango="0.23°- 3.85°"
              tabla1="Clase II esquelética"
              tabla2="Clase I esquelética"
              tabla3="Clase III esquelética"
            />
            <TarjetInfoImages
              title="Ángulo SND"
              imageSrc="/images/anguloSND.png"
              text1="Formado por los planos S-N y N-D"
              text2="Indica la ubicación anteroposterior del mentón respecto a la base del cráneo."
              norma="76-77"
              tabla1="Protrusión mandibular"
              tabla2="Normotrusión mandibular"
              tabla3="Retrusión mandibular"
              citacion="Anexo: El autor no da desviaciòn estandar"
            />
          </div>
        </div>

        <!-- !Análisis de Steiner RELACION VERTICAL -->
        <div class="flex flex-col gap-4" id="relacionVerticalSteiner" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Análisis de Steiner: Relación Vertical
          </h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Ángulo Go-Gn y S-N"
              imageSrc="/images/anguloGo-gn y S-N.png"
              text1="Formado por el plano S-N y plano mandibular Go-Gn"
              text2="Indica la dirección de crecimiento."
              norma="31.71°"
              SD="+/- 5.19°"
              rango="26.52° - 36.9°"
              tabla1="Hiperdivergente puede sugerir patrón de crecimiento/ facial vertical
"
              tabla2="Normodivergente"
              tabla3="Hipodivergente puede sugerir patrón de crecimiento/ facial horizontal
"
              citacion="Steiner CC. The use of cephalometrics as an aid to planning and assessing orthodontic treatment: report of a case. Am J Orthod. 1960;46(10):721-735."
            />
            <TarjetInfoImages
              title="Ángulo plano oclusal y S-N"
              imageSrc="/images/angulo plano oclusal y S-N.png"
              text1="Formado por el plano S-N y plano oclusal Go-Gn"
              text2="Indica la inclinación del plano oclusal con respecto a la base del cráneo."
              text3="Indica la dirección de crecimiento"
              norma="14.5°"
              tabla1="Hiperdivergente puede sugerir patrón de crecimiento/ facial vertical"
              tabla2="Normodivergente"
              tabla3="Hipodivergente puede sugerir patrón de crecimiento/ facial horizontal"
              anexo="Anexo: El autor no da desviación estandar"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Ángulo Eje Y"
              imageSrc="/images/angulo Eje Y.png"
              text1="Formado por el plano S-N y S-Gn"
              text2="Indica la dirección de crecimiento"
              norma="66°"
              SD="+/-3.82°"
              rango="62.18° - 69.82°"
              tabla1="Hiperdivergente puede sugerir patrón de crecimiento/ facial vertical"
              tabla2="Normodivergente"
              tabla3="Hipodivergente puede sugerir patrón de crecimiento/ facial horizontal"
              citacion='Downs, Willian B, and Aurora Illionis. "Variations in facial relationship: Their significance in treatment and prognosis." Julio 1949: 145-155. '
            />
          </div>
        </div>

        <!--! Análisis de Steiner RELACION DENTAL -->
        <div class="flex flex-col gap-4" id="relacionDentalSteiner" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Análisis de Steiner: Relación Dental
          </h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Ángulo 1-NA"
              imageSrc="/images/angulo 1-NA.png"
              text1="Formado por el eje longitudinal del incisivo superior y el plano N-A."
              text2="Indica la inclinación anteroposterior del incisivo superior con respecto al tercio medio facial."
              norma="22°"
              tabla1="Proinclinación del incisivo superior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo superior"
              anexo="Anexo: El autor no da desviación estándar ni rango"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Distancia 1-NA"
              imageSrc="/images/distancia 1-NA.png"
              text1="Es la distancia entre el borde incisal del incisivo superior y el plano N-A."
              text2="Indica la ubicación anteroposterior del incisivo superior."
              norma="4 mm"
              tabla1="Protrusión del incisivo superior"
              tabla2="Normotrusión"
              tabla3="Retrusión del incisivo superior"
              anexo="Anexo: El autor no da desviación estándar ni rango"
              citacion='Downs, Willian B, and Aurora Illionis. "Variations in facial relationship: Their significance in treatment and prognosis." Julio 1949: 145-155'
            />
            <TarjetInfoImages
              title="Ángulo 1-PP (IMAX)"
              imageSrc="/images/angulo 1-PP (imax).png"
              text1="Formado por el eje longitudinal del incisivo superior y el plano palatino"
              text2="Indica la inclinación anteroposterior del incisivo superior con respecto a su base ósea"
              norma="106° - 112°"
              tabla1="Proinclinación del incisivo superior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo superior"
              anexo="Anexo: El autor no da desviación estándar ni rango"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Ángulo 1 - SN"
              imageSrc="/images/angulo 1 - SN.png"
              text1="Formado por el eje longitudinal del incisivo superior y el plano S-N"
              text2="Indica la inclinación anteroposterior del incisivo superior con respecto a la base de cráneo."
              norma="103°"
              SD="+/- 5.75°"
              rango="97,25° +- 108,75°"
              tabla1="Proinclinación del incisivo superior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo superior"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Ángulo 1 - NB"
              imageSrc="/images/angulo 1 - NB.png"
              text1="Formado por el eje longitudinal del incisivo inferior y el plano N-B"
              text2="Indica la inclinación anteroposterior del incisivo inferior."
              norma="25°"
              tabla1="Proinclinación del incisivo inferior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo inferior"
              anexo="Anexo: El autor no da desviación estándar ni rango"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7 "
            />
            <TarjetInfoImages
              title="Distancia 1 - NB"
              imageSrc="/images/distancia 1 - NB.png"
              text1="Es la distancia entre el borde incisal del incisivo inferior y el plano NB"
              text2="Indica la ubicación anteroposterior del incisivo inferior."
              norma="4mm"
              tabla1="Protrusión del incisivo inferior"
              tabla2="Normotrusión"
              tabla3="Retrusión del incisivo inferior"
              anexo=" Anexo: El autor no da desviación estándar ni rango"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Ángulo 1 y Go-Gn (IMPA)"
              imageSrc="/images/angulo 1 y Go-Gn (impa).png"
              text1="Formado por el eje longitudinal del incisivo inferior y el plano mandibular"
              text2="Indica la relación angular entre los ejes longitudinales de los incisivos superior e inferior."
              norma="93,08°"
              SD="+/- 6.78°"
              rango="83,22° - 96,78°"
              tabla1="Proinclinación del incisivo inferior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo inferior"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Ángulo interincisivo"
              imageSrc="/images/angulo interincisivo.png"
              text1="Formado por los ejes longitudinales de los incisivos superior e inferior"
              text2="Indica la relación angular entre los ejes longitudinales del incisivo superior e inferior."
              norma="130°"
              SD="+/- 9.24°"
              rango="120,76° - 139,24°"
              tabla1="Retroinclinación de los incisivos"
              tabla2="Normoinclinación"
              tabla3="Proinclinación de los incisivos"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
