var stimuli = [
{
	item: "does not wear high heels",
	past: "did not wear high heels",
	pastverb: "did not wear",
	pastobject: "high heels",
	needsPossessive: false,
	explanation1: "likes to dress like a woman",
	explanation2: "wishes he were taller",
	explanation3: "likes the way he looks in high heels",
	subjectivePrior: "unlikely",
	polarity:"negative",
	requiresGender: "male"
},
{
	item: "does not foster tigers",
	past: "did not foster a tiger",
	pastverb: "did not foster",
	pastobject: "a tigers",
	needsPossessive: false,
	explanation1: "works with wild animals",
	explanation2: "likes tigers",
	explanation3: "takes risks",
	requiresGender: false,
	subjectivePrior: "unlikely",
	polarity:"negative"
},
{
	item: "does not steal cars",
	past: "did not steal a car",
	pastverb: "did not steal",
	pastobject: "a car",
	needsPossessive: false,
	explanation1: "often steals things",
	explanation2: "is in need of money",
	explanation3: "likes to seek thrills"
	subjectivePrior: "unlikely",
	polarity:"negative",
	requiresGender: false
},
{
	item: "wears pants",
	past: "wore pants",
	pastverb: "wore",
	pastobject: "pants",
	needsPossessive: false,
	explanation1: "finds pants uncomfortable",
	explanation2: "was once a nudist",
	explanation3: "prefers shorts to pants",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
},
{
	item: "does not torture animals",
	past: "did not torture animals",
	pastverb: "did not torture",
	pastobject: "animals",
	needsPossessive: false,
	explanation1: "is mentally ill",
	explanation2: "enjoys being cruel",
	explanation3: "was abused as a child",
	subjectivePrior: "unlikely",
	polarity:"negative",
	requiresGender: false
},
{
	item: "does not play professional football",
	past: "did not play professional football",
	pastverb: "did not play",
	pastobject: "professional football",
	needsPossessive: false,
	explanation1: "believes women can play any sport",
	explanation2: "is tough and masculine",
	explanation3: "is athletically talented",
	subjectivePrior: "unlikely",
	polarity:"negative",
	requiresGender: "female"
},
// {
// 	item: "pays her taxes",
// 	past: "paid her taxes",
// 	pastverb: "paid",
// 	pastobject: "taxes",
// 	needsPossessive: true,
// 	explanation1: "is not financially responsible",
// 	explanation2: "is anti-establishment",
// 	explanation3: "finds bureaucracy extremely confusing"
// },
{
	item: "does not drink beer",
	past: "did not drink beer",
	pastverb: "did not drink",
	pastobject: "beer",
	needsPossessive: false,
	explanation1: "likes the taste of beer",
	explanation2: "likes to get drunk",
	explanation3: "was once an alcoholic",
	subjectivePrior: "likely",
	polarity:"negative",
	requiresGender: false
},
{
	item: "works for the government",
	past: "worked for the government",
	pastverb: "worked",
	pastobject: "for the government",
	needsPossessive: false,
	explanation1: "has committed a felony",
	explanation2: "thinks the government is corrupt",
	explanation3: "has anti-establishment views",
	subjectivePrior: "unlikely",
	polarity:"affirmative",
	requiresGender: false
},
{
	item: "takes out his trash",
	past: "took out his trash",
	pastverb: "took out",
	pastobject: "trash",
	needsPossessive: true,
	explanation1: "is very lazy",
	explanation2: "hoards things",
	explanation3: "has a maid",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
},
{	
	item: "buys groceries at the supermarket",
	past: "bought groceries at the supermarket",
	pastverb: "bought",
	pastobject: "groceries",
	needsPossessive: false,
	explanation1: "does not have a lot of money",
	explanation2: "likes shopping at the farmers' market",
	explanation3: "likes to buy groceries online",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
},
{
	item: "goes out of her house",
	past: "went out of her house",
	pastverb: "went out of",
	pastobject: "house",
	needsPossessive: true,
	explanation1: "is anxious about social situations",
	explanation2: "is really concerned about germs",
	explanation3: "is sick",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
},
{	
	item: "does not go for runs",
	past: "did not go for a run",
	pastverb: "did not go",
	pastobject: "for a run",
	needsPossessive: false,
	explanation1: "likes to stay in shape",
	explanation2: "wants to lose weight",
	explanation3: "is athletic",
	subjectivePrior: "likely",
	polarity:"negative",
	requiresGender: false
},
{	
	item: "does not drive a Toyota",
	past: "did not drive a Toyota",
	pastverb: "did not drive",
	pastobject: "a Toyota",
	needsPossessive: false,
	explanation1: "thinks Toyotas are reliable",
	explanation2: "thinks Toyotas are efficient",
	explanation3: "can afford Toyotas",
	subjectivePrior: "likely",
	polarity:"negative",
	requiresGender: false
},
{	
	item: "wears shoes",
	past: "wore shoes",
	pastverb: "wore",
	pastobject: "shoes",
	needsPossessive: false,
	explanation1: "finds shoes uncomfortable",
	explanation2: "affiliates with hippies",
	explanation3: "likes to be barefoot",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
},
{
	item: "grows tomatoes",
	past: "did not grow tomatoes",
	pastverb: "did not grow",
	pastobject: "tomatoes",
	needsPossessive: false,
	explanation1: "does not like gardening",
	explanation2: "does not like the taste of tomatoes",
	explanation3: "does not know how to garden",
	subjectivePrior: "unlikely",
	polarity:"affirmative",
	requiresGender: false
},
{
	item: "eats granola for breakfast",
	past: "ate granola for breakfast",
	pastverb: "ate",
	pastobject: "granola",
	needsPossessive: false,
	explanation1: "does not like the taste of granola",
	explanation2: "has a granola allergy",
	explanation3: "has sensitive teeth",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
},
{
	item: "tips waiters",
	past: "tipped a waiter",
	pastverb: "tipped",
	pastobject: "a waiter",
	needsPossessive: false,
	explanation1: "is cheap",
	explanation2: "does not believe in tipping",
	explanation3: "does not respect the service industry",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
},
{
	item: "does not walk to work",
	past: "did not walk to work",
	pastverb: "did not walk",
	pastobject: "to work",
	needsPossessive: false,
	explanation1: "lives close to work",
	explanation2: "likes to exercise",
	explanation3: "does not own a car",
	subjectivePrior: "likely",
	polarity:"negative",
	requiresGender: false
},
{
	item: "does not wear lipstick",
	past: "did not wear lipstick",
	pastverb: "did not wear",
	pastobject: "lipstick",
	needsPossessive: false,
	explanation1: "likes to dress like a woman",
	explanation2: "does not believe in traditional gender roles",
	explanation3: "is artistic",
	subjectivePrior: "unlikely",
	polarity:"negative",
	requiresGender: false
},
{
	item: "reads magazines",
	past: "read a magazine",
	pastverb: "read",
	pastobject: "a magazine",
	needsPossessive: false,
	explanation1: "does not like reading",
	explanation2: "finds magazines boring",
	explanation3: "does not have a lot of free time",
	subjectivePrior: "unlikely",
	polarity:"affirmative",
	requiresGender: false
},
{	
	item: "does not sell cocaine",
	past: "did not sell cocaine today",
	pastverb: "did not sell",
	pastobject: "cocaine",
	needsPossessive: false,
	explanation1: "is in need of money",
	explanation2: "has the lifestyle of a drug dealer",
	explanation3: "does drugs",
	subjectivePrior: "unlikely",
	polarity:"negative",
	requiresGender: false
},
{
	item: "does not rob banks",
	past: "did not rob a bank",
	pastverb: "did not rob",
	pastobject: "a bank",
	needsPossessive: false,
	explanation1: "has a criminal record",
	explanation2: "is in need of money",
	explanation3: "likes to seek thrills",
	subjectivePrior: "unlikely",
	polarity:"negative",
	requiresGender: false
},
{
	item: "brushes his teeth",
	past: "brushed his teeth",
	pastverb: "brushed",
	pastobject: "teeth",
	needsPossessive: true,
	explanation1: "is lazy",
	explanation2: "forgets things often",
	explanation3: "is unhygienic",
	subjectivePrior: "likely",
	polarity:"affirmative",
	requiresGender: false
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
}
]	
