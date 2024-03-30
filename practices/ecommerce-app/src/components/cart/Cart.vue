<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="cartDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-shopping-cart text-dark"></i> Cart
      <span class="badge rounded-circle bg-dark">{{countCart}}</span>
    </a>

    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="cartDropdown">
      <!-- Cart items -->
      <div class="dropdown-header">Shopping Cart</div>
      <!-- Example Cart Item -->
      <div class="dropdown-item">
        <img src="https://e7.pngegg.com/pngimages/646/822/png-clipart-quality-label-warranty-trademark-warranty-emblem-text.png" class="img-fluid" alt="Product Image">
        <div class="cart-item-details">
          <h6 class="card-subtitle mb-2 text-muted">Product Name</h6>
          <p class="card-text">Quantity: 1</p>
          <p class="card-text">Price: $XX.XX</p>
        </div>
      </div>
      <!-- End Cart items -->
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">View Cart</a>
    </div>
  </li>
</template>
<script>
export default {
  name: "CartComponent",
  props: ['countCart']
}
</script>