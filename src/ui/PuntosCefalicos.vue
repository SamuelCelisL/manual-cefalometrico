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
        <div class="flex flex-col md:flex-row w-full gap-3 justify-center items-center">
          <img
            src="../assets/images/calco cefalometria.png"
            alt="Puntos Cefalicos"
            class="size-90 rounded-lg shadow-lg"
          />
          <h1 class="text-2xl font-bold text-background-primary font-serif">Calco Cefamoletría</h1>
        </div>

        <!--! PUNTOS CEFALOMETRICOS -->
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Puntos Cefalométricos de Análisis de Steiner
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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

        <!-- !Análisis de Steiner RELACION VERTICAL -->
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Análisis de Steiner: Relación Vertical
          </h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Ángulo Go-Gn y S-N"
              imageSrc="/images/anguloGo-gn y S-N.png"
              text1="Formado por el plano S-N y plano mandibular Go-Gn"
              text2="Indica la dirección de crecimiento."
              norma="Norma: 31.71° +/- 5.19°"
              rango="Rango: 26.52° - 36.9°"
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
              norma="Norma: 14.5°"
              tabla1="Hiperdivergente puede sugerir patrón de crecimiento/ facial vertical"
              tabla2="Normodivergente"
              tabla3="Hipodivergente puede sugerir patrón de crecimiento/ facial horizontal"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Ángulo Eje Y"
              imageSrc="/images/angulo Eje Y.png"
              text1="Formado por el plano S-N y S-Gn"
              text2="Indica la dirección de crecimiento"
              norma="Norma: 66° +/-3.82°"
              rango="Rango: 62.18° - 69.82°"
              tabla1="Hiperdivergente puede sugerir patrón de crecimiento/ facial vertical"
              tabla2="Normodivergente"
              tabla3="Hipodivergente puede sugerir patrón de crecimiento/ facial horizontal"
              citacion='Downs, Willian B, and Aurora Illionis. "Variations in facial relationship: Their significance in treatment and prognosis." Julio 1949: 145-155. '
            />
          </div>
        </div>

        <!--! Análisis de Steiner RELACION DENTAL -->
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Análisis de Steiner: Relación Dental
          </h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Ángulo 1-NA"
              imageSrc="/images/angulo 1-NA.png"
              text1="Formado por el eje longitudinal del incisivo superior y el plano N-A."
              text2="Indica la inclinación anteroposterior del incisivo superior con respecto al tercio medio facial."
              norma="Norma: 22°"
              tabla1="Proinclinación del incisivo superior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo superior"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7"
            />
            <TarjetInfoImages
              title="Distancia 1-NA"
              imageSrc="/images/distancia 1-NA.png"
              text1="Es la distancia entre el borde incisal del incisivo superior y el plano N-A."
              text2="Indica la ubicación anteroposterior del incisivo superior."
              norma="Norma: 4 mm"
              tabla1="Protrusión del incisivo superior"
              tabla2="Normotrusión"
              tabla3="Retrusión del incisivo superior"
              citacion='Downs, Willian B, and Aurora Illionis. "Variations in facial relationship: Their significance in treatment and prognosis." Julio 1949: 145-155'
            />
            <TarjetInfoImages
              title="Ángulo 1-PP (IMAX)"
              imageSrc="/images/angulo 1-PP (imax).png"
              text1="Formado por el eje longitudinal del incisivo superior y el plano palatino"
              text2="Indica la inclinación anteroposterior del incisivo superior con respecto a su base ósea"
              norma="Norma: 106° - 112°"
              tabla1="Proinclinación del incisivo superior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo superior"
            />
            <TarjetInfoImages
              title="Ángulo 1 - SN"
              imageSrc="/images/angulo 1 - SN.png"
              text1="Formado por el eje longitudinal del incisivo superior y el plano S-N"
              text2="Indica la inclinación anteroposterior del incisivo superior con respecto a la base de cráneo."
              norma="Norma: 103° +/- 5.75°"
              rango="Rango: 97,25° +- 108,75°"
              tabla1="Proinclinación del incisivo superior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo superior"
            />
            <TarjetInfoImages
              title="Ángulo 1 - NB"
              imageSrc="/images/angulo 1 - NB.png"
              text1="Formado por el eje longitudinal del incisivo inferior y el plano N-B"
              text2="Indica la inclinación anteroposterior del incisivo inferior."
              norma="Norma: 25°"
              tabla1="Proinclinación del incisivo inferior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo inferior"
              citacion="Steiner, C.C. (1953) Cephalometrics for You and Me. American Journal of Orthodontics, 39, 729755.http://dx.doi.org/10.1016/0002-9416(53)90082-7 "
            />
            <TarjetInfoImages
              title="Distancia 1 - NB"
              imageSrc="/images/distancia 1 - NB.png"
              text1="Es la distancia entre el borde incisal del incisivo inferior y el plano NB"
              text2="Indica la ubicación anteroposterior del incisivo inferior."
              norma="Norma: 4mm"
              tabla1="Protrusión del incisivo inferior"
              tabla2="Normotrusión"
              tabla3="Retrusión del incisivo inferior"
            />
            <TarjetInfoImages
              title="Ángulo 1 y Go-Gn (IMPA)"
              imageSrc="/images/angulo 1 y Go-Gn (impa).png"
              text1="Formado por el eje longitudinal del incisivo inferior y el plano mandibular"
              text2="Indica la relación angular entre los ejes longitudinales de los incisivos superior e inferior."
              norma="Norma: 93,08° +/- 6.78°"
              rango="Rango: 83,22° - 96,78°"
              tabla1="Proinclinación del incisivo inferior"
              tabla2="Normoinclinación"
              tabla3="Retroinclinación del incisivo inferior"
            />
            <TarjetInfoImages
              title="Ángulo interincisivo"
              imageSrc="/images/angulo interincisivo.png"
              text1="Formado por los ejes longitudinales de los incisivos superior e inferior"
              text2="Indica la relación angular entre los ejes longitudinales del incisivo superior e inferior."
              norma="Norma: 130° +/- 9.24°"
              rango="Rango: 120,76° - 139,24°"
              tabla1="Retroinclinación de los incisivos"
              tabla2="Normoinclinación"
              tabla3="Proinclinación de los incisivos"
            />
          </div>
        </div>

        <!--! Análisis de Wits-->
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl font-bold text-background-primary font-serif">Análisis de Wits</h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjetInfoImages
              title="Wits = Distancia entre AO y BO"
              imageSrc="/images/wits = distancia entre ao y bo.png"
              text1="Al plano oclusal bisectado se proyectan líneas perpendiculares desde A y B, formando puntos AO y BO, se mide la distancia horizontal entre ellos. Determina la relación anteroposterior entre maxilar superior e inferior"
              text2="AO anterior a BO = valor positivo (+)."
              text3="BO anterior a AO = valore negativo (-)."
              h="H: -1mm +/- 1.9"
              m="M: 0mm +/- 1.77"
              titulotabla1="Valores positivos fuera de la norma"
              tabla1="Proinclinación del incisivo superior"
              titulotabla2="Valores en Norma"
              tabla2="Normoinclinación"
              titulotabla3="VALORES NEGATIVOS FUERA DE LA NORMA"
              tabla3="Retroinclinación del incisivo superior"
              citacion="Jacobson A. The “Wits” appraisal of jaw disharmony. American Journal of Orthodontics [Internet]. 1975 Feb 1;67(2):125–38. Available from: https://www.ncbi.nlm.nih.gov/pubmed/1054214"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
