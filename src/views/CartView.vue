<template>
  <div class="container">
    <h2>購物車</h2>
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button"
      :disabled="isLoading === true || cartData.carts?.length === 0" @click="cleanCart">
        <span v-show="isLoading" class="spinner-border spinner-border-sm"></span>
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in cartData.carts" :key="item.id">
          <tr>
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm"
              @click="deleteCartItem(item.id)" :disabled="productId === item.id">
                <span v-show="isLoading === item.id" class="spinner-border spinner-border-sm"></span>
                <span v-show="isLoading !== item.id" class="mx-1">X</span>
              </button>
            </td>
            <td>
              {{item.product.title}}
              <div class="text-success">
                已套用優惠券
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <select name="" id="" class="form-select" v-model.number="item.qty" @change="updateQty(item)"
                    :disabled="isLoading === item.id">
                    <option :value="num" v-for="num in 20" :key="`${item.product.id}+${num}`">
                      {{num}}
                    </option>
                  </select>
                  <!-- <input min="1" type="number" class="form-control" v-model=""> -->
                  <span class="input-group-text" id="basic-addon2">{{item.product.unit}}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <!-- <small class="text-success">折扣價：</small> -->
              {{item.total}}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{cartData.total }}</td>
        </tr>
        <tr>
          <!-- <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ }}</td> -->
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      cartData: {},
      products: {},
      productId: '',
      isLoading: ''
    }
  },
  methods: {
    getCartData () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartData = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCartItem (id) {
      this.isLoading = id
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then(res => {
          this.getCartData()
          emitter.emit('get-cart')
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
          emitter.emit('get-cart')
          this.isLoading = ''
        })
        .catch(err => {
          console.log(err)
          this.isLoading = ''
        })
    },
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
    }
  },
  mounted () {
    this.getCartData()
  }
}
</script>
