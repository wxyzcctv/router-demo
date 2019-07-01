import RouterDemo from './components/RouterDemo'
import RouterChildrenDemo from './components/RouterChildrenDemo'

const routes = [
    { path: '/foo', component: RouterDemo, name: '1' },
    // 只要路径满足对应的path，就将组件RouterDemo渲染到页面上，
    // 组件渲染的地方就是APP中的<router-view>中
    { path: '/bar', component: RouterDemo, name: '2' },
    { path: '/user/:id',
      component: RouterDemo,
      name: '3',
      props: true,
    //   这里设置了props的属性为true，那么就可以进行动态的修改id
      children: [
          {
              path: 'profile',
              component:RouterChildrenDemo,
            //   通过children设置了路由的层级关系
              name: '3-1'
          },
          {
              path: 'posts',
              component: RouterChildrenDemo
          }
      ]
    },
    { path: '/a', redirect: '/bar'},
    { path: '*', component: RouterDemo, name: '404' },
    { path: '/', component: RouterDemo, name: '首页'}
]

export default routes