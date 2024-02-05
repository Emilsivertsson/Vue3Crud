<template>
  <div class="container">
    <form>
      <div class="form-group" >
        <label for="title">Title</label>
        <input type="text" class="form-control form-control-lg" id="title" v-model="todoTitle" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control form-control-lg" rows="7" v-model="todoDescription"></textarea>
      </div>
      <br>
      <button type="submit" class="btn btn-primary" @click.prevent="addTodo">Add Todo</button>
    </form>

  </div>

</template>

<script>
import TodoService from "@/services/TodoService.js";

export default {
  name: "TodoForm",
  data() {
    return {
      todoTitle: "",
      todoDescription: "",

    };
  },
  methods: {
    addTodo() {
      TodoService.addTodo({
        title: this.todoTitle,
        description: this.todoDescription,
        complete: false,
      }).then((response) => {
        console.log(response.data);
        window.location.reload();
        this.clearForm();
      });
    },
    clearForm() {
      this.todoTitle = "";
      this.todoDescription = "";
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

</style>