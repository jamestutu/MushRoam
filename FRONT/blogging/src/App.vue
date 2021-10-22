<template>
  <header>
    mushroam
  </header>

  <div id="nav">
    <router-link :to="{ name: 'Register' }">Sign Up</router-link> /
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

header {
  z-index:999;
  background-color: #740214;
  padding: 1em;
  width:100%;
  color: white;
   border-bottom:thin solid #ffffff;
}

#nav {
  z-index:999;
  width:100%;
  border-bottom:thin solid #ffffff;
  padding: 1em;
  background-color: #740214;
  color: white;
  position: absolute;
  bottom: 0;
}

#nav a {
  font-size: 0.61em;
  text-decoration: none;
  color: rgb(201, 105, 105);
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
