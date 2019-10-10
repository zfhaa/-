
const template = `
<nav>
<div class="left">
<router-link to="/">首页</router-link>
<router-link to="/movie">电影页</router-link>
</div>
<div class="right" v-if="loginUser">
<span>{{loginUser.name}}</span>
<button @click="LoginOut">退出登录</button>
</div>

</nav>
`

export default {
    template,
    computed:{
        loginUser(){
            return this.$store.state.loginUser.data;
        }
    },
    methods:{
        LoginOut(){
            this.$store.dispatch("loginOut")
            this.$router.push("/login");
   
   
        }
    }
   
}