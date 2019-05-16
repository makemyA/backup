let formOld = {
    props: {
        name: {
            type: String,
            default: 'Paul'
        },
        user: {
            type: Object
        }
    },
    data() {
        return {
            firstname: "",
            lastname: "",
            userLocal: {
                ...this.user
            }
        }
    },
    methods: {
        save() {
            this.$emit('submit', this.userLocal)
        }
    },
    template: `
    <form @submit.prevent="save">
        <h1>Bonjour {{name}}</h1>
        <pre>{{userLocal}}</pre>
        <label for="firstname">Indiquez votre prénom</label>
        <input type="text" id="firstname" v-model="userLocal.firstname">
        <label for="lastname">Indiquez votre nom</label>
        <input type="text" id="lastname" v-model="userLocal.lastname">
        <button type="submit">Envoyer</button>
    </form>`
}
let formNew = {
    props: {
        name: {
            type: String,
            default: 'Celine'
        },
        value: {
            type: Object
        }
    },
    data() {
        return {
            firstname: "",
            lastname: "",
            user: {
                ...this.value
            }
        }
    },
    methods: {
        save() {
            this.$emit('input', this.user);
        }
    },
    template: `
    <form @submit.prevent="save">
        <h1>Bonjour {{name}}</h1>
        <pre>{{user}}</pre>
        <label for="firstname">Indiquez votre prénom</label>
        <input type="text" id="firstname" v-model="user.firstname">
        <label for="lastname">Indiquez votre nom</label>
        <input type="text" id="lastname" v-model="user.lastname">
        <button type="submit">Envoyer</button>
        <p>Test</p>
    </form>`
}

let vm = new Vue({
    el: "#app",
    components: {
        formOld,
        formNew
    },
    data: {
        user: {
            firstname: "Paul",
            lastname: 'Henrot'
        },
        firstname: "",
        lastname: ""
    },
    methods: {
        submited(data) {
            console.log('submited');
            this.user.firstname = data.firstname;
            this.user.lastname = data.lastname;
        }
    }
})