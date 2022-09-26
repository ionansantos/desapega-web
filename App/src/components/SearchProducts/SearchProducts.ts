import { defineComponent } from "vue";
import purchases from "@/assets/icons/purchase.svg";
import travel from "@/assets/icons/carro.svg";
import computing from "@/assets/icons/computador-portatil.svg";
import music from "@/assets/icons/musica-alt.svg";
import jobs  from "@/assets/icons/jobs.svg";
import properties  from "@/assets/icons/properties.svg";

export default defineComponent({
    data() {
        return {
            search: "",
            purchases: purchases,
            travel: travel,
            computing: computing,
            music: music,
            jobs: jobs,
            properties: properties,
        }
    },
    methods: {
        SearchProducts() {
            this.$router.push({query: {q: this.search}});
        }
    }    
})
