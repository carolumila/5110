Vue.component('toast', {
    props: {
        toastopinion: String,
        bgcolor: String
    },
    template: `<div>
            <button v-on:click="checkToast">check the toast</button><br>
            <img :src="image" alt="">
            <h3>The toast is {{toastState}} </h3>
            <h3>{{toastOpinion}}</h3>
            </div>
         `,
    data() {
        return {
            toastState: "burnt",
            image: "images/burnt.png",
            toastOpinion: "I hate toast"
        }
    },
    methods: {
        checkToast() {
            this.toastState = "perfect"
            this.image = "images/perfect.png"
            this.toastOpinion = "I love toast <3"
        }
    }
})

var co = new Vue({
    el: '#co'
})

