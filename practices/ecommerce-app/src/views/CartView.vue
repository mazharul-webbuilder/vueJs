<template>
  <div class="container">
    <div class="divTable div-hover mt-4">
      <div class="rowTable bg-dark text-white pb-2">
        <div class="divTableCol">Product</div>
        <div class="divTableCol">Quantity</div>
        <div class="divTableCol">Price</div>
        <div class="divTableCol">Total</div>
        <div class="divTableCol">Actions</div>
      </div>

      <!--Cart row start        -->
      <div class="rowTable" v-for="cart in cartProducts" :key="cart.id">
        <div class="divTableCol">
          <div class="media">
            <router-link class=" pull-left mr-2 ml-0" :to="{name: 'product.details', params: {slug: cart.product.slug}}">
              <img class="img-fluid" :src="cart.product.image" style="width: 92px; height: 72px; margin-left: 0" />
            </router-link>
            <div class="media-body">
              <p class="media-heading">
                <router-link class="text-dark" :to="{name: 'product.details', params: {slug: cart.product.slug}}">{{cart.product.name}}</router-link></p>
            </div>
          </div>
        </div>
        <div class="divTableCol">
          <input type="number" :min="1" class="form-control" id="exampleInputEmail1" @input.prevent="qtyUpdate($event, cart.id)" :value="cart.qty"/>
        </div>
        <div class="divTableCol"><strong>${{cart.product.price}}</strong></div>
        <div class="divTableCol"><strong>${{ (cart.product.price * cart.qty).toFixed(2) }}</strong></div>
        <div class="divTableCol">
          <button type="button" class="btn btn-danger" @click.prevent="removeFromCart(cart.id)">Remove</button>
        </div>
      </div>
      <!--Cart row end        -->

      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"><h5>Shipping Charge</h5></div>
        <div class="divTableCol">
          <h5><strong>${{shippingCharge}}</strong></h5>
        </div>
      </div>

      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"><h5>Sub Total</h5></div>
        <div class="divTableCol">
          <h5><strong>${{subTotal}}</strong></h5>
        </div>
      </div>
      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"><h3>Payable</h3></div>
        <div class="divTableCol">
          <h3><strong>${{totalPayable}}</strong></h3>
        </div>
      </div>
      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol">
        </div>
        <div class="divTableCol">
          <button type="button" class="btn btn-success" @click="handleCheckout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/CartStore.js";
import {mapState, mapActions} from "pinia";
import axios from "@/axios.js";
import {useAuthStore} from "@/stores/AuthStore.js";
import router from "@/router/index.js";

export default {
  name: "CartView",
  data(){
    return {
      model: {
        product: {
          qty: ''
        }
      }
    }
  },
  computed: {
    ...mapState(useCartStore, {
      cartProducts: "cartProducts",
      shippingCharge: "shippingCharge",
      subTotal: "subTotal",
      totalPayable: "totalPayable",
    }),
    ...mapState(useAuthStore, {
      isAuthenticated : "isAuthenticated"
    })
  },
  methods:{
    ...mapActions(useCartStore, {
      setCartProducts: "setCartProducts",
      setNumberOfProductInCart: "setNumberOfProductInCart",
      setShippingCharge: "setShippingCharge",
      setSubTotal: "setSubTotal",
      setTotalPayable: "setTotalPayable",
    }),
    qtyUpdate(event, cartId){
      this.model.product.qty = parseInt(event.target.value)
      axios.put(`/cart-update/${cartId}`, this.model.product).then((res) => {
        this.setCartProducts(res.data.cartProducts)
        this.setShippingCharge(res.data.shippingCost);
        this.setSubTotal(res.data.subTotal);
        this.setTotalPayable(res.data.totalPayable);
      })
    },
    removeFromCart(cartId) {
      axios.post(`/cart-remove/${cartId}`)
          .then((res) => {
            this.setCartProducts(res.data.products);
            this.setNumberOfProductInCart(res.data.countCart);
            this.setShippingCharge(res.data.shippingCost);
            this.setSubTotal(res.data.subTotal);
            this.setTotalPayable(res.data.totalPayable);
          })
    },
    handleCheckout(){
      if (this.isAuthenticated) {
        router.push('/checkout')
      } else {
        router.push('/login')
      }
    }
  }

}
</script>

<style scoped>
.mr-2{
  margin-right: 20px;
}

.divTable{
  display: table;
  width: 100%;
}
.rowTable {
  display: table-row;
}
.divTableHeading {
  display: table-header-group;
}
.divTableCol, .divTableHead {
  border-bottom: 1px solid #eee;
  display: table-cell;
  padding: 3px 10px;
}
.divTableHeading {
  background-color: #EEE;
  display: table-header-group;
  font-weight: bold;
}
.divTableFoot {
  background-color: #EEE;
  display: table-footer-group;
  font-weight: bold;
}
.divTableBody {
  display: table-row-group;
}

</style>