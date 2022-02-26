<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input
              v-model="user.username"
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button
            @click.prevent="login"
            class="btn btn-lg btn-primary w-100 mt-3"
            type="submit"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>
<style>
/* html,
body {
  height: 100%;
  text-align: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
} */
</style>

<script>
export default {
  data () {
    return {
      url: process.env.VUE_APP_API,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${this.url}/admin/signin`
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `otisToken=${token};expires=${new Date(
            expired
          )}; path=/`
          this.$router.push('/admin')
        })
        .catch((error) => {
          console.log(error.data)
        })
    }
  }
}
</script>
