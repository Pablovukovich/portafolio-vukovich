export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectDetails = {
  frontend: string[];
  backend: string[];
  objective: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  projectUrl?: string;
  documentationUrl?: string;
  technologies: string[];
  featured?: boolean;
  features: ProjectFeature[];
  details: ProjectDetails;
};

export const projects: Project[] = [
  {
    slug: "panel-knews",
    title: "PANEL KNEWS",
    description:
      "Panel de administracion para centralizar la gestion de todas las aplicaciones de Knews, con accesos, metricas y control operativo desde un mismo lugar.",
    image: "/ecosistema.png",
    technologies: ["Next.js", "TypeScript", "Dashboard", "APIs"],
    featured: true,
    features: [
      {
        title: "Administracion centralizada",
        description:
          "Reune las aplicaciones de Knews en un unico panel para acceder, revisar y gestionar cada producto sin cambiar de entorno.",
      },
      {
        title: "Vista del ecosistema",
        description:
          "Muestra el estado general de las plataformas, accesos principales y datos clave para entender rapidamente que ocurre en cada app.",
      },
      {
        title: "Gestion de contenidos",
        description:
          "Permite administrar publicaciones, recursos y configuraciones asociadas a las aplicaciones conectadas.",
      },
      {
        title: "Control operativo",
        description:
          "Esta pensado para facilitar tareas internas, seguimiento de actividad y organizacion del trabajo diario dentro del ecosistema Knews.",
      },
    ],
    details: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["API routes", "Servicios internos", "Gestion de datos"],
      objective:
        "Construir un panel administrativo que funcione como centro de control para todas las aplicaciones de Knews, ordenando accesos, datos y tareas operativas en una experiencia clara y eficiente.",
    },
  },
  {
    slug: "blog-knews",
    title: "BLOG KNEWS",
    description:
      "Blog de noticias orientado a novedades de musica y cultura pop, con contenido organizado, lectura clara y acceso rapido a publicaciones destacadas.",
    image: "/blog-mock.jpg",
    technologies: ["Next.js", "Tailwind", "shadcn/ui", "Postgres"],
    features: [
      {
        title: "Secciones de noticias",
        description:
          "La app organiza el contenido por categorias para separar lanzamientos, giras, entrevistas, colaboraciones y novedades relevantes.",
      },
      {
        title: "Comentarios e interaccion",
        description:
          "Cada articulo esta pensado para recibir comentarios y generar conversacion alrededor de las publicaciones.",
      },
      {
        title: "Busqueda y filtrado",
        description:
          "Incluye una experiencia de busqueda para encontrar noticias por tema, categoria o contenido destacado.",
      },
      {
        title: "Articulos multimedia",
        description:
          "Las publicaciones combinan texto, imagenes y recursos visuales para reforzar la lectura y hacer el contenido mas atractivo.",
      },
    ],
    details: {
      frontend: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
      backend: ["Postgres", "API routes", "Modelo relacional de datos"],
      objective:
        "Construir una plataforma editorial ordenada y visualmente atractiva, capaz de mostrar noticias, agrupar contenido por intereses y practicar un flujo full stack de publicacion, busqueda e interaccion.",
    },
  },
  {
    slug: "k-play",
    title: "K-PLAY",
    description:
      "Plataforma de streaming con catalogo de peliculas, detalle de titulos, favoritos y recomendaciones personalizadas.",
    image: "/k-play.jpg",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    features: [
      {
        title: "Catalogo de contenido",
        description:
          "Presenta peliculas y series en una grilla navegable, con informacion visual para reconocer rapido cada titulo.",
      },
      {
        title: "Detalle de cada titulo",
        description:
          "Cada contenido puede tener una vista propia con sinopsis, datos principales, genero y acciones de usuario.",
      },
      {
        title: "Favoritos",
        description:
          "Permite guardar titulos para construir una lista personal y volver a ellos sin tener que buscarlos otra vez.",
      },
      {
        title: "Recomendaciones",
        description:
          "La experiencia contempla sugerencias relacionadas para mantener la navegacion fluida dentro del catalogo.",
      },
    ],
    details: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      objective:
        "Desarrollar una experiencia tipo streaming que combine exploracion de catalogo, gestion de preferencias y arquitectura full stack escalable para manejar usuarios, titulos y listas personalizadas.",
    },
  },
  {
    slug: "pinkterest",
    title: "PINKTEREST",
    description:
      "Red social de imagenes con feed personalizado, tableros, busqueda por temas y seguimiento entre usuarios.",
    image: "/pinkterest-mock.jpg",
    technologies: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    features: [
      {
        title: "Feed visual",
        description:
          "La pantalla principal prioriza imagenes y publicaciones guardables, pensadas para descubrir contenido de manera rapida.",
      },
      {
        title: "Tableros y colecciones",
        description:
          "Los usuarios pueden organizar imagenes por intereses, proyectos o referencias personales.",
      },
      {
        title: "Busqueda tematica",
        description:
          "La app esta pensada para encontrar publicaciones por palabras clave, etiquetas o estilos visuales.",
      },
      {
        title: "Perfiles y seguimiento",
        description:
          "Incluye una estructura social donde cada usuario puede seguir perfiles y construir una experiencia personalizada.",
      },
    ],
    details: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Prisma", "Base de datos relacional", "Stripe"],
      objective:
        "Crear una red visual donde la inspiracion pueda descubrirse, guardarse y organizarse, integrando autenticacion, colecciones y una base preparada para funciones sociales y monetizacion.",
    },
  },
  {
    slug: "k-music",
    title: "K-MUSIC",
    description:
      "Plataforma musical con catalogo de canciones, detalle de artistas, playlists y recomendaciones personalizadas.",
    image: "/k-music.jpg",
    technologies: ["Next.js", "Motion", "Lucide", "Tailwind"],
    features: [
      {
        title: "Catalogo musical",
        description:
          "Agrupa canciones, artistas y lanzamientos para que la navegacion sea directa y centrada en el contenido.",
      },
      {
        title: "Detalle de artistas",
        description:
          "Cada artista puede tener una vista con informacion, canciones asociadas y contenido destacado.",
      },
      {
        title: "Playlists",
        description:
          "La estructura permite crear listas tematicas y destacar selecciones musicales segun el estado o preferencia del usuario.",
      },
      {
        title: "Interfaz animada",
        description:
          "Usa transiciones y microinteracciones para reforzar una experiencia de escucha moderna y dinamica.",
      },
    ],
    details: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Motion", "Lucide"],
      backend: ["API routes", "Estructura de datos musical", "Servicios de catalogo"],
      objective:
        "Diseñar una plataforma musical atractiva que permita explorar canciones, artistas y playlists, practicando interfaces interactivas y una arquitectura preparada para contenido dinamico.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
