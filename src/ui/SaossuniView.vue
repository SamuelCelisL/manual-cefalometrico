<script setup lang="ts">
import TarjetPoints from '@/components/TarjetPoints.vue'
import TarjejtInforImages2 from '@/components/TarjejtInforImages2.vue'
import TarjetInfoImages from '@/components/TarjetInfoImages.vue'
// import TarjetInfoImagesGrummons from '@/components/TarjetInfoImagesGrummons.vue'
</script>

<template>
  <div class="w-full px-4">
    <div class="flex flex-col gap-4 px-4">
      <div class="w-full flex flex-col">
        <div class="w-full flex pb-2 gap-2">
          <h1
            class="flex justify-end items-end text-5xl font-semibold font-serif text-text-titles"
            id="PuntosCefalometricosSaossuni"
            data-seccion
          >
            05
          </h1>
          <div class="flex flex-col justify-end">
            <h1 class="text-4xl font-bold text-background-primary font-serif">Saossuni</h1>
            <h3 class="text-sm font-serif text-border-primary/80">Por: 1. Oscar - 2. William</h3>
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
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Puntos Cefalométricos
          </h2>

          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col w-full gap-3 justify-center items-center">
              <img
                src="/images/Puntos cefalometricos Saossuni.png"
                alt="Puntos cefalometrico Saossuni"
                class="rounded-lg shadow-lg"
              />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <TarjetPoints
                title="<span class='text-red-800/60'>Ro</span>"
                body="Punto más superior del techo de la órbita."
              />
              <TarjetPoints
                title="<span class='text-blue-600/60'>Te</span>"
                body="Punto de corte de la línea MTZ con la base del cráneo."
              />
              <TarjetPoints
                title="<span class='text-yellow-600/60'>Cla</span>"
                body="Punto más superior de la apófisis clinoides anterior del esfenoides."
              />
              <TarjetPoints
                title="<span class='text-green-600/60'>Si</span>"
                body="Punto más inferior del contorno interno de la fosa pituitaria. (Silla turca del H.Esfenoides)."
              />
              <TarjetPoints
                title="<span class='text-purple-800/60'>Sp</span>"
                body="Punto más posterior del contorno interno de la pared posterior de la silla turca."
              />
              <TarjetPoints
                title="Punto (0)"
                body="Prolongación de los planos de base mandibular,plano oclusal, plano palatino y plano de base craneal anterior."
              />
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col w-full gap-3 justify-center items-center">
              <img
                src="/images/Puntos cefalometricos Saossuni 2.png"
                alt="Puntos cefalometrico Saossuni"
                class="rounded-lg shadow-lg"
              />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <TarjetPoints
                title="<span class='text-red-800/60'>ENA</span>"
                body="Punto más anterior del proceso espinoso."
              />
              <TarjetPoints
                title="<span class='text-green-600/70'>ENP</span>"
                body="Punto mas posterior del proceso espinoso"
              />
              <TarjetPoints
                title="<span class='text-pink-400/80'>Go</span>"
                body="Punto ubicado parte más posteroinferior de la silueta mandibular."
              />
              <TarjetPoints
                title="<span class='text-blue-400/60'>Me</span>"
                body="Punto más inferior de la sínfisis mandibular."
              />
              <TarjetPoints
                title="<span class='text-purple-400/90'>N</span>"
                body="Punto más anterior de la sutura frontonasal."
              />
              <TarjetPoints
                title="<span class='text-red-700/60'>Punto A</span>"
                body="Punto más posterior de la concavidad anterior en el perfil óseo del maxilar superior."
              />
              <TarjetPoints
                title="<span class='text-yellow-400'>Punto B</span>"
                body="Punto más posterior de la cavidad anterior en el perfil óseo del borde anterior de la mandibular."
              />
            </div>
          </div>

          <div class="flex justify-center">
            <p class="text-center text-[10px] md:text-xs text-gray-600">
              V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
              cephalo-facio-dental relationships , 1955
            </p>
          </div>

          <div class="flex flex-col justify-center items-center gap-4 mb-2">
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Planos de referencia"
              imageSrc="/images/Planos referenciales Saossuni.png"
              text1="<span class='font-semibold'>Plano supraorbitario:</span> Plano que une puntos Ro y Cla."
              text2="<span class='font-semibold'>Plano basal:</span> Plano paralelo al plano supraorbitario que pase por el punto Si."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Planos de referencia"
              imageSrc="/images/Plano palatino Saossuni.png"
              text1="<span class='font-semibold'>Plano palatino:</span> plano que une los puntos ENA y ENP."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Planos de referencia"
              imageSrc="/images/Plano oclusal.png"
              text1="<span class='font-semibold'>Plano oclusal:</span> plano bisectado que pase por la cuspide mesial de primero molares y bordes incisales de incisivos centrales."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Planos de referencia"
              imageSrc="/images/Plano mandibular.png"
              text1="<span class='font-semibold'>Plano mandibular:</span> plano bisectado que pase por la cuspide mesial de primero molares y bordes incisales de incisivos centrales."
              text2="Error en el artículo original: sassouni realiza trazos del plano mandibular uniendo puntos Go y Me."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />

            <!--* PLANOS Y DESCRIPCIÓN -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Planos y su descripción
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Planos descripcion.png"
                      alt="Planos con su respectiva descripción"
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
                            <th class="px-5 py-1 border border-gray-600">Planos</th>
                            <th class="uppercase px-5 py-1 border border-gray-600">Descripción</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-600 font-semibold">
                              PLANO SUPRAORBITARIO
                            </td>
                            <td class="p-2 border border-gray-600">
                              Se toma uin plano desde punto Techo de la orbita ( Ro) a punto
                              Clinoides anterior (Cla)
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-600 font-semibold">PLANO BASAL</td>
                            <td class="p-2 border border-gray-600">
                              Plano paralelo al supraorbirtario que sea tangente al piso Silla
                              turca(Si)
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-600 font-semibold">PLANO PALATAL</td>
                            <td class="p-2 border border-gray-600">
                              Plano que va de (ENA) a (ENP)
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-600 font-semibold">PLANO OCLUSAL</td>
                            <td class="p-2 border border-gray-600">
                              Plano que va de cúspides mesiales de los primeros molares superiores e
                              inferiores a bordes incisales de centrales superiores e inferiores.
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-600 font-semibold">
                              PLANO MANDIBULAR
                            </td>
                            <td class="p-2 border border-gray-600">
                              Plano tangente al borde inferior de la mandíbula.
                            </td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-600 font-semibold">PLANO RAMAL</td>
                            <td class="p-2 border border-gray-600">Tangente posterior a la rama</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                        cephalo-facio-dental relationships , 1955
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--* LOCALIZACIÓN punto CERO (0) -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Localización punto cero (0)
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Localizacion punto cero.png"
                      alt="Localización del punto cero (0)"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <ul class="list-disc px-3">
                      <li>Convergencia de los 4 planos de la prolongación de los planos</li>
                      <li>
                        No converge los planos en un punto posterior: el punto 0 : centro de un área
                        de 15mm de diámetro dentro del cual pasan los cuatro planos. Se empiezan a
                        trazar líneas verticales milimétricamente separadas y en la zona donde se
                        trace la línea de diámetro más corto entre los 15mm
                      </li>
                    </ul>

                    <div
                      class="flex justify-center items-center md:border-r md:pr-4 border-gray-400"
                    >
                      <img
                        src="/images/Localizacion punto cero info.png"
                        alt="Localización del punto cero (0)"
                        class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                      />
                    </div>
                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                        cephalo-facio-dental relationships , 1955
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--* LOCALIZACIÓN punto CERO (0) -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    TIPOS FACIALES
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <div class="flex flex-col flex-1 text-sm md:text-base justify-center">
                      <div class="flex">
                        <div
                          class="flex border-r border-b flex-col gap-3 w-full justify-center items-center p-3"
                        >
                          <p>
                            <span class="font-semibold">Tipo Facial I</span> (plano
                            <span class="font-semibold">basal</span> no converge en punto cero )
                          </p>
                          <p>A: pasa por encima de punto cero</p>
                          <p>B: pasa por debajo de punto cero</p>
                        </div>
                        <div
                          class="flex border-b flex-col gap-3 w-full justify-center items-center p-3"
                        >
                          <p>
                            <span class="font-semibold">Tipo Facial III</span> (plano
                            <span class="font-semibold">Oclusal</span> no converge en punto cero )
                          </p>
                          <p>A: pasa por encima de punto cero</p>
                          <p>B: pasa por debajo de punto cero</p>
                        </div>
                      </div>
                      <div class="flex">
                        <div
                          class="flex border-r flex-col gap-3 w-full justify-center items-center p-3"
                        >
                          <p>
                            <span class="font-semibold">Tipo Facial II</span> (plano
                            <span class="font-semibold">Palatino</span> no converge en punto cero )
                          </p>
                          <p>A: pasa por encima de punto cero</p>
                          <p>B: pasa por debajo de punto cero</p>
                        </div>
                        <div class="flex flex-col gap-3 w-full justify-center items-center p-3">
                          <p>
                            <span class="font-semibold">Tipo Facial IV</span> (plano
                            <span class="font-semibold">Mandibular</span> no converge en punto cero
                            )
                          </p>
                          <p>A: pasa por encima de punto cero</p>
                          <p>B: pasa por debajo de punto cero</p>
                        </div>
                      </div>
                    </div>
                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                        cephalo-facio-dental relationships , 1955
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Analisis tipos de mandibular"
              imageSrc="/images/Analisis tipos de mandibular.png"
              text1="<span class='font-semibold w-full flex justify-center'>HORIZONTAL</span>"
              text2="Donde las fuerzas de tracción hacia arriba en gonion parecen ser mayores que las fuerzas de empuje hacia abajo en el mentón."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Analisis tipos de mandibular"
              imageSrc="/images/Analisis tipos de mandibular 2.png"
              text1="<span class='font-semibold w-full flex justify-center'>CURVA</span>"
              text2="Fuerzas de tracción van hacia arriba en el Gonion Fuerzas de empuje van hacia abajo en el mentón y están en equilibrio."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Analisis tipos de mandibular"
              imageSrc="/images/Analisis tipos de mandibular 3.png"
              text1="<span class='font-semibold w-full flex justify-center'>OBLICUA</span>"
              text2="Cuando la tracción superior del Go y las fuerzas de empuje hacia abajo en el mentón son tan fuertes que genera una escotadura anterior a la inserción del masetero."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Analisis tipos de paladar"
              imageSrc="/images/Analisis tipos de paladar.png"
              text1="<span class='font-semibold w-full flex justify-center'>HORIZONTAL</span>"
              text2="Cuando el plano palatal (ENA – ENP) pasa entre la estructura ósea del paladar. Cuando la mandíbula es curva se encuentra un paladar horizontal."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Analisis tipos de paladar"
              imageSrc="/images/Analisis tipos de paladar 2.png"
              text1="<span class='font-semibold w-full flex justify-center'>CONVEJO</span>"
              text2="Cuando el plano palatal pasa por encima de la estructura ósea del paladar. Cuando la mandíbula es oblicua se asocia a un paladar convejo."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />
            <TarjejtInforImages2
              name="TarjejtInforImages4"
              title="Analisis tipos de paladar"
              imageSrc="/images/Analisis tipos de paladar 3.png"
              text1="<span class='font-semibold w-full flex justify-center'>CÓNCAVO</span>"
              text2="Cuando el plano palatal pasa por debajo de la estructura ósea del paladar."
              citacion="V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of cephalo-facio-dental relationships , 1955"
            />

            <!--* Arco Anterior -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Arco Anterior
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Arco anterior.png"
                      alt="Arco Anterior"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <p>
                      Se traza sobre el plano Basal y el Plano mandibular. Tomando 0 como centro y
                      punto N como radio. ( se referencia puntos N - Ena - borde incisal - pog )
                    </p>
                    <p>Hallazgo:</p>
                    <!-- TABLA -->
                    <div class="my-2 overflow-x-auto flex items-center justify-center">
                      <table class="w-auto text-[10px] sm:text-sm text-center">
                        <tbody>
                          <tr>
                            <td class="p-2 font-semibold">Arquial</td>
                            <td class="p-2">Todos los puntos coinciden</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Prearquial</td>
                            <td class="p-2">Puntos por delante del arco</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Postarquial</td>
                            <td class="p-2">Puntos por detrás del arco</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Convejo</td>
                            <td class="p-2">
                              Puntos N - Prog coinciden Ena - is por delante del arco
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Convaco</td>
                            <td class="p-2">Puntos N - coinciden Ena - is por detras del arco</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="flex gap-2">
                      <p>
                        <span class="font-semibold">Anexo:</span>Error artículo: sassouni indica en
                        el texto original se toma punto de referencia ENA como radio.
                      </p>
                    </div>
                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                        cephalo-facio-dental relationships , 1955
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--* Arco Anterior -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Arco medio
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Arco medio.png"
                      alt="Arco Medio"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <p>
                      Se traza sobre el plano Basal y el plano mandibular. Tomando 0 como centro y
                      (Te) como radio.
                    </p>
                    <p>( se referencia surco intercuspideo de 6 sup e inf )</p>
                    <p>Hallazgo:</p>
                    <!-- TABLA -->
                    <div class="my-2 overflow-x-auto flex items-center justify-center">
                      <table class="w-auto text-[10px] sm:text-sm text-center">
                        <tbody>
                          <tr>
                            <td class="p-2 font-semibold">Normogresion</td>
                            <td class="p-2">Arco coincide con surcos</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Mesiogresion</td>
                            <td class="p-2">Surco por delante del arco</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Distogrecion</td>
                            <td class="p-2">Surco por detras del arco</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                        cephalo-facio-dental relationships , 1955
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--* Arco Anterior -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Arco basal
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Arco basal.png"
                      alt="Arco Basal"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <p>
                      Se traza sobre el plano palatino y el Plano mandibular. Tomando 0 como centro
                      y punto A como radio. ( Se referencia puntos A - B )
                    </p>

                    <p>Hallazgo:</p>
                    <!-- TABLA -->
                    <div class="my-2 overflow-x-auto flex items-center justify-center">
                      <table class="w-auto text-[10px] sm:text-sm text-center">
                        <tbody>
                          <tr>
                            <td class="p-2 font-semibold">Clase I</td>
                            <td class="p-2">A - B coinciden en el arco</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Clase II</td>
                            <td class="p-2">B por detras del arco</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Clase III</td>
                            <td class="p-2">B por delante del arco</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                        cephalo-facio-dental relationships , 1955
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TarjetInfoImages
              title="Ángulo 1-PP (IMAX)"
              imageSrc="/images/angulo 1-PP (imax) Saossuni.png"
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
              title="Ángulo 1 y Go-Gn (IMPA)"
              imageSrc="/images/angulo 1 y Go-Gn (impa) Saossuni.png"
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

            <!--* Arco Anterior -->
            <div class="w-full flex justify-center">
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Proporción vertical facial
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/Proporcion vertical facial.png"
                      alt="Proporción vertical facial"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                    <p>
                      Medida en distancia formada por el plano Basal entre el plano Palatino y plano
                      palatino y el plano mandibular, determina La relación entre el tercio medio e
                      inferior de la cara.
                    </p>

                    <p>Hallazgo:</p>
                    <!-- TABLA -->
                    <div class="my-2 overflow-x-auto flex items-center justify-center">
                      <table class="w-auto text-[10px] sm:text-sm text-center">
                        <tbody>
                          <tr>
                            <td class="p-2 font-semibold">Igual</td>
                            <td class="p-2">
                              La distancia del tercio inferior es igual al tercio superior
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Menor</td>
                            <td class="p-2">
                              la distacion del tercio inferior es menor que el tercio superior
                            </td>
                          </tr>
                          <tr>
                            <td class="p-2 font-semibold">Mayor</td>
                            <td class="p-2">
                              la distancia del tercio inferior es mayor que el tercio superior B por
                              delante del arco
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                        cephalo-facio-dental relationships , 1955
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--! PROPORCIONES HORIZONTALES -->
        <div class="flex flex-col gap-4" id="ProporcionesHorizontalesSaossuni" data-seccion>
          <h2 class="text-2xl font-bold text-background-primary font-serif">
            Proporciones horizontales
          </h2>
          <!--* Proporciones Horizontales -->
          <div class="w-full flex justify-center">
            <div
              class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
            >
              <!-- HEADER -->
              <div class="bg-background-primary rounded-t-xl px-4 py-2">
                <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                  Proporciones
                </h2>
              </div>

              <!-- BODY -->
              <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                <!-- IMAGEN -->
                <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                  <img
                    src="/images/Desproporcion vertical.png"
                    alt="Proporción vertical facial"
                    class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                  />
                </div>

                <!-- CONTENIDO -->
                <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
                  <p class="font-semibold">Desproporción vertical</p>

                  <p>Hallazgo:</p>

                  <p><span class="font-semibold">Morida abierta:</span> Planos divergentes</p>
                  <p><span class="font-semibold">Morida profunda:</span> Planos convergentes</p>

                  <!-- CITACIÓN -->
                  <div class="flex justify-center">
                    <p class="text-center text-[10px] md:text-xs text-gray-600">
                      V. Sassouni, Philadelphia, Pa. A roentgenographic cephalometric analysis of
                      cephalo-facio-dental relationships , 1955
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
