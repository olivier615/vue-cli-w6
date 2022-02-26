<template>
  <h2>單一產品</h2>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <img :src="product.imageUrl" class="card-img-top" :alt="product.title">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">{{product.description}}</p>
        <p class="card-text">{{product.price}}</p>
        <button class="btn btn-primary" @click="addItemToCart(product.id)">加入購物車</button>
      </div>
    </div>
    <button class="btn btn-primary" @click="backToPreviousPage">回上一頁</button>
  </div>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      product: {},
      isLoading: ''
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      )
        .then((res) => {
          this.product = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addItemToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty: qty
      }
      this.isLoading = id
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
          data
        })
        .then((res) => {
          // this.getCartData()
          this.isLoading = ''
          emitter.emit('get-cart')
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = ''
        })
    },
    backToPreviousPage () {
      this.$router.back(-1)
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
