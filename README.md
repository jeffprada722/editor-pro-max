# Editor Pro Max

**Fork oficial de Sendero IA** | Distribuido por [Jefferson Prada](https://senderoiapro.com)

Editor de video con IA. Gratis. Sin mensualidad. Sin interfaz que aprender.

> Fork del proyecto original de [@soyenriquerocha](https://instagram.com/soyenriquerocha) — mantenido y distribuido por Sendero IA para la comunidad latina.

[Guia completa en Sendero IA](https://senderoiapro.com/es/guias/editor-pro-max) | [English](#english) | [Espanol](#espanol)

---

## Espanol

![Editor Pro Max — Pagina Principal](assets/landing-full-es.png)

### Que es esto?

Editor Pro Max convierte Claude Code en un editor de video profesional. En lugar de arrastrar clips en una linea de tiempo, describes lo que quieres en lenguaje natural y Claude escribe el codigo. El proyecto usa [Remotion](https://remotion.dev), un framework de React que renderiza videos de forma programatica.

No hay interfaz que aprender. No hay configuraciones de exportacion. No se necesitan API keys externas. Todo corre localmente en tu computadora.

### Instalacion paso a paso

**Requisitos previos:**
- Node.js 20+ instalado ([descargar aqui](https://nodejs.org))
- Claude Code CLI instalado ([descargar aqui](https://claude.ai/code))
- macOS, Linux o Windows con WSL

**Paso 1: Clonar el repositorio**

```bash
git clone https://github.com/jeffprada722/editor-pro-max.git
cd editor-pro-max
```

**Paso 2: Abrir en Claude Code**

```bash
claude
```

**Paso 3: Dejar que Claude instale todo**

Dentro de Claude Code, escribe:

```
/start
```

Claude instala las dependencias, verifica que todo funcione y te muestra lo que puedes hacer. No tienes que correr `npm install` manualmente, Claude lo hace todo.

**Paso 4: Editar tu primer video**

Arrastra tu archivo de video a la carpeta `public/assets/` y dile a Claude:

```
editame este video, ponme subtitulos animados, quita los silencios y preparalo para Instagram
```

Claude analiza el video, elimina silencios, genera subtitulos y exporta en el formato que necesitas.

### Que puedes hacer

**Crear videos desde cero:**
> "Hazme un TikTok anunciando mi nuevo curso"
> "Crea una presentacion de 5 slides sobre IA"
> "Construye un video de anuncio con efectos de particulas"

**Editar tu propio material:**
> "Agrega subtitulos animados a mi video"
> "Corta todos los silencios de mi grabacion"
> "Extrae un clip de 30 segundos para Instagram"

**Renderizar para cualquier plataforma:**
> "Renderiza esto para TikTok" (1080x1920)
> "Exporta para YouTube" (1920x1080)
> "Haz una version cuadrada para Twitter" (1080x1080)

### Lo que hace el pipeline automaticamente

Cuando avientas un video, Claude ejecuta en orden:

1. `npx tsx scripts/analyze-video.ts` -- extrae metadata (duracion, fps, resolucion)
2. `npx tsx scripts/extract-audio.ts` -- separa el audio para transcripcion
3. `npx tsx scripts/transcribe.ts` -- Whisper AI genera subtitulos palabra por palabra
4. `npx tsx scripts/detect-silence.ts` -- detecta silencios para cortar con FFmpeg
5. Claude crea la composicion editada con subtitulos, jump cuts y overlays
6. Vista previa con `npm run dev` (abre Remotion Studio)
7. Renderiza con `npx remotion render <id> out/video.mp4`

### Consejo importante

Este editor funciona mejor con videos de hasta 10 minutos. Para videos mas largos, divide el material en secciones y edita por partes. Intentar procesar 30+ minutos en una sola pasada puede degradar la calidad del resultado.

### Caracteristicas incluidas

| Categoria | Cantidad | Detalles |
|---|---|---|
| Componentes | 25 | Animaciones de texto, fondos, overlays, media, layouts, transiciones |
| Templates | 10 | TikTok, Instagram, YouTube, Presentacion, Testimonio, Anuncio, Antes/Despues, TalkingHead, PodcastClip |
| Skills de IA | 7 | Mejores practicas de Remotion, diseno de movimiento, animaciones, FFmpeg |
| Scripts de Pipeline | 5 | Analisis de video, extraccion de audio, transcripcion Whisper, deteccion de silencio, remocion de fondo |
| Presets | 7 paletas, 8 gradientes, 12 easings, 5 fuentes, 9 dimensiones de plataforma |

### Templates disponibles

| Template | Dimensiones | Carpeta | Para que sirve |
|---|---|---|---|
| TikTok | 1080x1920 | Social | Hook + cuerpo + CTA |
| InstagramReel | 1080x1920 | Social | Titular + subtexto |
| YouTubeShort | 1080x1920 | Social | Titulo + particulas |
| Presentation | 1920x1080 | Content | Presentacion multi-slide |
| Testimonial | 1920x1080 | Content | Cita + autor |
| Announcement | 1920x1080 | Promo | Lanzamiento de producto |
| BeforeAfter | 1920x1080 | Promo | Comparacion con wipe |
| TalkingHeadEdit | 1920x1080 | Editing | Subtitulos + remocion de silencio |
| PodcastClip | 1080x1920 | Editing | Extraccion de clip con subtitulos |

### Stack tecnologico

| Tecnologia | Para que se usa |
|---|---|
| [Remotion](https://remotion.dev) | Framework de renderizado de video basado en React |
| React 19 | Composicion de video basada en componentes |
| TypeScript | Codigo con tipos |
| [Whisper.cpp](https://github.com/ggerganov/whisper.cpp) | Transcripcion IA local con timestamps por palabra |
| FFmpeg | Extraccion de audio, deteccion de silencio, procesamiento |
| [@imgly/background-removal](https://github.com/imgly/background-removal-js) | Remocion de fondo con IA |
| [Claude Code](https://claude.ai/code) | El agente que escribe y edita las composiciones |

### Guia completa

La guia detallada con capturas, ejemplos y casos de uso esta en:

**[senderoiapro.com/es/guias/editor-pro-max](https://senderoiapro.com/es/guias/editor-pro-max)**

---

## English

### What is this?

Editor Pro Max turns Claude Code into a professional video editor. Instead of dragging clips on a timeline, you describe what you want in natural language and Claude writes the code. The project uses [Remotion](https://remotion.dev) — a React framework that renders videos programmatically.

No GUI to learn. No export settings to configure. No API keys needed. Everything runs locally on your machine.

### Quick Start

```bash
git clone https://github.com/jeffprada722/editor-pro-max.git
cd editor-pro-max
claude
/start
```

The `/start` command installs everything, verifies the build, and shows you what you can do.

### What You Can Do

**Create videos from scratch:**
> "Make me a TikTok announcing my new course"
> "Create a 5-slide presentation about AI"
> "Build an announcement video with particle effects"

**Edit your own footage:**
> "Add captions to my talking head video"
> "Cut the dead air from my recording"
> "Extract a 30-second clip for Instagram"

**Render for any platform:**
> "Render this for TikTok" (1080x1920)
> "Export for YouTube" (1920x1080)
> "Make a square version for Twitter" (1080x1080)

### Features

| Category | Count | Details |
|---|---|---|
| Components | 25 | Text animations, backgrounds, overlays, media, layouts, transitions |
| Templates | 10 | TikTok, Instagram, YouTube, Presentation, Testimonial, Announcement, BeforeAfter, TalkingHead, PodcastClip |
| AI Skills | 7 | Remotion best practices, motion design, award-winning animations, FFmpeg |
| Pipeline Scripts | 5 | Video analysis, audio extraction, Whisper transcription, silence detection, background removal |
| Presets | 7 palettes, 8 gradients, 12 easings, 5 fonts, 9 platform dimensions |

### How It Works

```
YOU                          CLAUDE CODE                    REMOTION
"Make me a TikTok"  ──>  Writes React composition  ──>  Renders to MP4
                         using 25 components              1080x1920 @30fps
```

#### Path A: Create from scratch

1. Tell Claude what video you want
2. Claude creates a composition using the component library
3. Preview with `npm run dev` (opens Remotion Studio)
4. Render with `npx remotion render <id> out/video.mp4`

#### Path B: Edit existing video

1. Place your video in `public/assets/video.mp4`
2. Claude runs the pipeline:
   - `npx tsx scripts/analyze-video.ts` -- extracts metadata
   - `npx tsx scripts/extract-audio.ts` -- extracts audio for transcription
   - `npx tsx scripts/transcribe.ts` -- Whisper AI generates word-level captions
   - `npx tsx scripts/detect-silence.ts` -- finds dead air to cut
3. Claude creates an edited composition (auto-captions, jump cuts, overlays)
4. Preview and render

### Templates

| Template | Dimensions | Folder | Use Case |
|---|---|---|---|
| TikTok | 1080x1920 | Social | Hook + body + CTA |
| InstagramReel | 1080x1920 | Social | Headline + subtext |
| YouTubeShort | 1080x1920 | Social | Title + particles |
| Presentation | 1920x1080 | Content | Multi-slide deck |
| Testimonial | 1920x1080 | Content | Quote + author |
| Announcement | 1920x1080 | Promo | Product launch |
| BeforeAfter | 1920x1080 | Promo | Wipe comparison |
| TalkingHeadEdit | 1920x1080 | Editing | Auto-caption + silence removal |
| PodcastClip | 1080x1920 | Editing | Clip extraction with captions |

### Components

**Text:** AnimatedTitle (8 animation styles), LowerThird, TypewriterText, WordByWordCaption, CaptionOverlay (TikTok-style with 5 presets), TextStyles

**Backgrounds:** GradientBackground, ParticleField, GridPattern, ColorWash

**Overlays:** ProgressBar, Watermark, CallToAction, CountdownTimer

**Media:** FitVideo, FitImage (Ken Burns), Slideshow, VideoClip (trim), JumpCut (silence removal), ImageOverlay, AudioTrack (ducking)

**Layout:** SplitScreen, PictureInPicture, SafeArea

**Transitions:** 12 presets -- crossfade, slide, wipe, clock, cut, and more

### Project Structure

```
editor-pro-max/
├── src/
│   ├── components/       25 reusable components
│   │   ├── text/         AnimatedTitle, LowerThird, CaptionOverlay...
│   │   ├── backgrounds/  GradientBackground, ParticleField...
│   │   ├── overlays/     ProgressBar, Watermark, CallToAction...
│   │   ├── media/        VideoClip, JumpCut, AudioTrack...
│   │   ├── layout/       SplitScreen, PictureInPicture...
│   │   └── transitions/  12 transition presets
│   ├── templates/        10 ready-made compositions
│   │   ├── social/       TikTok, Instagram, YouTube
│   │   ├── content/      Presentation, Testimonial
│   │   ├── promo/        Announcement, BeforeAfter
│   │   └── editing/      TalkingHeadEdit, PodcastClip
│   ├── presets/          Colors, fonts, easings, dimensions, brand
│   ├── hooks/            useAnimation, useTranscription, useSilenceSegments...
│   ├── utils/            Animation math, editing utilities
│   ├── schemas/          Zod validation schemas
│   ├── compositions/     Your video projects
│   └── Root.tsx          Composition registry
├── scripts/              Pipeline scripts
│   ├── analyze-video.ts  Extract video metadata
│   ├── extract-audio.ts  Audio for Whisper
│   ├── transcribe.ts     Whisper AI transcription
│   ├── detect-silence.ts FFmpeg silence detection
│   └── remove-bg.ts      AI background removal
├── public/assets/        Your media files go here
├── CLAUDE.md             Claude's video editing brain
└── .claude/commands/     /start command
```

### Tech Stack

| Technology | Purpose |
|---|---|
| [Remotion](https://remotion.dev) | React-based video rendering framework |
| React 19 | Component-based video composition |
| TypeScript | Type-safe code |
| [Whisper.cpp](https://github.com/ggerganov/whisper.cpp) | Local AI transcription (word-level timestamps) |
| FFmpeg | Audio extraction, silence detection, video processing |
| [@imgly/background-removal](https://github.com/imgly/background-removal-js) | AI background removal |
| [Claude Code](https://claude.ai/code) | AI agent that writes and edits compositions |

### Requirements

- **Node.js 20+** (LTS recommended)
- **macOS, Linux, or Windows** with WSL
- **Claude Code** CLI installed

### License

MIT License. See [LICENSE](LICENSE) for details. Note: [Remotion](https://remotion.dev/license) and other dependencies have their own licenses.

---

Distributed by [Sendero IA](https://senderoiapro.com) | Original project by [@soyenriquerocha](https://instagram.com/soyenriquerocha)
