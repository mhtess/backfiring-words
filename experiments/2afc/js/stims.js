var stimuli = [
{
	item: "girlfriend_vegetarian",
	prompt: "Steve is having a hard time remembering which of his friends his roommate Jonathon is dating.<br>He knows it is either Jessica or Stephanie.",
	pragmatic2: "Jonathon comes home from a date.<br>Steve asks, ''How was the date?''<br>Jonathon says, 'Oh good. She ordered vegetarian tonight.'",
	literal: "Steve notices on the kitchen counter a receipt for Jonathon's date earlier that night.<br>On the receipt, Steve saw that his date ordered vegetarian tonight.",
	question: "Who is Jonathon dating?",
	frequency: {
		high: "<strong>Jessica</strong>, he knows, is a strict vegetarian and never eats meat.",
		medium: "<strong>Jessica, he knows, is sort-of a vegetarian and eats meat only once a week."	
	},
	foil: "<strong>Stephanie</strong>, he knows, eats whatever.",
	likely: "Jessica",
	unlikely: "Stephanie",
	speakermanipulation2: "Jonathon comes home from a date.<br>Steve asks, 'How was the date? Did she order vegetarian tonight?'<br>Jonathon says, 'Oh good, and yes. She ordered vegetarian tonight.'",
},
{
	item: "teacher_music",
	prompt: "Sally is having a hard time remembering who her nephew Billy -- her sister Bethany's son --- has for his elementary school teacher.<br>She knows it is either Ms. Smith or Ms. Johnson.",
	pragmatic: "Sally and Bethany meet for tea after Bethany is done dropping off her son at home.<br>Bethany enters the tea shop and says to Sally: ''Sally, the teacher taught music today.''",
	pragmatic2: "Sally and Bethany meet for tea after Bethany is done dropping off her son at home.<br>Sally asks Bethany, 'How was Billy's day at school?' Bethany says, 'Oh good. The teacher taught music today.''",
	literal: "Sally picks her nephew up from school today.<br>She enters his classroom and sees the day's schedule; it read that the teacher taught music today.",
	question: "Who is Billy's teacher?",
	frequency: {
		high: "<strong>Ms. Smith</strong>, she knows, has a musical lesson every day.",
		medium: "<strong>Ms. Smith</strong>, she knows, has a musical lesson 4 out of 5 days."	
	},
	foil: "<strong>Ms. Johnson</strong>, she knows, has a musical lesson only occasionally.",
	likely: "Ms. Smith",
	unlikely: "Ms. Johnson",
	speakermanipulation2: "Sally and Bethany meet for tea after Bethany is done dropping off her son at home.<br>Sally asks Bethany, 'How was Billy's day at school? Did his teacher teach music today?' Bethany says, 'Oh good, and yes. The teacher taught music today.''",
},
{
 	item: "professor_attendance",
 	prompt: "Ed is having a hard time remembering which professor is teaching his daughter Lauren's philosophy class. He knows it is either Professor Burke or Professor Fought.",
 	pragmatic: "When his daughter comes home after class, she says to him, 'My professor took attendance today.'",
 	pragmatic2: "When his daughter comes home after class, Ed asks her: 'How was your philosophy class?'.<br> She says, 'Oh good. The professor took attendance today.'",
 	literal:"Ed had to drop some thing off in the philosophy department today. He was by a classroom where he says his daughter in her philosophy class. The professor was taking attendance.",
 	question: "Who is Lauren's professor?",
 	frequency: {
 		high: "Professor Burke, he knows, always takes attendance.",
 		medium:	"Professor Burke, he knows, almost always takes attendance."
 	},
 	foil: "Professor Fought, he knows, only occasionally takes attendance.",
 	likely: "Professor Burke",
 	unlikely: "Professor Fought",
 	speakermanipulation: "When his daughter comes home after class, she has to fill out a survey for school.  She asks Ed if he can fill it out for her while she puts her things away.  Ed reads out loud the first question on the list, which is, 'Did your professor take attendance today?'  Lauren replies, 'Yes, My professor took attendance today.'",
 	speakermanipulation2: "When his daughter comes home after class, Ed asks her: 'How was your philosophy class? Did the professor take attendance today?'.<br> She says, 'Oh good, and yes. The professor took attendance today.'",
},
{
	item: "roommate_dishes",
	prompt: "Matt is having a hard time remembering who his friend Sophia's roommate is.<br>He knows it is either Alicia or Maya.",
	pragmatic: "Sophia and Matt are having lunch at Sophia's apartment.<br>Sophia says to Matt, 'My roommate washed her dishes today.'",
	pragmatic2: "Sophia and Matt are having lunch at Sophia's apartment.<br> Matt asks Sophia, 'How are things going with your roommmate?' <br> Sophia says, 'Oh good. My roommate washed her dishes today.'",
	literal: "Sophia and Matt are having lunch at Sophia's apartment. Matt looks around the kitchen area.<br>Sophia's roommate had washed her dishes today.",
	question: "Who is Sophia's roommate?",
	frequency: {
		high: "<strong>Alicia</strong>, he knows, always washes her dishes.",
		medium: "<strong>Alicia</strong>, he knows, almost always washes her dishes."	
	},
	foil: "<strong>Maya</strong>, he knows, only occasionally washes her dishes.",
	likely: "Alicia",
	unlikely: "Maya",
	speakermanipulation: "Sophia and Matt are having lunch at Sophia's apartment.  Sophia has a chore chart she needs to fill out for the apartment, so she asks Matt if he can write down information while she prepares some food.  Matt reads out loud the first item on the chart, which concerns washing dishes.  He asks, 'Did your roommate wash her dishes today?'  Sophia replies, 'Yes, my roommate washed her dishes today.'",
	speakermanipulation2: "Sophia and Matt are having lunch at Sophia's apartment.<br> Matt asks Sophia, 'How are things going with your roommmate? Did she wash her dishes today?' <br> Sophia says, 'Oh good, and yes. My roommate washed her dishes today.'",
},
{
	item: "boyfriend_bike",
	prompt: "Laura is having a hard time remembering which one of her guy-friends her friend Monica is dating.<br>She knows it is either Eric or Cameron.",
	pragmatic2: "Laura and Monica are having lunch after Monica had gone for a bike ride that morning.<br>Laura asks Monica, 'How was the bike ride?'<br>Monica says, 'Oh good. My boyfriend's bike tires were well inflated.'",
	literal: "Laura and Monica are having lunch after Monica had gone for a bike ride that morning. After lunch, Monica points out a bike: 'Oh look. There's my boyfriend's bike.'<br>Laura says, 'Cool bike.', and pushes down on the tires. The tires were well inflated.",
	question: "Who is Monica's boyfriend?",
	frequency: {
		high: "<strong>Eric</strong>, she knows, always has his bike tires well inflated.",
		medium: "<strong>Eric</strong>, she knows, almost always has his bike tires well inflated."	
	},
	foil: "<strong>Cameron</strong>, she knows, only occasionally has his bike tires well inflated.",
	likely: "Eric",
	unlikely: "Cameron",
	speakermanipulation: "Laura and Monica are having lunch one day. Monica has a survey to fill out for the apartment, so she asks Laura if she can write down her answers while she prepares some food.  Laura reads out loud items from the survey. One of them asks about bike locking habits. She asks, 'Did your boyfriend lock up his bike today?'  Laura replies, 'Yes. My boyfriend locked up his bike today.'",
	speakermanipulation2: "Laura and Monica are having lunch after Monica had gone for a bike ride that morning.<br>Laura asks Monica, 'How was the bike ride? Were your boyfriend's tires well inflated?'<br>Monica says, 'Oh good, and yes. My boyfriend's bike tires were well inflated.'"
},
{
	item: "tutor_homework",
	prompt: "Molly is having a hard time remembering which student her officemate, Jenna, is tutoring.<br>She knows it is either Tom or Jim.",
	pragmatic2: "In their office, Molly asks Jenna, 'How is tutoring going?'.<br>Jenna says to Molly, 'Oh good. My student turned in his homework on time today.'",
	literal: "In their office, Molly notices some papers on Jenna's desk.<br>Jenna's student turned in his homework on time today.",
	question: "Who is Jenna's student?",
	frequency: {
		high: "<strong>Tom</strong>, she knows, always turns in his homework on time.",
		medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Jim</strong>, she knows, only occasionally turns in his homework on time.",
	likely: "Tom",
	unlikely: "Jim",
	speakermanipulation: "In their office, Jenna asks Molly if she can help her fill out a daily report card for her student while she files away some papers.  Molly reads out loud the first question on the form, which is, 'Did your student turn in their homework on time today?'  Jenna replies, 'Yes, my student turned in his homework on time today.'",
	speakermanipulation2: "In their office, Molly asks Jenna: 'How is tutoring going? Did your student turn in their homework on time today?' <br>Jenna replies, 'Oh good, and yes. My student turned in his homework on time today.'"
},
{
	item: "maid_dusting",
	prompt: "Henry is having a hard time remembering which daily cleaning service his friend Phil's maid works for.<br>He knows it is either Maid By Me or Sunflowers Maid Service.",
	pragmatic2: "Henry visits Phil at his apartment. Henry asks, 'How are things around here?'<br>Phil says, 'Oh good. My maid dusted the windows today.'",
	literal: "Henry visits Phil at his apartment. He inspects the windows. <br>The maid dusted the windows today.",
	question: "What cleaning service does Phil's maid work for?",
	frequency: {
		high: "<strong>Maid By Me</strong>, he knows, always dusts the windows.",
	//	medium: "<strong>Sunflowers Maid Service</strong>, he knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Sunflowers Maid Service</strong>, he knows, only occasionally dusts the windows.",
	likely: "Maid By Me",
	unlikely: "Sunflowers Maid Service",
	speakermanipulation: "Henry visits Phil at his apartment.  Phil asks Henry if he can help him fill out an evaluation of his maid who just cleaned his apartment while he prepares some food.  Henry reads out loud the first question on the form, which is, 'Did your maid dust the windows today?'  Phil replies, 'Yes. My maid dusted the windows today.'",
	speakermanipulation2: "Henry visits Phil at his apartment.  Henry asks, 'How are things around here? Did your maid dust the windows today?'<br> Phil replies, 'Oh good, and yes. My maid dusted the windows today.'"
},
{
	item: "secretary_report",
	prompt: "Suzanne manages secretaries and is having a hard time remembering who her friend Michael's new secretary is.<br>She knows it is either Danielle or Erica.",
	pragmatic2: "Suzanne meets Michael at Michael's office at the end of the day to get dinner. Suzanne asks Michael, 'How was your day today?'<br>Michael says, 'Oh good. My secretary kept a call log for me today.'",
	literal: "Suzanne meets Michael at Michael's office at the end of the day to get dinner.  Suzanne looks over at Michael's desk and sees a report left on it.<br>His secretary kept a call log for him today.",
	question: "Who is Michael's new secretary?",
	frequency: {
		high: "<strong>Danielle</strong>, she knows, keeps a call log every day.",
	//	medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Erica</strong>, she knows, only occasionally keeps a call log.",
	likely: "Danielle",
	unlikely: "Erica",
	speakermanipulation: "Suzanne meets Michael at Michael's office at the end of the day to get dinner.  Before they eat, they decide to fill out a form from the company about the secretaries' performance.  Michael has his hands full, so Suzanne asks the questions out loud.  He asks, 'Did your secretary keep a call log today?'  Michael replies, 'Yes, my secretary kept a call log today.'",
	speakermanipulation2: "Suzanne meets Michael at Michael's office at the end of the day to get dinner. Suzanne asks Michael: 'How was your day today? Did your secretary keep a call log for you?' <br>Michael replies, 'Oh good, and yes. My secretary kept a call log for me today.'"
},
{
	item: "mechanic_inspection",
	prompt: "Barbara is having a hard time remembering who her husband's mechanic is.<br>She knows it is either Joe or Bob.",
	pragmatic2: "When Barbara's husband comes home from his errands, she asks him, 'How were your errands?'<br>He says, 'Oh good. The mechanic did the oil change in under fifteen minutes today.'",
	// literal: "When Barbara's husband comes home from his errands, she sees the receipt from his mechanic.<br>The mechanic did the oil change in under fifteen minutes today.",
	literal: "Barbara picks up her husband's car from the mechanic this afternoon. The mechanic did the oil change in under fifteen minutes today.",
	question: "Who is Barbara's husband's mechanic?",
	frequency: {
		high: "<strong>Joe</strong>, she knows, always does oil changes in under fifteen minutes.",
	//	medium: "<strong>Bob</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Bob</strong>, she knows, only occasionally does oil changes in under fifteen minutes.",
	likely: "Joe",
	unlikely: "Bob",
	speakermanipulation: "When Barbara's husband comes home from his errands, he asks her if she can help him fill out an evaluation form for the mechanic since his hands are dirty.  Barbara begins to ask the questions.  She asks, 'Did the mechanic do the oil change in under fifteen minutes today?'  Her husband replies, 'Yes, the mechanic did the oil change in under fifteen minutes today.'",
	speakermanipulation2: "When Barbara's husband comes home from his errands, she asks him: 'How were your errands? Did the mechanic do the oil change in under fifteen minutes?' <br>Her husband replies, 'Oh good, and yes. The mechanic did the oil change in under fifteen minutes today.'"
//THE QUESTION ON THIS FORM ACTUALLY IMPLIES THAT THE MECHANIC SHOULD HAVE DONE THIS... NOT SURE IF THAT'S OK
// possible solution: Make the questionnaire be from a third-party organization of mechanics (so, an interested party, but not necessarily expected)
},
{
	item: "doctor_writing",
	prompt: "Rebecca is having a hard time remembering who her friend Jennifer's doctor is.<br>She knows it is either Dr. Smith or Dr. Jones.",
	pragmatic2: "When Jennifer comes back from her doctor's appointment, Rebeccas asks her, 'How did your appointment go?'<br>Jennifer says, 'Oh good. My doctor wrote legibly today.'",
	// pragmatic2: "When Jennifer comes back from her doctor's appointment, Rebecca asks her: 'How was the appointment?' Jennifer says, 'It went well. My doctor wrote legibly today.'",
	literal: "When Jennifer comes back from her doctor's appointment, she takes out her prescription and leaves it on the table.  Rebecca looks at the handwriting on the prescription.<br>Jennifer's doctor wrote legibly today.",
	question: "Who is Jennifer's doctor?",
	frequency: {
		high: "<strong>Dr. Smith</strong>, she knows, always writes legibly.",
	//	medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Dr. Jones</strong>, she knows, only occasionally writes legibly.",
	likely: "Dr. Smith",
	unlikely: "Dr. Jones",
	speakermanipulation: "When Jennifer comes back from her doctor's appointment, she asks Rebecca if she can help her fill out an on-line review of the doctor since her hand is in a bandage.  Rebecca reads the questions out loud to Jennifer.  She asks, 'Did the doctor write legibly?'  Rebecca replies, 'Yes, my doctor wrote legibly today.'",
	speakermanipulation2: "When Jennifer comes back from her doctor's appointment, Rebecca asks her: 'How did your appointment go? Did the doctor write legibly?'<br>Rebecca replies, 'Oh good, and yes. My doctor wrote legibly today.'"
},
{
	item: "italian_bread",
	prompt: "Kim is having a hard time remembering where her roommates were going for dinner tonight.<br>She knows they were going out for Italian, so it is either Italian Garden or Viva Roma, as those are the only Italian restaurants in their town.",
	pragmatic2: "When her rooomates come back from dinner, Kim asks them, 'How was dinner?'<br>One of roommates says to Kim, 'Oh good. The restaurant served bread with dinner today.'",
	literal: "When her rooomates come back from dinner, they leave the receipt on the table.  Rebecca looks at the receipt.<br> The restaurant served bread with dinner today.",
	question: "Where did Kim's roommates go for dinner?",
	frequency: {
		high: "<strong>Viva Roma</strong>, she knows, always serves bread with dinner."
	},
	foil: "<strong>Italian Garden</strong>, she knows, only occasionally serves bread with dinner.",
	likely: "Viva Roma",
	unlikely: "Italian Garden",
	speakermanipulation: "When her rooomates come back from dinner, one of them asks Kim if she can help her fill out a survey of the retaurant since the roommate's hand is in a bandage.  Kim reads the questions out loud to her roommate.  She asks, 'Did the restaurant serve bread with dinner?'  The roommate replies, 'Yes. The restaurant served bread with dinner today.'",
	speakermanipulation2: "When her rooomates come back from dinner, Kim asks one of them: 'How was dinner? Did they serve bread with dinner?'<br>The roommate replies, 'Oh good, and yes. The restaurant served bread with dinner today.'"
},
{
	item: "chinese_fortune",
	prompt: "Lucas is having a hard time remembering where his roommates were going for dinner tonight.<br>He knows they were going out for Chinese, so it is either Beijing Cafe or Peking Garden, as those are the only Chinese restaurants in their town.",
	pragmatic2: "When his rooomates come back from dinner, Lucas asks them, 'How was dinner?'<br>One of roommates says to Kim, 'Oh good. The restaurant gave us fortune cookies today.'",
	literal: "When his rooomates come back from dinner, they leave the receipt on the table.  Lucas looks at the receipt.<br> The restaurant gave them fortune cookies today.",
	question: "Where did Lucas's roommates go for dinner?",
	frequency: {
		high: "<strong>Beijing Cafe</strong>, he knows, always gives out fortune cookies."
	},
	foil: "<strong>Peking Garden</strong>, he knows, only occasionally gives out fortune cookies.",
	likely: "Beijing Cafe",
	unlikely: "Italian Garden",
	speakermanipulation: "When his rooomates come back from dinner, one of them asks Lucas if he can help her fill out a survey of the retaurant since the roommate's hand is in a bandage.  Lucas reads the questions out loud to her roommate.  He asks, 'Did the restaurant serve fortune cookies?'  The roommate replies, 'Yes. The restaurant served fortune cookies today.'",
	speakermanipulation2: "When his rooomates come back from dinner, Lucas asks one of them: 'How was dinner? Did they give out fortune cookies?' <br>The roommate replies, 'Oh good, and yes. The restaurant served bread with dinner today.'"
}
]
