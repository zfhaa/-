const template = `
    <div class="pager">
    <a class="pager-item" @click="changePage(1)":class="{disabled:value===1}">首页</a>
    <a class="pager-item" @click="changePage(value-1)" :class="{disabled:value===1}">上一页</a>
    <a class="pager-item" @click="changePage(item)" v-for="item in numbers" :class="{active:item===value}">{{item}}</a>
 
    <a class="pager-item" @click="changePage(value+1)" :class="{disabled:value===pagerNumber}">下一页</a>
    <a class="pager-item" @click="changePage(pagerNumber)" :class="{disabled:value===pagerNumber}">尾页</a>
    <span class="pager-text">
    <i>{{value}}</i>
    /
    <i>{{pagerNumber}}</i>
    </span>
    
    </div>
`;

export default {
    template,
    props: {
        value: {
            type: Number,
            default: 1
        },
        pageSize: { //页容量
            type: Number,
            default: 10
        },
        panelNumber: {
            type: Number,
            default: 5
        },
        total: {
            type: Number,
           
        }
    },
    computed:{
        pagerNumber(){
           return Math.ceil(this.total / this.pageSize) 
        },
        numbers(){
            var min = this.value - Math.floor(this.panelNumber/2)
            if(min<1){
                min = 1
            }
            var max = min + this.panelNumber -1;
            if(max>this.pagerNumber){
                max = this.pagerNumber
            }
            const arr= [];
            for(let i = min;i<=max;i++){
                arr.push(i)
            }  
            return arr
        }
    },
    methods:{
        changePage(newPage){
            if(newPage<1){
                newPage = 1
            }
            else{
                if(newPage > this.pagerNumber){
                    newPage = this.pagerNumber
                }
            }
            this.$emit("change",newPage)
        }
    }
}