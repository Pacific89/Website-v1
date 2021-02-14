<template>
<div class="m" :style="{ backgroundImage: 'url(' + require('@/assets/homepage_main.png') + ')' }">
  <!-- <div class="hello"> -->
    <!-- <v-row>
      <div class="menue">
        <div class="item">
          About
        </div>
        <div class="item">
          Projects
        </div>
        <div class="item">
          Coding
        </div>
      </div>
    </v-row> -->
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  name: 'home',
  props: {
    msg: String
  },
data () {
  return {
    myImage: require('@/assets/homepage_main.png')
  }
},
computed: {
  getImg() {
    return require('@/assets/homepage_main.png')
  }
}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  align-items: left;
  justify-content: center;
  vertical-align: middle;
  color: #0080ff;
}
.menue {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #0080ff;
}

.item {
  width: 500px;
  height: 50px;
  flex: 1;
  color: #03498f;
  cursor: pointer;
  border-bottom: 2px solid #00080f;
}
.item:hover {
  color: #0080ff;
  border-bottom: 2px solid #0080ff;
  font-size: 20px;
}



</style>
