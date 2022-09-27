import { defineComponent } from "vue";
import gym from "@/assets/icons/gym.svg";
import travel from "@/assets/icons/carro.svg";
import computing from "@/assets/icons/computador-portatil.svg";
import music from "@/assets/icons/musica-alt.svg";
import sports  from "@/assets/icons/sports.svg";
import properties  from "@/assets/icons/properties.svg";

export default defineComponent({
    data() {
        return {
            search: "",
            gym: gym,
            travel: travel,
            computing: computing,
            music: music,
            sports: sports,
            properties: properties,
        }
    },
    methods: {
        SearchProducts() {
            this.$router.push({query: {q: this.search}});
        }
    }    
})
