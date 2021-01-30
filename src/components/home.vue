<template>
  <div class="hello">
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
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: left;
  justify-content: center;
  vertical-align: middle;
}
.menue {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.item {
  width: 500px;
  flex: 1;
  color: #03498f;
  cursor: pointer;
  border-bottom:  #00080f;
}
.item:hover {
  color: #0080ff;
  border-bottom:  #0080ff;
}

</style>
