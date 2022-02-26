<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">前台</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">進入後台</router-link>
          </li>
        </ul>
          <router-link class="btn btn-primary" to="/order">
            結帳
            <span class="badge rounded-pill bg-danger">{{cartData.carts?.length }}</span>
          </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      products: {},
      productId: '',
      cartData: {},
      isLoading: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    updateQty (item) {
      this.isLoading = item.id
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, {
        data
      })
        .then(res => {
          this.getCartData()
          this.isLoading = ''
        })
        .catch(err => {
          console.log(err)
          this.isLoading = ''
        })
    },
    deleteCartItem (id) {
      this.isLoading = id
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then(res => {
          this.getCartData()
          this.isLoading = ''
        })
        .catch(err => {
          console.log(err)
          this.isLoading = ''
        })
    },
    cleanCart () {
      this.isLoading = true
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then(res => {
          this.getCartData()
          this.isLoading = ''
        })
        .catch(err => {
          console.log(err)
          this.isLoading = ''
        })
    },
    addItemToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty: qty
      }
      this.isLoading = id
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
        data
      })
        .then(res => {
          this.getCartData()
          this.isLoading = ''
        })
        .catch(err => {
          console.log(err)
          this.isLoading = ''
        })
    },
    openProductModal (id) {
      this.productId = id
      this.$refs.productModal.openModal()
    },
    getCartData () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartData = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitOrder () {
      this.isLoading = true
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: this.form })
        .then(res => {
          alert('訂單已成功送出')
          this.getCartData()
          this.$refs.form.resetForm()
          this.isLoading = ''
        })
        .catch(err => {
          console.log(err)
          this.isLoading = ''
        })
    }
  },
  mounted () {
    this.getCartData()
    emitter.on('get-cart', () => {
      this.getCartData()
    })
  }
}
</script>
