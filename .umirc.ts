import { defineConfig } from 'umi';

export default defineConfig({
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  layout:{
    name: 'Ant Design',
    locale: true,
    routes: [
      { path: '404' }
    ]
  },
  plugins: [
  ]
});