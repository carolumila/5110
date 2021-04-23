Vue.component('show', {
    props: {
        whichcat: String
    },
    template: 
    /*html*/
        `<div id="cat">
        <h1>{{image.breeds[0].name}}</h1>
        <button v-on:click="slideshow()">show me another photo</button><br><br>
        <img :src="image.url" class="image main">
        <label for="description">Description:</label><p id="description" class="details">{{image.breeds[0].description}}</p>
        <label for="temperament">Temperament:</label><p id="temperament" class="details">{{image.breeds[0].temperament}}</p>
        <label for="origin">Origin:</label><p id="origin" class="details">{{image.breeds[0].origin}}</p>
        <div class="graphContainer main">
            <h2 class="graphTitle">Other Details</h2>
            <div class="graph">
                <div class="data">
                    <div id="child_friendly">
                        <div class="bar" :style="{height: image.breeds[0].child_friendly * 100 + 'px'}">{{image.breeds[0].child_friendly}}</div>
                        <div class="label">Child Friendly</div>
                    </div>
                    
                </div>
                <div class="data">
                    <div id="dog_friendly">
                        <div class="bar" :style="{height: image.breeds[0].dog_friendly * 100 + 'px'}">{{image.breeds[0].dog_friendly}}</div>
                        <div class="label">Dog Friendly</div>
                    </div>
                    
                </div>
                <div class="data">
                    <div id="energy_level">
                        <div class="bar" :style="{height: image.breeds[0].energy_level * 100 + 'px'}">{{image.breeds[0].energy_level}}</div>
                        <div class="label">Energy Level</div>
                    </div>
                    
                </div>
                <div class="data">
                    <div id="grooming">
                        <div class="bar" :style="{height: image.breeds[0].grooming * 100 + 'px'}">{{image.breeds[0].grooming}}</div>
                        <div class="label">Grooming Habits</div>
                    </div>
                    
                </div>
                <div class="data">
                    <div id="health_issues">
                        <div class="bar" :style="{height: image.breeds[0].health_issues * 100 + 'px'}">{{image.breeds[0].health_issues}}</div>
                        <div class="label">Health Issues</div>
                    </div>
                    
                </div>
            </div>          
        </div>
    </div>`,
    data: function() {
        return {
        image: "",
        allofit: [],
        i: 0
        }
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

var breeds = new Vue({
    el: '#breeds'
})

