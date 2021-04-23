var computed = new Vue({
    el: '#compute',
    data: {
        firstName: "Caroline",
        lastName: "Umila"
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
})
