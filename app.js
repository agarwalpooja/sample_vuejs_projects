new Vue({
    el:'#vue-app',
    data:{
        age:30,
        a:0,
        b:0,
        x:0,
        y:0,
        available:false,nearby:false,
        error:false,success:false,
        name:'shaun',
        job:'ninja',
        website:'https://thenetninja.co.uk',
        websitetag:"<a href="https://thenetninja.co.uk"></a>",
    },
    methods:{
        greet:function(time){
            return 'good '+time+' ' +this.name;
        }
        add:function(inc){
            this.age+=inc;
        }
        sub:function(inc1){
            this.age-=inc1;
        }
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;               

            }
        // addtoA():function(){
        //     console.log("add to a");
        //     return this.a+this.age;
        // }
        // addtoB():function(){
        //     console.log("add to b");
        //     return this.b+this.age;

        // }
        },
        computed:{
            addtoA():function(){
                console.log("add to a");
                return this.a+this.age;
            }
            addtoB():function(){
                console.log("add to b");
                return this.b+this.age;
    
            }
            compClasses:function(){
                return { 
                    nearby:this.nearby,
                    available:this.available,
                }
            }
        }
});