<template>
<section> 
<h2>Login</h2>
  <form @submit.prevent="logIn">
    <div class="formgroup">
      <label for="email">Email</label>
      <input v-model="user.email" type="email" name="email" id="email" />
    </div>
    <div class="formgroup">
      <label for="password">Password</label>
      <input
        v-model="user.password"
        type="password"
        name="password"
        id="password"
      />
    </div>
    <div class="formgroup">
      <button type="submit">Log In</button>
    </div>
  </form>
  <!-- {{user}} -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async logIn() {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
        credentials: "include",
      });
      const userData = await response.json();
      console.log(userData);
    },
  },
};
</script>

<style>
</style>