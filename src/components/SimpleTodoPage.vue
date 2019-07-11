<template>
  <div
    id="test"
    class="container">
    <h2>Todo List</h2>
    <div
      class="input-group"
      style="margin-bottom:10px;">
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="할일을 입력하세요"
        @keyup.enter="createTodo(name)">
      <span class="input-group-btn">
        <button
          class="btn btn-default"
          type="button"
          @click="createTodo(name)">추가</button>
      </span>
    </div>
    <ul class="list-group">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="list-group-item">{{ todo.name }}
        <div
          class="btn-group pull-right"
          style="font-size: 12px; line-height: 1;">
          <button
            type="button"
            class="btn-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            더보기
          </button>
          <ul class="dropdown-menu">
            <li><a
              href="#"
              @click="deleteTodo(todo)">삭제</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

var todos = []

// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      todos: [
        { name: '청소' },
        { name: '블로그 쓰기' },
        { name: '밥먹기' },
        { name: '안녕' }
      ],
      name: null
    }
  },
  mounted () {
    this.getTodos()
  },
  methods: {
    getTodos () {
      console.log('test1')
    },
    createTodo (name) {
      this.todos.push({ name: name })
      console.log(todos)
      console.log(name)
    },
    deleteTodo (todo) {
      console.log('deleteTodo')
    }
  }
}
</script>
