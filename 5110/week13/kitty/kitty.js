new Vue({
    el: '#app',
    data: {
        catArray: [],
        breeds: []
    },
    created() {
        this.loadNextImage();
    },
    methods: {
        async loadNextImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/breeds')
                this.catArray = response.data
                for (i = 0; i < this.catArray.length; i++) {
                    let breedId = this.catArray[i].id
                    let imgResponse = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId);
                    this.breeds.push(imgResponse.data[0]);
                }
            } catch (err) {
                console.log(err)
            }

        }
    }
})
