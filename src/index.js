import App from './app.js'
import router from './router.js'
import store from './store/index.js'

store.dispatch("syncLocal");//同步本地存储
// window.store = store
const template = `
<App></App>
`


 new Vue({
    template,
    el: '#app',
    components: {
        App,
    },
    router,
    store
})