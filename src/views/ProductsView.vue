<template>
  <h2>產品列表</h2>
  <div class="container">
      <!-- row 決定內層的數量 -->
    <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 d-flex">
      <!-- 內層不定義寬度 -->
      <div class="col g-4" v-for="item in products" :key="item.id">
        <div class="card h-100">
          <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">
              {{item.description}}
            </p>
          </div>
          <div class="card-footer">
            <router-link :to="`/product/${item.id}`">查看細節</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: {}
    }
  },
  methods: {
    getProducts () {
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      )
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
