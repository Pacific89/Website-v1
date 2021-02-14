<template>
  <div class="main">
    <v-card class="main">
        <v-container class="container">
          <v-row>
            <particles-bg type="custom" :bg="false" :config="config" />
          </v-row>
        </v-container>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: {
    msg: String
  },
  data: function() {
    return {
      config: {
        num: [0.2, 1.5],
        rps: 2,
        radius: [2, 5],
        life: [5, 10],
        v: [0.05, 0.1],
        tha: [-5, 5],
        color: "#a2e9ff",
        // body: icon,
        alpha: [1.0, 0],
        scale: [0.2, 0.05],
        position: "screen",
        cross: "cross",
        random: 10
      }
    };
  },
computed: {
  getImg() {
    return require('@/assets/homepage_main_stars.png')
  }
}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-left: 14rem;
  padding-right: 14rem;
}
.main {
  display: flex;
  align-items: left;
  justify-content: center;
  vertical-align: middle;
  color: #0080ff;
}
.mx-auto {
  position: relative;
  align-items: right;
  justify-content: right;
}
.menue {
  display: flex;
  align-items: right;
  justify-content: space-around;
  color: #0080ff;
}

.item {
  width: 500px;
  height: 50px;
  flex: 1;
  color: #939da7;
  cursor: pointer;
}
.item:hover {
  color: #a2e9ff;
  border: 2px solid #c9cccf;
  font-size: 20px;
}
</style>
