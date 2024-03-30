import {defineStore} from "pinia";
import axios from "@/axios.js";
import { toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css'

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
            // Show Notification
            // npm install --save vue3-toastify
            toast.success('Item Add to cart!', {
                    isLoading: false, // Set to true to show a loading spinner
                    position: 'top-right', // Position of the notification
                    duration: 3000, // Auto close duration in milliseconds
                    transition: 'Vue-Toastification__bounce', // CSS transition class for animation
                    hideProgressBar: true, // Hide progress bar
                    closeButton: true, // Show close button
                    icon: '🛒', // Add an icon to the notification
                    className: 'toast-custom', // Add a custom CSS class for further styling
                    style: {
                        // Additional CSS styles for the toast notification
                    },
                    onClick: () => {}, // Function to execute when the toast is clicked
                    pauseOnHover: false, // Pause the timer when the mouse hovers over the toast
                    draggable: true, // Allow users to drag the toast
                    draggablePercent: 80, // Set the percentage width of the toast that is draggable
                    closeOnClick: true, // Close the toast when clicked
                    pauseOnFocusLoss: true, // Pause the timer when focus is lost from the window
                    limit: 5, // Maximum number of toasts to display at once
                    newestOnTop: false, // Show newest toast at the top
                    rtl: false, // Enable right-to-left layout
                    theme: 'dark', // Set theme (light or dark)
                }
            )
        },
        setNumberOfProductInCart(total){
            this.numberOfProductInCart = total
        }
    }
})