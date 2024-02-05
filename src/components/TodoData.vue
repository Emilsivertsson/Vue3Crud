<template>
  <div class="container">
    <div class="header">
      <h1 class="text-center">Todos</h1>
    </div>
    <div class="table-container">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Complete?</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.title }}</td>
          <td>{{ todo.description }}</td>
          <td>
            <span v-if="todo.complete" class="text-success">&#10004; Completed</span>
            <span v-else class="text-warning">&#10060; Incomplete</span>
          </td>
          <td>
            <button type="button" class="btn btn-primary" @click.prevent="viewDescription(todo)">View Description</button>
            <button type="button" class="btn btn-danger" @click.prevent="deleteTodo(todo.id)">Delete Todo</button>
            <button type="button" class="btn btn-info" @click.prevent="editTodo(todo.id)">Edit Todo</button>
            <button type="button" class="btn btn-info" @click.prevent="markTodoComplete(todo)">Mark Complete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal for TODO description -->
    <div id="descriptionModal" class="modal" ref="descriptionModal">
      <div class="modal-content">
        <span class="close" @click="closeDescriptionModal">&times;</span>
        <p>{{ currentDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TodoService from "@/services/TodoService.js";

export default {
  name: "Todo",
  data() {
    return {
      todos: [],
      descriptionModalVisible: false,
      currentDescription: "",
    };
  },
  methods: {
    getTodos() {
      console.log("Get todos button clicked");
      TodoService.getAllTodos().then((response) => {
        this.todos = response.data;
      });
    },
    deleteTodo(id) {
      console.log("Delete button clicked");
      TodoService.deleteTodo(id).then((response) => {
        console.log(response.data);
        this.getTodos();
      });
    },
    editTodo() {
      console.log("Edit button clicked");
      //open edit modal
    },
    markTodoComplete(todo) {
      console.log("Mark complete button clicked");
      console.log(todo);
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        complete: !todo.complete,
      };
      console.log(updatedTodo);

      TodoService.markTodoComplete(updatedTodo).then((response) => {
        console.log(response.data);
        this.getTodos();
      });
    },
    viewDescription(todo) {
      console.log("View description button clicked");
      this.currentDescription = todo.description;
      this.$refs.descriptionModal.style.display = "block";
    },
    closeDescriptionModal() {
      this.$refs.descriptionModal.style.display = "none";
    },
  },
  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
