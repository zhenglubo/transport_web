export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true
        // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      }],
    ],
    routes: [{
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'Helloworld',
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path:'/analyse',
          routes:[
            {
              path:'/analyse/aa',component:'Analyse/Aa'
            },
            {
              path:'/analyse/bb',component:'Analyse/Bb'
            },
            {
              path:'/analyse/cc',component:'Analyse/Cc'
            }
          ]
        }
      ]
    }],
};