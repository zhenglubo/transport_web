export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true,
        dva: true,
        
      }],
    ],
    routes: [{
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'User/User',
        },
        {
          path: '/user/user',
          component: 'User/User'
        },
        {
          path:'/order',
          routes:[
            {path:'/order/order',component:'Order/Order'}
          ]
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
            },
            
          ]
        }
      ]
    }],
};