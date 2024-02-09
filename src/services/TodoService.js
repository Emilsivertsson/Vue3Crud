import axios from "axios";

const API_URL = "http://spring17-env.eba-hp22cqpp.eu-north-1.elasticbeanstalk.com/todos";

// this service is used to make API calls to the backend
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

    updateTodoById(id, todo) {
        return axios.put(`${API_URL}/${id}`, todo)
            .catch((error) => {
                console.log(error);
                throw error;
            });;
    }

    markTodoComplete(id) {
        return axios.put(`${API_URL}/complete/${id}`)
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