<template>
  <div id="app">
    <div id="topBar"></div>
    <router-view/>
    
  </div>
</template>

<style>
#topBar{
  width: 100vw;
  height: 70px;
  top: 0;
  background-color: #42b983;
  left: 0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
