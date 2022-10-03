import { defineComponent } from "vue";
import  LoginCreate  from "@/components/LoginCreate/LoginCreate.vue";

export default defineComponent({
    components: {
        LoginCreate
    },
    data() {
        return {
            login: {
                email: "",
                senha: "",
            }
        }
    },
    methods: {
        logar() {
            console.log('opa');
            
        }
    }
})