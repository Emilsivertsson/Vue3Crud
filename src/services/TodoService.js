import axios from "axios";

const API_URL = "http://localhost:8080/todos";

class TodoService {
    getAllTodos() {
        return axios.get(`${API_URL}`)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    getOneTodo(id) {
        return axios.get(`${API_URL}/${id}`)
            .catch((error) => {
                console.log(error);
                throw error;
            });;
    }

    addTodo(todo) {
        return axios.post(`${API_URL}`, todo)
            .catch((error) => {
                console.log(error);
                throw error;
            });;
    }

    markTodoComplete(todo) {
        return axios.put(`${API_URL}/${todo.id}`, todo)
            .catch((error) => {
                console.log(error);
                throw error;
            });;
    }

    deleteTodo(id) {
        return axios.delete(`${API_URL}/${id}`)
            .catch((error) => {
                console.log(error);
                throw error;
            });;
    }
}

export default new TodoService();