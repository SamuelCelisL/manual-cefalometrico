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
        <!--! PUNTOS CEFALOMETRICOS Tejidos Blandos -->
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
                src="/images/Puntos cefalometrico LeganBurstone 2.png"
                alt="Puntos cefalometrico LeganBurstone 2"
                class="rounded-lg shadow-lg"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <TarjetPoints
                title="<span class='text-orange-400'>Surco mentolabial (Si)</span>"
                body="Punto de mayor concavidad entre el labio inferior y el mentón."
              />
              <TarjetPoints
                title="<span class='text-purple-800/60'>Pogonion del tejido blando (Pg')</span>"
                body="Punto más anterior en la barbilla del tejido blando."
              />
              <TarjetPoints
                title="<span class='text-pink-400'>Gnation de tejido blando (Gn ')</span>"
                body="Punto medio construido entre pogonion de tejidos blandos y mentón de tejidos blandos; se ubica exactamente en la intersección del plano Subnasal- Pogonion con el plano Punto cervical - Mentón."
              />
              <TarjetPoints
                title="<span class='text-green-400/70'>Tejido blando mentón (Me´)</span>"
                body="Punto más bajo en el contorno de la barbilla del tejido blando."
              />
              <TarjetPoints
                title="<span class='text-orange-400'>Punto cervical (C)</span>"
                body="Punto más interno entre el área submental y el cuello situado en la intersección de líneas trazadas tangentes al cuello y áreas submentales."
              />
            </div>
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
                title="<span class='text-cyan-600'>Glabela (G)</span>"
                body="Punto más prominente en el plano sagital de la frente."
              />
              <TarjetPoints
                title="<span class='text-orange-400'>Columnela (cm)</span>"
                body="Punto más anterior en la columnela de la nariz."
              />
              <TarjetPoints
                title="<span class='text-pink-500'>Subnasal (Sn)</span>"
                body="Punto en el cual el tabique nasal se une con el labio superior."
              />
              <TarjetPoints
                title="<span class='text-green-400/70'>Labrarle superior (Ls)</span>"
                body="Punto que indica el borde mucocutáneo del labio superior."
              />
              <TarjetPoints
                title="<span class='text-purple-800/60'>Stomion inferior (Stmi)</span>"
                body="Punto superior en el bermellón del labio inferior."
              />
              <TarjetPoints
                title="<span class='text-purple-600'>Stomion superior (Stms)</span>"
                body="Punto inferior en el bermellón del labio superior."
              />
              <TarjetPoints
                title="<span class='text-blue-700/70'>Labrale inferior (Li)</span>"
                body="Punto que indica el borde mucocutáneo del labio inferior."
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
              text1="Construido trazando una línea a través del Nasión 7° hacia arriba desde la silla turca."
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
              titulo-fila1="Hombres"
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
              anexo2=" * Normas modificadas por el artículo de 1980"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420"
            />

            <TarjejtInforImages2
              title="Posición Maxilar (Sn- G’/PH)"
              imageSrc="/images/Posicion maxilar (Sn-G--Ph).png"
              text1="Distancia en mm de Sn a un punto equidistante, ubicado sobre el plano G´ vertical (G’v) que sea paralelo al plano horizontal de referencia(PH)."
              text2="- Se considera una medida positiva cuando (Sn) se encuentra delante del plano (G´v)."
              text3="- Si se encuentra por detrás, será una Sn medida negativa."
              tituloFila1="Hombre y Mujeres"
              norma1="6mm"
              SD1="3mm"
              rango1=" 3mm a 9mm"
              Valores1="Medidad está aumentada"
              tabla1="protrusión maxilar."
              Valores2="Medida está disminuida"
              tabla2="retrusión maxilar"
              Valores3="Medida normal"
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
              Valores3="Medida normal"
              tabla3="Normotrusion mandibular"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420"
            />
            <TarjejtInforImages2
              title="Relación de la altura vertical (G’-Sn/Sn-Me’/(PH))"
              imageSrc="/images/Relacion de la altura vertical (G-Sn--Sn-Me--(PH)).png"
              text1="Se trazan tres líneas paralelas al plano horizontal de referencia (PH). Cuyos orígenes serán los puntos (G ‘), (Sn) y Me ‘. Para sacar la relación se divide la distancia (G’-Sn) entre la distancia (Sn-Me’)."
              tituloFila1="Hombre"
              norma1="0.96 mm"
              SD1="0,7 mm"
              rango1=" 0.26 a 1.66 mm"
              norma2="1,02 mm"
              SD2="1.36mm"
              rango2="-5.18  a 7.22 mm"
              Valores1="Norma aumentada"
              tabla1="tercio inferior disminuido en relación al tercio superior."
              Valores2="Norma disminuida"
              tabla2="altura del tercio inferior aumentada en relación al tercio superior"
              Valores3="Norma normal"
              tabla3="relación adecuada o proporcional"
              anexo2="* Medidas modificadas por el artículo de 1980"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Ángulo del cuello y tercio inferior de la cara (Sn-Gn’-C)"
              imageSrc="/images/Angulo del cuello y tercio inferior de la cara (Sn-Gn-C).png"
              text1="Está formado por la intersección de los planos (Sn-Gn´) y (Gn’-C). Indica la proyección del mentón en relación al cuello."
              tituloFila1="Hombres y Mujeres"
              norma1="100°"
              SD1="7°."
              rango1="93°- 107°"
              Valores1="Ángulo está aumentado"
              tabla1="se considera mentón deficiente."
              Valores2="Ángulo está disminuido"
              tabla2=" se considera un mentón prominente."
              Valores3="Ángulo normal"
              tabla3="mentón adecuado"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Relación de la altura y profundidad vertical inferior (Sn-Gn’/C-Gn’)"
              imageSrc="/images/Relacion de la altura profundidad vertical inferior (Sn-Gn--C-gn).png"
              text1="Es la relación existente entre la distancia (Sn- Gn´) con respecto a la distancia (C- Gn´). Para sacar la relación se divide la distancia (Sn-Gn´) entre la distancia (C-Gn’)."
              tituloFila1="Hombre"
              norma1="0.96 mm"
              SD1="0,7 mm"
              rango1="0.26° a 1.66°"
              norma2="1,02 mm"
              SD2="1.36mm"
              rango2=" -5.18 ° a 7.22°"
              Valores1="Norma aumentada"
              tabla1="Cuello corto"
              Valores2="Norma disminuida"
              tabla2="Cuello largo"
              Valores3="Norma normal"
              tabla3="Cuello adecuado "
              anexo2="* Medidas modificadas por el artículo de 1980"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Ángulo Nasolabial (Cm-Sn-Ls)"
              imageSrc="/images/Angulo nasolabial (Cm-Sn-Ls).png"
              text1="POSICIÓN Y FORMA LABIAL"
              text2="Se forma de la intersección de los planos (Cm-Sn) y (Sn-Ls)."
              text3="Se utiliza para evaluar la posición del labio superior"
              tituloFila1="Hombre"
              norma1="111,4°"
              SD1="11,7°"
              rango1=" 99.7° a 123.1°"
              norma2="111,9°"
              SD2="8,4°"
              rango2="103,5° a 120.3°"
              Valores1="Ángulo aumentado"
              tabla1="Abierto"
              Valores2="Ángulo disminuido"
              tabla2="Cerrado"
              Valores3="Ángulo normal"
              tabla3="Adecuado"
              anexo2="* Medidas modificadas por el artículo de 1980"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Surco Mentolabial (Si / Li-Pg´)"
              imageSrc="/images/Surco mentolabial (Si--Li-Pg).png"
              text1="Distancia en mm entre el punto (Si) y el plano (Li – Pg´)."
              text2="Describe el contorno del mentón con el labio inferior."
              tituloFila1="Hombres y Mujeres"
              norma1="4mm"
              SD1="2 mm"
              rango1="2mm a 6mm"
              Valores1="Valor aumentado"
              tabla1="aumentado"
              Valores2="Valor disminuido"
              tabla2="disminuido"
              Valores3="Valor en la norma"
              tabla3="adecuado"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Protrusión labial superior e inferior (Ls/Sn-Pg’ ) y ( Li/Sn-Pg’)."
              imageSrc="/images/Protrusion labial superior e inferior (Ls--Sn-Pg) y (Li--Sn-pg).png"
              text1="Se mide la distancia que existe entre los puntos (LS) y (Li) con el plano (Sn-Pg´)."
              text2="Se evalúa tamaño labial"
              tituloFila1="Ls"
              norma1="3mm"
              SD1="1mm"
              tituloFila2="Li"
              norma2="2mm"
              SD2="1mm"
              Valores1="Valor aumentado"
              tabla1="Proquelia"
              Valores2="Valor disminuido"
              tabla2="Retroquelia"
              Valores3="Valor en la norma"
              tabla3="Normoquelia"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Distancia Interlabial (Stmi – Stms)"
              imageSrc="/images/Distancia interlabial (Stmi-Stms).png"
              text1="Es la distancia en milímetros que existe entre (Stms) y (Stmi) cuando  estos se encuentran en reposo."
              tituloFila1="Hombres y Mujeres"
              norma1="2mm"
              SD1="2 mm"
              rango1="0mm a 4mm"
              Valores1="Valor aumentado"
              tabla1="Incompetencia labial"
              Valores2="Valor en la norma"
              tabla2="Competencia labial"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Relación vertical labio-mentón (Sn-Stms / Stmi-Me’ /(PH)."
              imageSrc="/images/Relacion vertical labio-menton (Sn-Stms--Stmi-Me--(PH)).png"
              text1="Para determinar la relación se trazan cuatro paralelas al plano horizontal (PH), cuyo origen es (Sn), (Stms), (Stmi) y (Me’).Determina la relación del labio superior e inferior en el tercio facial inferior."
              tituloFila1="Hombres y Mujeres"
              norma1="0.5 mm"
              anexo="el autor no da desviación estandar"
              Valores1="Valor aumentado"
              tabla1="tercio superior, del tercio inferior aumentado"
              Valores2="Valor disminuido"
              tabla2="tercio superior del tercio inferior disminuido"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
            <TarjejtInforImages2
              title="Exposición del Incisivo Maxilar (Sts-1 superior)"
              imageSrc="/images/Exposicion del Incisivo Maxilar (Sts-1 superior).png"
              text1="Es la distancia en milímetros que existe entre (Stms) y (Stmi) cuando  estos se encuentran en reposo."
              tituloFila1="Hombres y Mujeres"
              norma1="2mm"
              SD1="2 mm"
              rango1="0mm a 4mm"
              Valores1="Valor aumentado"
              tabla1="Exposición del incisivo superior aumentada."
              Valores2="Valor disminuido"
              tabla2="Exposición del incisivo superior disminuida."
              Valores3="Valor en la norma"
              tabla3="Exposición del incisivo superior adecuada"
              citacion="Legan, H. L., & Burstone, C. J. (1980). Soft tissue cephalometric analysis for orthognathic surgery. Journal of Oral Surgery, 38(10), 744–751 -- Scheideman, G. B., Bell, W. H., Legan, H. L., Finn, R. A., & Reisch, J. S. (1980). Cephalometric analysis of dentofacial normals. American Journal of Orthodontics, 78(4), 404–420."
            />
          </div>
        </div>

        <!--! PUNTOS CEFALOMETRICOS Tejidos Duros -->
        <div class="flex flex-col gap-4" id="PuntosCefalometricosLeganBurstoneDuros" data-seccion>
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
                title="<span class='text-red-600'>Articular (Ar)</span>"
                body="Intersección entre la base del cráneo y el borde posterior del cóndilo mandibular."
              />
              <TarjetPoints
                title="<span class='text-blue-600'>Punto B supramental</span>"
                body="La mayor concavidad de la mandíbula entre infradental y pogonion, generalmente por debajo de los ápices de los dientes incisivos inferiores."
              />
              <TarjetPoints
                title="<span class='text-yellow-900'>Gnation (Gn)</span>"
                body="Punto intermedio entre pogonion y mentón, se localiza bisectando la línea facial N-Pg y el plano mandibular."
              />
              <TarjetPoints
                title="<span class='text-pink-500'>Gonion (Go)</span>"
                body="Punto localizado por la bisectriz del ángulo formado por la tangente del borde posterior de la rama mandibular y el borde inferior de la mandíbula."
              />
              <TarjetPoints
                title="<span class='text-green-400/70'>Menton (Me)</span>"
                body="Punto más inferior de la sínfisis mandibular en el plano medio sagital."
              />
              <TarjetPoints
                title="<span class='text-yellow-300'>Pogonion (Pg)</span>"
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
              <TarjetPoints
                title="<span class='text-red-600'>Silla Turca (S)</span>"
                body="Punto medio de la silla turca."
              />
              <TarjetPoints
                title="<span class='text-blue-600'>Nasion (N)</span>"
                body="Punto más anterior formado por la sutura naso frontal."
              />
              <TarjetPoints
                title="<span class='text-purple-500'>Espina nasal anterior (ENA)</span>"
                body="Punto más anterior del piso nasal; la punta de la premaxila en el plano medio sagital."
              />
              <TarjetPoints
                title="<span class='text-green-500'>Espina nasal posterior (ENP)</span>"
                body="Proceso formado por los extremos mediales unidos que se proyectan del borde posterior de los dos huesos palatinos."
              />
              <TarjetPoints
                title="<span class='text-pink-500'>Punto A o subespinal</span>"
                body="La mayor concavidad del maxilar entre la espina nasal anterior y prostion, generalmente alrededor del ápice de los incisivos centrales superiores."
              />
              <TarjetPoints
                title="<span class='text-yellow-900'>Fisura Pterigomaxilar (Ptm)</span>"
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
            <TarjejtInforImages2
              title="Longitud Base craneal total"
              imageSrc="/images/Longitud base craneal total.png"
              text1="Se trazan una línea perpendicular (90°)  al plano horizontal (PH) cuyo origen sea (Ar) y se mide la distancia de Ar hasta punto N."
              text2="Evalúa la longitud total de la base del cráneo"
              Vacio="Ar-N"
              tituloFila1="Hombres"
              norma1="92,2 mm"
              SD1="3,6 mm"
              rango1="88.6 - 95.8 mm"
              tituloFila2="Mujeres"
              norma2="86,2 mm"
              SD2="5,1 mm"
              rango2="81,1 - 91,3 mm"
              Valores1="Valor aumentado"
              tabla1="Longitud Base craneal aumentada"
              Valores3="Valor disminuido"
              tabla3="Longitud Base craneal disminuida"
              Valores2="Valor en la norma"
              tabla2="Longitud Base craneal Adecuada"
              anexo2="* Normas modificadas por el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Longitud Base craneal Posterior"
              imageSrc="/images/Longitud base craneal posterior.png"
              text1="Se traza una línea con punto de origen en Ptm perpendicular al PH y una línea con punto de origen Ar perpendicular al PH."
              text2="se mide la distancia de ambas líneas sobre el PH"
              text3="Evalúa la longitud de la Base del cráneo posterior"
              Vacio="Ar-Ptm"
              tituloFila1="Hombres"
              norma1="37,7 mm"
              SD1="2,6 mm"
              rango1="35,1 - 40,3 mm"
              tituloFila2="Mujeres"
              norma2="35,4 mm"
              SD2="3,3 mm"
              rango2="32,1 - 38,7 mm"
              Valores1="Valor aumentado"
              tabla1="Longitud Base craneal posterior aumentada"
              Valores2="Valor en la norma"
              tabla2="Longitud Base craneal posterior Adecuada"
              Valores3="Valor disminuido"
              tabla3="Longitud Base craneal posterior  disminuida"
              anexo2="* Normas modificadas por el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Longitud Base craneal Anterior"
              imageSrc="/images/Longitud base craneal anterior.png"
              text1="Se traza una línea con punto de origen en Ptm perpendicular al PH  y se mide la distancia hasta N"
              text2="Evalúa la longitud de la Base del cráneo Anterior"
              Vacio="Ptm-N"
              tituloFila1="Hombres"
              norma1="54,5 mm"
              SD1="3,6 mm"
              rango1="50,9 - 58,1 mm"
              tituloFila2="Mujeres"
              norma2="50,8 mm"
              SD2="3,5 mm"
              rango2="47,3 - 54,3 mm"
              Valores1="Valor aumentado"
              tabla1="Longitud Base craneal anterior aumentada"
              Valores2="Valor en la norma"
              tabla2="Longitud Base craneal anterior Adecuada"
              Valores3="Valor disminuido"
              tabla3="Longitud Base craneal anterior disminuida"
              anexo2="* Normas modificadas por el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Ángulo de la Convexidad Esquelética"
              imageSrc="/images/Angulo de la convexidad esqueletica.png"
              text1="Se traza un plano de Punto N a punto A"
              text2="Se traza un plano de Punto A a punto Pg"
              text3="Se mide el Ángulo inferior"
              text4="Evalúa el perfil esquelético"
              Vacio="N-A-Pg"
              tituloFila1="Hombres"
              norma1="-0,6°"
              SD1="4,3"
              rango1="-4,9 a  3,7°"
              tituloFila2="Mujeres"
              norma2="2,0°"
              SD2="4,7"
              rango2="-2,7 a 6,7 °"
              Valores1="Valor aumentado"
              tabla1="Perfil esquelético convexo "
              Valores2="Valor en la norma"
              tabla2="Perfil Recto  ** Autor no da el Diagnóstico**"
              Valores3="Valor disminuido"
              tabla3="Perfil esquelético Cóncavo"
              anexo="<br/> <span class='text-green-400'>Positivo:</span> Cuando A-Pg está detrás de N-A <br/> <span class='text-green-400'>Negativo:</span> Cuando A-Pg está delante de N-A
"
              anexo2="* Normas modificadas por el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Posición del maxilar"
              imageSrc="/images/Posicion del maxilar.png"
              text1="Se traza una perpendicular (90°) al PH  en Nasion"
              text2="Se mide la distancia de la línea  perpendicular de Nasion hasta el Punto A"
              text3="Evalúa la posición anteroposterior del Maxilar"
              tituloFila1="Hombres"
              norma1="0,3 mm"
              SD1="4,6 mm"
              rango1="-4,3 a 4,9 mm"
              tituloFila2="Mujeres"
              norma2="1,7 mm"
              SD2="3,8 mm"
              rango2="-1,9 a 5,3 mm"
              Valores1="Valor aumentado"
              tabla1="Protrusión del Maxilar"
              Valores2="Valor en la norma"
              tabla2="Normotrusión del Maxilar "
              Valores3="Valor disminuido"
              tabla3="Retrusión del Maxilar"
              anexo="<br/> <span class='text-green-400'>Positivo:</span> cuando A está delante de la perpendicular de N <br/> <span class='text-green-400'>Negativo:</span> cuando A  está detrás de la perpendicular de N"
              anexo2="* Normas modificadas por el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Posición Mandibular"
              imageSrc="/images/Posicion mandibular.png"
              text1="Se traza una perpendicular al PH  en Nasion"
              text2="Se mide la distancia de la línea  perpendicular de Nasion hasta el Punto B"
              text3="Evalúa la posición anteroposterior de la Mandíbula"
              tituloFila1="Hombres"
              norma1="-2,3 mm"
              SD1="6,7 mm"
              rango1="-9 a 4,4 mm"
              tituloFila2="Mujeres"
              norma2="-1,5 mm"
              SD2="5,1 mm"
              rango2="-6,6 a 3,6 mm"
              Valores1="Valor aumentado"
              tabla1="Protrusión Mandibular"
              Valores2="Valor en la norma"
              tabla2="Normotrusión Mandibular"
              Valores3="Valor disminuido"
              tabla3="Retrusión Mandibular"
              anexo="<br/> <span class='text-green-400'>Positivo:</span> cuando B  está delante de Perpendicular de N <br/> <span class='text-green-400'>Negativo:</span> cuando B está detrás de perpendicular  de N"
              anexo2="* Normas modificadas por el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Posición Mentón"
              imageSrc="/images/Posicion menton.png"
              text1="Se traza una perpendicular al PH  en Nasion"
              text2="Se mide la distancia de la línea  perpendicular de Nasion hasta Pg"
              text3="Evalúa la posición anteroposterior del Mentón"
              tituloFila1="Hombres"
              norma1="1,2 mm"
              SD1="7,5 mm"
              rango1="-6,3 a 8,7 mm"
              tituloFila2="Mujeres"
              norma2="-1,5 mm"
              SD2="5,8  mm"
              rango2="-4,3 a 7,3 mm"
              Valores1="Valor aumentado"
              tabla1="Progenie"
              Valores2="Valor en la norma"
              tabla2="Normogenie"
              Valores3="Valor disminuido"
              tabla3="Retrogenia"
              anexo="<br/> <span class='text-green-400'>Positivo:</span> cuando Pg  está delante de Perpendicular de N <br/> <span class='text-green-400'>Negativo:</span> cuando Pg está detrás de perpendicular  de N"
              anexo2="* Normas modificadas por el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
          </div>
        </div>

        <!--! Vertical esquelético Tejidos Duros -->
        <div class="flex flex-col gap-4" id="VerticalesqueleticoLeganBurstoneDuros" data-seccion>
          <div class="flex flex-col justify-end">
            <h2 class="text-2xl font-bold text-background-primary font-serif">
              Vertical Esquelético
            </h2>
          </div>

          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              name="TarjejtInforImages3"
              title="Planos de referencia"
              imageSrc="/images/Planos de referencia.png"
              text1="Se traza una línea que une punto S y punto N"
              text2="Se traza una línea a 7° arriba del plano S-N con punto de origen N"
              text3="Plano construido desde Punto Me hasta el ángulo de la mandíbula Punto Go."
              text4="Plano construido que une ENP con ENA."
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20.
"
            />
            <TarjejtInforImages2
              title="Crecimiento vertical anterosuperior"
              imageSrc="/images/Crecimiento vertical anterosuperior.png"
              text1="Es la distancia que existe entre N y ENA y se mide perpendicular al plano horizontal (PH)."
              text2="Evalúa el crecimiento vertical anterosuperior del complejo nasomaxilar."
              Vacio="ENA-N"
              tituloFila1="Hombres"
              norma1="56.0 mm"
              SD1="3.2 mm"
              rango1="52.8 - 5.2 mm"
              tituloFila2="Mujeres"
              norma2="53.7 mm"
              SD2="2.9 mm"
              rango2="50.8 - 56.6 mm"
              Valores1="Valor aumentado"
              tabla1="Crecimiento vertical excesivo"
              Valores2="Valor en la norma"
              tabla2="Crecimiento vertical adecuado"
              Valores3="Valor disminuido"
              tabla3="Crecimiento vertical deficiente"
              anexo="Norma  modificada  por la actualización del artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Crecimiento vertical anteroinferior"
              imageSrc="/images/Crecimiento vertical anteroinferior.png"
              text1="Es la distancia que existe entre ENA y Gn y se mide perpendicular al plano horizontal."
              text2="Evalúa el crecimiento vertical anterior del tercio inferior de la cara."
              Vacio="ENA-Me"
              tituloFila1="Hombres"
              norma1=" 70.4 mm"
              SD1="4.8 mm"
              rango1=" 65.6- 75.2 mm"
              tituloFila2="Mujeres"
              norma2="66.1 mm"
              SD2="3.4 mm"
              rango2="62.7 - 69.5 mm"
              Valores1="Valor aumentado"
              tabla1="Crecimiento vertical anteroinferior excesivo"
              Valores2="Valor en la norma"
              tabla2="Crecimiento vertical anteroinferior adecuado"
              Valores3="Valor disminuido"
              tabla3="Crecimiento vertical anteroinferior  deficiente"
              anexo="Norma modificada por la actualización en el artículo de 1980 <br/> *La medida es basada en los puntos de referencia plasmados en la actualización del artículo de 1980."
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Crecimiento vertical posterior"
              imageSrc="/images/Crecimiento vertical posterior.png"
              text1="Es la distancia que existe entre ENP y N y se mide perpendicular al plano horizontal."
              text2="Evalúa el crecimiento vertical posterior del complejo nasomaxilar."
              Vacio="ENP-N"
              tituloFila1="Hombres"
              norma1="53.9 mm"
              SD1="1.7 mm"
              rango1="52.2 - 55.6 mm"
              tituloFila2="Mujeres"
              norma2="50.6 mm"
              SD2="2.2 mm"
              rango2="48.4 - 52.8  mm"
              Valores1="Valor aumentado"
              tabla1="Crecimiento vertical posterior excesivo"
              Valores2="Valor en la norma"
              tabla2="Crecimiento vertical posterior adecuado"
              Valores3="Valor disminuido"
              tabla3="Crecimiento vertical posterior deficiente"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Ángulo plano mandibular"
              imageSrc="/images/Angulo plano mandibular.png"
              text1="Es el ángulo formado por la intersección del plano horizontal (PH) y el plano mandibular (PM)"
              text2="Muestra la divergencia mandibular posterior con respecto a su altura facial anterior."
              Vacio="(PH)- (PM)"
              tituloFila1="Hombres"
              norma1="21.2°"
              SD1="5.1°"
              rango1="16.1°- 26.3°"
              tituloFila2="Mujeres"
              norma2="22.9°"
              SD2="5.2°"
              rango2="17.7°- 28.1°"
              Valores1="Valor aumentado"
              tabla1="Hiperdivergencia mandibular"
              Valores2="Valor en la norma"
              tabla2="Normodivergencia mandibular"
              Valores3="Valor disminuido"
              tabla3="hipodivergencia mandibular"
              anexo="Norma modificada por la actualización en el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Crecimiento dentoalveolar incisivo superior"
              imageSrc="/images/Crecimiento dentoalveolar incisivo superior.png"
              text1="Se evalúa trazando una línea perpendicular desde el borde incisal del incisivo central superior al plano del suelo  nasal (ENA-ENP)"
              text2="Indica el crecimiento dentoalveolar vertical de los dientes anteriores superiores."
              Vacio="1-(ENA-ENP)"
              tituloFila1="Hombres"
              norma1="30.1 mm"
              SD1="2.2 mm"
              rango1="27.9 - 32.3 mm"
              tituloFila2="Mujeres"
              norma2="29.4 mm"
              SD2="1.5 mm"
              rango2="27.6 - 30.6 mm"
              Valores1="Valor aumentado"
              tabla1="Sobreerupción del incisivo superior"
              Valores2="Valor en la norma"
              tabla2="Normoerupción del incisivo superior"
              Valores3="Valor disminuido"
              tabla3="Infraerupción del incisivo superior"
              anexo="Norma modificada por la actualización en el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Crecimiento dentoalveolar vertical del primer molar superior"
              imageSrc="/images/Crecimiento dentoalveolar vertical del primer molar superior.png"
              text1="Se evalúa trazando una línea perpendicular desde la cúspide mesial del primer molar superior y el plano del suelo nasal (ENA-ENP)"
              text2="Indica el crecimiento dentoalveolar vertical de los dientes posteriores superiores."
              Vacio="1MS-(ENA-ENP)"
              tituloFila1="Hombres"
              norma1="26.8 mm"
              SD1="2.3 mm"
              rango1="24.5 - 29.1 mm"
              tituloFila2="Mujeres"
              norma2="24.7 mm"
              SD2="2 mm"
              rango2="22.7 - 26.7 mm"
              Valores1="Valor aumentado"
              tabla1="Sobreerupción del primer molar superior"
              Valores2="Valor en la norma"
              tabla2="Normoerupción del primer molar superior"
              Valores3="Valor disminuido"
              tabla3="Infraerupción del primer molar superior"
              anexo="Norma modificada por la actualización en el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Crecimiento dentoalveolar vertical del incisivo inferior"
              imageSrc="/images/Crecimiento dentoalveolar vertical del incisivo inferior.png"
              text1="Se evalúa trazando una línea perpendicular desde el borde incisal del incisivo central inferior al plano mandibular (Go-Me)"
              text2="Indica el crecimiento dentoalveolar vertical de los dientes anteriores inferiores."
              Vacio="1-(PM)"
              tituloFila1="Hombres"
              norma1="43.9 mm "
              SD1="2.9 mm"
              rango1="41 - 46.8  mm"
              tituloFila2="Mujeres"
              norma2="40.3 mm"
              SD2="2.4 mm"
              rango2="37.9 - 42.7 mm"
              Valores1="Valor aumentado"
              tabla1="Sobreerupción del incisivo inferior"
              Valores2="Valor en la norma"
              tabla2="Normoerupción del incisivo inferior"
              Valores3="Valor disminuido"
              tabla3="Infraerupción del incisivo inferior"
              anexo="Norma modificada por la actualización en el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
            <TarjejtInforImages2
              title="Crecimiento dentoalveolar vertical del primer molar inferior"
              imageSrc="/images/Crecimiento dentoalveolar vertical del primer molar inferior.png"
              text1="Se evalúa trazando una línea perpendicular desde la cúspide mesial del primer molar inferior y el plano mandibular (Go-Me)"
              text2="Indica el crecimiento dentoalveolar vertical de los dientes posteriores inferiores."
              Vacio="1M-(PM)"
              tituloFila1="Hombres"
              norma1="33.8 mm"
              SD1="2.4 mm"
              rango1="31.4- 36.2  mm"
              tituloFila2="Mujeres"
              norma2="30.7 mm"
              SD2="2.3 mm"
              rango2="28.4 - 33  mm"
              Valores1="Valor aumentado"
              tabla1="Sobreerupción del primer molar inferior"
              Valores2="Valor en la norma"
              tabla2="Normoerupción del primer molar inferior"
              Valores3="Valor disminuido"
              tabla3="Infraerupción del  primer molar inferior"
              anexo="Norma modificada por la actualización en el artículo de 1980"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
          </div>
        </div>

        <!--! Maxilar - Mandibular Tejidos Duros -->
        <div class="flex flex-col gap-4" id="MaxilarmandibularLeganBurstoneDuros" data-seccion>
          <div class="flex flex-col justify-end">
            <h2 class="text-2xl font-bold text-background-primary font-serif">
              Tejidos Duros: Maxilar - Mandibular
            </h2>
          </div>

          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="Longitud anteroposterior del maxilar"
              imageSrc="/images/Longitud anteroposterior del maxilar.png"
              text1="Se traza una línea con punto de origen en ENA perpendicular al PH y una línea con punto de origen ENP perpendicular al PH."
              text2="Se mide la distancia de ambas líneas sobre el PH"
              text3="Determina el tamaño del maxilar"
              Vacio=""
              tituloFila1="Hombres"
              norma1="56,4 mm"
              SD1="2,7  mm"
              rango1="53,7 a 59,1 mm"
              tituloFila2="Mujeres"
              norma2="53,1 mm"
              SD2="2,9 mm"
              rango2="50,2 a 56 mm"
              Valores1="Valor aumentado"
              tabla1="Macrognatismo maxilar"
              Valores2="Valor en la norma"
              tabla2="Normognatismo maxilar"
              Valores3="Valor disminuido"
              tabla3="Micrognatismo maxilar"
              citacion="Burstone, C. J., James, R. B., Legan, H., Murphy, G. A., & Norton, L. A. (1978). Cephalometrics for orthognathic surgery. Journal of Oral Surgery, 36(4), 269-277. -- Scheideman GB, Legan H L, Bell WH. Cephalometric analysis of dentofacial normals. Am J Orthod vol 78 N.4 . october 1980 ;404–20."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
