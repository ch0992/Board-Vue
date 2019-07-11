<template>
  <div class="container">
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
export default {
  name: 'TodoPage',
  data: function () {
    return {
      name: null,
      todos: [
        // { name: '청소' },
        // { name: '블로그 쓰기' },
        // { name: '밥먹기' },
        // { name: '안녕' }
      ]
    }
  },
  method: {
    getTodos () {
      var vm = this
      this.$http.get('http://todos.garam.xyz/api/todos')
        .then((result) => {
          console.log('getTodo : ' + JSON.stringify(result))
          vm.todos = result.data.data
        })
    },
    createTodo (name) {
      console.log('name :' + name)
      if (name != null) {
        var vm = this
        this.$http.default.headers.post['Content-Type'] = 'application/json'
        this.$http.post('http://todos.garams.xyz/api/todos', {
          name: name
        }).then((result) => {
          vm.todos.push(result.push)
        })
        this.name = null
      }
    },
    deleteTodo (todo) {
      let vm = this
      this.todos.forEach((_todo, i, obj) => {
        if (_todo.id === todo.id) {
          vm.$http.delete('http://todos.garam.xyz/api/todos/' + todo.id)
            .then(() => {
              obj.splice(i, 1)
            })
        }
      })
    }
  },
  mounted () {
    console.log('mounted')
    this.getTodos()
  }
}
</script>
