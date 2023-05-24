import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SCRUM',
  description: 'Métodología Ágil',
  base: '/scrum/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'SCRUM',
    nav: [
      { text: 'Inicio', link: '/' },           
      { text: 'Comenzar', link: '/start/intro' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }, 
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
          { text: 'Pila del Producto', link: '/artifacts/product-backlog' },
          { text: 'Pila del Sprint', link: '/artifacts/sprint-backlog' },
          { text: 'Incremento', link: '/artifacts/increment' } 
        ]
      },{
        text: 'Eventos',
        path: '/events/',
        collapsible: true,
        collapsed: true,      
        items: [
          { text: 'Los Eventos', link: '/events/intro' },
          { text: 'Planificación del Sprint', link: '/events/sprint-planning' },
          { text: 'Apertura Diaria', link: '/events/daily-opening' },
          { text: 'Sprint', link: '/events/sprint' },
          { text: 'Revisión del Sprint', link: '/events/sprint-review' },
          { text: 'Retrospectiva del Sprint', link: '/events/sprint-retrospective' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/scrum' }
    ]
  }
})
