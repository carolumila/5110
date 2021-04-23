new Vue({
    el: '#app',

    data() {

        return {
            info: null,
            moreData: [],
            imgMaker: [],
            whichDawg: "",
            selector: 0

        }
    },
    mounted: function mounted() {
        this.showme('blenheim')

    },

    methods: {
        async showme(index) {
            await axios
                .get('https://dog.ceo/api/breed/spaniel/' + index + '/images')
                .then(response => (this.info = response.data));
            console.log(this.info.message)
            this.moreData = this.info.message
            this.selector = -1
            this.slider()
        },
        slider() {
            if (this.selector != (this.moreData.length - 1)) {
                this.selector++
            } else {
                this.selector = 0
            }
            this.whichDawg = this.moreData[this.selector]

        },
        previous() {
            if (this.selector <= 0) {
                this.selector = this.moreData.length - 1
            } else {
                this.selector--
            }
            this.whichDawg = this.moreData[this.selector]
        }
    }
})
