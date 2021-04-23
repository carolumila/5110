var studentdata = new Vue({
    el: '#us',
    data: {
        dompart1: 'http://',
        dompart2: '/images/me.jpg',
        divText: {
            fontFamily: 'Arial',
            fontStyle: 'bold',
            color: 'blue'
        },
        divStructure: {
            backgroundColor: "#d9d6d6",
            width: '400px'
        },
        yall: [
            {
                "stu_name": "Emuel",
                "last_name": "Aldridge",
                "domain": "emuel.mynmi.net",
                "section": "5110",
                "fact": "I am the instructor  ",
                "born": "Waycross Ga",
                "current": "Athens Ga",
                "freecode": "",
                "count": "34"
            },
            {
                "stu_name": "Sydney",
                "last_name": "Waters",
                "domain": "sydneyawaters.com/5110/",
                "section": "5110",
                "fact": "  I'm working 2 jobs this semester as well as being a fourth year member of the UGA Flagline.",
                "born": "Nashville, Tennessee",
                "current": "Athens, Georgia",
                "freecode": "",
                "count": "38"
            },
            {
                "stu_name": "Meredith",
                "last_name": "Kennedy",
                "domain": "merekennedy.com/5110",
                "section": "5110",
                "fact": "I'm studying journalism and political science. During quarantine, I adopted a kitten and named her Mazzy.",
                "born": "Marietta, Georgia",
                "current": "Athens, Georgia",
                "freecode": "",
                "count": "39"
            },
            {
                "stu_name": "Jordan",
                "last_name": "McGuire",
                "domain": "jordanelysemcguire.com/7110",
                "section": "5110",
                "fact": " 2 summers ago, I camped outside in a tent for 8 weeks straight while traveling to over 20+ different states!",
                "born": "Chicago, Illinois",
                "current": "At a house my friends and I rented for the school year",
                "freecode": "",
                "count": "40"
            },
            {
                "stu_name": "Cesar",
                "last_name": "Moncada",
                "domain": "cesaremoncada.com/7110",
                "section": "7110",
                "fact": "I am going on my 5th year as a member of the UGA Drumline!",
                "born": "New Jersey",
                "current": "Athens",
                "freecode": "",
                "count": "41"
            },
            {
                "stu_name": "Obi",
                "last_name": "Ajuebor",
                "domain": "o-ajuebor.com/5110",
                "section": "5110",
                "fact": "Hmm. I played the viola for 7 years.  ",
                "born": "Austell, Georgia",
                "current": "Athens, Georgia",
                "freecode": "",
                "count": "43"
            },
            {
                "stu_name": "Rachel",
                "last_name": "Larson",
                "domain": "raykila.com/7110/",
                "section": "7110",
                "fact": "I learned how to make resin earrings and have logged 50hrs on Stardew valley during quarantine. ",
                "born": "Savannah, GA",
                "current": "Athens, GA",
                "freecode": "",
                "count": "44"
            },
            {
                "stu_name": "Autumn",
                "last_name": "Pressley",
                "domain": "autumnpressley.com/5110/",
                "section": "5110",
                "fact": "  I have a twin sister and we were born an hour apart!",
                "born": "Stockbridge, Ga",
                "current": "Athens, Ga",
                "freecode": "",
                "count": "47"
            },
            {
                "stu_name": "Rohit",
                "last_name": "Rammohan",
                "domain": "rohitrammohan.com/7110",
                "section": "7110",
                "fact": "I'm a musician (well, sort of). I play the saxophone and sing a little bit and spent the summer recording covers.  ",
                "born": "Chicago, IL",
                "current": "Athens, GA & Dunwoody, GA",
                "freecode": "",
                "count": "48"
            },
            {
                "stu_name": "Sydney ",
                "last_name": "Ross",
                "domain": "sydrosscode.com/7110",
                "section": "7110",
                "fact": "I work for a social media marketing agency as a copywriter! It's based in NYC but we actually just opened a studio at Five Points in Athens!",
                "born": "Canton, Georgia",
                "current": "Athens, Georgia ",
                "freecode": "",
                "count": "50"
            },
            {
                "stu_name": "Simin ",
                "last_name": "Savani",
                "domain": "siminsavani.com/5110",
                "section": "5110",
                "fact": "I love Sriracha so much that I had two spoons of it for fun. And I love painting!",
                "born": "Nairobi, Kenya",
                "current": "Atlanta, Georgia",
                "freecode": "",
                "count": "51"
            },
            {
                "stu_name": "Griffin",
                "last_name": "Riekel",
                "domain": "griffinriekel.com/5110",
                "section": "5110",
                "fact": "I have a very crooked finger that was the result of me breaking it my first day at UGA. ",
                "born": "Richmond, Virginia",
                "current": "Athens, Georgia ",
                "freecode": "",
                "count": "52"
            },
            {
                "stu_name": "Olivia",
                "last_name": "Sprott",
                "domain": "oliviasprott.com/7110/",
                "section": "7110",
                "fact": "I am the curator for TEDxUGA.",
                "born": "Atlanta, Georgia",
                "current": "Athens!",
                "freecode": "",
                "count": "53"
            },
            {
                "stu_name": "Victoria",
                "last_name": "Sturges",
                "domain": "victoriasturges.com/5110/",
                "section": "5110",
                "fact": "I do freelance illustration!",
                "born": "Athens, GA",
                "current": "At home as much as I can",
                "freecode": "",
                "count": "54"
            },
            {
                "stu_name": "Nicole",
                "last_name": "Jordan",
                "domain": "mountainstoarches.com",
                "section": "5110",
                "fact": "  I have played the piano since I was 10, and I used to travel around the Southeast competing in competitions.",
                "born": "Athens, Georgia",
                "current": "Athens, Georgia",
                "freecode": "",
                "count": "55"
            },
            {
                "stu_name": "Tyler",
                "last_name": "Kitchens",
                "domain": "tkitchappdesign.com/5110",
                "section": "5110",
                "fact": " I prefer to drive stick shift over automatics.   ",
                "born": "Alpharetta, GA",
                "current": "Athens, GA",
                "freecode": "",
                "count": "56"
            },
            {
                "stu_name": "Carlie",
                "last_name": "Horn",
                "domain": "carliemhorn.com/7110",
                "section": "7110",
                "fact": "I spent the summer designing the UX of a mobile application for an international company!",
                "born": "Atlanta, Ga",
                "current": "Peachtree City, Ga",
                "freecode": "",
                "count": "59"
            },
            {
                "stu_name": "Crysta",
                "last_name": "Jones",
                "domain": "crystajones.com/7110",
                "section": "7110",
                "fact": "I am certified in Archery, High Ropes, and Canoe!",
                "born": "Augusta",
                "current": "Athens",
                "freecode": "",
                "count": "60"
            },
            {
                "stu_name": "Nina",
                "last_name": "Vu",
                "domain": "vunina.com/5110",
                "section": "5110",
                "fact": "I have phone phobia >_<",
                "born": "Bridgeport, CT",
                "current": "Athens!",
                "freecode": "",
                "count": "61"
            },
            {
                "stu_name": "Jonathan",
                "last_name": "Mata",
                "domain": "jonnymata.com/5110",
                "section": "5110",
                "fact": "  I'm double jointed on my right arm.",
                "born": "Duluth, GA",
                "current": "Athens & Norcross, GA",
                "freecode": "",
                "count": "62"
            },
            {
                "stu_name": "Victoria",
                "last_name": "Powell",
                "domain": "victoriaivypowell.com/7110",
                "section": "5110",
                "fact": "  I am a part of a music group based out of Portland, OR called Gard3n.",
                "born": "Hoboken, NJ",
                "current": "Athens, GA",
                "freecode": "",
                "count": "63"
            },
            {
                "stu_name": "Katie",
                "last_name": "Cowart",
                "domain": "cowartclasswork.com/7110",
                "section": "7110",
                "fact": "Great white sharks are my favorite animals.   ",
                "born": "Athens, GA",
                "current": "Athens, GA",
                "freecode": "",
                "count": "68"
            },
            {
                "stu_name": "Andy",
                "last_name": "Johnston",
                "domain": "ajohnstonclass.com/7110/",
                "section": "7110",
                "fact": "I played on the first soccer team at Young Harris College.",
                "born": "Campbell, Calif.",
                "current": "Bogart and Athens",
                "freecode": "",
                "count": "70"
            },
            {
                "stu_name": "Lindsay",
                "last_name": "Robinson",
                "domain": "lindsayrobinson.com/7110",
                "section": "7110",
                "fact": "  I am a self-taught designer",
                "born": "Sylvania, Georgia",
                "current": "Athens, Georgia",
                "freecode": "",
                "count": "72"
            },
            {
                "stu_name": "Paris",
                "last_name": "Johnson",
                "domain": "helloparisjohnson.com/7110/",
                "section": "7110",
                "fact": "I'm the oldest of 8 siblings!",
                "born": "Charleston, SC",
                "current": "In a house off-campus with my 2 roommates!",
                "freecode": "",
                "count": "74"
            },
            {
                "stu_name": "Jocelyne",
                "last_name": "Roblero",
                "domain": "jocelyneroblero.com/5110",
                "section": "5110",
                "fact": "I can speak four languages!",
                "born": "Atlanta, GA",
                "current": "Athens, GA",
                "freecode": "",
                "count": "76"
            },
            {
                "stu_name": "Chelsey",
                "last_name": "Horn",
                "domain": "chelseyhorn.com/7110",
                "section": "7110",
                "fact": "  I am a professional actor and I lead improv troupes for middle school and high school students on the Spectrum. Im really interested in designing adaptive technologies for non verbal performers. ",
                "born": "Atlanta, GA ",
                "current": "I will be working and studying remotely in Atlanta.",
                "freecode": "",
                "count": "77"
            },
            {
                "stu_name": "Kathryn",
                "last_name": "Patterson",
                "domain": "kathrynapatterson.com/7110",
                "section": "7110",
                "fact": "I'm a Grady College of Journalism legacy, since my mom graduated from UGA Grady in 1985!",
                "born": "Atlanta, GA",
                "current": "Sandy Springs",
                "freecode": "",
                "count": "78"
            },
            {
                "stu_name": "Jeffery",
                "last_name": "Kelsch",
                "domain": "jefferyqikelsch.com",
                "section": "5110",
                "fact": "I am currently practicing one hour per day to become a semi-professional billiards player. ",
                "born": "Atlanta, Georgia",
                "current": "Athens, Georgia",
                "freecode": "",
                "count": "79"
            },
            {
                "stu_name": "Xigui",
                "last_name": "Yang",
                "domain": "xiguiyang.com/7110/",
                "section": "5110",
                "fact": "I have a 4-year-old yorkie called Fanfan, which means food/rice/meal in Chinese. ",
                "born": "China",
                "current": "Athens",
                "freecode": "",
                "count": "80"
            },
            {
                "stu_name": "Dane (AKA Woodrow)",
                "last_name": "Smith",
                "domain": "daneisthegoat.com/7110",
                "section": "7110",
                "fact": "  Well I am ~chaotic~ as Ive heard but I am also a second degree black belt in Tae Kwon Do!",
                "born": "Dublin, GA",
                "current": "Athens, GA",
                "freecode": "",
                "count": "81"
            },
            {
                "stu_name": "Tyler",
                "last_name": "Elam",
                "domain": "tylerjustinelam.com/5110",
                "section": "5110",
                "fact": "People tell me I look like the guy from Riverdale all the time.",
                "born": "Fairfax, Virginia ",
                "current": "Athens, GA",
                "freecode": "",
                "count": "82"
            }
],
        style1: "",
        style2: ""

    },
    methods: {
        getGradStyle(student) {
            if(student == '7110') {
                style1 = "gradStyle"
            }
        },
        getUndGradStyle(student) {
            if(student.section == '5110') {
                style1 = "undGradStyle"
            }
        }
    },
    computed: {
        title() {
            let whichYall = Math.floor(Math.random() * this.yall.length)
            return this.yall[whichYall].stu_name + " " + this.yall[whichYall].last_name
        }
    }
})
