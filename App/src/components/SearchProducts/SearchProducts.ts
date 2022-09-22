import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            search: "",
        }
    },
    methods: {
        SearchProducts() {
            this.$router.push({query: {q: this.search}});
        }
    }    
})
