<script setup lang="ts">
import TarjetPoints from '@/components/TarjetPoints.vue'
import TarjejtInforImages2 from '@/components/TarjejtInforImages2.vue'
import TarjetInfoImagesGrummons from '@/components/TarjetInfoImagesGrummons.vue'
</script>

<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1 class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles">
            05
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
        <div class="flex flex-col gap-4" id="PuntosCefalometricosGrummons" data-seccion>
          <div class="flex flex-col justify-end">
            <h2 class="text-2xl font-bold text-background-primary font-serif">
              Puntos Cefalométricos
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <TarjetPoints
              title="Ag"
              body="Escotadura antegonial, punto más profundo de la escotadura antegonial."
            />
            <TarjetPoints
              title="ANS"
              body="Espina nasal anterior, es la proyección más anterior del piso de la cavidad nasal."
            />
            <TarjetPoints
              title="Cg"
              body="Apófisis Crista Galli, punto más superior del hueso etmoides."
            />
            <TarjetPoints
              title="Co"
              body="Condilion ,Punto posterosuperior sobre la curvatura de la cabeza del cóndilo."
            />
            <TarjetPoints
              title="J"
              body="Proceso j es el punto de unión entre la tuberosidad maxilar y la raíz vertical del cigoma."
            />
            <TarjetPoints
              title="Fr."
              body="Foramen redondo: Es un agujero circular en el hueso esfenoidal que conecta la fosa craneal media con la fosa pterigopalatina."
            />
            <TarjetPoints title="Me" body="Mentón, punto más anterior de la sínfisis mandibular." />
            <TarjetPoints title="Nc" body="Cavidad nasal." />
            <TarjetPoints
              title="Z"
              body="Punto más interno de la sutura Cigomático-frontal que coincide con el reborde orbitario."
            />
            <TarjetPoints
              title="ZA"
              body="Arco Cigomático: centro de la raíz del arco cigomático."
            />
            <TarjetPoints title="A1" body="Borde del incisivo central superior." />
            <TarjetPoints title="B1" body="Borde del incisivo central inferior." />
            <TarjetPoints title="MSR" body="Linea de referencia sagital media en Crista Galli." />
          </div>

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
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              title="Plano de Referencia MSR"
              imageSrc="/images/Plano de referencia MSR.png"
              text1="Plano que pase de Cg a ENA hacia la zona mentoniana."
              text2="La mitad del plano Z-Z a ENA"
            />
            <TarjejtInforImages2
              title="Plano de Referencia MSR"
              imageSrc="/images/Plano de referencia MSR 2.png"
              text1="Plano que pase de Cg a ENA hacia la zona mentoniana."
              text2="Trazo que pase por la mitad del plano Z-Z y del plano Fr-Fr (Asimetría facial superior)"
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
              text1="Mide el paralelismo de los planos frente a MSR."
              viñeta1="Longitud total mandibular (Co-Me)"
              viñeta2="Altura de la rama (Co-Ag)"
              viñeta3="Longitud del cuerpo (Ag-Me)"
              viñeta4="Ángulo goniaco"
              viñeta5="Línea de <span class='font-semibold'>ENA a Me</span> como línea divisoria"
              Medida1="<span class='text-green-600 font-semibold'>Co-Me</span>"
              Medida2="<span class='text-blue-600 font-semibold'>Ag-Me</span>"
              Medida3="<span class='text-pink-600 font-semibold'>Co-Ag</span>"
              Medida4="<span class='text-orange-500 font-semibold'>CO-Ag-Me</span>"
              derecho4="Ángulo "
              izquierdo4="Ángulo "
            />

            <TarjetInfoImagesGrummons
              title="Análisis Comparación Volumétrica"
              imageSrc="/images/Analisis comparacion volumetrica.png"
              viñeta1="Construcción de 2 polígonos"
              viñeta2="Co-Ag-Me y la intersección del plano Co-Co al plano MSR"
              viñeta3="Se debe realizar una superposición de los polígonos y determinar simetría o asimetría"
              Medida1="Vertical <span class='text-green-600 font-semibold'>Co-Me</span>"
              Medida2=" Horizontal <span class='text-blue-600 font-semibold'>Ag- Me</span>"
              Medida3="Transversal <span class='text-pink-600 font-semibold'>Co- Ag</span>"
            />

            <TarjetInfoImagesGrummons
              title="Comparación Simétrica Maxilar-Mandibular"
              imageSrc="/images/Comparacion simetrica maxilar-mandibular.png"
              viñeta1="Perpendicular de J a MSR"
              viñeta2="Perpendicular de Ag a MSR"
              viñeta3="Los 4 puntos se unen a Cg"
              Medida1="<span class='text-green-600 font-semibold'>J - MSR</span>"
              Medida2="<span class='text-blue-600 font-semibold'> Ag - MSR</span>"
              Medida3="<span class='text-green-600 font-semibold'>Cg - J</span>"
              Medida4="<span class='text-blue-600 font-semibold'>Cg - Ag</span>"
            />

            <TarjetInfoImagesGrummons
              title="Asimetría lineal"
              imageSrc="/images/Asimetria lineal.png"
              text1="Evaluar las distancias lineales desde:"
              viñeta1="Co, Nc, J, Ag, al plano de referencia MSR."
              Medida1="<span class='text-green-600 font-semibold'>Co - MSR</span>"
              Medida2="<span class='text-blue-600 font-semibold'>Nc - MSR</span>"
              Medida3="<span class='text-green-600 font-semibold'>J - MSR</span>"
              Medida4="<span class='text-blue-600 font-semibold'>Ag - MSR</span>"
              Medida5="<span class='text-green-600 font-semibold'>Me - MSR</span>"
            />

            <TarjetInfoImagesGrummons
              title="Relación Maxilo-Mandibular"
              imageSrc="/images/Relacion maxilo-mandibular.png"
              viñeta1="Distancia lineal desde las cúspides vestibulares de los primeros molares superiores a la perpendicular del proceso yugal (J)."
              Medida1="<span class='text-green-600 font-semibold'>J - Plano Oclusal</span>"
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

            <!-- TARJETA 8 -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Correción del Articulo original
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <p class="text-lg text-gray-600">
                      En el articulo original se muestra en la imagen de las proporciones verticales
                      que se toman la medida desde los puntos Z-Z pero realmente se toma desde el
                      punto crista galli, en el articulo original no se especifica como sacar las
                      proporciones exactas sino solo la división de las medidas, para obtener las
                      respectivas proporciones a esa operación matematica se le multiplica por 100
                      para obtener el respectivo porcentaje.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-lg mt-4">EN DESARROLLO...</p>
    </div>
  </div>
</template>
