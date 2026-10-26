# IKO+ STUDIO — Sitio Web Corporativo

Sitio web corporativo de IKO+ STUDIO construido con Next.js 16, React 19 y Tailwind CSS 4.

## Stack técnico

- **Framework:** Next.js 16.4.2 (App Router + Turbopack)
- **UI:** React 19.3.0
- **Estilos:** Tailwind CSS 4
- **Lenguaje:** TypeScript 5
- **Tipografía:** DM Sans, Inter, JetBrains Mono (Google Fonts via next/font)

## Requisitos previos

- Node.js 18.18 o superior
- npm 9 o superior

## Instalación

```bash
cd web
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz (fonts, metadata, header, footer)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Design tokens + Tailwind config
│   │   ├── servicios/page.tsx  # Catálogo de servicios
│   │   ├── proyectos/page.tsx  # Proyectos demostrativos
│   │   ├── nosotros/page.tsx   # Sobre IKO+ STUDIO
│   │   ├── metodologia/page.tsx # Proceso de trabajo
│   │   ├── contacto/
│   │   │   ├── layout.tsx      # Metadata de contacto
│   │   │   └── page.tsx        # Formulario de contacto
│   │   ├── privacidad/page.tsx # Política de privacidad
│   │   └── terminos/page.tsx   # Términos y condiciones
│   └── components/
│       ├── Header.tsx          # Navegación responsive
│       ├── Footer.tsx          # Footer con enlaces
│       └── Logo.tsx            # Logo texto + Isotipo SVG
├── package.json
├── tsconfig.json
├── next.config.ts
└── next-env.d.ts
```

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Homepage — hero, servicios, problemas, metodología, proyectos, beneficios, FAQ, CTA |
| `/servicios` | Catálogo completo: web, mobile, enterprise, IA, mantenimiento |
| `/proyectos` | Proyectos demostrativos con tecnologías y funcionalidades |
| `/nosotros` | Propósito, misión, visión, valores, enfoque |
| `/metodologia` | Fases del proceso: discovery, diseño, desarrollo, QA, soporte |
| `/contacto` | Formulario con selector de proyecto, honeypot anti-spam, aviso de privacidad |
| `/privacidad` | Política de privacidad (Ley 29733, Perú) |
| `/terminos` | Términos y condiciones de uso |

## Despliegue

El sitio genera páginas estáticas (Static Site Generation). Compatible con:

- **Vercel** (recomendado): `vercel deploy`
- **Cualquier hosting Node.js**: ejecutar `npm run build && npm start`
- **Exportación estática**: agregar `output: 'export'` en `next.config.ts` para generar HTML estático

## Variables de entorno

No se requieren variables de entorno para el funcionamiento básico del sitio.

Crear un archivo `.env.local` si se necesita en el futuro:

```bash
cp .env.example .env.local
```

## Verificación realizada

- [x] Build de producción sin errores
- [x] TypeScript compila sin errores
- [x] 8 páginas generadas correctamente
- [x] Navegación funcional (desktop y mobile)
- [x] Formulario de contacto con validación
- [x] Honeypot anti-spam implementado
- [x] Aviso de privacidad en formulario
- [x] Metadata SEO en todas las páginas
- [x] Responsive design
- [x] Design tokens de IKO+ Brand Kit aplicados
- [x] Contenido basado en Brand Book y Blueprint

## Pendientes

- [ ] Integración con backend real para el formulario de contacto (actualmente simula envío)
- [ ] Favicon personalizado con isotipo IKO+
- [ ] Imágenes reales para proyectos (actualmente usan isotipo como placeholder)
- [ ] Analytics (Google Analytics o Plausible)
- [ ] Sitemap.xml y robots.txt
- [ ] Pruebas de accesibilidad con herramienta automatizada
- [ ] Optimización Lighthouse

## Documentación del proyecto

- [Guía técnica del sitio](../DOCUMENTACION/README.md): arquitectura, despliegue, formulario y lista de lanzamiento.
- [Índice general de IKO+ STUDIO](../../06_GESTION/INDICE_DOCUMENTACION.md): marca, negocio, recursos y gobernanza documental.
