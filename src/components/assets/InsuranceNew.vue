<template>
  <div class="card w-50" id="newasset">
    <strong class="mb-9 mp-4 pt-3 text-primary">Create Insurance Record</strong>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" v-model.lazy="name" name="name" v-validate="'required:true|min:2'">
          <div class="help-block alert alert-danger" v-show="errors.has('name')">{{errors.first('name')}}</div>
        </div>
        <div class="form-group">
          <label for="cost">Cost:</label>
          <input type="text" class="form-control" id="cost" v-model.lazy="cost" name="cost" v-validate="'required:true|min:3'">
          <div class="help-block alert alert-danger" v-show="errors.has('cost')">{{errors.first('cost')}}</div>
        </div>
        <div class="form-group">
          <label for="valuation">Asset:</label>
          <select name='assetId'  class='form-control' v-model.lazy='assetId'>
            <option>--select Asset--</option>
            <option v-for='asset in assets'  v-bind:value="asset.id">{{ asset.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="valuation">Insurance Firm:</label>
          <select name='assetId'  class='form-control' v-model.lazy='insuranceId'>
            <option>--select Insurance--</option>
            <option v-for='ins in insuranceFirms'  v-bind:value="ins.id">{{ ins.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="details">Details:</label>
          <textarea class="form-control" id="details" v-model.lazy="details" name="details" v-validate="'required:true|min:3'"></textarea>
          <div class="help-block alert alert-danger" v-show="errors.has('details')">{{errors.first('details')}}</div>
        </div>
        <button class="btn btn-primary form-control" v-on:click.prevent="createInsurance">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportNew',
  data() {
    return {
        name: '',
        cost: '',
        details: '',
        assetId: '',
        insuranceId: ''
    };
  },
  computed: {
    token(){
      return this.$store.state.token;
    },
    isAuth(){
      return this.$store.state.isAuth;
    },
    assets() {
      return this.$store.state.assets ;
    },
    insuranceFirms(){
      return this.$store.state.insuranceFirms;
    }
  },
  created() {
    this.$store.dispatch('fetchAssets');
    this.$store.dispatch('fetchInsuranceFirms');
  },
  methods: {
    createInsurance: function(){
      let supportPayload = {
        name: this.name,
        cost: parseInt(this.cost),
        details: this.details,
        asset: this.assetId,
        insuranceFirm: this.insuranceId
      };
      //console.log(user);
      this.$validator.validateAll().then(valid => {
        if(valid){
          //console.log(this.token);
          this.$http.post('insurances' , supportPayload, { headers: { 'Authorization': "bearer " + this.token }})
          .then(response => {
            // JSON responses are automatically parsed.
            //console.log(response.status);
            if(response.status == 201){
              this.$swal.fire({
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              }).then(rst => {
                this.$router.push({name: 'Assets'});
              });
            }
            //this.posts = response.data
          })
          .catch(e => {
            console.log(e.response);
            if(e.response.status == 401){
              this.$toast.error({
                  title:'Error',
                  message:e.response.data.msg
              });
              this.$router.push({name: 'Login'});
            }else{

            }

            //this.errors.push(e);
          })
        }
      });
    }
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
#newasset{
  margin: 0 auto;
  margin-top:50px;
}
</style>
