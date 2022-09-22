import { api } from "@/services/service.js";
import { serialize } from "@/helpers/serialize.js";
import { defineComponent } from "vue";

export default defineComponent({
    props: {},
    data() {
        return {
            products: null,
            productsPage: 9,
        }
    },
    computed: {
        url(): string {
            const query = serialize(this.$route.query);
            return `/produto?_limit=${this.productsPage}${query}`;
        }
    },
    methods : {
        getProducts() {
            api.get(this.url).then(r => {
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