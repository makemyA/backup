let vm = new Vue({
    el:"#app",
    data: {
        message: "vide",
        firstname: "Paul",
        lastname: "Henrot",
        fullname: ""
    },
    watch: {
        message(){
            console.log('message')
        }
    },
    computed: {
        full_name: {
            get: function () {
               return `${this.firstname} ${this.lastname}`;
            },
            set: function (value) {
                console.log('set', value)
                let parts= value.split(" ");
                this.firstname= parts[0];
                this.lastname= parts[1];
            }
        }
    },
    methods: {
        setname (value) {
            this.fullname= `${this.firstname} ${this.lastname}`;
        }
    }
})