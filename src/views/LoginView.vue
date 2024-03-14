<template>
  <div class="container">
    <form @submit.prevent="login" class="form">
      <label>Email:</label>
      <input type="email" v-model="loginEmail" class="input" required />

      <label>Password:</label>
      <input type="password" v-model="loginPassword" class="input" required />

      <RouterLink to="/landing"><button type="submit" class="button">Login</button></RouterLink>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
    };
  },
  methods: {
    async login() {
      // Make a POST request to your Node.js backend to login the user
      // You can reuse the login logic from the HomeView.vue component
      // or create a separate login API endpoint in your backend
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #779289;
  box-shadow: 0 0 10px rgba(17, 253, 0, 0.9);
  color: rgb(255, 252, 252);
  
}

.label {
  margin-bottom: 5px;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}
</style>
