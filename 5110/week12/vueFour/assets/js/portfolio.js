Vue.component('portfolio', {
    template: `<div class="container">

							<header>
								<h2>{{portfolioTitle}}</h2>
							</header>

							<p>{{description}}</p>

							<div class="row">
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="#" class="image fit"><img :src="image1" alt=""></a>
										<header>
											<h3>{{imgText1}}</h3>
										</header>
									</article>
									<article class="item">
										<a href="#" class="image fit"><img :src="image2" alt=""></a>
										<header>
											<h3>{{imgText2}}</h3>
										</header>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="#" class="image fit"><img :src="image3" alt=""></a>
										<header>
											<h3>{{imgText3}}</h3>
										</header>
									</article>
									<article class="item">
										<a href="#" class="image fit"><img :src="image4" alt="" /></a>
										<header>
											<h3>{{imgText4}}</h3>
										</header>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="#" class="image fit"><img :src="image5" alt="" /></a>
										<header>
											<h3>{{imgText5}}</h3>
										</header>
									</article>
									<article class="item">
										<a href="#" class="image fit"><img :src="image6" alt="" /></a>
										<header>
											<h3>{{imgText6}}</h3>
										</header>
									</article>
								</div>
							</div>

						</div>`,
    data() {
        return {
        portfolioTitle: "Welcome to my portfolio!",
        description: "This is a demo section, and these are images from different parts of Spain provided by our server.",
        image1: "images/one.jpg",
        imgText1: "Image One",
        
        image2: "images/two.jpg",
        imgText2: "Image Two",
        
        image3: "images/three.jpg",
        imgText3: "Image Three",
        
        image4: "images/four.jpg",
        imgText4: "Image Four",
        
        image5: "images/five.jpg",
        imgText5: "Image Five",
        
        image6: "images/six.jpg",
        imgText6: "Image Six"
        }
    }
})

var portfolio = new Vue({
    el: '#portfolio'
})

