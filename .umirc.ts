import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/about', component: '@/pages/about' },
        { path: '/test', component: '@/pages/test' },
      ],
    },
    { path: '/404', component: '@/pages/404' },
  ],
  ssr: {},
  // exportStatic: {},
});
