<template>
  <div id="app">
    <TheHeader/>
    <main id="main">
      <router-view/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader"
import TheFooter from "@/components/TheFooter"
export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

  body,
  ul,
  li,
  h1,
  h2,
  p {
    padding: 0px;
    margin: 0px;
  }
  ul { 
    list-style: none;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #345;
    background: url('./assets/img/pattern.jpg') repeat bottom;
    
  }

  a {
    color: #345;
    list-style: none;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .btn {
    display: block;
    padding: 10px 30px;
    background:rgb(8, 8, 8);
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30,60,90, 0.2);
    transition: all .3s;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

  .btn:hover {
    background: #65d;
    transform: scale(1.1);
  }
  .logo img {
    width: 140px;
  }

  #app {
    /*  deixando footer abaixo */
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #main {
    flex: 1;
  }

  label {
    margin-bottom: 5px;
  }
  input, textarea {
    border-radius: 4px;
    border: none;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all .3s;
    font-size: 1rem;
    outline: none;
    font-family: "Avenir" Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
  }

</style>