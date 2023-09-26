<template>
  <h1>{{ $router.params.id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      datas: null,
    };
  },
  created() {
    fetch("http://localhost:3000/datas/" + this.$router.params.id)
      .then((response) => response.json())
      .then((data) => (this.datas = data))
      .then(() => console.log(this.data));
  },
};
</script>
