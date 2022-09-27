import { defineComponent } from "vue";

export default defineComponent({
    props: {
        productsPerPage: {
            type: Number,
            default: 1,
        },
        productsTotal: {
            type: Number,
            default: 1,
        }
    },
    methods : {
        query(page) {
            return {
                ...this.$route.query, //desestruturando a query
                _page: page
            }
        }
    },
    computed: {
        pageTotal() {
            const total = this.productsTotal / this.productsPerPage;
            return (total !== Infinity) ? Math.ceil(total) : 0;   // se em algum momento der um calculo com valor infinito ele dará 0
            
        }
    }
})