# VUE
## Installation
* Via script tag

Useful for building internet site or little app or to integrate some vue in an existing project
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<body>    
    <div id="app">
    {{ message }}
</div>
<script>
    var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
</body>

```
* Via Vue client

Useful for a **clé sur porte** build environment who integrates some babel features, etc...
* [Adding Sass](https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/)
* [Adding Pug]()

```javascript
npm install -g @vue/cli
npm run serve
```
## Lexical
v-if

v-for

v-on

data

props

methods
## Useful Case
### Way 1: Single Component
### Way 2: 2 components with same parent
 Parent component receive data from a child component and send to other child component
 this.$emit
### Way3: Bus
bus.$emit
### Way4: Vuex
Vuex is a state manager like redux in React.
* state: create an object with our database form
* getters: function to access to the state information
* mutations: any action who changes state content (commit)
* actions: can trigger mutations functions. Allow us to do some stuff before the mutation trigger (like an ajax request) (this.$store.dispatch)
strict: set to true to prevent any state changes without the actions trigger
Pls note than you can use your own state manager if your app doesnt need a full vueX functionalities

### Comparaison with react

Vue | react
---| ---
**changement du dom implicite:** lorsque une variable change vue détecte directement le changement et envoie à la vue l'ordre de render le component| **changement du dom explicite:** On doit dire manuellement à la vue que le state à changé pour qu'il puisse render le component
Impossible de modifier un tableau avec son index. Il faut passer par une méthode intermédiaire tel que **push**, **splice**, etc...|
