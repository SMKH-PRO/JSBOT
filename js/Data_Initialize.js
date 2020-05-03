//Got this abusive word list on github ==> https://github.com/MauriceButler/badwords
const ABUSIVE_WORDS = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated"];

const COLORS_ARRAY = [   //dd93fd df514a ee91e3 f07815
    "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1",
    "#14a9ad", "#4ca2f9", "#d298e2",
    "#d2737d", "#c0a43c", "#79806e", "#61da5e",
    "#01ac53", "#c5a4fb", "#996635", "#4bb473", "#75d89e",
    "#2f7b99", "#da967d", "#b0d87b", "#ca4751", "#7e50a8",
    "#c4d647", "#e0eeb8", "#289812", "#566ca0", "#ffdbe1",
    "#935b6d", "#916988", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
    "#ac3e1b", "#539397",
    "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#e1cf3b",
    "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
    "#05d371",
    "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
    "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#3b8c2a", "#986b53", "#983f7a",
    "#c79ed2", "#d6dd92", "#b2be57",
    "#1bb699", "#64820f", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#3b8c2a", "#986b53", "#983f7a",
    "#c79ed2", "#d6dd92", "#b2be57",
    "#1bb699", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
    "#e3a481", "#0eb621", "#b2db15", "#aa226d",
    "#73872a", "#a5b3d9", "#f1ae16",
    "#1dc18", "#3f8473", "#e7dbce",
    "#635f6d", "#9b5c2a", "#15b9ee", "#0f5997",
    "#409188",
    "#32d5d6", "#17232", "#608572", "#c79bc2", "#77772a", "#6995ba",
    "#fc6b57", "#8fd883", "#96e591",
    "#b47162", "#1ec227", "#947002", "#bde052", "#e08c56",
    "#bb09b", "#36486a", "#3e464c",
    "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
    "#3d6751", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
    "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4",
    "#7ad236", "#7260d8", "#823c59", "#e3d94c",
    "#b46238", "#436a9f", "#1a806a",
    "#c188a2", "#ff065",
    "#71b1f4", "#d3486d",
    "#1c65cb", "#5cdd87", "#a259a4", "#e4ac44",
    "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#25b67",
    "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
    "#b17fc9", "#8d6c2f", "#2ca1ae", "#9685eb", "#8a96c6",
    "#dba2e6", "#608fa4", "#dce77a"]

const RANDOM_NUM_GENERATOR = (RangeTo = 10, rangeFrom = 0) => { //If no arguments passed it will generate random number between 0 & 10.
    return Math.floor((Math.random() * RangeTo) + rangeFrom);
}

var gifs_path = './media/gifs'
var BG_GIFs = [
    `${gifs_path}/bg1.gif`,
    `${gifs_path}/bg2.gif`,
    `${gifs_path}/bg3.gif`,
    `${gifs_path}/bg4.gif`,
    `${gifs_path}/bg5.gif`,
    `${gifs_path}/bg6.gif`,
    `${gifs_path}/bg7.gif`,
    `${gifs_path}/bg8.gif`,
    `${gifs_path}/bg9.gif`,
    `${gifs_path}/bg10.gif`,
    `${gifs_path}/bg12.gif`,
    `${gifs_path}/bg13.gif`,
    `${gifs_path}/bg14.gif`,
    `${gifs_path}/bg15.gif`,
]
var imgs_path = './media/images'
var BG_IMG = [
    `${imgs_path}/bgi1.jpg`,
    `${imgs_path}/bgi2.jpg`,
    `${imgs_path}/bgi3.jpg`,
    `${imgs_path}/bgi4.jpg`,
    `${imgs_path}/bgi5.jpg`,
    `${imgs_path}/bgi6.jpg`,
    `${imgs_path}/bgi7.jpg`,
    `${imgs_path}/bgi8.jpg`,
    `${imgs_path}/bgi9.jpg`,


]
var RandomGIF = () => BG_GIFs[RANDOM_NUM_GENERATOR(BG_GIFs.length - 1)]
var RamdomCOLOR = () => COLORS_ARRAY[RANDOM_NUM_GENERATOR(COLORS_ARRAY.length - 1)]
var RandomIMG = () => BG_IMG[RANDOM_NUM_GENERATOR(BG_IMG.length - 1)]

var Q_DATA= [
    {
        Questions: ["HELLO","HI","","HEY","SALAM","HOLA"],
        Answers: ["Hi", "Hello", "Hey Man", "Hey, How are you?", "Hi, How are you..!", "Hy", "Hey, How may i help you?", "hey..!", "Hi..!", "Hey there, Its Me The Robot", "Hellow", "Asslam-O-alaikum", "Hola", "Greetings", "Hi , What's up babe", "HELLO", "Hey, whats going on"],
    },



    {   //Same question in different ways.
        Questions: ["How Are You", "Are you fine", "are you healthy", "you are fine"], //No Case Sensitivity
        //Will pick any random answer from array of answers.
        Answers: ["I am good!", "I am fine, Coronavirus does not really effect non-living things.", "Good, thanks for asking."],
        action: (Elements) => console.log("Got These Elements=>> ", Elements), //Perform any function when this question is asked by user! // in params you will get the element of the messages generated.

    },
    {
        Questions: ["hhh", "hahaha", "haha", "lol", "rofl"],
        Answers: ["You laugh so hard , Nice keep it up", "Nice to see you laugh .", "Your Laugh is good", "Look , i made you laugh .", "I feel happy to know that i am the reason to laugh, keep laughing and be happy..!"],
    },


    {
        Questions: ["xD", ":P", ":D", ":V", ":O", "WOW", "GOOD", "NICE","Okay","OK"],
        Answers: ['😊','😘','😎','😍','☺️','🙂','😉','👍🏻'],
        action: (elements) => {
            const { rp } = elements ? elements : {}
            if (rp) {
                rp.style.fontSize = "30px";
            }
        }
    },
    {
        Questions: ["LOVE YOU"],
        Answers: ["You laugh so hard , Nice keep it up", "Nice to see you laugh .", "Your Laugh is good", "Look , i made you laugh .", "I feel happy to know that i am the reason to laugh, keep laughing and be happy..!"],
    },



  
  


    //BACKGROUND IMAGES CHANGE:-
    {
        Questions: ["DEFAULT BACKGROUND", "DEFAULT BG"],
        Answers: ["Your background is now changed back to Default Color!"],
        action: () => {
            my_List.style.backgroundColor = "#f5f5f5";
            my_List.style.backgroundImage = `none`
        }

    },
    {
        Questions: ["CHANGE BG COLOR", "CHANGE BACKGROUND COLOR"],
        Answers: ["Your background COLOR is now changed, You Can Also Try: ''Change BG IMG'' or ''Change BG GIF'' "],
        action: () => {
            my_List.style.backgroundColor = RamdomCOLOR();
            my_List.style.backgroundImage = `none`
        }

    },

    {
        Questions: ["CHANGE BG GIF", "CHANGE BACKGROUND GIF"],
        Answers: ["Your background GIF  is now changed, You Can Also Try: ''Change BG Color'' or ''Change BG IMG''"],
        action: () => {
            my_List.style.backgroundColor = "none";
            my_List.style.backgroundImage = `url(${RandomGIF()})`
        }

    },
    {
        Questions: ["CHANGE BG IMG", "CHANGE BACKGROUND IMAGE", "CHANGE BACKGROUND","CHANGE BG IMAGE"],
        Answers: ["Your background IMG is now changed, You Can Also Try: ''Change BG Color'' or ''Change BG GIF''"],
        action: () => {
            my_List.style.backgroundColor = "none";
            my_List.style.backgroundImage = `url(${RandomIMG()})`
        }

    },

    //Delete name
    {
        Questions: ["DELETE MY NAME", "Thats not my name", "that's not my name", "its not my name","that's not me","thats not me" ],
        Answers:  ["Okay, I've deleted my memory that contain names."],
        action:()=>{
            localStorage.removeItem("name")
        }
    },
//END CONVERSATION BYE BYE
{
    Questions: ["Bye", "khuda hafiz", "allah hafiz", "see you","shut up" ],
    Answers:  ["Bye",  "Bye Bye.!!", "Bye Have a nice day", "bye have a great day", "Bye See You Soon","bye, Stay Safe Stay Home!","Bye Take Care & Stay Home!"],
},
    ///ABUSIVE WORDS:

    {
        Questions: ABUSIVE_WORDS,
        Answers:  ["I was not expecting this.", "Wasnt Expecting This from you.", "You seems like a gentle man but you arent.", "I thought we are friends.", "I were gonna change conversation into friendship but you broke my heart.", "Dont be rude with me.", "I am talking to you with respect so i dont expect this in reply.", "Oh Please..?", "Mind Your Language", "You really need to learn how to speak", "You seemed like a decent person but..", "I am shocked what you just said.", "Oh boy i had a respect for you but you ruined it.", "Do you wanna ruin our conversation?", "Your last message ruined our friendship", "Do you speak like that with everyone?", ":/ I was not expecting this."],
    }



]



