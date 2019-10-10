import loginService from "../services/loginService.js";

export default new Vuex.Store({
    state: {
        loginUser: {
            data: null,
            isLoading: false
        }
    },
    mutations: {
        setIsLoading(state, payload) {
            state.loginUser.isLoading = payload
        },
        setUser(state, userObj) {
            state.loginUser.data = userObj
        }
    },
    actions: {
        async login(context, payload) {
            context.commit("setIsLoading", true);
            const resp = await loginService.login(payload.loginId, payload.loginPwd)
            if (resp) {
                context.commit("setUser", resp);
                //额外操作，保存用户信息到localStorage(本地存储)
                localStorage.setItem("loginUser", JSON.stringify(resp));
                return true;
            }
            context.commit("setIsLoading", false);
            return false;

        },
        loginOut(context) {
            context.commit("setUser", null);
            localStorage.removeItem("loginUser")
        },
        syncLocal(context) {
            //刷新页面时，同步本地数据，不会因为刷新页面而丢失数据
            const local = localStorage.getItem("loginUser");
            if (local) { //已经登录
                const user = JSON.parse(local); //拿出本地存储的用户对象
                context.commit("setUser", user); //同步到状态
            }
        }

    }
})