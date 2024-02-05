<template>
  <div class="container">
    <div class="input-form" >
      <todoForm />
    </div>
    <div class="database-data">
      <todoData :todos="todos" />
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
  data() {
    return {
      todos: [],
    };
  },
  methods: {

    },

};
</script>


