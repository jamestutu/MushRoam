<template>
  <form @submit.prevent="registerUser">
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
      <button type="submit">Register User</button>
    </div>
  </form>
  <!-- {{user}} -->
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
    async registerUser() {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
      });
      const userData = await response.json();
      console.log(userData);
    },
  },
};
</script>

<style>
</style>