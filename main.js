const app = Vue.createApp({
    data() {
        return {
            tasks: [
                { id: 1, title: "Build a quantum robot to help with the studies" },
                { id: 2, title: "I Will Study Quantum Mechaniques" },
                { id: 3, title: "I Will Ask Teacher Why I Should Study Quantum Mecaniques" },
                { id: 4, title: "Read 10 books on quantum mechanics (while avoiding paradoxes)" },
            ],
            text: ""
        }
    },
    methods: {
        addtask() {
            this.tasks[this.tasks.length] = { id: this.tasks.length, title: this.text };
        },

        updateMessage(event) {
            this.text = event.target.value;
        },

        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
})