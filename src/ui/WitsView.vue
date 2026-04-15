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
              <div
                class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
              >
                <!-- HEADER -->
                <div class="bg-background-primary rounded-t-xl px-4 py-2">
                  <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
                    Wits = Distancia entre AO y BO
                  </h2>
                </div>

                <!-- BODY -->
                <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
                  <!-- IMAGEN -->
                  <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
                    <img
                      src="/images/wits = distancia entre ao y bo.png"
                      alt="Wits = Distancia entre AO y BO"
                      class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain"
                    />
                  </div>

                  <!-- CONTENIDO -->
                  <div class="flex flex-col gap-2 flex-1 text-sm md:text-base">
                    <p>
                      Al plano oclusal bisectado se proyectan líneas perpendiculares desde A y B,
                      formando puntos AO y BO, se mide la distancia horizontal entre ellos.
                      Determina la relación anteroposterior entre maxilar superior e inferior
                    </p>
                    <p>AO anterior a BO = valor positivo (+).</p>
                    <p>BO anterior a AO = valore negativo (-).</p>

                    <!-- TABLA -->
                    <div class="my-2 overflow-x-auto flex items-center justify-center">
                      <table
                        class="w-auto text-[10px] sm:text-sm text-center border border-gray-300"
                      >
                        <thead class="border-b border-gray-400 bg-blue-200">
                          <tr>
                            <th class="uppercase px-5 py-1 border border-gray-400"></th>
                            <th class="uppercase px-2 py-1 border border-gray-400">Norma</th>
                            <th class="uppercase px-2 py-1 border border-gray-400">SD</th>
                            <th class="uppercase px-2 py-1 border border-gray-400">Rango</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-400">Hombres</td>
                            <td class="p-2 border border-gray-400">-1mm</td>
                            <td class="p-2 border border-gray-400">+/- 1.9</td>
                            <td class="p-2 border border-gray-400">-2.9 a 0.9</td>
                          </tr>
                          <tr class="border-t border-gray-300">
                            <td class="p-2 border border-gray-400">Mujeres</td>
                            <td class="p-2 border border-gray-400">0</td>
                            <td class="p-2 border border-gray-400">+/-1.77</td>
                            <td class="p-2 border border-gray-400">-1.77 a 1.77</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div class="flex gap-2">
                      <p class="text-red-600 uppercase">Valores positivos fuera de la norma:</p>
                      <p class="">Clase II esquelética</p>
                    </div>
                    <div class="flex gap-2">
                      <p class="text-green-600 uppercase">Valores en Norma:</p>
                      <p class="">Clase I esquelética</p>
                    </div>
                    <div class="flex gap-2">
                      <p class="text-yellow-600 uppercase">VALORES NEGATIVOS FUERA DE LA NORMA:</p>
                      <p class="">Clase III esquelética</p>
                    </div>

                    <!-- CITACIÓN -->
                    <div class="flex justify-center">
                      <p class="text-center text-[10px] md:text-xs text-gray-600">
                        Jacobson A. The “Wits” appraisal of jaw disharmony. American Journal of
                        Orthodontics [Internet]. 1975 Feb 1;67(2):125–38. Available from:
                        https://www.ncbi.nlm.nih.gov/pubmed/1054214
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
  </div>
</template>
