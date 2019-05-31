
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') }
    ]
  },
  {
    path: '/tienda',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tienda.vue') },
      { path: 'probando', component: () => import('pages/probando.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
