      new Vue({
            el: '#bobcat',
            data: {
                image: "",
                whichcat: "abob",
                allofit: [],
                i: 0
            },
            created() {
                this.loadNextImage(this.whichcat);
            },
            methods: {
                async loadNextImage(breedID) {
                    try {
                        axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46" 
                        let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                            params: {
                                limit: 10,
                                size: "full"
                            }
                        })
                        this.allofit = response.data;
                     
                    } catch (err) {
                        console.log(err)
                    }
                    this.slideshow()
                },
                async slideshow() {

                    if (this.i >= this.allofit.length) {
                        this.i = 0;
                    }
                    this.image = this.allofit[this.i];
                     this.i++;
                }
            }
        })