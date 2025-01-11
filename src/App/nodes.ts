import {
  jsIcon,
  reactIcon,
  nextIcon,
  reduxIcon,
  blenderIcon,
  threeIcon,
  tailwindIcon,
  gitIcon,
  testingIcon,
  devopsIcon,
  agileIcon,
  tsIcon
} from "../assets"

export const nodes = [
  {
    id: "0",
    type: "mindMap",
    data: { label: "React Flow Mind" },
    position: { x: 0, y: 0 }
  },
  {
    id: "1",
    type: "custom",
    data: { 
      title: "STACK",
      description: "CTO",
      emoji: jsIcon
    },
    position: { x: 0, y: 100 }
  },
  {
    id: "2",
    type: "custom",
    data: { 
      title: "React",
      description: "react description",
      emoji: reactIcon
    },
    position: { x: 0, y: 200 }
  },
  {
    id: "3",
    type: "custom",
    data: { 
      title: "React Native",
      description: "react native description",
      emoji: reactIcon 
    },
    position: { x: 0, y: 300 }
  },
  {
    id: "4",
    type: "custom",
    data: { 
      title: "Next",
      description: "next description",
      emoji: nextIcon
    },
    position: { x: 0, y: 400 }
  },
  {
    id: "5",
    type: "custom",
    data: { 
      title: "State Management",
      description: "Poseo experiencia en el manejo avanzado del estado utilizando librerías como Redux, Zustand y Context API. Esto incluye la gestión de estados globales y locales, implementación de patrones de arquitectura limpios y optimización del flujo de datos en aplicaciones complejas.",
      emoji: jsIcon
    },
    position: { x: 0, y: 500 }
  },
  {
    id: "6",
    type: "custom",
    data: { 
      title: "2D Graphics",
      description: "Mi experiencia incluye el desarrollo de gráficos 2D interactivos y animaciones fluidas usando librerías como Reanimated y React Spring. He creado transiciones personalizadas y animaciones optimizadas para interfaces visualmente atractivas.",
      emoji: jsIcon
    },
    position: { x: 0, y: 600 }
  },
  {
    id: "7",
    type: "custom",
    data: { 
      title: "3D Graphics",
      description: "He desarrollado experiencias tridimensionales interactivas, utilizando librerías y herramientas que permiten la creación de escenas complejas con optimización de rendimiento para web y móvil.",
      emoji: jsIcon
    },
    position: { x: 0, y: 700 }
  },
  {
    id: "8",
    type: "custom",
    data: { 
      title: "Three.js",
      description: "En proyectos 3D, utilizo Three.js para renderizar escenas avanzadas, manipular geometrías, materiales y animaciones, asegurando una experiencia inmersiva y fluida. También he trabajado con React Three Fiber para integrar Three.js en React Native y web.",
      emoji: threeIcon
    },
    position: { x: 0, y: 800 }
  },
  {
    id: "9",
    type: "custom",
    data: { 
      title: "Blender",
      description: "Tengo habilidades en el modelado 3D con Blender, creando modelos detallados, texturas y animaciones que pueden integrarse en proyectos interactivos. También optimizo activos 3D para garantizar un rendimiento adecuado en entornos de tiempo real.",
      emoji: blenderIcon
    },
    position: { x: 0, y: 900 }
  },
  {
    id: "10",
    type: "custom",
    data: { 
      title: "UI Libraries",
      description: "He utilizado librerías de diseño como Material UI, TailwindCSS y NativeWind para desarrollar interfaces modernas y consistentes, adaptadas a las necesidades del usuario y optimizadas para diferentes plataformas.",
      emoji: jsIcon
    },
    position: { x: 0, y: 1000 }
  },
  {
    id: "11",
    type: "custom",
    data: { 
      title: "Third Party Integrations",
      description: "",
      emoji: jsIcon
    },
    position: { x: 0, y: 1100 }
  },
  {
    id: "12",
    type: "custom",
    data: { 
      title: "Authentication",
      description: "He implementado sistemas de autenticación seguros utilizando OAuth, Firebase Auth y JWT. Esto incluye la configuración de autenticación social, manejo de tokens y medidas de seguridad adicionales para proteger datos sensibles.",
      emoji: jsIcon
    },
    position: { x: 0, y: 1200 }
  },
  {
    id: "13",
    type: "custom",
    data: { 
      title: "Payments",
      description: "Tengo experiencia en la integración de plataformas de pago como Stripe y PayPal, asegurando transacciones seguras y fluidas, y personalizando flujos de pago según las necesidades del cliente.",
      emoji: jsIcon
    },
    position: { x: 0, y: 1300 }
  },
  {
    id: "14",
    type: "custom",
    data: { 
      title: "Push Notifications",
      description: "He configurado y gestionado notificaciones push utilizando Firebase y Expo, permitiendo una comunicación efectiva con los usuarios y personalizando la experiencia según sus preferencias.",
      emoji: jsIcon
    },
    position: { x: 0, y: 1400 }
  },
  {
    id: "15",
    type: "custom",
    data: { 
      title: "Analytics",
      description: "He trabajado con herramientas como Google Analytics y Firebase Analytics para rastrear métricas clave, analizar el comportamiento del usuario y tomar decisiones informadas para mejorar la experiencia de las aplicaciones.",
      emoji: jsIcon
    },
    position: { x: 0, y: 1500 }
  },
  {
    id: "16",
    type: "custom",
    data: { 
      title: "UX/UI",
      description: "Diseño interfaces intuitivas y centradas en el usuario, combinando principios de diseño funcional con una estética moderna. Realizo pruebas de usabilidad para garantizar una experiencia consistente y atractiva.",
      emoji: jsIcon
    },
    position: { x: 0, y: 1600 }
  },
  {
    id: "17",
    type: "custom",
    data: {
      title: "Flujo de Desarrollo y Entrega de Software",
      description: "",
      emoji: jsIcon
    },
    position: { x: 0, y: 1700 }
  },
  {
    id: "18",
    type: "custom",
    data: { 
      title: "Metodologías Ágiles",
      description: "Tengo experiencia trabajando bajo metodologías ágiles como Scrum y Kanban, priorizando tareas, participando en reuniones de planificación y asegurando entregas dentro de los plazos establecidos.",
      emoji: agileIcon
    },
    position: { x: 0, y: 1800 }
  },
  {
    id: "19",
    type: "custom",
    data: { 
      title: "DevOps",
      description: "",
      emoji: devopsIcon
    },
    position: { x: 0, y: 1900 }
  },
  {
    id: "20",
    type: "custom",
    data: { 
      title: "Version Control",
      description: "Soy competente en Git y GitHub, manejando ramas, resolviendo conflictos y colaborando en proyectos de equipo con flujos de trabajo como Gitflow.",
      emoji: gitIcon
    },
    position: { x: 0, y: 2000 }
  },
  {
    id: "21",
    type: "custom",
    data: { 
      title: "CI/CD",
      description: "He implementado pipelines de integración y entrega continua, automatizando pruebas, despliegues y revisiones para mejorar la eficiencia del desarrollo y la calidad del producto.",
      emoji: jsIcon
    },
    position: { x: 0, y: 2100 }
  },
  {
    id: "22",
    type: "custom",
    data: { 
      title: "Testing",
      description: "Tengo experiencia escribiendo pruebas unitarias con Jest y pruebas de integración para asegurar la funcionalidad y calidad del código. Esto incluye el uso de mocks y configuraciones avanzadas para cubrir casos complejos.",
      emoji: testingIcon
    },
    position: { x: 0, y: 2200 }
  }
]
