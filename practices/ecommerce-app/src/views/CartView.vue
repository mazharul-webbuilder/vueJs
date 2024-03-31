<template>
  <div class="container">
    <div class="divTable div-hover">

      <div class="rowTable bg-primary text-white pb-2">
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
              <h4 class="media-heading">
                <router-link class="text-dark" :to="{name: 'product.details', params: {slug: cart.product.slug}}">{{cart.product.name}}</router-link></h4>
            </div>
          </div>
        </div>
        <div class="divTableCol">
          <input type="number" :min="1" class="form-control" id="exampleInputEmail1" @input.prevent="qtyUpdate($event, cart.id)" :value="cart.qty"/>
        </div>
        <div class="divTableCol"><strong>${{cart.product.price}}</strong></div>
        <div class="divTableCol"><strong>${{(cart.product.price * cart.qty)}}</strong></div>
        <div class="divTableCol">
          <button type="button" class="btn btn-danger"><span class="fa fa-remove"></span> Remove</button>
        </div>
      </div>
      <!--Cart row end        -->

      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"><h5>Shipping Charge</h5></div>
        <div class="divTableCol">
          <h5><strong>$5</strong></h5>
        </div>
      </div>

      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"><h5>Grand Total</h5></div>
        <div class="divTableCol">
          <h5><strong>€570.00</strong></h5>
        </div>
      </div>
      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"><h3>Payable</h3></div>
        <div class="divTableCol">
          <h3><strong>€570.00</strong></h3>
        </div>
      </div>
      <div class="rowTable">
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol"></div>
        <div class="divTableCol">
        </div>
        <div class="divTableCol">
          <button type="button" class="btn btn-success">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/CartStore.js";
import {mapState, mapActions} from "pinia";
import axios from "@/axios.js";

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
    })
  },
  methods:{
    ...mapActions(useCartStore, {
      setCartProducts: "setCartProducts"
    }),
    qtyUpdate(event, cartId){
      this.model.product.qty = parseInt(event.target.value)
      axios.put(`/cart-update/${cartId}`, this.model.product).then((res) => {
        this.setCartProducts(res.data.cartProducts)
      })
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