let vm = new Vue({
    el: "#app",
    data: {
        message: "Hello boys",
        protocole: 'https://',
        link: "www.google.fr/",
        success: true,
        persons: ['Paul', 'Celinette', 'Marc', 'Nicolas', 'JF'],
        pers:'',
        name: '',
        data: "",
        validForm: false,
    },
    methods: {
        close() {
            this.success= false;
            console.log('hello');
        },
        change(value) {
            this.pers = value;
        },
        submit() {
            this.validForm= true
        }
    },
})