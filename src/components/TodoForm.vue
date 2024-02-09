<!-- This component is used to add a new item to the list. It has a form with two input fields for the title and description of the item. When the form is submitted, the addTodo method is called, which sends a POST request to the server to add the new item to the database.
 After the item is added, the page is reloaded to display the updated list of todos. -->

<template>
  <div class="container">
    <form>
      <div class="form-group" >
        <label for="title">Title</label>
        <input type="text" class="form-control form-control-lg" id="title" v-model="todoTitle" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>

        <textarea class="form-control form-control-lg" rows="7" v-model="todoDescription" required></textarea>
      </div>
      <br>
      <button type="submit" class="btn btn-primary" @click.prevent="addTodo">Add Todo</button>
    </form>

  </div>

</template>

// this holds the methods for adding a new todo to the list and clearing the form after the todo is added.
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