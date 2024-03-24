import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        product: 0
    }),
    getters: {
        doubleOfProduct(state) {
            return state.product * 2
        }
    },
    actions: {
        increment() {
            this.product++;
        },
        decrement() {
            if (this.product === 0) {
                alert('Invalid action')
            } else {
                this.product--;
            }
        }
    }
});
