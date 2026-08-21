<script setup lang="ts">
// import TarjetPoints from '@/components/TarjetPoints.vue'
import TarjejtInforImages2 from '@/components/TarjejtInforImages2.vue'
import TarjetInfoImagesGrummons from '@/components/TarjetInfoImagesGrummons.vue'
</script>

<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1
            class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles"
            id="PuntosCefalometricosGrummons"
            data-seccion
          >
            06
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Grummons</h1>
            <h3 class="text-sm font-serif text-border-primary/80">
              Por: 1. Yuly Vargas - 2. Joanna Peña
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
        <div class="flex flex-col gap-4">
          <div class="flex flex-col justify-end">
            <h2 class="text-2xl font-bold text-background-primary font-serif">
              Puntos Cefalométricos
            </h2>
          </div>

          <!-- INTRODUCCIÓN -->
          <TarjejtInforImages2
            title="Introducción"
            text1="<p class='text-xl text-gray-700 text-center'>Para el análisis de esta cefalometría se debe obtener una radiografía anteroposterior del paciente a evaluar.</p>"
            text2="<p class='text-xl text-gray-700 text-center'>Esta cefalometría es aquella que no es normativa ya que no tiene valores establecidos para comparar a diferencia de las otras cefalometrías, esta se realiza solo si el paciente presenta alguna asimetría o desviación y se quiere confirmar el diagnóstico para poder definir un correcto plan de tratamiento.</p>"
            text3="<p class='text-xl text-gray-700 text-center'>Los valores obtenidos de esta cefalometría se deben comparar con el mismo paciente es decir se comparan los valores de la parte derecha con la parte izquierda y se toman las respectivas decisiones.</p>"
          />

          <!-- IMAGEN Con puntos Cefalométricos -->
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Puntos Cefalométricos
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Puntos cefalometricos Grummons.png"
                      alt="Puntos Cefalométricos"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <p><span class="font-bold text-pink-600">Ag:</span> Escotadura antegonial</p>
                    <p><span class="font-bold text-orange-600">ANS:</span> Espina nasal anterior</p>
                    <p><span class="font-bold text-blue-600">Cg:</span> Apófisis Crista Galli</p>
                    <p><span class="font-bold text-shadow-amber-800">Co:</span> Condilion</p>
                    <p><span class="font-bold text-yellow-600">J:</span> Proceso j</p>
                    <p><span class="font-bold text-green-300">Fr.:</span> Foramen redondo</p>
                    <p><span class="font-bold text-pink-600">Me:</span> Mentón</p>
                    <p><span class="font-bold text-green-600">Nc:</span> Cavidad Nasal</p>
                    <p>
                      <span class="font-bold text-blue-800">Z:</span> Punto más interno de la sutura
                      Cigomático-frontal
                    </p>
                    <p><span class="font-bold text-black">ZA:</span> Arco Cigomático</p>
                    <p>
                      <span class="font-bold text-red-600">A1:</span> Borde del incisivo central
                      superior
                    </p>
                    <p>
                      <span class="font-bold text-shadow-pink-800">B1:</span> Borde del incisivo
                      central inferior
                    </p>
                    <p>
                      <span class="font-bold text-blue-600">MSR:</span> Linea de referencia sagital
                      media en Crista Galli
                    </p>
                  </div>
                </div>
                <!-- CITACIÓN -->
                <div class="flex justify-center pb-2">
                  <p class="text-center text-[10px] md:text-xs text-gray-600">
                    Grummons, D., Martin A., Kappeiny July (1987), A frontal asymmetry analysis.,
                    pages 448- 465
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="Plano de Referencia MSR"
              imageSrc="/images/Plano de referencia MSR.png"
              text1="Plano perpendicular a Z-Z que pase de Cg a ENA hacia la zona mentoniana"
              citacion="Grummons, D., Martin A., Kappeiny July (1987), A frontal asymmetry analysis., pages 448- 465"
            />
            <TarjejtInforImages2
              title="Plano de Referencia MSR"
              imageSrc="/images/Plano de referencia MSR 2.png"
              text1="Para asimetría facial superior:"
              text2="Plano que pase de Cg a ENA hacia la zona mentoniana"
              text3="Trazo que pase por la mitad del plano Z-Z y del plano Fr-Fr"
              citacion="Grummons, D., Martin A., Kappeiny July (1987), A frontal asymmetry analysis., pages 448- 465"
            />
          </div>
          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <!-- TARJETA 1 -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Planos Horizontales
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Planos horizontales.png"
                      alt="Planos Horizontales"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <p>
                      Mide el paralelismo de los planos frente a
                      <span class="text-semibold text-red-600">Z-Z</span>
                    </p>
                    <p>MSR debe ser perpendicular a plano Z-Z</p>
                    <p>Mentón debe ser paralelo a Z-Z</p>
                    <!-- TABLA -->
                    <div class="my-2 overflow-x-auto flex items-center justify-center">
                      <table
                        class="w-auto text-[10px] sm:text-sm text-center border border-gray-300"
                      >
                        <thead class="border-b border-gray-400 bg-blue-200">
                          <tr>
                            <th class="uppercase px-5 py-1">Medida</th>
                            <th class="uppercase px-10 py-1">Paciente</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Paralelismo</td>

                            <td colspan="2" class="border border-gray-300 p-0">
                              <div class="flex w-full h-full">
                                <div
                                  class="w-1/2 border-r border-gray-300 flex items-center justify-center py-2"
                                >
                                  SI
                                </div>
                                <div class="w-1/2 flex items-center justify-center py-2">NO</div>
                              </div>
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 text-blue-600">
                              Z-Z: <span class="font-semibold text-pink-500">ZA-ZA</span>
                            </td>
                            <td colspan="2" class="border border-gray-300 p-0">
                              <div class="flex w-full min-h-10">
                                <div
                                  class="w-1/2 border-r border-gray-300 flex items-center justify-center py-2"
                                ></div>
                                <div class="w-1/2 flex items-center justify-center py-2"></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 text-blue-600">
                              Z-Z: <span class="font-semibold text-green-500">J-J</span>
                            </td>

                            <td colspan="2" class="border border-gray-300 p-0">
                              <div class="flex w-full min-h-10">
                                <div
                                  class="w-1/2 border-r border-gray-300 flex items-center justify-center py-2"
                                ></div>
                                <div class="w-1/2 flex items-center justify-center py-2"></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 text-blue-600">
                              Z-Z: <span class="font-semibold text-yellow-500">P-C</span>
                            </td>

                            <td colspan="2" class="border border-gray-300 p-0">
                              <div class="flex w-full min-h-10">
                                <div
                                  class="w-1/2 border-r border-gray-300 flex items-center justify-center py-2"
                                ></div>
                                <div class="w-1/2 flex items-center justify-center py-2"></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 text-blue-600">
                              Z-Z: <span class="font-semibold text-cyan-500">AG-AG</span>
                            </td>
                            <td colspan="2" class="border border-gray-300 p-0">
                              <div class="flex w-full min-h-10">
                                <div
                                  class="w-1/2 border-r border-gray-300 flex items-center justify-center py-2"
                                ></div>
                                <div class="w-1/2 flex items-center justify-center py-2"></div>
                              </div>
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 text-blue-600">
                              Z-Z: <span class="font-semibold text-orange-500">ME</span>
                            </td>

                            <td colspan="2" class="border border-gray-300 p-0">
                              <div class="flex w-full min-h-10">
                                <div
                                  class="w-1/2 border-r border-gray-300 flex items-center justify-center"
                                ></div>
                                <div class="w-1/2 flex items-center justify-center"></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TarjetInfoImagesGrummons
              title="Morfología Mandibular"
              imageSrc="/images/Morfologia mandibular.png"
              text1="Medida lineal y angular"
              viñeta1="Longitud total mandibular (Co-Me)"
              viñeta2="Altura de la rama (Co-Ag)"
              viñeta3="Longitud del cuerpo (Ag-Me)"
              viñeta4="Ángulo goniaco"
              viñeta5="Línea de <span class='font-semibold'>ENA a Me</span> como línea divisoria"
              :medidas="[
                {
                  medida: `<span class='text-green-600 font-semibold'>Co-Me</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-blue-600 font-semibold'>Ag-Me</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-pink-600 font-semibold'>Co-Ag</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-orange-500 font-semibold'>CO-Ag-Me</span>`,
                  derecho: 'Ángulo',
                  izquierdo: 'Ángulo',
                },
              ]"
            />

            <TarjetInfoImagesGrummons
              title="Análisis Comparación Volumétrica"
              imageSrc="/images/Analisis comparacion volumetrica.png"
              viñeta1="Construcción de 2 polígonos"
              viñeta2="Co-Ag-Me y la intersección del plano Co-Co al plano MSR"
              viñeta3="Se debe realizar una superposición de los polígonos y determinar simetría o asimetría"
              :medidas="[
                {
                  medida: `Vertical <span class='text-blue-600 font-semibold'>Co-Ag</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `Horizontal <span class='text-green-600 font-semibold'>Co-MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `Transversal <span class='text-pink-600 font-semibold'>Ag-Me</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
              ]"
            />

            <TarjetInfoImagesGrummons
              title="Comparación Simétrica Maxilar-Mandibular"
              imageSrc="/images/Comparacion simetrica maxilar-mandibular.png"
              viñeta1="Perpendicular de J a MSR"
              viñeta2="Perpendicular de Ag a MSR"
              viñeta3="Los 4 puntos se unen a Cg"
              :medidas="[
                {
                  medida: `<span class='text-green-600 font-semibold'>J - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-blue-600 font-semibold'> Ag - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-green-600 font-semibold'>Cg - J</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-blue-600 font-semibold'>Cg - Ag</span>`,
                  derecho: 'Ángulo',
                  izquierdo: 'Ángulo',
                },
              ]"
            />

            <TarjetInfoImagesGrummons
              title="Asimetría lineal"
              imageSrc="/images/Asimetria lineal.png"
              text1="Evaluar las distancias lineales desde:"
              viñeta1="Co, Nc, J, Ag, al plano de referencia MSR."
              :medidas="[
                {
                  medida: `<span class='text-green-600 font-semibold'>Z - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-blue-600 font-semibold'>ZA - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-green-600 font-semibold'>Co - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-blue-600 font-semibold'>Nc - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-green-600 font-semibold'>J - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-blue-600 font-semibold'>Ag - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
                {
                  medida: `<span class='text-green-600 font-semibold'>Me - MSR</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
              ]"
            />

            <TarjetInfoImagesGrummons
              title="Relación Maxilo-Mandibular"
              imageSrc="/images/Relacion maxilo-mandibular.png"
              viñeta1="Distancia lineal desde las cúspides vestibulares de los primeros molares superiores a la perpendicular del proceso yugal (J)."
              :medidas="[
                {
                  medida: `<span class='text-green-600 font-semibold'>J - Plano Oclusal</span>`,
                  derecho: 'mm',
                  izquierdo: 'mm',
                },
              ]"
            />

            <!-- TARJETA 7 -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Proporciones Verticales Frontales
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Proporciones verticales frontales.png"
                      alt="Proporciones Verticales Frontales"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <!-- TABLA -->
                    <div class="my-2 overflow-x-auto flex items-center justify-center">
                      <table
                        class="w-auto text-[10px] sm:text-sm text-center border border-gray-300"
                      >
                        <thead class="border-b border-gray-400 bg-blue-200">
                          <tr>
                            <th class="uppercase px-5 py-1">Medida</th>
                            <th class="uppercase px-5 py-1">Puntos</th>
                            <th class="uppercase px-5 py-1">Proporción</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Proporción facial superior</td>
                            <td class="border border-gray-300">
                              <span class="font-semibold text-pink-400 px-2">Cg-ENA</span>/<span
                                class="font-semibold"
                                >Cg-Me</span
                              >
                              X 100
                            </td>
                            <td class="border border-gray-300"></td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Proporción facial \inferior</td>
                            <td class="border border-gray-300 px-2">
                              <span class="font-semibold text-blue-600">ENA-Me</span>/<span
                                class="font-semibold"
                                >Cg-Me</span
                              >
                              X 100
                            </td>
                            <td class="border border-gray-300"></td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Proporción maxilar</td>
                            <td class="border border-gray-300 px-2">
                              <span class="font-semibold text-green-500">ENA-A1</span>/<span
                                class="font-semibold text-blue-500"
                                >ENA-Me</span
                              >
                              X 100
                            </td>
                            <td class="border border-gray-300"></td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Proporción total maxilar</td>
                            <td class="border border-gray-300 px-2">
                              <span class="font-semibold text-green-500">ENA-A1</span>/<span
                                class="font-semibold"
                                >Cg-Me</span
                              >
                              X 100
                            </td>
                            <td class="border border-gray-300"></td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Proporción mandibular</td>
                            <td class="border border-gray-300 px-2">
                              <span class="font-semibold text-orange-400">B1-Me</span>/<span
                                class="font-semibold text-blue-500"
                                >ENA-Me</span
                              >
                              X 100
                            </td>
                            <td class="border border-gray-300"></td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Proporción total mandibular</td>
                            <td class="border border-gray-300 px-2">
                              <span class="font-semibold text-orange-400">B1-Me</span>/<span
                                class="font-semibold"
                                >Cg-Me</span
                              >
                              X 100
                            </td>
                            <td class="border border-gray-300"></td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2">Proporción maxilo-mandibular</td>
                            <td class="border border-gray-300 px-2">
                              <span class="font-semibold text-green-500">ENA-A1</span>/<span
                                class="font-semibold text-orange-400"
                                >B1-Me</span
                              >
                              X 100
                            </td>
                            <td class="border border-gray-300"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TarjejtInforImages2
              title="Corrección del Artículo original"
              text1="<p class='text-xl text-gray-700'>En el artículo original, la imagen de las proporciones verticales indica que las mediciones se realizan entre los puntos Z–Z; sin embargo, en la práctica, la referencia se toma desde el punto crista galli.</p>"
              text2="<p class='text-xl text-gray-700'>El artículo no especifica de manera detallada cómo calcular las proporciones exactas, sino que se limita a mostrar la división de las medidas obtenidas. Para expresar dichas proporciones en términos porcentuales, es necesario multiplicar el resultado de esta operación matemática por 100.</p>"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
