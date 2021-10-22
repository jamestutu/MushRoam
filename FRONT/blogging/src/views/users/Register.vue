<template>
  <section>
    <container>
    <h2>Sign Up</h2>
    <form @submit.prevent="registerUser">
      <div class="formgroup">
        <label for="email"></label>
        <input
          v-model="user.email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div class="formgroup">
        <label for="password"></label>

        <input
          v-model="user.password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="formgroup">
        <button type="submit">Sign Up</button>
      </div>
    </form>
    </container>
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

<style scoped>


h2 {
  color: white;
}

section {
  margin-top: 10em;
  background-color: #740214;
}

.formgroup {
  display: block;
  margin: 1em auto;
}

.formgroup input {
  border-radius: 1em;
  width: 70%;
  height: 3em;
  border: none;
  border-bottom: thin rgb(187, 187, 187) solid;
  outline: none;
  padding: 0.5em;
}

button {
  margin-top: 1em;
  cursor: pointer;
  color: #740214;
  border-radius: 2em;
  background-color: white;
  border: none;
  height: 3em;
  width: 40%;
  font-weight:bold;
}
</style>