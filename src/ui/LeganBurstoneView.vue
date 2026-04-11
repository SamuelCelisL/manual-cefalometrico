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
            03
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Legan y Burstone</h1>
            <h3 class="text-sm font-serif text-border-primary/80">
              En cada sección conoceremos a los encargados
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
        <div class="flex flex-col gap-4" id="PuntosCefalometricosLeganBurstone" data-seccion>
          <div class="flex flex-col justify-end">
            <h2 class="text-2xl font-bold text-background-primary font-serif">
              Tejidos Blandos: Puntos Cefalométricos
            </h2>
            <h3 class="text-sm font-serif text-border-primary/80">
              Por: 1. Natalia Báron - 2. Karla Palacio
            </h3>
          </div>
          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col w-full gap-3 justify-center items-center">
              <img
                src="/images/Puntos cefalometrico LeganBurstone 1.png"
                alt="Puntos cefalometrico LeganBurstone 1"
                class="rounded-lg shadow-lg"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <TarjetPoints
                title="Glabela (G)"
                body="Punto más prominente en el plano sagital de la frente."
              />
              <TarjetPoints
                title="Columnela (cm)"
                body="Punto más anterior en la columnela de la nariz."
              />
              <TarjetPoints
                title="Subnasal (Sn)"
                body="Punto en el cual el tabique nasal se une con el labio superior."
              />
              <TarjetPoints
                title="Labrarle superior (Ls)"
                body="Punto que indica el borde mucocutáneo del labio superior."
              />
              <TarjetPoints
                title="Stomion inferior (Stmi)"
                body="Punto superior en el bermellón del labio inferior."
              />
              <TarjetPoints
                title="Stomion superior (Stms)"
                body="Punto inferior en el bermellón del labio superior."
              />
              <TarjetPoints
                title="Labrale inferior (Li)"
                body="Punto que indica el borde mucocutáneo del labio inferior."
              />
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col w-full gap-3 justify-center items-center">
              <img
                src="/images/Puntos cefalometrico LeganBurstone 2.png"
                alt="Puntos cefalometrico LeganBurstone 2"
                class="rounded-lg shadow-lg"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <TarjetPoints
                title="Surco mentolabial (Si)"
                body="Punto de mayor concavidad entre el labio inferior y el mentón."
              />
              <TarjetPoints
                title="Pogonion del tejido blando (Pg')"
                body="Punto más anterior en la barbilla del tejido blando."
              />
              <TarjetPoints
                title="Gnation de tejido blando (Gn ')"
                body="Punto medio construido entre pogonion de tejidos blandos y mentón de tejidos blandos; se ubica exactamente en la intersección del plano Subnasal- Pogonion con el plano Punto cervical - Mentón."
              />
              <TarjetPoints
                title="Tejido blando mentón (Me´)"
                body="Punto más bajo en el contorno de la barbilla del tejido blando."
              />
              <TarjetPoints
                title="Punto cervical (C)"
                body="Punto más interno entre el área submental y el cuello situado en la intersección de líneas trazadas tangentes al cuello y áreas submentales."
              />
            </div>
          </div>

          <div class="flex justify-center">
            <p class="text-center text-[10px] md:text-xs text-gray-600">
              Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980).
              Cephalometric analysis of dentofacial normals. American Journal of Orthodontics,
              78(4), 404–420.
            </p>
          </div>

          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="Plano de referencia horizontal (PH)"
              imageSrc="/images/Plano de referencia horizontal (PH).png"
              text1="Construido trazando una línea a través del Nasión 7° hacia arriba desde la silla turca.."
              Valores1="Nasion (N)"
              tabla1="Punto más anterior de la sutura frontonasal, ubicada sobre el plano sagital medio."
              Valores4="Silla turca (S)"
              tabla4="Punto ubicado en el centro de la silla turca del esfenoides."
              citacion="McNamara JA Jr, Brudon WL. Tratamiento ortodóncico y ortopédico en la dentición mixta. Ann Arbor, Michigan: Needham Press; 1995."
            />

            <TarjejtInforImages2
              title="Ángulo de la convexidad facial o angulo del contorno facial"
              imageSrc="/images/Angulo de la convexidad facial o angulo del contorno facial.png"
              text1="Se considera un àngulo positivo cuando el plano (Sn–Pg`)."
              text2="se encuentra detrás del plano (G´- Sn) y negativo cuando está adelante.."
              norma1="10.8°"
              SD1="4,2°"
              rango1=" 6.6° a 15°"
              norma2="11°"
              SD2="4,8°"
              rango2=" 6.2° a 15.8°"
              Valores1="Ángulo aumentado"
              tabla1="perfil facial convexo"
              Valores2="Ángulo disminuido"
              tabla2="perfil facial cóncavo"
              anexo="El artículo no especifica cuando hay un perfil recto, sin embargo se debe observar clínicamente al paciente lo cual se determina si tiene un perfil recto o se podría mencionar paciente dentro de los parámetros de la norma con tendencia a cóncavo o convexo"
              anexo2=" * Medidas modificadas por el artículo de 1980"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420"
            />

            <TarjejtInforImages2
              title="Posición Maxilar (Sn- G’/PH)"
              imageSrc="/images/Posicion maxilar (Sn-G--Ph).png"
              text1="Distancia en mm de Sn a un punto equidistante, ubicado sobre el plano G´ vertical (G’v) que sea paralelo al plano horizontal de referencia(PH)."
              text2="- Se considera una medida positiva cuando (Sn) se encuentra delante del plano (G´v)."
              texto3="- Si se encuentra por detrás, será una Sn medida negativa."
              tituloFila1="Hombre y Mujeres"
              norma1="6mm"
              SD1="3mm"
              rango1=" 3mm a 9mm"
              Valores1="Medidad está aumentada"
              tabla1="protrusión maxilar."
              Valores2="Medida está disminuida"
              tabla2="retrusión maxilar"
              Valores3="Medida norma"
              tabla3="Normotrusion maxilar"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420"
            />

            <TarjejtInforImages2
              title="Posición Mandibular (Pg’- G’/PH)"
              imageSrc="/images/Posicion mandibular (Pg-G--PH).png"
              text1="Distancia en mm de (Pg’) a un punto equidistante, ubicado sobre el plano G´ vertical (G’v) que sea paralelo al plano horizontal de referencia (PH)."
              text2="- Se considera una medida positiva cuando (Pg´) se encuentra delante del plano (Gl´v)."
              texto3="- Si se encuentra por detrás, será una medida negativa."
              tituloFila1="Hombre y Mujeres"
              norma1="0mm"
              SD1="4mm"
              rango1="-4 mm a 4mm"
              Valores1="Medidad aumentada"
              tabla1="Protrusión mandibular."
              Valores2="Medida disminuida"
              tabla2="Retrusión mandibular"
              Valores3="Medida norma"
              tabla3="Normotrusion mandibular"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420"
            />
          </div>
          <p class="text-lg mt-4">EN DESARROLLO...</p>
        </div>

        <!--! PUNTOS CEFALOMETRICOS -->
        <div class="flex flex-col gap-4" id="PuntosCefalometricosLeganBurstone" data-seccion>
          <div class="flex flex-col justify-end">
            <h2 class="text-2xl font-bold text-background-primary font-serif">Tejidos Duros</h2>
          </div>

          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col w-full gap-3 justify-center items-center">
              <img
                src="/images/Puntos cefalometricos LeganBurstone 3.png"
                alt="Puntos cefalometrico LeganBurstone 3"
                class="rounded-lg shadow-lg"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TarjetPoints
                title="Articular (Ar)"
                body="Intersección entre la base del cráneo y el borde posterior del cóndilo mandibular."
              />
              <TarjetPoints
                title="Punto B supramental"
                body="La mayor concavidad de la mandíbula entre infradental y pogonion, generalmente por debajo de los ápices de los dientes incisivos inferiores."
              />
              <TarjetPoints
                title="Gnation (Gn)"
                body="Punto intermedio entre pogonion y mentón, se localiza bisectando la línea facial N-Pg y el plano mandibular."
              />
              <TarjetPoints
                title="Gonion (Go)"
                body="Punto localizado por la bisectriz del ángulo formado por la tangente del borde posterior de la rama mandibular y el borde inferior de la mandíbula."
              />
              <TarjetPoints
                title="Menton (Me)"
                body="Punto más inferior de la sínfisis mandibular en el plano medio sagital."
              />
              <TarjetPoints
                title="Pogonion (Pg)"
                body="Punto más anterior del contorno del mentón."
              />
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col w-full gap-3 justify-center items-center">
              <img
                src="/images/Puntos cefalometricos LeganBurstone 4.png"
                alt="Puntos cefalometricos LeganBurstone 4"
                class="rounded-lg shadow-lg"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TarjetPoints title="Silla Turca (S)" body="Punto medio de la silla turca." />
              <TarjetPoints
                title="Nasion (N)"
                body="Punto más anterior formado por la sutura naso frontal."
              />
              <TarjetPoints
                title="Espina nasal anterior (ENA)"
                body="Punto más anterior del piso nasal; la punta de la premaxila en el plano medio sagital."
              />
              <TarjetPoints
                title="Espina nasal posterior (ENP)"
                body="Proceso formado por los extremos mediales unidos que se proyectan del borde posterior de los dos huesos palatinos."
              />
              <TarjetPoints
                title="Punto A o subespinal"
                body="La mayor concavidad del maxilar entre la espina nasal anterior y prostion, generalmente alrededor del ápice de los incisivos centrales superiores."
              />
              <TarjetPoints
                title="Fisura Pterigomaxilar (Ptm)"
                body="Punto más posterior en el contorno anterior de la tuberosidad del maxilar."
              />
            </div>
          </div>

          <div class="flex justify-center">
            <p class="text-center text-[10px] md:text-xs text-gray-600">
              Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978).
              Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277.
            </p>
          </div>
          <div class="flex justify-center">
            <p class="text-center text-[10px] md:text-xs text-gray-600">
              Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J
              Orthod vol 78 N.4 . october 1980 ;404–20.
            </p>
          </div>

          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              name="TarjejtInforImages3"
              title="Planos de referencia"
              imageSrc="/images/Plano de referencia.png"
              text1="Se traza una línea que una punto S y punto N."
              text2="Se traza una línea a 7° arriba del plano S-N con punto de origen N"
              text3="Plano construido desde Punto Me hasta el ángulo de la mandíbula Punto Go."
              text4="Plano construido que une ENP con ENA."
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20.
"
            />
          </div>
          <p class="text-lg mt-4">EN DESARROLLO...</p>
        </div>
      </div>
    </div>
  </div>
</template>
