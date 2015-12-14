var stimuli = [
//{
//	item: "girlfriend_vegetarian",
//	prompt: "Steve is having a hard time remembering who his roommate Jonathon is dating.<br>He knows it is either Jessica or Stephanie.",
//	pragmatic: "Jonathon arrives home from a date.<br>Steve asks, ''How was the date?''<br>Jonathon says, ''It was great. She ordered vegetarian food.''",
//	literal: "Steve notices on the kitchen counter a receipt for Jonathon's most recent date.<br>On the receipt, Steve saw that his date ordered vegetarian food.",
//	question: "Who is Jonathon dating?",
//	frequency: {
//		high: "<strong>Jessica</strong>, he knows, is a strict vegetarian and never eats meat.",
//		medium: "<strong>Jessica, he knows, is sort-of a vegetarian and eats meat only once a week."	
//	},
//	foil: "<strong>Stephanie</strong>, he knows, eats whatever.",
//	likely: "Jessica",
//	unlikely: "Stephanie"
//},
{
	item: "teacher_music",
	prompt: "Sally is having a hard time remembering who her nephew Billy -- her sister Bethany's son --- has for his elementary school teacher.<br>She knows it is either Ms. Smith or Ms. Johnson.",
	pragmatic: "Sally and Bethany meet for tea after Bethany is done dropping off her son at home.<br>Bethany enters the tea shop and says to Sally: ''Sally, the teacher taught music today.''",
	literal: "Sally picks her nephew up from school today.<br>She enters his classroom and sees the day's schedule; it read that the teacher taught music today.",
	question: "Who is Billy's teacher?",
	frequency: {
		high: "<strong>Ms. Smith</strong>, she knows, has a musical lesson every day.",
		medium: "<strong>Ms. Smith</strong>, she knows, has a musical lesson 4 out of 5 days."	
	},
	foil: "<strong>Ms. Johnson</strong>, she knows, has a musical lesson only occasionally.",
	likely: "Ms. Smith",
	unlikely: "Ms. Johnson",
	speakermanipulation2: "Sally and Bethany meet for tea after Bethany is done dropping off her son at home. Sally asks her sister, 'How was Billy's day? Did the teacher have a music lesson?"
},
 {
 	item: "professor_attendance",
 	prompt: "Ed is having a hard time remembering which professor is teaching his daughter Lauren's philosophy class. He knows it is either Professor Burke or Professor Fought.",
 	pragmatic: "When his daughter comes home after class, she says to him, 'My professor took attendance today.'",
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
 	speakermanipulation2: "When his daughter comes home after class, she has to fill out a survey for school. He asks her, 'Did your professor take attendance?'  Lauren replies, 'Yes. My professor took attendance.'"
 },
{
	item: "roommate_dishes",
	prompt: "Matt is having a hard time remembering who his friend Sophia's roommate is.<br>He knows it is either Alicia or Maya.",
	pragmatic: "Sophia and Matt are having lunch at Sophia's apartment.<br>Sophia says to Matt, 'My roommate washed her dishes.'",
	literal: "Sophia and Matt are having lunch at Sophia's apartment. Matt looks around the kitchen area.<br>Sophia's roommate had washed her dishes.",
	question: "Who is Sophia's roommate?",
	frequency: {
		high: "<strong>Alicia</strong>, he knows, always washes her dishes.",
		medium: "<strong>Alicia</strong>, he knows, almost always washes her dishes."	
	},
	foil: "<strong>Maya</strong>, he knows, only occasionally washes her dishes.",
	likely: "Alicia",
	unlikely: "Maya",
	speakermanipulation: "Sophia and Matt are having lunch at Sophia's apartment.  Sophia has a chore chart she needs to fill out for the apartment, so she asks Matt if he can write down information while she prepares some food.  Matt reads out loud the first item on the chart, which concerns washing dishes.  He asks, 'Did your roommate wash her dishes today?'  Sophia replies, 'Yes, my roommate washed her dishes today.'",
	speakermanipulation2: "Sophia and Matt are having lunch at Sophia's apartment. Matt asks Sophia: 'Did your roommate wash her dishes?'  Sophia replies, 'Yes. My roommate washed her dishes.'"
},
{
	item: "boyfriend_bike",
	prompt: "Melinda is having a hard time remembering which one of her guy-friends her friend Monica is dating.<br>She knows it is either Eric or Cameron.",
	pragmatic: "Melinda and Monica are having lunch one day.<br>Monica says to Melina, 'My boyfriend locked up his bike today.'",
	literal: "Melinda and Monica are having lunch one day. Monica says: 'Oh look. There's my boyfriend's bike.' Melinda sees the bike. It was locked up.",
	question: "Who is Monica's boyfriend?",
	frequency: {
		high: "<strong>Eric</strong>, she knows, always locks up his bike.",
		medium: "<strong>Eric</strong>, she knows, almost always locks up his bike."	
	},
	foil: "<strong>Cameron</strong>, she knows, only occasionally locks up his bike.",
	likely: "Erica",
	unlikely: "Cameron",
	speakermanipulation: "Melinda and Monica are having lunch one day. Monica has a survey to fill out for the apartment, so she asks Melinda if she can write down her answers while she prepares some food.  Melinda reads out loud items from the survey. One of them asks about bike locking habits. She asks, 'Did your boyfriend lock up his bike today?'  Melinda replies, 'Yes. My boyfriend locked up his bike today.'",
	speakermanipulation2: "Melinda and Monica are having lunch one day. Monica was describing a recent outing to the farmer's market with her boyfriend. Melinda says to Monica: 'That sounds like fun. Did your boyfriend lock up his bike?'  Monica replies, 'Yes. My boyfriend locked up his bike.'"
},
{
	item: "tutor_homework",
	prompt: "Molly is having a hard time remembering which student her officemate, Jenna, is tutoring.<br>She knows it is either Tom or Jim.",
	pragmatic: "In their office Jenna says to Molly, 'My student turned in his homework on time.'",
	literal: "In their office, Molly notices some papers on Jenna's desk.<br>Jenna's student turned in his homework on time.",
	question: "Who is Jenna's student?",
	frequency: {
		high: "<strong>Tom</strong>, she knows, always turns in his homework on time.",
		medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Jim</strong>, she knows, only occasionally turns in his homework on time.",
	likely: "Tom",
	unlikely: "Jim",
	speakermanipulation: "In their office, Jenna asks Molly if she can help her fill out a daily report card for her student while she files away some papers.  Molly reads out loud the first question on the form, which is, 'Did your student turn in their homework on time today?'  Jenna replies, 'Yes, my student turned in his homework on time today.'",
	speakermanipulation2: "In their office, Molly asks Jenna: 'Did your student turn in their homework on time today?'  Jenna replies, 'Yes. My student turned in his homework on time.'"
},
{
	item: "maid_dusting",
	prompt: "Henry is having a hard time remembering which cleaning service his friend Phil's maid works for.<br>He knows it is either Maid By Me or Sunflowers Maid Service.",
	pragmatic: "Henry visits Phil at his apartment. Phil says to Henry, 'My maid dusted the windows.'",
	literal: "Henry visits Phil at his apartment. He inspects the windows. <br>The maid dusted the windows.",
	question: "What cleaning service does Phil's maid work for?",
	frequency: {
		high: "<strong>Maid By Me</strong>, he knows, always dusts the windows.",
	//	medium: "<strong>Sunflowers Maid Service</strong>, he knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Sunflowers Maid Service</strong>, he knows, only occasionally dusts the windows.",
	likely: "Maid By Me",
	unlikely: "Sunflowers Maid Service",
	speakermanipulation: "Henry visits Phil at his apartment.  Phil asks Henry if he can help him fill out an evaluation of his maid who just cleaned his apartment while he prepares some food.  Henry reads out loud the first question on the form, which is, 'Did your maid dust the windows today?'  Phil replies, 'Yes. My maid dusted the windows.'",
	speakermanipulation2: "Henry visits Phil at his apartment.  Henry asks Phil: 'Did your maid dust the windows?'  Phil replies, 'Yes. My maid dusted the windows.'"
},
{
	item: "secretary_report",
	prompt: "Brian is having a hard time remembering who his friend Michael's new secretary is.<br>He knows it is either Danielle or Erica.",
	pragmatic: "Brian meets up with Michael at Michael's office to get lunch. Michael says to Brian, 'My secretary kept a call log for me.'",
	literal: "Brian meets up with Michael at Michael's office to get lunch.  Brian looks over at Michael's desk and sees a report left on it.<br>His secretary kept a call log for him.",
	question: "Who is Michael's new secretary?",
	frequency: {
		high: "<strong>Danielle</strong>, she knows, always keeps a call log.",
	//	medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Erica</strong>, she knows, only occasionally keeps a call log.",
	likely: "Danielle",
	unlikely: "Erica",
	speakermanipulation: "Brian meets up with Michael at Michael's office to get lunch.  Before they eat, they decide to fill out a form from the company about the secretaries' performance.  Michael has his hands full, so Brian asks the questions out loud.  He asks, 'Did your secretary keep a call log today?'  Michael replies, 'Yes, my secretary kept a call log today.'",
	speakermanipulation2: "Brian meets up with Michael at Michael's office. Briana asks Michael: 'Did your secretary keep a call log for you?'  Michael replies, 'Yes. My secretary kept a call log for me.'"
},
{
	item: "mechanic_inspection",
	prompt: "Barbara is having a hard time remembering who her husband's mechanic is.<br>She knows it is either Joe or Bob.",
	pragmatic: "When Barbara's husband comes home from his errands, he says to her, 'The mechanic did the oil change in under fifteen minutes.'",
	// literal: "When Barbara's husband comes home from his errands, she sees the receipt from his mechanic.<br>The mechanic did the oil change in under fifteen minutes today.",
	literal: "Barbara picks up her husband's car from the mechanic this afternoon. The mechanic did the oil change in under fifteen minutes.",
	question: "Who is Barbara's husband's mechanic?",
	frequency: {
		high: "<strong>Joe</strong>, she knows, always does oil changes in under fifteen minutes.",
	//	medium: "<strong>Bob</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Bob</strong>, she knows, only occasionally does oil changes in under fifteen minutes.",
	likely: "Joe",
	unlikely: "Bob",
	speakermanipulation: "When Barbara's husband comes home from his errands, he asks her if she can help him fill out an evaluation form for the mechanic since his hands are dirty.  Barbara begins to ask the questions.  She asks, 'Did the mechanic do the oil change in under fifteen minutes today?'  Her husband replies, 'Yes, the mechanic did the oil change in under fifteen minutes.'",
	speakermanipulation2: "When Barbara's husband comes home from his errands, she asks him: 'Did the mechanic do the oil change in under fifteen minutes?'  Her husband replies, 'Yes. The mechanic did the oil change in under fifteen minutes.'"
//THE QUESTION ON THIS FORM ACTUALLY IMPLIES THAT THE MECHANIC SHOULD HAVE DONE THIS... NOT SURE IF THAT'S OK
},
{
	item: "doctor_writing",
	prompt: "Rebecca is having a hard time remembering who her friend Jennifer's doctor is.<br>She knows it is either Dr. Smith or Dr. Jones.",
	pragmatic: "When Jennifer comes back from her doctor's appointment, she says to Rebecca, 'I got a prescription and My doctor wrote legibly.'",
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
	speakermanipulation2: "When Jennifer comes back from her doctor's appointment, Rebecca asks her: 'Did the doctor write legibly?'  Rebecca replies, 'Yes. My doctor wrote legibly.'"
},
{
	item: "italian_bread",
	prompt: "Kim is having a hard time remembering where her roommates were going for dinner tonight.<br>She knows they were going out for Italian, so it is either Italian Garden or Viva Roma, as those are the only Italian restaurants in their town.",
	pragmatic: "When her rooomates come back from dinner, Kim asks them how their dinner was. One of roommates says to Kim, 'It was great. The restaurant served bread with dinner.'",
	literal: "When her rooomates come back from dinner, they leave the receipt on the table.  Rebecca looks at the receipt.<br> The restaurant served bread with dinner.",
	question: "Where did Kim's roommates go for dinner?",
	frequency: {
		high: "<strong>Viva Roma</strong>, she knows, always serves bread with dinner."
	},
	foil: "<strong>Italian Garden</strong>, she knows, only occasionally serves bread with dinner.",
	likely: "Viva Roma",
	unlikely: "Italian Garden",
	speakermanipulation: "When her rooomates come back from dinner, one of them asks Kim if she can help her fill out a survey of the retaurant since the roommate's hand is in a bandage.  Kim reads the questions out loud to her roommate.  She asks, 'Did the restaurant serve bread with dinner?'  The roommate replies, 'Yes. The restaurant served bread with dinner.'",
	speakermanipulation2: "When her rooomates come back from dinner, Kim asks one of them: 'How was dinner? Did they serve bread with dinner?'  The roommate replies, 'Dinner was great. Yes. The restaurant served bread with dinner.'"
},
{
	item: "chinese_fortune",
	prompt: "Lucas is having a hard time remembering where his roommates were going for dinner tonight.<br>She knows they were going out for Chinese, so it is either Peking Garden or Beijing Cafe, as those are the only Chinese restaurants in their town.",
	pragmatic: "When his rooomates come back from dinner, Lucas asks them how their dinner was. One of roommates says to Kim, 'It was great. The restaurant gave us fortune cookies.'",
	literal: "When his rooomates come back from dinner, they leave the receipt on the table.  Lucas looks at the receipt.<br> The restaurant gave them fortune cookies.",
	question: "Where did Lucas's roommates go for dinner?",
	frequency: {
		high: "<strong>Beijing Cafe</strong>, he knows, always gives out fortune cookies."
	},
	foil: "<strong>Peking Garden</strong>, she knows, only occasionally gives out fortune cookies.",
	likely: "Beijing Cafe",
	unlikely: "Italian Garden",
	speakermanipulation: "When his rooomates come back from dinner, one of them asks Lucas if he can help her fill out a survey of the retaurant since the roommate's hand is in a bandage.  Lucas reads the questions out loud to her roommate.  He asks, 'Did the restaurant serve fortune cookies?'  The roommate replies, 'Yes. The restaurant served fortune cookies.'",
	speakermanipulation2: "When his rooomates come back from dinner, Lucas asks one of them: 'How was dinner? Did they give out fortune cookies?'  The roommate replies, 'Dinner was great. Yes. The restaurant served bread with dinner.'"
},
]
