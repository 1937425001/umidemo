
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/biaoge/demo1' },
        { path: '/2', component: '../pages/biaoge/demo2' },
        { path: '/z', component: '../pages/children/containers' },
        { path: '/ss', component: '../pages/index' },
        { path: '/a', component: '../pages/table/table' },
        { path: '/s', component: '../pages/table/schedule' },
        { path: '/s2', component: '../pages/table/schedule2' },
        { path: '/c', component: '../pages/demo/Cards' },
        { path: '/asd', component: '../pages/table/demo' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'umidemo',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
