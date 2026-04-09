<script setup lang="ts">
import TarjetPoints from '@/components/TarjetPoints.vue'
import TarjejtInforImages2 from '@/components/TarjejtInforImages2.vue'
</script>

<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1 class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles">
            02
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Mcnamara</h1>
            <h3 class="text-sm font-serif text-border-primary/80">
              Por: 1. Natalia Castellanos - 2. Juan Bautista - 3. Dayana
            </h3>
          </div>
        </div>
        <div class="w-full bg-gray-300 rounded">
          <div class="bg-text-titles h-0.5 rounded" style="width: 7%"></div>
        </div>
      </div>
      <!-- CUERPO SECCIÓN -->
      <div class="flex flex-col gap-5">
        <!--! PUNTOS CEFALOMETRICOS -->
        <div class="flex flex-col gap-4" id="PuntosCefalometricosMcnamara" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Puntos Cefalométricos
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <TarjetPoints title="Ba" body="Punto más antero inferior del foramen occipital." />
            <TarjetPoints title="Co" body="Punto más posterosuperior del cóndilo mandibular." />
            <TarjetPoints title="ENA" body="Punto más anterior del proceso espinoso." />
            <TarjetPoints
              title="Ptm"
              body="Punto más posterosuperior del contorno de la fisura pterigomaxilar."
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
            <TarjetPoints title="Me" body="Punto más inferior de la sínfisis mandibular." />
            <TarjetPoints title="N" body="Punto más anterior de la sutura frontonasal." />
            <TarjetPoints title="Punto D" body="Punto más central de la sínfisis mentoniana." />
            <TarjetPoints title="Or" body="Punto más inferior en el margen infraorbital." />
            <TarjetPoints
              title="Pg"
              body="Punto más prominente ubicado en parte anterior de la sínfisis mentoniana."
            />
            <TarjetPoints
              title="Po"
              body="Punto más alto ubicado sobre el meato auditivo externo."
            />
            <TarjetPoints
              title="A"
              body="Punto más profundo del contorno anterior del maxilar superior."
            />
          </div>
          <!-- Tabla 4 -->
          <div class="flex flex-col w-full gap-3 justify-center items-center">
            <h1 class="text-xl text-center font-bold text-background-primary font-serif px-4">
              Valores derivados del centro de Investigación Ordodónica de Burlington. Estandarizados
              con 8% de magnificación. (mm)
            </h1>
            <img
              src="../../public/images/Tabla4.png"
              alt="Tabla 4. Valores derivados del centro de Investigación Ordodónica de Burlington. Estandarizados con 8% de magnificación. (mm)"
              class="rounded-lg shadow-lg"
            />
          </div>
          <!-- Tabla 3 -->
          <div class="flex flex-col w-full gap-3 justify-center items-center">
            <h1 class="text-xl text-center font-bold text-background-primary font-serif px-4">
              Valores esqueleticos derivados de los estándares de Bolton (N=16) para cada grupo de
              sexo y edad. Estandarizados con 8% de magnificación. (mm)
            </h1>
            <img
              src="../../public/images/Tabla3.png"
              alt="Tabla 3. Valores esqueleticos derivados de los estándares de Bolton (N=16) para cada grupo de sexo y edad. Estandarizados con 8% de magnificación. (mm)"
              class="rounded-lg shadow-lg"
            />
          </div>
          <!-- Tabla 1 -->
          <div class="flex flex-col w-full gap-3 justify-center items-center">
            <h1 class="text-xl text-center font-bold text-background-primary font-serif px-4">
              Valores cefalométricos de 111 adultos no tratados con caras bien balanceadas y buena
              oclusión (Muestra de la Universidad de Ann Arbor, 1984)
            </h1>
            <img
              src="../../public/images/Tabla1.png"
              alt="Tabla 1. Valores cefalométricos de 111 adultos no tratados con caras bien balanceadas y buena oclusión (Muestra de la Universidad de Ann Arbor, 1984)"
              class="rounded-lg shadow-lg"
            />
          </div>
          <!-- Tabla 5 -->
          <div class="flex flex-col w-full gap-3 justify-center items-center">
            <h1 class="text-xl text-center font-bold text-background-primary font-serif px-4">
              Normas Compuestas
            </h1>
            <img
              src="../../public/images/Tabla5.png"
              alt="Tabla 5. Normas Compuestas"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!--! Medidas Horizontales -->
        <div class="flex flex-col gap-4" id="MedidasHorizontalesMcnamara" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Medidas Horizontales
          </h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="N- perpendicular a A"
              imageSrc="/images/N- perpendicular a A.png"
              text1="Es la distancia que existe entre el punto A y una línea perpendicular a Frankfort( Po- Or) que baje desde nasion."
              text2="Indica la posición anteroposterior del maxilar con respecto a la base del cráneo."
              norma1="1.1 mm"
              SD1="2.7 mm"
              rango1="-1.6 mm - 3.8 mm"
              norma2="0.4 mm"
              SD2=" 2.3 mm"
              rango2="-1.19 mm a 2.7 mm"
              tabla1="Protrusión esquelética del maxilar"
              tabla2="Normotrusión esquelética del maxilar"
              tabla3="Retrusión esquelética del maxilar"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="N- perpendicular a Pg"
              imageSrc="/images/N- perpendicular a Pg.png"
              text1="Es la distancia que existe entre el punto Pg y una línea perpendicular a Frankfort (Po-Or) que baje desde nasion."
              text2="Indica la posición anteroposterior de la mandíbula con respecto a la base del cráneo."
              norma1="-0.3 mm"
              SD1="3.8mm"
              rango1=" -4.1mm a 3.5mm"
              norma2="1.8 mm"
              SD2=" 4.5mm"
              rango2=" -2.7mm a 6.3mm"
              tabla1="Protrusión mandibular"
              tabla2="Normotrusión mandibular"
              tabla3="Retrusión mandibular"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="Longitud efectiva maxilar"
              imageSrc="/images/Longitud efectiva maxilar.png"
              text1="Es la distancia que existe entre los puntos Co y A."
              text2="Indica la longitud del maxilar."
              :tabla="false"
              norma="Norma: Se debe aplicar las normas según la tabla de Burlington, Ann Arbor o Bolton."
              Valores1="Valores mayores a la norma"
              tabla1="Longitud efectiva maxilar aumentada"
              Valores2="Valores en la norma"
              tabla2="Longitud efectiva maxilar normal"
              Valores3="Valores menores a la norma"
              tabla3="Longitud efectiva maxilar disminuida"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="Longitud efectiva mandibular"
              imageSrc="/images/Longitud efectiva mandibular.png"
              text1="Es la distancia que existe entre los puntos Co y Gn."
              text2="Indica la longitud de la mandíbula."
              :tabla="false"
              norma="Norma: Se debe aplicar las normas según la tabla de Burlington, Ann Arbor o Bolton."
              Valores1="Valores mayores a la norma"
              tabla1="Longitud efectiva mandibular aumentada"
              Valores2="Valores en la norma"
              tabla2="Longitud efectiva mandibular normal"
              Valores3="Valores menores a la norma"
              tabla3="Longitud efectiva mandibular disminuida"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="Distancia maxilar-mandibular"
              imageSrc="/images/Diferencia maxilar-mandibular.png"
              text1="Es la diferencia entre la longitud mandibular efectiva (Co-Gn) y la longitud maxilar (Co-A)."
              text2="Relaciona anteroposterior a la maxila con respecto a la mandibular."
              :tabla="false"
              norma="Norma: Se debe aplicar las normas según la tabla de Burlington, Ann Arbor o Bolton."
              Valores1="Valores mayores a la norma"
              tabla1="Clase III dentoesquelética"
              Valores2="Clase I dentoesquelética"
              tabla2="Longitud efectiva mandibular normal"
              Valores3="Valores menores a la norma"
              tabla3="Clase II dentoesquelética"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
          </div>
        </div>

        <!--! Medidas Verticales Mcnamara -->
        <div class="flex flex-col gap-4" id="medidasVerticalesMcnamara" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">Medidas Verticales</h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="Altura facial antero inferior"
              imageSrc="/images/Altura facial antero inferior.png"
              text1="Es la distancia que existe entre la Espina Nasal Anterior (ENA) y el mentón(Me)."
              text2="Describe el crecimiento vertical de la parte anterior del tercio inferior de la cara."
              :tabla="false"
              norma="Norma: Se debe aplicar las normas según la tabla de Burlington, Ann Arbor o Bolton."
              Valores1="Valores mayores a la norma"
              tabla1="Aumento dimensión vertical"
              Valores2="Dimension vertical Normal"
              tabla2="Longitud efectiva mandibular normal"
              Valores3="Valores menores a la norma"
              tabla3="Disminución Dimensión Vertical"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="Ángulo del plano mandibular"
              imageSrc="/images/Angulo del plano mandibular.png"
              text1="Es la ángulo formado por el plano de Frankfort(Po-Or) y el plano mandibular (Go-Me)."
              text2="Indica la inclinación del borde inferior de la mandíbula con respecto a la base del cráneo."
              norma1="21,3°"
              SD1="3.9"
              rango1="17.4° a 25.2°"
              norma2="22.7°"
              SD2=" 4.3°"
              rango2="18.7 a 27°"
              Valores1="Valores mayores a la norma"
              tabla1="Patrón hiperdivergente"
              Valores2="Dimension vertical Normal"
              tabla2="Patrón normodivergente"
              Valores3="Valores menores a la norma"
              tabla3="Patrón hipodivergente"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="Ángulo del eje facial"
              imageSrc="/images/Angulo del eje facial.png"
              text1="Es el ángulo formado entre el eje facial y el plano Basion -Nasion."
              text2="Indica la ubicación vertical del mentón en relación a la base del cráneo."
              text3="Al valor que da se le resta 90°."
              :tabla="false"
              norma="Norma:"
              m="M: 0.2° +/-3.2"
              h="H: 0,5° +/-3.5"
              Valores1="Valores mayores a la norma"
              tabla1="Patrón facial hiperdivergente"
              Valores3="Valores menores a la norma"
              tabla3="Patrón facial hipodivergente"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
          </div>
        </div>

        <!--! Medidas Dentales-->
        <div class="flex flex-col gap-4" id="medidasDentalesMcnamara" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">Medidas Dentales</h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="Incisivo superior - vertical punto A"
              imageSrc="/images/Incisivo superior-vertical punto A.png"
              text1="Distancia que existe entre el punto A y la parte más anterior del incisivo superior."
              text2="Indica la ubicación anteroposterior del incisivo superior."
              :tabla="false"
              norma="Norma:"
              m="M: 5.4 mm+/- 1.7"
              h="H:5.3 mm +/- 2.0"
              Valores1="Valores mayores a la norma"
              tabla1="Protrusión del incisivo superior"
              Valores3="Valores menores a la norma"
              tabla3="Retrusión del incisivo superior"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="Incisivo inferior línea A - Pg"
              imageSrc="/images/Incisivo inferior linea A-Pg.png"
              text1="Distancia que existe entre el borde más anterior del incisivo inferior y el plano A - Pogonion."
              text2="Indica la ubicación anteroposterior del incisivo superior."
              :tabla="false"
              norma="Norma:"
              m="M: 2,7 mm+/- 1.7"
              h="H:2.3 mm +/- 2.1"
              Valores1="Valores mayores a la norma"
              tabla1="Protrusión del incisivo inferior"
              Valores3="Valores menores a la norma"
              tabla3="Retrusión del incisivo inferior"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
          </div>
        </div>

        <!--! Medidas Faringeas -->
        <div class="flex flex-col gap-4" id="medidasFaringeasMcnamara" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">Medidas Faringeas</h2>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="Espacio faríngeo superior"
              imageSrc="/images/Espacio faringeo superior.png"
              text1="Es la distancia que existe entre el contorno posterior del paladar blando y el punto más cercano sobre la pared faríngea posterior."
              :tabla="false"
              norma="Norma : 17.4mm:"
              Valores1="Valores mayores a la norma"
              tabla1="tubo aéreo amplio"
              Valores3="Valores menores a la norma"
              tabla3="tubo aéreo estrecho"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
            <TarjejtInforImages2
              title="Espacio faríngeo inferior"
              imageSrc="/images/Espacio faringeo inferior.png"
              text1="Es la distancia que existe entre el contorno posterior de la lengua  y el borde inferior de la mandíbula y el punto más cercano de la pared posterior de la faringe.."
              text2="Indica el diámetro del tubo aéreo inferior."
              :tabla="false"
              norma="Norma : 11 a 12mm"
              Valores1="Valores mayores a la norma"
              tabla1="tubo aéreo amplio"
              Valores3="Valores menores a la norma"
              tabla3="tubo aéreo estrecho"
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
