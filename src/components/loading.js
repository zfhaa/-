import modal from "./modal.js"

const template = `
    <modal v-show="show">
        <div style="font-size:1.5em; color:#fff">
            加载中...
        </div>
    </modal>
`;

export default {
    template,
    props: {
        show: {
            default: false
        }
    },
    components: {
        modal
    }
}