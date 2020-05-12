
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/kecheng/a/a' },
       /* { path: '/d1',component:'../pages/design/uncontrolled/uncontrolled.js', },
        { path: '/qq',component:'../pages/kecheng/kecheng', },
        { path: '/eslink',component:'../pages/eslinks/eslinks.js', },
        { path: '/statres',component:'../pages/jxs/statres.js', },
        { path: '/dzj',component:'../pages/domo16/dzj.js', },
        { path: '/propsandstartre',component:'../pages/jxs/propsandstartre2.js', },
        { path: '/kya', component: '../pages/kecheng/kecheng' },
        { path: '/form', component: '../pages/form/form1' },
        { path: '/form1', component: '../pages/form/form2' },
        { path: '/web', component: '../pages/form/web/website' },
        { path: '/2', component: '../pages/biaoge/demo2' },
        { path: '/z', component: '../pages/children/containers' },
        { path: '/ss', component: '../pages/index' },
        { path: '/a', component: '../pages/table/table' },
        { path: '/s', component: '../pages/table/schedule' },
        { path: '/s2', component: '../pages/table/schedule2' },
        { path: '/c', component: '../pages/demo/Cards' },*/
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
