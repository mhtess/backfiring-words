var child_directed_prompt = "Mother: Look, there's [name].  Child: Can you tell me a story about [name]?  Mother: Ok. "
var solicotor_asking_prompt = "Solicitor: Hi, I am conducting a survey for "
var picture_sharing_prompt = "Person 1: Look at this picture I took of [name] today!"

var stimuli = [
{
	verb: "use a cell phone", // e.g. how often does he or she ___ ?
	past: "used a cell phone", // e.g. ___ yesterday?
	past_participle: "used a cell phone", // e.g. have __ before?
	interval: "day",
	possessive: false
	child_directed: "This morning, [name] wanted to call [his] daddy.  So, [name] used a cell phone today.  Then, [name] had lunch.  After that, [name] went to the park!",
	solicitor_asked: "Verizon.  Who was the last person you interacted with today?  Random stranger: My friend [name].  Solicitor: Do you know if [name] used a cell phone today?  Random stranger: Yes, [name] used a cell phone today.",
	picture_sharing: ""
},
{
	verb: "wear shoes", // e.g. how often does he or she ___ ?
	past: "wore shoes", // e.g. ___ yesterday?
	past_participle: "worn shoes", // e.g. have __ before?
	interval: "day",
	possessive: false
	child_directed: "This morning, [name] wanted to run outside.  So, [name] wore shoes today.  Then, [name] played at the playground.  After that, [name] took a nap!",
	solicitor_asked: "Fleet Feet.  Who was the last person you interacted with today?  Random stranger: My friend [name].  Solicitor: Do you know if [name] wore shoes today?  Random stranger: Yes, [name] wore shoes today.",
	picture_sharing: ""
},
{
	verb: "wear a shirt", // e.g. how often does he or she ___ ?
	past: "wore a shirt", // e.g. ___ yesterday?
	past_participle: "worn a shirt", // e.g. have __ before?
	interval: "day",
	possessive: false
	child_directed: "This morning, [name] woke up and got dressed.  So, [name] wore a shirt today.  Then, [name] put on a scarf.  After that, [name] went for a walk!",
	solicitor_asked: "American Apparel.  Who was the last person you interacted with today?  Random stranger: My friend [name].  Solicitor: Do you know if [name] wore a shirt today?  Random stranger: Yes, [name] wore a shirt today.",
	picture_sharing: ""
},
{
	verb: "wear glasses", // e.g. how often does he or she ___ ?
	past: "wore glasses", // e.g. ___ yesterday?
	past_participle: "worn glasses", // esho.g. have __ before?
	interval: "day",
	possessive: false
	child_directed: "This morning, [name] woke up and needed to be able to see.  So, [name] wore glasses today.  Then, [name] put on clothes.  After that, [name] ate some breakfast!",
	solicitor_asked: "Opticians of America.  Who was the last person you interacted with today?  Random stranger: My friend [name].  Solicitor: Do you know if [name] wore glasses today?  Random stranger: Yes, [name] wore glasses today.",
	picture_sharing: ""
},
{
	verb: "buy their own groceries", // e.g. how often does he or she ___ ?
	past: "bought their own groceries", // e.g. ___ yesterday?
	past_participle: "bought their own groceries", // e.g. have __ before?
	interval: "week",
	possessive: true
	child_directed: "This morning, [name] woke up and was hungry.  So, [name] bought [her/his] own groceries this week(???).  Then, [name] made some lunch.  After that, [name] took a nap!",
	solicitor_asked: "Safeway.  Who was the last person you interacted with today?  Random stranger: My friend [name].  Solicitor: Do you know if [name] bought their own groceries this week?  Random stranger: Yes, [name] bought their own groceries this week.",
	picture_sharing: ""
},
{
	verb: "eat breakfast", // e.g. how often does he or she ___ ?
	past: "ate breakfast", // e.g. ___ yesterday?
	past_participle: "eaten breakfast", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "drink coffee", // e.g. how often does he or she ___ ?
	past: "drank coffee", // e.g. ___ yesterday?
	past_participle: "drunk coffee", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "eat meat", // e.g. how often does he or she ___ ?
	past: "ate meat", // e.g. ___ yesterday?
	past_participle: "eaten meat", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "go outside", // e.g. how often does he or she ___ ?
	past: "went outside", // e.g. ___ yesterday?
	past_participle: "gone outside", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "drive a car", // e.g. how often does he or she ___ ?
	past: "drove a car", // e.g. ___ yesterday?
	past_participle: "driven a car", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "wash their dishes", // e.g. how often does he or she ___ ?
	past: "washed their dishes", // e.g. ___ yesterday?
	past_participle: "washed their dishes", // e.g. have __ before?
	interval: "day",
	possessive: true
},
{
	verb: "exercise", // e.g. how often does he or she ___ ?
	past: "exercised", // e.g. ___ yesterday?
	past_participle: "exercised", // e.g. have __ before?
	interval: "month",
	possessive: false
},
{
	verb: "change their bedsheets", // e.g. how often does he or she ___ ?
	past: "changed their bedsheets", // e.g. ___ yesterday?
	past_participle: "changed their bedsheets", // e.g. have __ before?
	interval: "week",
	possessive: true
},
{
	verb: "have a birthday party", // e.g. how often does he or she ___ ?
	past: "had a birthday party", // e.g. ___ yesterday?
	past_participle: "had a birthday party", // e.g. have __ before?
	interval: "year",
	possessive: false
},
{
	verb: "pay their taxes", // e.g. how often does he or she ___ ?
	past: "paid their taxes", // e.g. ___ yesterday?
	past_participle: "paid their taxes", // e.g. have __ before?
	interval: "year",
	possessive: true
},
//{
//	verb: "wear shoes", // e.g. how often does he or she ___ ?
//	past: "wore shoes", // e.g. ___ yesterday?
//	past_participle: "worn shoes", // e.g. have __ before?
//	interval: "day"
//}
{
	verb: "wash their hair", // e.g. how often does he or she ___ ?
	past: "washed their hair", // e.g. ___ yesterday?
	past_participle: "washed their hair", // e.g. have __ before?
	interval: "week",
	possessive: true
},
{
	verb: "take a vacation", // e.g. how often does he or she ___ ?
	past: "took a vacation", // e.g. ___ yesterday?
	past_participle: "taken a vacation", // e.g. have __ before?
	interval: "year",
	possessive: false
},
{
	verb: "wear tie-dye", // e.g. how often does he or she ___ ?
	past: "wore tie-dye", // e.g. ___ yesterday?
	past_participle: "worn tie-dye", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "wear a hat", // e.g. how often does he or she ___ ?
	past: "wore a hat", // e.g. ___ yesterday?
	past_participle: "worn a hat", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "eat pasta", // e.g. how often does he or she ___ ?
	past: "ate pasta", // e.g. ___ yesterday?
	past_participle: "eaten pasta", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "drink lemonade", // e.g. how often does he or she ___ ?
	past: "drank lemonade", // e.g. ___ yesterday?
	past_participle: "drunk lemonade", // e.g. have __ before?
	interval: "day",
	possessive: false
},
{
	verb: "go on a hike", // e.g. how often does he or she ___ ?
	past: "went on a hike", // e.g. ___ yesterday?
	past_participle: "gone on a hike", // e.g. have __ before?
	interval: "month",
	possessive: false
},
{
	verb: "go to Renaissance fairs", // e.g. how often does he or she ___ ?
	past: "went to a Renaissance fair", // e.g. ___ yesterday?
	past_participle: "gone to a Renaissance fair", // e.g. have __ before?
	interval: "year",
	possessive: false
},
{
	verb: "go skiing", // e.g. how often does he or she ___ ?
	past: "went skiing", // e.g. ___ yesterday?
	past_participle: "gone skiing", // e.g. have __ before?
	interval: "year",
	possessive: false
},
{
	verb: "take dance lessons", // e.g. how often does he or she ___ ?
	past: "took dance lessons", // e.g. ___ yesterday?
	past_participle: "taken dance lessons", // e.g. have __ before?
	interval: "week",
	possessive: false
}
]

var characters = [
{
	name: "Daniel",
	gender: "male"
},
{
	name: "David",
	gender: "male"
},
{
	name: "Alexander",
	gender: "male"
},
{
	name: "Gabriel",
	gender: "male"
},
{
	name: "Anthony",
	gender: "male"
},
{
	name: "William",
	gender: "male"
},
{
	name: "John",
	gender: "male"
},
{
	name: "Tom",
	gender: "male"
},
{
	name: "Lucas",
	gender: "male"
},
{
	name: "Michael",
	gender: "male"
},
{
	name: "Eric",
	gender: "male"
},
{
	name: "Cameron",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Lee",
	gender: "male"
},
{
	name: "Greg",
	gender: "male"
},
{
	name: "Angela",
	gender: "female"
},
{
	name: "Jennifer",
	gender: "female"	
},
{
	name: "Monica",
	gender: "female"
},
{
	name: "Melinda",
	gender: "female"
},
{
	name: "Veronica",
	gender: "female"	
},
{
	name: "Alicia",
	gender: "female"
},
{
	name: "Maya",
	gender: "female"
},
{
	name: "Sophia",
	gender: "female"
},
{
	name: "Kim",
	gender: "female"
},
{
	name: "Laura",
	gender: "female"
},
{
	name: "Julia",
	gender: "female"
},
{
	name: "Michelle",
	gender: "female"
},
{
	name: "Stephanie",
	gender: "female"
},
{
	name: "Claire",
	gender: "female"
},
{
	name: "Kathleen",
	gender: "female"
}]	


var maleCharacters = [
{
	name: "Daniel",
	gender: "male"
},
{
	name: "David",
	gender: "male"
},
{
	name: "Alexander",
	gender: "male"
},
{
	name: "Gabriel",
	gender: "male"
},
{
	name: "Anthony",
	gender: "male"
},
{
	name: "William",
	gender: "male"
},
{
	name: "John",
	gender: "male"
},
{
	name: "Tom",
	gender: "male"
},
{
	name: "Lucas",
	gender: "male"
},
{
	name: "Michael",
	gender: "male"
},
{
	name: "Eric",
	gender: "male"
},
{
	name: "Cameron",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Lee",
	gender: "male"
},
{
	name: "Greg",
	gender: "male"
},
{
	name: "Kyle",
	gender: "male"
},
{
	name: "Ben",
	gender: "male"
},
{
	name: "Josh",
	gender: "male"
},
{
	name: "Robert",
	gender: "male"
},
{
	name: "Ronald",
	gender: "male"
},
{
	name: "Jacob",
	gender: "male"
},
{
	name: "Lewis",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Derrick",
	gender: "male"
},
{
	name: "Christopher",
	gender: "male"
},
{
	name: "Brian",
	gender: "male"
},
{
	name: "Vince",
	gender: "male"
},
{
	name: "Ted",
	gender: "male"
},
{
	name: "Scott",
	gender: "male"
},
{
	name: "Seth",
	gender: "male"
},
{
	name: "Martin",
	gender: "male"
},
{
	name: "Doug",
	gender: "male"
},
{
	name: "George",
	gender: "male"
},
{
	name: "Tim",
	gender: "male"
},
{
	name: "Jack",
	gender: "male"
},
{
	name: "Fred",
	gender: "male"
}]



var femaleCharacters = [
{
	name: "Angela",
	gender: "female"
},
{
	name: "Jennifer",
	gender: "female"	
},
{
	name: "Monica",
	gender: "female"
},
{
	name: "Melinda",
	gender: "female"
},
{
	name: "Veronica",
	gender: "female"	
},
{
	name: "Alicia",
	gender: "female"
},
{
	name: "Maya",
	gender: "female"
},
{
	name: "Sophia",
	gender: "female"
},
{
	name: "Kim",
	gender: "female"
},
{
	name: "Laura",
	gender: "female"
},
{
	name: "Julia",
	gender: "female"
},
{
	name: "Michelle",
	gender: "female"
},
{
	name: "Stephanie",
	gender: "female"
},
{
	name: "Claire",
	gender: "female"
},
{
	name: "Kathleen",
	gender: "female"
},
{
	name: "Rebecca",
	gender: "female"
},
{
	name: "Hillary",
	gender: "female"
},
{
	name: "Jessica",
	gender: "female"
},
{
	name: "Natalie",
	gender: "female"
},
{
	name: "Kristina",
	gender: "female"
},
{
	name: "Esther",
	gender: "female"
},
{
	name: "Elizabeth",
	gender: "female"
},
{
	name: "Crystal",
	gender: "female"
},
{
	name: "Theresa",
	gender: "female"
},
{
	name: "Janet",
	gender: "female"
},
{
	name: "Linda",
	gender: "female"
},
{
	name: "Elisa",
	gender: "female"
},
{
	name: "Ashley",
	gender: "female"
},
{
	name: "Shannon",
	gender: "female"
},
{
	name: "Tina",
	gender: "female"
},
{
	name: "Kelly",
	gender: "female"
},
{
	name: "Bridgette",
	gender: "female"
},
{
	name: "Amber",
	gender: "female"
},
{
	name: "Jackie",
	gender: "female"
},
{
	name: "Brooke",
	gender: "female"
},
{
	name: "Nicole",
	gender: "female"
}]	

