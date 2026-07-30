<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <!-- TITULO SECCIÓN -->
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1
            class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles"
            id="witsSteiner"
            data-seccion
          >
            02
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Wits</h1>
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
        <!--! Análisis de Wits-->
        <div class="flex flex-col gap-4" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">Análisis de Wits</h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <div class="w-full flex justify-center">
              <TarjejtInforImages2
                title="Wits = Distancia entre AO y BO"
                imageSrc="/images/wits = distancia entre ao y bo.png"
                text1="  Al plano oclusal bisectado se proyectan líneas perpendiculares desde A y B,formando puntos AO y BO, se mide la distancia horizontal entre ellos. Determina la relación anteroposterior entre maxilar superior e inferior"
                text2="AO anterior a BO = valor positivo (+)."
                text3="BO anterior a AO = valore negativo (-)."
                tituloFila1="Hombres"
                norma1="-1mm"
                SD1="+/- 1.9"
                rango1="-2.9 a 0.9"
                tituloFila2="Mujeres"
                norma2="0"
                SD2="+/-1.77"
                rango2=" -1.77mm a 1.77mm"
                Valores1="Valores positivos fuera de la norma:"
                tabla1="Clase II esquelética"
                Valores2="Valores en norma:"
                tabla2="Clase I esquelética"
                Valores3="Valores negativos fuera de la norma:"
                tabla3="Clase III esquelética"
                citacion="  Jacobson A. The “Wits” appraisal of jaw disharmony. American Journal of Orthodontics [Internet]. 1975 Feb 1;67(2):125–38. Available from: https://www.ncbi.nlm.nih.gov/pubmed/1054214"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TarjejtInforImages2 from '@/components/TarjejtInforImages2.vue'
</script>
