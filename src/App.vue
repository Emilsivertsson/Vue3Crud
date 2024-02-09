//this is the main component of the application that holds the TodoForm and TodoData components

<template>
  <div class="header">
    <h1 class="text-center">Todos</h1>
  </div>
  <div class="container">
    <div class="input-form" >
      <todoForm />
    </div>
    <div class="database-data">
      <todoData />
    </div>
  </div>
</template>

<script>
import TodoData from "@/components/TodoData.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoService from "@/services/TodoService.js";

export default {
  name: "App",
  components: {
    TodoData,
    TodoForm,
    TodoService,
  },

};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin-top: -50px; /* Adjust the margin-top to reduce the empty space */
}
.header {
  background-color: #f2f2f2;
  padding: 45px;
  text-align: center;
  margin-bottom: -50px; /* Adjust the margin-bottom to reduce the empty space */
}
</style>


