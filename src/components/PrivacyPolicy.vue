<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-orange-50 via-background to-orange-50/30 dark:from-orange-950/20 dark:via-background dark:to-orange-950/10">
      <!-- Background decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <!-- Badge -->
        <div class="flex justify-center mb-8">
          <div class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-800 dark:text-orange-300 rounded-full border border-orange-200 dark:border-orange-700 shadow-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span class="font-semibold text-sm">Protección de Datos Garantizada</span>
          </div>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-6">
          <span class="text-foreground">Política de</span>
          <span class="text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text block">
            Tratamiento de Datos
          </span>
          <span class="text-foreground">Personales</span>
        </h1>

        <!-- Subtitle -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full">
            <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span class="text-lg font-medium text-muted-foreground">
              Última actualización: <span class="text-orange-600 dark:text-orange-400 font-semibold">3 de agosto de 2025</span>
            </span>
          </div>
        </div>

        <!-- Privacy Image with enhanced styling -->
        <div class="flex justify-center mb-12">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <img src="/privacidad.png" alt="Privacidad" class="relative w-64 h-auto rounded-2xl shadow-2xl border border-orange-200/50 dark:border-orange-700/50 group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="mx-auto max-w-6xl px-6 py-16">
      <div class="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20">

        <!-- Section 1: Introducción -->
        <div class="mb-16 scroll-mt-20" id="introduccion">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">1</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text m-0">
              Introducción
            </h2>
          </div>

          <div class="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-orange-200/30 dark:border-orange-700/30 rounded-3xl p-8 shadow-xl">
            <p class="text-lg leading-relaxed mb-6">
              <span class="font-bold text-orange-600 dark:text-orange-400">AprenderIA</span> (en adelante, "la Plataforma", "nosotros" o "AprenderIA") reconoce la importancia de proteger los datos personales de sus usuarios. Esta Política describe cómo recopilamos, usamos, almacenamos, compartimos y protegemos los datos personales que usted ("titular" o "usuario") nos entrega, siempre bajo su <span class="font-semibold text-orange-600 dark:text-orange-400">autorización explícita</span> y en conformidad con la <span class="font-semibold text-orange-600 dark:text-orange-400">Ley 1581 de 2012</span>, sus decretos reglamentarios y demás normas aplicables en materia de protección de datos personales en Colombia. Si usted se encuentra en otra jurisdicción, también consideramos buenas prácticas internacionales como las del <span class="font-semibold text-orange-600 dark:text-orange-400">GDPR de la Unión Europea</span> cuando aplica.
            </p>
            <div class="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <p class="text-lg leading-relaxed m-0">
                Al usar la Plataforma, registrarse en cursos, suscribirse, hacer pagos o interactuar con nuestros servicios, usted <span class="font-bold text-orange-600 dark:text-orange-400">acepta esta Política</span> y otorga su consentimiento para el tratamiento de sus datos personales en los términos aquí establecidos.
              </p>
            </div>
          </div>
        </div>

        <!-- Section 2: Responsable del tratamiento -->
        <div class="mb-16 scroll-mt-20" id="responsable">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">2</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text m-0">
              Responsable del tratamiento
            </h2>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-3xl p-8 shadow-xl">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">AprenderIA</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span class="font-semibold">Pedro Manuel Ardila Armirola</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>carrera 5#45-30, <span class="font-semibold text-orange-600 dark:text-orange-400">Bogotá/Colombia</span></span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:pedromanuelardila20@outlook.es" class="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
                      pedromanuelardila20@outlook.es
                    </a>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span class="font-semibold text-orange-600 dark:text-orange-400">+57 3232341127</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Datos que recolectamos -->
        <div class="mb-16 scroll-mt-20" id="datos">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text m-0">
              Datos que recolectamos
            </h2>
          </div>

          <div class="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-orange-200/30 dark:border-orange-700/30 rounded-3xl p-8 shadow-xl mb-8">
            <p class="text-lg leading-relaxed text-center">
              Recolectamos y tratamos las siguientes categorías de datos personales, siempre con su <span class="font-bold text-orange-600 dark:text-orange-400">autorización previa, libre e informada</span>:
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Datos de identificación -->
            <div class="group bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 border border-orange-200/50 dark:border-orange-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-orange-600 dark:text-orange-400">a) Datos de identificación</h3>
              </div>
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Nombre completo</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Número de identificación <span class="text-orange-600 dark:text-orange-400 font-medium">(opcional)</span></span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Correo electrónico</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Teléfono</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>País y ciudad</span>
                </li>
              </ul>
            </div>

            <!-- Datos de contacto y relación -->
            <div class="group bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 border border-orange-200/50 dark:border-orange-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-orange-600 dark:text-orange-400">b) Contacto y relación</h3>
              </div>
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Dirección física <span class="text-orange-600 dark:text-orange-400 font-medium">(facturación)</span></span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Historial de cursos adquiridos</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Preferencias de comunicación</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Comentarios y consultas</span>
                </li>
              </ul>
            </div>

            <!-- Datos de transacción -->
            <div class="group bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 border border-orange-200/50 dark:border-orange-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-orange-600 dark:text-orange-400">c) Datos de transacción</h3>
              </div>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Información de pago <span class="text-orange-600 dark:text-orange-400 font-medium">(procesada por terceros)</span></span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Historial de compras y suscripciones</span>
                </li>
              </ul>
            </div>

            <!-- Datos de navegación -->
            <div class="group bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 border border-orange-200/50 dark:border-orange-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-orange-600 dark:text-orange-400">d) Navegación y técnicos</h3>
              </div>
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Direcciones IP</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Cookies y tecnologías similares</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Comportamiento en la plataforma</span>
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Referencias y origen de tráfico</span>
                </li>
              </ul>
            </div>

            <!-- Datos sensibles -->
            <div class="group md:col-span-2 lg:col-span-1 bg-gradient-to-br from-red-50 to-orange-100/50 dark:from-red-950/20 dark:to-orange-900/10 border border-red-200/50 dark:border-red-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-red-600 dark:text-red-400">e) Datos sensibles</h3>
              </div>
              <div class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-700 rounded-xl p-4">
                <p class="text-sm">
                  <span class="font-semibold text-red-600 dark:text-red-400">Solo si se piden expresamente:</span> Información para fines de facturación/conformidad fiscal con <span class="font-semibold text-red-600 dark:text-red-400">niveles adicionales de protección</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 4: Finalidades del tratamiento -->
        <div class="mb-16 scroll-mt-20" id="finalidades">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">4</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text m-0">
              Finalidades del tratamiento
            </h2>
          </div>

          <div class="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-orange-200/30 dark:border-orange-700/30 rounded-3xl p-8 shadow-xl mb-8">
            <p class="text-lg leading-relaxed text-center">
              Los datos personales que recolectamos se usan para las siguientes <span class="font-bold text-orange-600 dark:text-orange-400">finalidades</span>:
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Finalidades Principales -->
            <div class="bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/20 dark:to-emerald-900/10 border border-green-200/50 dark:border-green-700/50 rounded-3xl p-8 shadow-xl">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-green-600 dark:text-green-400">Principales</h3>
              </div>
              <p class="text-sm text-green-700 dark:text-green-300 mb-6 font-medium">
                (necesarias para la relación contractual y prestación del servicio)
              </p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Registrarlo y mantener su <span class="font-semibold text-green-600 dark:text-green-400">cuenta de usuario</span>.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Procesar y gestionar la <span class="font-semibold text-green-600 dark:text-green-400">compra de cursos, suscripciones y pagos</span>.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Enviar el <span class="font-semibold text-green-600 dark:text-green-400">contenido contratado</span> (lecciones, actualizaciones, certificados).</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Brindar <span class="font-semibold text-green-600 dark:text-green-400">soporte y atención al cliente</span>.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Generar <span class="font-semibold text-green-600 dark:text-green-400">facturación y cumplimiento tributario</span>.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Verificar identidad en procesos de <span class="font-semibold text-green-600 dark:text-green-400">acceso o reclamación</span>.</span>
                </li>
              </ul>
            </div>

            <!-- Finalidades Secundarias -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-100/50 dark:from-blue-950/20 dark:to-indigo-900/10 border border-blue-200/50 dark:border-blue-700/50 rounded-3xl p-8 shadow-xl">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Secundarias</h3>
              </div>
              <p class="text-sm text-blue-700 dark:text-blue-300 mb-6 font-medium">
                (con su autorización, opcionales)
              </p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Enviarle <span class="font-semibold text-blue-600 dark:text-blue-400">comunicaciones comerciales, promociones y recomendaciones</span> personalizadas.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Realizar <span class="font-semibold text-blue-600 dark:text-blue-400">encuestas de satisfacción</span> y validación de calidad.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Mejorar la experiencia en la plataforma mediante <span class="font-semibold text-blue-600 dark:text-blue-400">análisis de uso (analytics)</span>.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Mostrar <span class="font-semibold text-blue-600 dark:text-blue-400">contenido adaptado</span> a sus intereses.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Detectar fraudes y garantizar la <span class="font-semibold text-blue-600 dark:text-blue-400">seguridad del servicio</span>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Section 5: Base legal y consentimiento -->
        <div class="mb-16 scroll-mt-20" id="base-legal">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">5</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text m-0">
              Base legal y consentimiento
            </h2>
          </div>

          <div class="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-orange-200/30 dark:border-orange-700/30 rounded-3xl p-8 shadow-xl">
            <p class="text-lg leading-relaxed mb-6">
              El tratamiento de sus datos se realiza con base en:
            </p>

            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-6">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="font-bold text-orange-600 dark:text-orange-400 mb-2">Consentimiento expreso</h3>
                <p class="text-sm">Otorgado mediante la aceptación de esta política al registrarse o interactuar con formularios.</p>
              </div>

              <div class="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-6">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 class="font-bold text-orange-600 dark:text-orange-400 mb-2">Ejecución de contrato</h3>
                <p class="text-sm">Compra de cursos, suscripciones y servicios contratados.</p>
              </div>

              <div class="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-700 rounded-2xl p-6">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"></path>
                  </svg>
                </div>
                <h3 class="font-bold text-orange-600 dark:text-orange-400 mb-2">Obligaciones legales</h3>
                <p class="text-sm">Facturación, prevención de fraude y cumplimiento tributario.</p>
              </div>
            </div>

            <div class="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <p class="text-lg leading-relaxed m-0">
                <span class="font-bold text-orange-600 dark:text-orange-400">Importante:</span> Usted puede retirar su consentimiento en cualquier momento conforme al procedimiento descrito en el apartado de derechos. El retiro no afecta la legalidad del tratamiento previo.
              </p>
            </div>
          </div>
        </div>

        <!-- Closing divs and script section -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
