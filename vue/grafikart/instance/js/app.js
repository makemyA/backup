let vm = new Vue({
    el: "#app",
    data: {
        seconds: 0,
        pokemons: ['Pikachu','Bulbizar','Dracaufeu'],
        pokem: "",
    },
    methods: {
        addPokemon() {
            this.pokemons.push(this.pokem);
        },
        destroy() {
            console.log('destroy');
            this.$destroy();
        }
    },
    mounted() {
        console.log('mounted');
        this.$interval = setInterval(()=>{
            this.seconds++;
            console.log('seconds');
        },1000)
    },
    destroyed() {
        console.log('destroyed');
        clearInterval(this.$interval);
    }
})