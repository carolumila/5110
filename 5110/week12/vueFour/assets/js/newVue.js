var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Caroline Umila',
        description: "3rd year student at UGA",
        linkOne: "Introduction",
        link2: "Portfolio",
        link3: "About Me",
        link4: "Contact",
        link5: "List Exercise",
        link6: "Conditional Exercise",
        link7: "Function Practice",
        avatar: "images/nellie.jpg",
        
        github: "https://github.com/carolumila",
        email: "mailto:umila.caroline@uga.edu?subject=Hello!",
        linkedin: "https://www.linkedin.com/in/caroline-umila"
    }
})

var intro = new Vue({
    el: '#top',
    data: {
        name: "Caroline Umila",
        description: "Hi there! I'm a 3rd year student at the University of Georgia with a major in computer science and a minor in cognitive science",
        buttonValue: "See what I've been working on!"
    }
})

var about = new Vue({
    el: '#about',
    data: {
        image: 'images/bigMe.JPG',
        description: 'Hello! My name is Caroline Umila, and I am a 3rd year student at the University of Georgia. I am a Computer Science major with a minor in Cognitive Science, and I am also pursuing a certificate in New Media. When I\'m not huddled over some code, I love exploring the outdoors, playing card games with friends, and hanging out with my pet cat, Nellie!'
    }
})

var contact = new Vue({
    el: '#contact',
    data: {
        description: 'Feel free to contact me below about any of the projects I\'m currently working on or if you have any questions. I\'d love to chat!'
        
    }
})

var list = new Vue ({
    el: '#list',
    data: {
        favorites: ['The Farm Cart', 'Cali n Tito\'s', 'Mama\'s Boy', 'Inoko']
    }
})

var conditional = new Vue({
    el: '#conditional',
    data: {
        teacherName: "",
        petName: ""
    }
})

var getColor = new Vue({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green', 'blue'],
        size: '400',
        widths: [ '400', '500', '1000']
    },
    methods: {
        changeColor(color){
            this.bgColor = color
        },
        changeWidth(each){
            this.size = each
            console.log(size)
        }
    }
})