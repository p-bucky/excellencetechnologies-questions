<template>
  <form @submit="onSubmit">
    <input
      class="task-input"
      type="text"
      v-model="text"
      name="text"
      placeholder="Add New Todo"
    />

    <input type="submit" value="New Todo" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
      };
      this.$emit("add-task", newTask);
      this.text = "";
    },
  },
};
</script>

<style scoped>
.task-input {
  width: 100%;
}
</style>