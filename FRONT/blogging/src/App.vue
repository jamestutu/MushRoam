<template>
  <header></header>

  <div id="nav">
    <router-link :to="{ name: 'Register' }">Register</router-link> /
     <router-link :to="{ name: 'Login' }">Login</router-link> /
    <router-link :to="{ name: 'Home' }">MUSHROAM</router-link> /
    <router-link :to="{ name: 'PostList' }">Feed</router-link> /
    <router-link :to="{ name: 'PostCreate' }">New Post</router-link> /
    <router-link :to="{ name: 'About' }">About</router-link> /
    <a @click="logOut">Log Out</a>
  </div>
  <router-view />
</template>

<script>

export default {
  name: "App",
  methods: {
   async logOut() {
        const repsonse = await fetch("http://localhost:3000/users/logout", {
          credentials: "include",
        });
        const data = await response.json();
        console.log(data)
      }
    }
  };

</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  overflow-x: hidden;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  border-bottom:thin solid #ffffff;
  padding: 1.5em;
  background-color: #740214;
  color: white;
}

#nav a {
  font-size: 0.575em;
  text-decoration: none;
  color: rgb(163, 57, 57);
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
