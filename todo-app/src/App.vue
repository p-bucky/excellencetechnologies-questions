<template>
  <div>
    <Header title="Todo App" />
    <AddTask @add-task="addTask" />
    <Tasks :tasks="tasks" />
  </div>
</template>


<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
</style>
