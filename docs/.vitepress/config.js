export default {
  title: 'SCRUM',
  description: 'Métodología Ágil',
  base: '/scrum/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },      
      { text: 'Comenzar', link: '/start/intro' },
      { text: 'CaribesTIC', link: 'https://caribestic.github.io/' },
      { text: 'GitHub', link: 'https://github.com/CaribesTIC/scrum' }      
    ],
    sidebar: [
      {
        text: 'Comenzar',   // required
        path: '/start/',    // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        collapsible: true,
        collapsed: false, 
        items: [
          { text: 'Introducción', link: '/start/intro' },                              
        ]
        }
        ,{
        text: 'Pilares',        
        path: '/pillars/',      // optional, link of the title, which should be an absolute path and must exist        
        collapsible: true,
        collapsed: true, 
        items: [          
          { text: 'Introducción', link: '/pillars/intro' },
          { text: '1. Transparencia', link: '/pillars/transparency' },
          { text: '2. Inspección', link: '/pillars/inspection' },
          { text: '3. Adaptación', link: '/pillars/adaptation' },
        ]
      },{
        text: 'Roles',
        path: '/roles/',
        collapsible: true,
        collapsed: true,      
        items: [
          { text: 'Definición de Roles', link: '/roles/role-definition' },
          { text: 'Dueño del Producto', link: '/roles/product-owner' },
          { text: 'Gestor del Proyecto', link: '/roles/project-manager' },
          { text: 'Equipo de Desarrollo', link: '/roles/development-team' },
          { text: 'Equipos de Alto Rendimiento', link: '/roles/high-performance-teams' },
          { text: 'Líder de Desarrollo', link: '/roles/development-leader' },          
          { text: 'Equipo de Pruebas', link: '/roles/test-team' },
          { text: 'DB Admin', link: '/roles/db-admin' },
          { text: 'Director de Informática', link: '/roles/it-director' },
        ]
      },{
        text: 'Artefactos',
        path: '/artifacts/',
        collapsible: true,
        collapsed: true,      
        items: [
          { text: 'Artefactos (herramientas)', link: '/artifacts/intro' },
          { text: 'Historia de Usuario', link: '/artifacts/user-stories' },
          { text: 'Historias Técnicas', link: '/artifacts/technical-stories' },
          { text: 'Pila del Producto', link: '/artifacts/metaphorical-system' },
          { text: 'Pila del Sprint', link: '/artifacts/simple-design' },
          { text: 'Incremento', link: '/artifacts/continuous-tests' } 
        ]
      },{
        text: 'Eventos',
        path: '/events/',
        collapsible: true,
        collapsed: true,      
        items: [
          { text: 'Garantías de resultados', link: '/events/intro' },
          { text: 'Planificación del Sprint', link: '/events/planning' },
          { text: 'Apertura Diaria', link: '/events/short-releases' },
          { text: 'Sprint', link: '/events/metaphorical-system' },
          { text: 'Revisión', link: '/events/simple-design' },
          { text: 'Retrospectiva', link: '/events/continuous-tests' }
        ]
      }
    ]
  }
}
