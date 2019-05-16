let vm = new Vue({
    el: "#app",
    data: {
        name: "",
        age: "",
        maladies: ['surménage','diabete','problème cardiaque'],
        data: "",
        valid: false,
    },
    methods: {
        validate() {
            this.valid= true;
        }
    }
})