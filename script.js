const { createApp } = Vue

createApp({
    data() {
        return {
            nuova:{
                daFare:"",
                fatto:false
            },
            cose:[
                {daFare:"prendi pasta",fatto:false},
                {daFare:"metti acqua",fatto:false},
                {daFare:"accendi foco",fatto:true},
                {daFare:"40 minutes",fatto:false},
                {daFare:"mhua",fatto:false}
            ],
            fatta:false
        }
    },
    methods:{
        aggiungi(){
            let add = {...this.nuova};
            this.cose.push(add)
            this.nuova.daFare = ""
        },
        rimuovi(pos){
            this.cose.splice(pos,1)
        },
        fatto(pos){
            this.cose[pos].fatto = !this.cose[pos].fatto
            console.log(this.cose.fatto)
        }
    }
}).mount('#app')