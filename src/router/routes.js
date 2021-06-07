
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue') 
      },
      {
        path: '/card',
        component: () => import('pages/Card.vue'),
      },
      {
        path: '/payments',
        component: () => import('pages/Payments.vue'),
      },
      {
        path: '/credit',
        component: () => import('pages/Credit.vue'),
      },
      {
        path: '/settings',
        component: () => import('pages/Settings.vue'),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
