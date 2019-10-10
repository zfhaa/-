import Movie from './pages/moviePage.js'
import Home from './pages/index.js'
import MovieDetail from './pages/movieDetail.js'
import Login from "./pages/login.js"
import store from './store/index.js'


const router = new VueRouter({
    routes: [{
            path: "/",
            component: Home
        },
        {
            path: "/movie",component:Movie,meta:{
                 //自定义的数据，该数据通常会被导航守卫使用
                 needLogin: true
            }
        },
        {path:"/movie/:id",component:MovieDetail,meta:{needLogin:true}},
        {path:"/login",component:Login}
    ],
    mode: "hash"

})
//注册全局导航守卫：beforeEach，传入的函数会在每次进入页面之前运行
//一旦注册了该守卫，除非在守卫中调用next函数，否则不会改变地址
router.beforeEach(function(to,from,next){
    if(to.meta && to.meta.needLogin){
        if(store.state.loginUser.data){
            next();
            
        }
        else{
            next("/login");
        }
    }
    else{
        next();
    }
})


export default
router