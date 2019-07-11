<template>
  <div
    id="test"
    class="container">
    <h2>Simple Board</h2>
    <div
      class="input-group"
      style="margin-bottom:10px;">
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="Enter the Movie"
        @keyup.enter="insertData(name)">
      <span class="input-group-btn">
        <button
          class="btn btn-default"
          type="button"
          @click="insertData(name)">입력</button>
      </span>
    </div>
    <ul class="list-group">
      <li
        v-for="(id, index) in data"
        :key="index"
        class="list-group-item">{{ id.year+" | "+id.title}}
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
              @click="deleteData(todo)">삭제</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// var moviedata = [
//   { year: null },
//   { title: null },
//   { info: null }
// ]
// @ is an alias to /src
export default {
  name: 'simple',
  data () {
    return {
      data: [
        { year: null },
        { title: null },
        { info: null }
      ],
      name: null
    }
  },
  methods: {
    getData () {
      console.log('getData')
      var vm = this
      this.$http.get('http://localhost:3000/dynamo/getall?tablename=Movies')
        .then((result) => {
          vm.data = result.data['Items']
          // console.log('vm.moviedata :' + JSON.stringify(vm.moviedata))
          console.log('vm.moviedata :' + JSON.stringify(vm.data))
        })
    },
    insertData (name) {
      this.todos.push({ name: name })
      // console.log(data)
      console.log(name)
    },
    deleteData (todo) {
      console.log('deleteTodo')
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
