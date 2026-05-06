# 🧬 Correlativas — Lic. en Ciencias Biológicas (FaCENA – UNNE)

> Simulador de correlativas + repositorio de apuntes para la **Licenciatura en Ciencias Biológicas**  
> Facultad de Ciencias Exactas y Naturales y Agrimensura — UNNE, Corrientes, Argentina.

[![GitHub stars](https://img.shields.io/github/stars/meliochat/correlativas-biologia?style=for-the-badge&labelColor=0a0a0a&color=10b981)](https://github.com/meliochat/correlativas-biologia/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/meliochat/correlativas-biologia?style=for-the-badge&labelColor=0a0a0a&color=10b981)](https://github.com/meliochat/correlativas-biologia/network/members)
[![Contribuciones bienvenidas](https://img.shields.io/badge/contribuciones-bienvenidas-10b981?style=for-the-badge&labelColor=0a0a0a)](https://github.com/meliochat/correlativas-biologia/issues)

---

## Índice

- [Sobre el proyecto](#-sobre-el-proyecto)
- [Simulador de correlativas](#-simulador-de-correlativas)
- [Orientaciones disponibles](#-orientaciones-disponibles)
- [Apuntes por materia](#-apuntes-por-materia)
- [Cómo contribuir](#-cómo-contribuir)
- [Créditos](#-créditos)

---

## Sobre el proyecto

Hola! Soy **Meli**, estudiante de la **Licenciatura en Ciencias Biológicas** y **Licenciatura en Sistemas** en FaCENA – UNNE.

Armé este repo para tener en un solo lugar:
- Un **simulador visual de correlativas** para las 5 orientaciones de la carrera
- **Apuntes, resúmenes y parciales** organizados por materia
- Un espacio para que otros estudiantes **compartan material**

> ⚠️ Este repositorio **NO es oficial**. El contenido es aportado por estudiantes voluntariamente.

---

## Simulador de correlativas

El simulador te permite:

- **Elegir tu orientación** al ingresar (Botánica, Ecología, Genética, Paleontología, Zoología)
- **Marcar el estado** de cada materia: Sin cursar / Regularizada / Aprobada
- Ver en tiempo real qué materias **podés cursar** según tus correlativas 🔓🔒
- **Filtrar** por: Todas / Disponibles para cursar / Aprobadas
- Ver tu **progreso** de la carrera con barra en vivo
- Cambiar entre **modo oscuro y claro** 🌙☀️
- El avance se **guarda automáticamente** en el navegador (localStorage)

### 👉 [Abrir simulador](https://correlativas-biologia.vercel.app/)

---

## 🌿 Orientaciones disponibles

| Orientación | Emoji | Materias propias |
|-------------|-------|-----------------|
| Botánica | 🌿 | Biotaxonomía de Briófitas y Pteridófitas, Biotaxonomía de Espermatófitas, Ecología Vegetal, Ficología, Micología |
| Ecología | 🌍 | Ecología Animal, Ecología Vegetal, Ecología de Poblaciones, Ecología de Comunidades, Limnología, Manejo de RR.NN. |
| Genética | 🧬 | Citogenética, Genética Molecular, Genética de Poblaciones, Genética Evolutiva |
| Paleontología | 🦴 | Geología Histórica, Paleobotánica, Paleoinvertebrados, Paleovertebrados, Sedimentología, Paleobiogeografía |
| Zoología | 🦎 | Anatomía Comparada de los Cordados, Embriología Animal, Histología Animal, Biología de los Artrópodos, Ecología Animal |

Las **materias común** (1°, 2° y 3° año) es igual para todas las orientaciones.

---

## 📚 Apuntes por materia

> Sección en construcción — ¡tu aporte es bienvenido!

Organizados por año y materia. Cada carpeta tiene (o tendrá) resúmenes, guías de práctica y parciales viejos.

### Primer Año
- [Matemática](./Materias/Matematica/)
- [Química General](./Materias/Quimica-General/)
- [Introducción a la Biología](./Materias/Introduccion-Biologia/)
- [Física General y Biológica](./Materias/Fisica-General-Biologica/)
- [Química Biológica](./Materias/Quimica-Biologica/)
- [Geología](./Materias/Geologia/)

### Segundo Año
- [Biología Celular y Molecular](./Materias/Biologia-Celular-Molecular/)
- [Bioestadística](./Materias/Bioestadistica/)
- [Biología de los Invertebrados](./Materias/Biologia-Invertebrados/)
- [Morfología Vegetal](./Materias/Morfologia-Vegetal/)

### Tercer Año
- [Genética](./Materias/Genetica/)
- [Fisiología Vegetal](./Materias/Fisiologia-Vegetal/)
- [Fisiología Animal](./Materias/Fisiologia-Animal/)
- [Ecología](./Materias/Ecologia/)
- [Diversidad Vegetal](./Materias/Diversidad-Vegetal/)
- [Biología de los Cordados](./Materias/Biologia-Cordados/)

---

## Cómo contribuir

¿Tenés apuntes, resúmenes, prácticos o parciales viejos? **¡Todo suma!**

### Opción 1 — Mandame el material por Issue (más fácil)

1. Entrá a [Issues → New Issue](https://github.com/meliochat/correlativas-biologia/issues/new)
2. Elegí la plantilla **"Aportar material"**
3. Completá:
   - Materia
   - Tipo de archivo (resumen, parcial, guía, etc.)
   - Subí el archivo o pegá el link
4. ¡Listo! Yo lo reviso y lo subo al repo

### Opción 2 — Pull Request

1. Hacé fork del repo
2. Agregá tu material en la carpeta `Materias/<nombre-materia>/`
3. Abrí un Pull Request con descripción de lo que aportás

### ¿Qué se puede aportar?

- 📝 Resúmenes y apuntes propios
- 📄 Parciales viejos (con o sin respuestas)
- 📋 Guías de práctica
- 💡 Tips de cursada
- 🐛 Correcciones de correlativas incorrectas

> ⚠️ Por favor no subas material protegido por copyright (libros completos, etc.)

---

## Correr el simulador localmente

```bash
git clone https://github.com/meliochat/correlativas-biologia.git
cd correlativas-biologia
npm install
npm run dev
```

Stack: **React 18 + Vite + Tailwind CSS 3**

---

## 🙌 Créditos

- **Idea original del simulador:** [@1Hagi](https://github.com/1Hagi) — Correlativas LSI
- **Inspiración del repo:** [@tobiager](https://github.com/tobiager) — [UNNE-LSI](https://github.com/tobiager/UNNE-LSI)
- **Plan de estudios:** CECENA – Franja Morada, FaCENA UNNE

---

## ⭐ Apoyá el proyecto

Si te fue útil, compartilo con tus compañeros y dejá una ⭐ en GitHub. ¡Ayuda a que más gente lo encuentre!

---

**❤️🧬 Hecho con dedicación por [@meliochat](https://github.com/meliochat) — Para que le sirva a quien venga detrás.**
