const app = new Vue({
    el: '#app',
    data: {
        toDoList: [],
        toDo: ''
    },
    methods: {
        save() {
            if (!this.toDo) return
            else {
                this.toDoList.push({ text: this.toDo, completed: false })
                this.toDo = ''
            }
        },
        completed(td) {
            td.completed = true
            this.$set(td, 'completed', true)
        },
        remove(td) {
            const index = this.toDoList.indexOf(td)
            this.toDoList.splice(index, 1)
        }
    },
    mounted() {
        this.$refs.toDoInput.focus()
    },
    updated() {
        this.$refs.toDoInput.focus()
    }
})