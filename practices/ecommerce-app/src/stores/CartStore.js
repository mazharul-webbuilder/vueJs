import {defineStore} from "pinia";
import axios from "@/axios.js";
export  const useCartStore = defineStore('cart', {
    state: () => ({
        numberOfProductInCart: 0
    }),
    getters: {

    },
    actions: {
        addToCart(requestData){
            axios.post('add-to-cart', requestData)
                .then((res) => {
                    this.numberOfProductInCart = res.data.countCart;
                })
        },
        setNumberOfProductInCart(total){
            this.numberOfProductInCart = total
        }
    }
})