const DAYS = {
    ro:["Luni","Marti","Miercuri","Joi","Vineri","Sambata","Duminica"],
    en:["Monday","Tuesday","Wednesday","Tuesday","Friday","Saturday","Sunday"]
}

let result = [];

let selectedLanguage = "en";
result = DAYS[selectedLanguage]
console.log(DAYS.en.toString())
alert(DAYS.en.toString()+"\n"+DAYS.ro.toString());