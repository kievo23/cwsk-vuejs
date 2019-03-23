<template>
  <div class="parlet w-25" id="dashboard">
    {{token}}
    <h2>Assets</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Tag</th>
          <th>Cost</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="asset in assets">
          <td>{{asset.name}}</td>
          <td>{{asset.tag}}</td>
          <td>{{asset.cost}}</td>
          <td>{{asset.createdAt}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      assets: []
    }
  },
  computed: {
    token(){
      return this.$store.state.token;
    },
    isAuth(){
      return this.$store.state.isAuth;
    }
  },
  methods: {

  },
  created(){
    //console.log(this.$store.state.test);
    //console.log(this.$store.state.token);
    this.$http.get('assets', { headers: { 'Authorization': "bearer " + this.token }})
    .then(response => {
      if(response.status == 200){
        console.log(response.data);
        this.assets = response.data.assets;
      }
    })
    .catch(e => {
      console.log(e.response);
      this.$toast.error({
          title:'Error',
          message:e.response.data.msg
      });
      //this.errors.push(e);
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#login{
  margin: 0 auto;
  margin-top:50px;
}
</style>
