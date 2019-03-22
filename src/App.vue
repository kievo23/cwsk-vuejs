<template>
  <div id="app" class="page-wrapper chiller-theme toggled">
    <app-sidebar></app-sidebar>
      <main class="page-content">
        <div class="container-fluid">
          <router-view/>
        </div>
    </main>
  </div>
</template>

<script>
import sidebar from './components/Sidebar';
export default {
  name: 'App',
  components: {
    'app-sidebar': sidebar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* font-family: 'Roboto', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  */
  font-family: 'Raleway', sans-serif;
  /*
  font-family: 'PT Sans', sans-serif;
  */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.form-group{
}
</style>
