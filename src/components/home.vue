<template>
  <b-container class="position-relative">
    <b-row class="position-relative stars">
        <particles-bg type="custom" :bg="false" :config="config" />
    </b-row>
  </b-container>
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
        num: [0.1, 0.2],
        rps: 2,
        radius: [2, 9],
        life: [5, 20],
        v: [0.05, 0.1],
        tha: [-60, 60],
        color: "#a2e9ff",
        // body: icon,
        alpha: [1.2, 0],
        scale: [0.2, 0.05],
        position: "all",
        cross: "broud",
        random: 2,
        g: 0.3,
      
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
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
  /* padding-left: 40rem; */
  /* padding-right: 40rem; */
  /* padding-top: 5rem; */
  /* padding-bottom: 5.5rem; */
  border: 2px solid #c9cccf;
}
.position-relative {
  display: flex;
  height: 650px;
  width: 100%;
  /* background-color: #343a40; */
}
.stars {
  height: 300px;
  width: 100%;
  /* background-color: #343a40; */
}
.list {
  width: 100%;
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
