
import Header from './components/header.js'




const template = `
<div>
<Header />
<router-view></router-view>
</div>

`

export default {
    template,
    components:{
        Header,
    }
   
}