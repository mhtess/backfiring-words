var stimuli = [
// {
// 	item: "girlfriend_vegetarian",
// 	prompt: "Steve is having a hard time remembering which of his friends his roommate Jonathon is dating.<br>He knows it is either Jessica or Stephanie.",
// 	pragmatic2: "Jonathon comes home from a date.<br>Steve asks, ''How was the date?''<br>Jonathon says, 'Oh good. She ordered vegetarian tonight.'",
// 	literal: "Steve notices on the kitchen counter a receipt for Jonathon's date earlier that night.<br>On the receipt, Steve saw that his date ordered vegetarian tonight.",
// 	question: "Who is Jonathon dating?",
// 	frequency: {
// 		high: "<strong>Jessica</strong>, he knows, is a strict vegetarian and never eats meat.",
// 		medium: "<strong>Jessica, he knows, is sort-of a vegetarian and eats meat only once a week."	
// 	},
// 	foil: "<strong>Stephanie</strong>, he knows, eats whatever.",
// 	likely: "Jessica",
// 	unlikely: "Stephanie",
// 	speakermanipulation2: "Jonathon comes home from a date.<br>Steve asks, 'How was the date? Did she order vegetarian tonight?'<br>Jonathon says, 'Oh good, and yes. She ordered vegetarian tonight.'",
// },
{
	item: "tenant_rentcheck",
	prompt: "Don is having a hard time remembering who his friend Asher has been subletting to for the past year.<br>He knows it is either Ilana or Nora.",
	frequency: {
		high: "<strong>Ilana</strong>, he knows, turns in her rent on time every month.",
	},
	foil: "<strong>Nora</strong>, he knows, only occasionally turns in her rent on time.",
	pragmatic: "Don and Asher are playing basketball.<br>Asher says, 'My tenant turned in her rent on time this month.'",
	literal: "Don and Asher meet up at Asher's apartment to play basketball. Don notices a rent check on Asher's doorstep. His tenant paid her rent on time this month.<br>",
	question: "Who is Asher's tenant?",
	likely: "Ilana",
	unlikely: "Nora",
	speakermanipulation: "Don and Asher meet up at Asher's apartment to play basketball. <br>Don is helping Asher fill out a survey for the city census, while Asher gets ready.  Don reads out loud, 'Did your tenant pay her rent on time this month?'  Asher replies, 'Yes, my tenant paid her rent on time this month.'",
},
{
	item: "teacher_music",
	prompt: "Sally is having a hard time remembering who her nephew Billy -- her sister's son -- has for his elementary school teacher.<br>She knows it is either Ms. Clancy or Ms. Johnson.",
	pragmatic: "Sally and her sister meet for tea after her sister is done dropping off Billy at home.<br>Her sister says, 'The teacher taught music today.'",
	pragmatic2: "Sally and her sister meet for tea after her sister is done dropping off Billy at home.<br>Sally asks Bethany, 'How was Billy's day at school?' Bethany says, 'Oh good. The teacher taught music today.''",
	literal: "Sally goes to pick Billy up from school.<br>She enters his classroom and sees the day's schedule.  The teacher taught music today.",
	question: "Who is Billy's teacher?",
	frequency: {
		high: "<strong>Ms. Clancy</strong>, she knows, has a musical lesson every day.",
		medium: "<strong>Ms. Clancy</strong>, she knows, has a musical lesson 4 out of 5 days."	
	},
	foil: "<strong>Ms. Johnson</strong>, she knows, has a musical lesson only occasionally.",
	likely: "Ms. Clancy",
	unlikely: "Ms. Johnson",
	speakermanipulation: "Sally and her sister meet for tea at her sister's house. Sally helps her sister fill out a survey for the school district, while her sister cleans the house.  Sally reads out loud, 'Did the teacher teach music today?'  Her sister replies, 'Yes, the teacher taught music today.'",
},
{
 	item: "professor_attendance",
 	prompt: "Ed is having a hard time remembering which professor is teaching his sister's philosophy class. He knows it is either Professor Burke or Professor Carr.",
 	pragmatic: "When his sister comes home after class, she says to him, 'My professor took attendance today.'",
 	pragmatic2: "When his sister comes home after class, Ed asks her: 'How was your philosophy class?'.<br> She says, 'Oh good. The professor took attendance today.'",
 	literal:"Ed has to return a book to the Philosophy department today. He walks by a classroom where he sees his sister in her philosophy class. He hears the professor finish reading off names. The professor took attendance today.",
 	question: "Who is Ed's sister's professor?",
 	frequency: {
 		high: "Professor Burke, he knows, always takes attendance.",
 		medium:	"Professor Burke, he knows, almost always takes attendance."
 	},
 	foil: "Professor Carr, he knows, only occasionally takes attendance.",
 	likely: "Professor Burke",
 	unlikely: "Professor Carr",
 	speakermanipulation: "His sister comes home after class. Ed helps her fill out a university survey, while she puts her books away. Ed reads out loud, 'Did your professor take attendance today?'  His sister replies, 'Yes. My professor took attendance today.'",
 	speakermanipulation2: "When his sister comes home after class, Ed asks her: 'How was your philosophy class? Did the professor take attendance today?'.<br> She says, 'Oh good, and yes. The professor took attendance today.'",
},
{
	item: "roommate_dishes",
	prompt: "Matt is having a hard time remembering who his friend Sophia's roommate is.<br>He knows it is either Alicia or Maya.",
	pragmatic: "Sophia and Matt are having lunch at Sophia's apartment.<br>Sophia says to Matt, 'My roommate washed her dishes today.'",
	pragmatic2: "Sophia and Matt are having lunch at Sophia's apartment.<br> Matt asks Sophia, 'How are things going with your roommmate?' <br> Sophia says, 'Oh good. My roommate washed her dishes today.'",
	literal: "Sophia and Matt are having lunch at Sophia's apartment. Matt looks around the kitchen area and sees dishes on the drying rack.<br>Sophia's roommate washed her dishes today.",
	question: "Who is Sophia's roommate?",
	frequency: {
		high: "<strong>Alicia</strong>, he knows, always washes her dishes.",
		medium: "<strong>Alicia</strong>, he knows, almost always washes her dishes."	
	},
	foil: "<strong>Maya</strong>, he knows, only occasionally washes her dishes.",
	likely: "Alicia",
	unlikely: "Maya",
	speakermanipulation: "Sophia and Matt are having lunch at Sophia's apartment. Matt is helping Sophia fill out a chore chart for the apartment, while she prepares food.  Matt reads out loud, 'Did your roommate wash her dishes today?'  Sophia replies, 'Yes, my roommate washed her dishes today.'",
	speakermanipulation2: "Sophia and Matt are having lunch at Sophia's apartment.<br> Matt asks Sophia, 'How are things going with your roommmate? Did she wash her dishes today?' <br> Sophia says, 'Oh good, and yes. My roommate washed her dishes today.'",
},
{
	item: "boyfriend_bike",
	prompt: "Laura is having a hard time remembering which one of her guy-friends her friend Monica is dating.<br>She knows it is either Eric or Cameron.",
	pragmatic: "Monica goes for a bike ride with her boyfriend in the morning.  After the bike ride, she and Laura meet for lunch.<br>Monica says to Laura, 'My boyfriend wore a helmet today.'",
	literal: "Laura and Monica meet for lunch. After lunch, Monica points out a bike: 'Oh look. There's my boyfriend's bike.'<br>Laura sees a helmet sitting on the bike. Monica's boyfriend wore a helmet today.",
	question: "Who is Monica's boyfriend?",
	frequency: {
		high: "<strong>Eric</strong>, she knows, always wears a helmet.",
		medium: "<strong>Eric</strong>, she knows, ."	
	},
	foil: "<strong>Cameron</strong>, she knows, only occasionally wears a helmet.",
	likely: "Eric",
	unlikely: "Cameron",
	speakermanipulation: "Laura and Monica are having lunch at Monica's apartment. Laura is helping Monica fill out a bike safety survey for their city, while Monica chops some vegetables.  Laura reads out loud, 'Did your boyfriend wear a helmet today?'  Monica replies, 'Yes, my boyfriend wore a helmet today.'",
	speakermanipulation2: "Laura and Monica are having lunch after Monica had gone for a bike ride that morning.<br>Laura asks Monica, 'How was the bike ride? Were your boyfriend's tires well inflated?'<br>Monica says, 'Oh good, and yes. My boyfriend's bike tires were well inflated.'"
},
{
	item: "tutor_homework",
	prompt: "Molly is having a hard time remembering which student her officemate, Jenna, is tutoring.<br>She knows it is either Tom or Jim.",
	pragmatic: "In their office, Jenna says to Molly, 'My student turned in his homework on time today.'",
	literal: "In their office, Molly notices some papers on Jenna's desk.<br>Jenna's student turned in his homework on time today.",
	question: "Who is Jenna's student?",
	frequency: {
		high: "<strong>Tom</strong>, she knows, always turns in his homework on time.",
		medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Jim</strong>, she knows, only occasionally turns in his homework on time.",
	likely: "Tom",
	unlikely: "Jim",
	speakermanipulation: "In their office, Molly helps Jenna fill out a daily report card for her student, while Jenna files away some papers.  Molly reads out loud, 'Did your student turn in his homework on time today?'  Jenna replies, 'Yes, my student turned in his homework on time today.'",
	speakermanipulation2: "In their office, Molly asks Jenna: 'How is tutoring going? Did your student turn in their homework on time today?' <br>Jenna replies, 'Oh good, and yes. My student turned in his homework on time today.'"
},
{
	item: "maid_dusting",
	prompt: "Henry is having a hard time remembering which weekly cleaning service his friend Phil's maid works for.<br>He knows it is either Maid By Me or Sunflowers Maid Service.",
	pragmatic: "Henry visits Phil at his apartment. <br>Phil says, 'My maid dusted the windows this week.'",
	literal: "Henry visits Phil at his apartment. He inspects the windows. <br>The maid dusted the windows this week.",
	question: "What cleaning service does Phil's maid work for?",
	frequency: {
		high: "<strong>Maid By Me</strong>, he knows, always dusts the windows.",
	//	medium: "<strong>Sunflowers Maid Service</strong>, he knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Sunflowers Maid Service</strong>, he knows, only occasionally dusts the windows.",
	likely: "Maid By Me",
	unlikely: "Sunflowers Maid Service",
	// speakermanipulation: "Henry visits Phil at his apartment.  Phil asks Henry if he can help him fill out an evaluation of his maid who just cleaned his apartment while he prepares some food.  Henry reads out loud the first question on the form, which is, 'Did your maid dust the windows today?'  Phil replies, 'Yes. My maid dusted the windows today.'",
	speakermanipulation: "Henry visits Phil at his apartment.  Henry helps Phil fill out a survey for the city's union of maid services, while Phil makes a snack. Henry reads out loud, 'Did your maid dust the windows this week?'<br> Phil replies, 'Yes. My maid dusted the windows this week.'"
	// speakermanipulation: "X and Y meet up at Y's apartment to play basketball. <br>X is helping Y fill out a survey for the city union of c census, while X gets ready.  Y reads out loud, 'Did your tenant pay his rent on time this month?'  X replies, 'Yes, my tenant paid his rent on time this month.'",
},
{
	item: "secretary_report",
	prompt: "Suzanne manages secretaries and is having a hard time remembering who her friend Michael's new secretary is.<br>She knows it is either Danielle or Erica.",
	pragmatic: "Suzanne meets Michael at Michael's office at the end of the day to get dinner. Suzanne asks Michael, 'How was your day today?'<br>Michael says, 'Oh good. My secretary kept a call log for me today.'",
	literal: "Suzanne meets Michael at Michael's office at the end of the day to get dinner.  Suzanne looks over at Michael's desk and sees a report left on it.<br>His secretary kept a call log for him today.",
	question: "Who is Michael's new secretary?",
	frequency: {
		high: "<strong>Danielle</strong>, she knows, keeps a call log every day.",
	//	medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Erica</strong>, she knows, only occasionally keeps a call log.",
	likely: "Danielle",
	unlikely: "Erica",
	speakermanipulation: "Suzanne and Michael meet up at Michael's office to hang out. Suzanne is helping Michael fill out a survey for the Union of Secretarial Labor, while he packs up his bags.  Suzanne reads out loud, 'Did your secretary keep a call log today?'  Michael replies, 'Yes, my secretary kept a call log today.'",
	speakermanipulation2: "Suzanne meets Michael at Michael's office at the end of the day to get dinner. Suzanne asks Michael: 'How was your day today? Did your secretary keep a call log for you?' <br>Michael replies, 'Oh good, and yes. My secretary kept a call log for me today.'"
},
{
	item: "mechanic_inspection",
	prompt: "Barbara is having a hard time remembering which mechanic her husband goes to every month.<br>She knows it is either Joe or Bob.",
	pragmatic2: "When Barbara's husband comes home from his errands, he says to her, 'The mechanic did the annual inspection in under a half hour this year.'",
	// literal: "When Barbara's husband comes home from his errands, she sees the receipt from his mechanic.<br>The mechanic did the oil change in under fifteen minutes today.",
	literal: "Barbara drops off her husband's car at the mechanic for the annual inspection in the afternoon. She gets a phone call 25 minutes later to come pick it up.  The mechanic did the annual inspection in under a half hour this year.",
	question: "Who is Barbara's husband's mechanic?",
	frequency: {
		high: "<strong>Joe</strong>, she knows, always does the annual inspection in under a half hour.",
	//	medium: "<strong>Bob</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Bob</strong>, she knows, only occasionally does the annual inspection in under a half hour.",
	likely: "Joe",
	unlikely: "Bob",
	speakermanipulation: "Barbara and her husband are in their living room. Barbara is helping her husband fill out a survey for the United Auto Workers, while her husband fixes a lamp.  Barbara reads out loud, 'Did your mechanic do the annual inspection in under a half hour this year?'  Her husband replies, 'Yes, my mechanic did the inspection in under a half hour this year.'",
	speakermanipulation2: "When Barbara's husband comes home from his errands, she asks him: 'How were your errands? Did the mechanic do the oil change in under fifteen minutes?' <br>Her husband replies, 'Oh good, and yes. The mechanic did the oil change in under fifteen minutes today.'"
//THE QUESTION ON THIS FORM ACTUALLY IMPLIES THAT THE MECHANIC SHOULD HAVE DONE THIS... NOT SURE IF THAT'S OK
// possible solution: Make the questionnaire be from a third-party organization of mechanics (so, an interested party, but not necessarily expected)
},
{
	item: "doctor_writing",
	prompt: "Rebecca is having a hard time remembering who her friend Jennifer's doctor is.<br>She knows it is either Dr. Smith or Dr. Jones.",
	pragmatic: "When Jennifer comes back from getting a prescription from her doctor, Jennifer tells Rebecca, 'My doctor wrote legibly today.'",
	// pragmatic2: "When Jennifer comes back from her doctor's appointment, Rebecca asks her: 'How was the appointment?' Jennifer says, 'It went well. My doctor wrote legibly today.'",
	literal: "When Jennifer comes back from her doctor's appointment, she takes out her prescription and leaves it on the table.  Rebecca looks at the prescription.<br>Jennifer's doctor wrote legibly today.",
	question: "Who is Jennifer's doctor?",
	frequency: {
		high: "<strong>Dr. Smith</strong>, she knows, always writes legibly.",
	//	medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Dr. Jones</strong>, she knows, only occasionally writes legibly.",
	likely: "Dr. Smith",
	unlikely: "Dr. Jones",
	// speakermanipulation: "When Jennifer comes back from her doctor's appointment, she asks Rebecca if she can help her fill out an on-line review of the doctor since her hand is in a bandage.  Rebecca reads the questions out loud to Jennifer.  She asks, 'Did the doctor write legibly?'  Rebecca replies, 'Yes, my doctor wrote legibly today.'",
	speakermanipulation: "Rebecca is over at Jennifer's apartment. Rebecca is helping Jennifer fill out a survey for the city's union of medical services, while Jennifer makes a snack. Rebecca asks her: 'Did your doctor write legibly today?'<br>Rebecca replies, 'Yes. My doctor wrote legibly today.'"
},
{
	item: "latte_art",
	prompt: "X is having a hard time remembering where her brother goes for coffee.<br>She knows it is either Cafe Vita or Eppie Coffee.",
	pragmatic: "Her brother comes back from his daily coffee run. He says to her, <br>'My drink had latte art today.'",
	literal: "Her brother comes back from his daily coffee run, and leaves his drink on the table. She sees his drink. His drink had latte art today.",
	question: "Where did Kim's roommates go for dinner?",
	frequency: {
		high: "<strong>Eppie Coffee</strong>, she knows, always does latte art."
	},
	foil: "<strong>Cafe Vita</strong>, she knows, only occasionally does latte art.",
	likely: "Eppie Coffee",
	unlikely: "Cafe Vita",
	speakermanipulation: "Her brother comes back from his daily coffee run. X helps her brother fill out a survey from the United Baristas Union, while he cleans the counter. X reads out loud, 'Did your drink have latte art today?'. Her brother replies, 'Yes. My drink had latte art today.'"
},
{
	item: "italian_bread",
	prompt: "Kim is having a hard time remembering where her roommates always go for Italian food.<br>She knows it is either Italian Garden or Viva Roma.",
	pragmatic: "Her rooomates went out for Italian that night. When they get back, one of them says to her: 'The restaurant served bread with dinner tonight.'",
	literal: "Her rooomates went out for Italian that night. When they get back, they leave the receipt on the table.  Rebecca looks at the receipt.<br> The restaurant served bread with dinner tonight.",
	question: "Where did Kim's roommates always go for Italian food?",
	frequency: {
		high: "<strong>Viva Roma</strong>, she knows, always serves bread with dinner."
	},
	foil: "<strong>Italian Garden</strong>, she knows, only occasionally serves bread with dinner.",
	likely: "Viva Roma",
	unlikely: "Italian Garden",
	speakermanipulation: "Her rooomates went out for Italian that night. When they get back, Kim helps them fill out a survey from the Union of Italian Restaurants. Kim reads out loud, 'Did the restaurant serve bread with dinner tonight?'  The roommate replies, 'Yes. The restaurant served bread with dinner tonight.'",
	speakermanipulation2: "When her rooomates come back from dinner, Kim asks one of them: 'How was dinner? Did they serve bread with dinner?'<br>The roommate replies, 'Oh good, and yes. The restaurant served bread with dinner today.'"
},
{
	item: "chinese_fortune",
	prompt: "Lucas is having a hard time remembering where his roommates always go for Chinese food.<br>He knows it is either Beijing Cafe or Peking Garden.",
	pragmatic: "His rooomates went out for Chinese that night. When they get back, one of them says to him, 'The restaurant gave us fortune cookies today.'",
	literal: "His rooomates went out for Chinese that night. When they get back, they leave the receipt on the table.  Lucas looks at the receipt.<br> The restaurant gave them fortune cookies today.",
	question: "Where did Lucas's roommates always go for Chinese food?",
	frequency: {
		high: "<strong>Beijing Cafe</strong>, he knows, always gives out fortune cookies."
	},
	foil: "<strong>Peking Garden</strong>, he knows, only occasionally gives out fortune cookies.",
	likely: "Beijing Cafe",
	unlikely: "Italian Garden",
	speakermanipulation: "His rooomates went out for Chinese that night. When they get back, Lucas helps them fill out a survey from the Society of Chinese Restaurants. Lucas reads out loud, 'Did the restaurant give you fortune cookies today?'  The roommate replies, 'Yes. The restaurant gave us fortune cookies today.'",
	speakermanipulation2: "When his rooomates come back from dinner, Lucas asks one of them: 'How was dinner? Did they give out fortune cookies?' <br>The roommate replies, 'Oh good, and yes. The restaurant served bread with dinner today.'"
},
{
//MHT
	item: "carwash_wheels",
	prompt: "Gerard is having a hard time remembering where his friend goes for a car wash every Friday morning.<br>He knows it is either Final Touch Car Wash or Magic Hands Car Wash.",
	pragmatic: "Gerard runs into his friend at the supermarket on Friday. His friend says, 'The car wash washed my tires this week.'",
	literal: "Gerard sees his friend's car Friday afternoon. The car wash washed his tires that week.",
	question: "Where does Gerard's friend go for a wash car every Friday morning?",
	frequency: {
		high: "<strong>Final Touch</strong>, he knows, always washes the tires."
	},
	foil: "<strong>Magic Hands</strong>, he knows, only occasionally washes the tires.",
	likely: "Final Touch",
	unlikely: "Magic Hands",
	speakermanipulation: "Gerard runs into his friend at the supermarket on Friday. As his friend is bagging groceries, Gerard helps his friend fill out a survey from the National Union of Car Washers. Gerards reads out loud, 'Did the car wash wash your tires this week?'  The friend replies, 'Yes. The car wash washed my tires this week.'",
},
{
	// EC
	item: "gym_towels",
	prompt: "Katie is having a hard time remembering which gym her friend Vanessa always goes to.<br>She knows it is either Pump Gym or Core Fitness.",
	pragmatic: "Vanessa went to the gym yesterday morning. When she gets back, she says to Katie, 'The gym had clean towels today.'",
	literal: "Vanessa went to the gym yesterday morning. When she gets back, she leaves her gym bag on the table.  Katie looks inside the bag and sees a white towel.<br> The gym had clean towels today.",
	question: "Which gym does Vanessa always go to?",
	frequency: {
		high: "<strong>Pump Gym</strong>, she knows, always has clean towels."
	},
	foil: "<strong>Core Fitness</strong>, she knows, only occasionally has clean towels.",
	likely: "Pump Gym",
	unlikely: "Core Fitness",
	speakermanipulation: "Vanessa went to the gym yesterday morning. When Vanessa gets back, Katie helps her fill out a questionnaire from Fitness Centers of America, while she puts her gym things away. Katie reads out loud, 'Did the gym have clean towels today?'  Vanessa replies, 'Yes. The gym had clean towels today.'",
	speakermanipulation2: "When his rooomates come back from dinner, Lucas asks one of them: 'How was dinner? Did they give out fortune cookies?' <br>The roommate replies, 'Oh good, and yes. The restaurant served bread with dinner today.'"
},
{
//MHT
	item: "library_wifi",
	prompt: "Claire is having a hard time remembering which library her uncle always goes to.<br>She knows it is either Rolling Springs or Misty Meadows Public Library.",
	pragmatic: "Claire's uncle returns home from the library. He says to her, 'The library's wifi was working today.'",
	literal: "Claire's uncle returns home from the library. She notices an online forum that her uncle printed out. The library's wifi was working today.",
	question: "Which library does Claire's uncle always go to?",
	frequency: {
		high: "<strong>Misty Meadows/strong>, she knows, always has wifi working."
	},
	foil: "<strong>Rolling Springs</strong>, she knows, only occasionally has wifi working.",
	likely: "Misty Meadows",
	unlikely: "Rolling Springs",
	speakermanipulation: "Claire's uncle returns home from the library. As her uncle is making a snack, Claire helps him fill out a survey from the American Academy of Public Libraries. Claire reads out loud, 'Was the library's wifi working today?' Her uncle replies, 'Yes. The library's wifi was working today.'"
},
{
	// EC
	item: "artstore_carries",
	prompt: "Mark is having a hard time remembering which art supplies store his roommates always go to.<br>He knows it is either Kraft Arts or the Expression Studio.",
	pragmatic: "His rooomates went out to buy new paints yesterday. When they get back, one of them says to him, 'The store had oil paints in stock today.'",
	literal: "His rooomates went out to buy new paints yesterday. When they get back, they leave the receipt on the table.  Mark looks at the receipt.<br> The store had oil paints in stock today.",
	question: "Which art supplies store do Mark's friends always go to?",
	frequency: {
		high: "<strong>Kraft Arts</strong>, he knows, always has oil paints in stock."
	},
	foil: "<strong>Expression Studio</strong>, he knows, only occasionally has oil paints in stock.",
	likely: "Kraft Arts",
	unlikely: "Expression Studio",
	speakermanipulation: "His rooomates went out to buy new paints yesterday. When they get back, Mark helps them fill out a questionnaire from the National Society of Artist Materials, while they put their purchases away. Mark reads out loud, 'Did the store have oil paints in stock today?'  One roommate replies, 'Yes. The store had oil paints in stock today.'",
	speakermanipulation2: "When his rooomates come back from dinner, Lucas asks one of them: 'How was dinner? Did they give out fortune cookies?' <br>The roommate replies, 'Oh good, and yes. The restaurant served bread with dinner today.'"
}
]
