import {defineStore} from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        productQuantity: 0
    }),
    getters: {
        doubleOfProductQuantity(){
            return this.productQuantity * 2;
        }
    },
    actions: {
        increment(){
            this.productQuantity++
        },
        decrement(){
            this.productQuantity--
        }
    }
})