Vue.component('greeting', {
    template: '<p>Hey there, I am {{name}}.<button v-on:click="changeName">change name</button></p>',
    data:function() {
        
    
        return{
            name:'pooja'
        }
    },
    
    methods:{
        changeName:function(){
            this.name='poo';

        }

    }
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});


new Vue({
    el: '#vue-app-three',
    data: {
        output: 'Your favourite food'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    }
});