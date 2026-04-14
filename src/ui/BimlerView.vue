<script setup lang="ts">
import TarjetPoints from '@/components/TarjetPoints.vue'
import TarjetInfoImagesBimler from '@/components/TarjetInfoImagesBimler.vue'
</script>

<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1 class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles">
            06
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Bimler</h1>
            <h3 class="text-sm font-serif text-border-primary/80">
              Por: 1. Tatiana Rosero - 2. Daniela Narvaez
            </h3>
          </div>
        </div>
        <div class="w-full bg-gray-300 rounded">
          <div class="bg-text-titles h-0.5 rounded" style="width: 7%"></div>
        </div>
      </div>
      <!--! PUNTOS CEFALOMETRICOS Tejidos Duros -->
      <div class="flex flex-col gap-4" id="PuntosCefalometricosBimler" data-seccion>
        <div class="flex flex-col justify-end">
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Puntos Cefalométrico
          </h2>
        </div>

        <div class="flex flex-col lg:flex-row gap-4">
          <div class="flex flex-col w-full gap-3 justify-center items-center">
            <img
              src="/images/Puntos cefalometricos Bimler.png"
              alt="Puntos cefalometrico Bimler"
              class="rounded-lg shadow-lg"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TarjetPoints
              title="<span class='text-red-600'>S- Silla</span>"
              body="Punto central arbitrario de la silla turca."
            />
            <TarjetPoints
              title="<span class='text-orange-600'>N- Nasion</span>"
              body="Punto más anterior de la sutura frontonasal."
            />
            <TarjetPoints
              title="<span class='text-purple-900'>Or-Orbirario</span>"
              body="Punto más bajo del contorno de la órbita."
            />
            <TarjetPoints
              title="<span class='text-purple-900'>Po- Porion</span>"
              body="Punto más alto del meato acústico externo."
            />
            <TarjetPoints
              title="<span class='text-pink-400'>C- Capitulare</span>"
              body="Punto central de la cabeza del cóndilo."
            />
            <TarjetPoints
              title="<span class='text-cyan-600'>Ptm</span>"
              body="Punto de unión de la pared posterior de la tuberosidad del maxilar y el borde anterior de la ap. pterigoides del esfenoides."
            />
            <TarjetPoints
              title="<span class='text-green-600'>Cd-Condilion</span>"
              body="Punto posterosuperior de la cabeza del cóndilo de la mandíbula."
            />
            <TarjetPoints
              title="<span class='text-orange-400'>ENA</span>"
              body="Espina nasal anterior punto extremo anterior de la espina nasal superior."
            />
            <TarjetPoints
              title="<span class='text-green-600'>ENP</span>"
              body="Espina nasal posterior.punto extremo anterior de la espina nasal posterior."
            />
            <TarjetPoints
              title="<span class='text-orange-400'>Punto A</span>"
              body="Punto  más  posterior  de  la curvatura  anterior  del  proceso  alveolar  del maxilar, cerca a la altura del ápice incisivo."
            />
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-4">
          <div class="flex flex-col w-full gap-3 justify-center items-center">
            <img
              src="/images/Puntos cefalometricos Bimler 2.png"
              alt="Puntos cefalometricos Bimler 2"
              class="rounded-lg shadow-lg"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TarjetPoints
              title="<span class='text-blue-500'>Cls- Clivus superior</span>"
              body="Punto en el tercio superior	del	clivus,	arbitrariamente seleccionado a 1 cm del extremo superior."
            />
            <TarjetPoints
              title="<span class='text-pink-600/60'>Cli- Clivus inferior</span>"
              body="Punto en el tercio inferior del clivus."
            />
            <TarjetPoints
              title="<span class='text-red-500'>B- Punto B</span>"
              body="Punto  más  posterior  de  la curvatura anterior del proceso alveolar de la mandíbula."
            />
            <TarjetPoints
              title="<span class='text-green-700'>B’</span>"
              body="Proyección  del  punto  B  sobre  la horizontal de Frankfurt."
            />
            <TarjetPoints
              title="<span class='text-cyan-400'>A’</span>"
              body="Proyección  del  punto  A  sobre  la horizontal de Frankfurt."
            />
            <TarjetPoints
              title="<span class='text-green-300/55'>Gn- Gnation</span>"
              body="Punto mediano entre los puntos más anterior y más inferior del contorno de la sínfisis."
            />
            <TarjetPoints
              title="<span class='text-yellow-400'>M- Mentoniano</span>"
              body="Punto más inferior del contorno de la sínfisis del mentón."
            />
            <TarjetPoints
              title="<span class='text-purple-700'>Me- Mentale</span>"
              body="Punto más posterior del contorno de la sínfisis."
            />
            <TarjetPoints
              title="<span class='text-green-400'>Go: Gonion</span>"
              body="Vértice  del  ángulo  formado  por tangentes  a  los  márgenes  posterior  de  la  rama  e inferior del cuerpo de la mandíbula."
            />
            <TarjetPoints
              title="<span class='text-red-600'>TM- Temporomandibular</span>"
              body="Proyección del punto C sobre HF"
            />
            <TarjetPoints
              title="<span class='text-red-600'>T- Tuber</span>"
              body="Inserción en Frankfurt de la vertical"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <p class="text-center text-[10px] md:text-xs text-gray-600">
            Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of
            Clinical Orthodontics, 19(2), 102–117.
          </p>
        </div>

        <div class="flex flex-col justify-center items-center gap-4 mb-2">
          <TarjetInfoImagesBimler
            title="Factor 1 N-A Ángulo superior del perfil"
            imageSrc="/images/Factor 1 N-A angulo superior del perfil.png"
            text1="Se traza el factor uniendo los puntos N y A, se coloca la base de la escuadra sobre el factor y se mide con respecto a PF."
            text2="Si A por delante de N es (+)"
            text3="Si A por detrás de N  es ( - )"
            text4="Mide la posición del maxilar superior"
            text5="Diagnostico:"
            text6="<span class='font-semibold'>Norma: -1/1 </span> <br/> <span>Si A está delante de N = + </span> <br/> <span>Si A está detrás de N =  -</span>"
            titulo1="Retrognata"
            norma1="Menos de -1°"
            titulo2="Ortognata"
            SD1="-1° / 1°"
            titulo3="Prognata"
            rango1="Más de 1°-2.5 / 0.5"
            citacion="Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of Clinical Orthodontics, 19(2), 102–117."
          />
          <TarjetInfoImagesBimler
            title="Factor 2 A-B Ángulo inferior del perfil"
            imageSrc="/images/Factor 2 A-B angulo inferior del perfil.png"
            text1="Se traza el factor  desde el punto A al punto B, se coloca la base de la escuadra sobre el factor y se mide con respecto a PF."
            text2="Si B por detrás de A es (+)"
            text3="Si B por delante de A es (-)  "
            text4="Mide la posición de la Mandíbula"
            text5="Diagnostico:"
            text6="<span class='font-semibold'>Norma 0° / 15° </span> <br/> <span>Si B está por detrás de A= Ángulo + </span> <br/> <span>Si B está por delante de A= Ángulo -</span>"
            titulo1="Progeno"
            norma1="Menor 0°"
            titulo2="Ortogeno"
            SD1="0° / 15°"
            titulo3="Retrogeno"
            rango1="Mayor de 15°"
            citacion="Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of Clinical Orthodontics, 19(2), 102–117."
          />
          <TarjetInfoImagesBimler
            title="Factor 3 M-Go Inclinación mandibular"
            imageSrc="/images/Factor 3 M-Go inclinacion mandibular.png"
            text1="Se traza el factor entre los puntos M y Go."
            text2="Se coloca la base de la escuadra sobre el factor, se posiciona el punto 0 en T y se mide con respecto a este."
            text3="Mide la inclinación Mandibular"
            text6="<span class='font-semibold'>Norma 15° / 30° </span>"
            titulo1="Cara corrta"
            norma1="Menor 15°"
            norma2="Crecimiento Horizontal"
            titulo2="Cara mediana"
            SD1="15° / 30°"
            SD2="Crecimiento Neutro"
            titulo3="Cara Larga"
            rango1="Mayor de 30°- 45°"
            rango2="Crecimiento Vertical"
            citacion="Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of Clinical Orthodontics, 19(2), 102–117."
          />
          <TarjetInfoImagesBimler
            title="Factor 4 ENA-ENP Inclinación del plano palatino"
            imageSrc="/images/Factor 4 ENA-ENP inclinacion del plano palatino.png"
            text1="Se traza el factor desde ENA a ENP"
            text2="Se coloca la base de la escuadra sobre él y se mide con respecto a T."
            text3="Si ENA encima de ENP es (–)"
            text4="Si ENA debajo de ENP es (+)"
            text5="Mide la inclinación del plano palatino"
            text6="<span class='font-semibold'>Norma -2+2° </span> <br/> <span>Si ENA encima de ENP = - </span> <br/> <span>Si ENA debajo de ENP = + </span>"
            titulo1="Retroinclinación"
            norma1="Menor -2°"
            titulo2="Orto inclinación"
            SD1="-2+2°"
            titulo3="Proinclinación"
            rango1="Mayor de 2°"
            citacion="Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of Clinical Orthodontics, 19(2), 102–117."
          />
          <TarjetInfoImagesBimler
            title="Factor 5 Cls-Cli plano del clivus"
            imageSrc="/images/Factor 5 Cls-Cli plano del clivus.png"
            text1="Se unen los puntos Cls - Cli"
            text2="La base de la escuadra se coloca sobre el factor y se mide con respecto a PF."
            text3="Analiza el tipo facial en perfil y la dirección del crecimiento."
            text6="<span class='font-semibold'>Norma: 60° - 70° </span>"
            titulo1="Cara corta y profunda"
            norma1="50° - 60°"
            titulo2="Cara neutra"
            SD1="60° - 70°"
            titulo3="Cara larga y angosta"
            rango1="70° - 80°"
            citacion="Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of Clinical Orthodontics, 19(2), 102–117."
          />
          <TarjetInfoImagesBimler
            title="Factor 7 S-N inclinacion de la base del craneo"
            imageSrc="/images/Factor 7 S-N inclinacion de la base del craneo.png"
            text1="Se traza  el plano S-N."
            text2="Se coloca la base de la escuadra en el factor y se mide el ángulo formado con la vertical de Tuber."
            text3="Analiza la inclinación de la base craneana."
            text6="<span class='font-semibold'>Norma 5.5° a 9.5°</span>"
            titulo1="Cara corta inclinación baja"
            norma1="5.5°"
            titulo2="Cara mediana inclinación neutra"
            SD1="5.5° 9.5°"
            titulo3="Cara larga inclinación alta"
            rango1="9.5°"
            citacion="Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of Clinical Orthodontics, 19(2), 102–117."
          />
          <TarjetInfoImagesBimler
            title="Factor 8 C-Go flexion de la rama mandibular"
            imageSrc="/images/Factor 8 C-Go flexion de la rama mandibular.png"
            text1="Se coloca base de la escuadra sobre el factor. Go a C . "
            text2="Su ángulo se mide con relación a PF."
            text3="Si C detrás de Go (+)"
            text4="Si C delante de Go (-)"
            text5="Se analiza la flexión de la rama mandibular"
            text6="<span class='font-semibold'>Norma 0° </span> <br/> <span>Si C está detrás de Go = + </span> <br/> <span>Si C está delante de Go = - </span>"
            titulo1="Hipoflexión"
            norma1="Menor a 0°"
            titulo2="Ortoflexión"
            SD1="0° 8°"
            titulo3="Hiperflexión"
            rango1="Mayor a 8°"
            citacion="Bimler, H. P. (1985). Bimler therapy: Part 1. Bimler cephalometric analysis. Journal of Clinical Orthodontics, 19(2), 102–117."
          />
        </div>
      </div>

      <!--! Medidas angulares -->
      <div class="flex flex-col gap-4" id="MedidasAngularesBimler" data-seccion>
        <div class="flex flex-col justify-end">
          <h2 class="text-2xl font-bold text-background-primary font-serif">Medidas Angulares</h2>
        </div>

        <div class="flex flex-col justify-center items-center gap-4 mb-2"></div>
      </div>
    </div>
  </div>
</template>
