import { api } from "@/services/service.js";
import { serialize } from "@/helpers/serialize.js";
import   ProductsPage  from "@/components/ProductsPage/ProductsPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
    props: {},
    components: {
        ProductsPage
    },
    data() {
        return {
            products: null,
            productsPerPage: 9,
            productsTotal: 0,
        }
    },
    computed: {
        url(): string {
            const query = serialize(this.$route.query);
            return `/produto?_limit=${this.productsPerPage}${query}`;
        }
    },
    methods : {
        getProducts() {
            api.get(this.url).then(r => {
                this.productsTotal = Number(r.headers['x-total-count'])
                console.log(r);
                this.products = r.data;
            })
        }
    },
    watch: {
        url() {
            this.getProducts();
        }
    },
    created() {
        this.getProducts();
    }
})