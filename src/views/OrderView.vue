<template>
  <div class="home container">
    <FormTemp v-slot="{ errors, values, validate }" @submit="onSubmit">
      {{ errors }} {{ values }}
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <FieldTemp
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        ></FieldTemp>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <FieldTemp
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></FieldTemp>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">電話</label>
        <FieldTemp
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|min:8"
          v-model="form.user.tel"
        ></FieldTemp>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <FieldTemp
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></FieldTemp>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea id="message" class="form-control" cols="15" rows="5"
        v-model="form.message"></textarea>
      </div>
      <button
        class="btn me-2 btn-outline-primary"
        type="button"
        @click="validate"
      >
        送出訂單
      </button>
    </FormTemp>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    onSubmit () {
      console.log(this.user)
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>
