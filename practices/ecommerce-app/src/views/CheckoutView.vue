<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Checkout</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" class="form-control" id="name" v-model="model.checkoutData.name" placeholder="Enter full name">
                <p v-if="errors.name" class="text-danger">{{errors.name[0]}}</p>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="delivery_address" v-model="model.checkoutData.delivery_address" placeholder="Enter delivery address">
                <p v-if="errors.delivery_address" class="text-danger">{{errors.delivery_address[0]}}</p>

              </div>
              <div class="form-group">
                <label for="contact">Contact</label>
                <input type="text" class="form-control" id="contact" v-model="model.checkoutData.contact_number" placeholder="Enter delivery phone number">
                <p v-if="errors.contact_number" class="text-danger">{{errors.contact_number[0]}}</p>

              </div>
              <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" v-model="model.checkoutData.city" placeholder="Enter city">
                <p v-if="errors.city" class="text-danger">{{errors.city[0]}}</p>

              </div>
              <div class="form-group">
                <label for="zip">ZIP Code</label>
                <input type="text" class="form-control" id="zip" v-model="model.checkoutData.zip_code" placeholder="Enter nearest zip code">
                <p v-if="errors.zip_code" class="text-danger">{{errors.zip_code[0]}}</p>

              </div>
              <div class="form-group">
                <label for="country">Country</label>
                <input type="text" class="form-control" id="country" v-model="model.checkoutData.country" placeholder="Enter country">
                <p v-if="errors.country" class="text-danger">{{errors.country[0]}}</p>

              </div>
              <button type="submit" class="btn btn-success mt-2 float-end">Place Order</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Total Item</th>
            <td>{{ totalItem }}</td>
          </tr>
          <tr>
            <th>Shipping Charge</th>
            <td>${{shippingCharge}}</td>
          </tr>
          <tr>
            <th>Sub Total</th>
            <td>${{subTotal}}</td>
          </tr>
          <tr>
            <th>Payable</th>
            <td>${{payable}}</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <th>COD</th>
          </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/CartStore.js";
import {mapState, mapActions} from "pinia";
import axios from "@/axios.js";
import { toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css'
import router from "@/router/index.js";

export default {
  name: "Checkout",
  data() {
    return {
      model: {
        checkoutData: {
          name: "",
          delivery_address: "",
          contact_number: "",
          city: "",
          zip_code: "",
          country: "",
        }
      },
      errors: ''
    };
  },
  computed: {
    ...mapState(useCartStore, {
      totalItem: "numberOfProductInCart",
      shippingCharge: "shippingCharge",
      subTotal: "subTotal",
      payable: "totalPayable"
    })
  },
  methods: {
    ...mapActions(useCartStore, {
      setCartCount: "setNumberOfProductInCart",
      setCartProducts: "setCartProducts"
    }),
    submitForm() {
      // Assign sub_total and grand_total from computed properties to checkoutData
      this.model.checkoutData.sub_total = this.subTotal;
      this.model.checkoutData.grand_total = this.payable;

      axios.post('/place-order', this.model.checkoutData)
          .then((res) => {
            this.errors = ''
            this.setCartCount(0)
            this.setCartProducts('')
            router.push('/order-confirmed')

            toast.success('Order placed successfully', {
              isLoading: false, // Set to true to show a loading spinner
              position: 'top-right', // Position of the notification
              duration: 3000,})


          })
          .catch((error) => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors
            }
          })
    }
  }
};
</script>
