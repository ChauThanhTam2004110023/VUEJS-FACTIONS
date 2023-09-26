<template>
  <div>
    <form>
      <label>Email:</label>
      <input type="email" required v-model="email" />
      <label class="title-password">Password:</label>
      <input type="password" required v-model="password" />

      <label>Chính là tôi</label>
      <input type="checkbox" required v-model="checkbox" />

      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  background: white;
  padding: 40px;
  margin: 30px auto;
  text-align: left;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 25px;
  text-transform: uppercase;
  font-size: 0.6rem;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 3px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  position: relative;
  margin: 0 16px 0 0;
  top: 3px;
}
button {
  padding: 10px;
  border-radius: 20px;
  background: blue;
  color: white;
  margin: 10px 100px;
}
</style>
