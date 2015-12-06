var stimuli = [
{
	item: "vegetarian",
	prompt: "Steve is having a hard time remembering who his roommate Jonathon is dating.<br>He knows it is either Jessica or Stephanie.",
	pragmatic: "Jonathon arrives home from a date.<br>Steve asks, ''How was the date?''<br>Jonathon says, ''It was great. She ordered vegetarian food.''",
	literal: "Steve notices on the kitchen counter a receipt for Jonathon's most recent date.<br>On the receipt, Steve saw that his date ordered vegetarian food.",
	question: "Who is Jonathon dating?",
	frequency: {
		high: "<strong>Jessica</strong>, he knows, is a strict vegetarian and never eats meat.",
		medium: "<strong>Jessica, he knows, is sort-of a vegetarian and eats meat only once a week."	
	},
	foil: "<strong>Stephanie</strong>, he knows, eats whatever.",
	likely: "Jessica",
	unlikely: "Stephanie"
},{
	item: "music_lesson",
	prompt: "Sally is having a hard time remembering who her son has for his elementary school teacher.<br>She knows it is either Ms. Smith or Ms. Johnson.",
	pragmatic: "Sally picks her son up from school.<br>She enters his classroom and he says: ''Mommy, the teacher taught music today.''",
	literal: "Sally picks her son up from school.<br>She enters his classroom and sees the day's schedule; it read that the teacher taught music today.",
	question: "Who is Billy's teacher?",
	frequency: {
		high: "<strong>Ms. Smith</strong>, she knows, has a musical lesson every day.",
		medium: "<strong>Ms. Smith</strong>, she knows, has a musical lesson 4 out of 5 days."	
	},
	foil: "<strong>Ms. Johnson</strong>, she knows, has a musical lesson only occasionally.",
	likely: "Ms. Smith",
	unlikely: "Ms. Johnson"
},
// {
// 	item: "high_school_teacher",
// 	prompt: "Sally is having a hard time remembering who her son has for his high school teacher. She knows it is either Mr. Smith or Ms. Johnson.",
// 	pragmatic: "When her son came home from school, he says to her, 'My teacher took attendance today!'",
// 	literal: "When her son came home from school, she sees son's notebook, which had his daily report card in it. It said that his teacher took attendance today.",
// 	question: "Who is Billy's teacher?",
// 	frequency: {
// 		high: "Ms. Smith, she knows, takes attendance every day.",
// 		medium: "Ms. Smith, she knows, takes attendance most days."	
// 	},
// 	foil: "Ms. Johnson, she knows, rarely takes attendance.",
// 	likely: "Ms. Smith",
// 	unlikely: "Ms. Johnson"
// },
{
	item: "roommate_dishes",
	prompt: "Matt is having a hard time remembering who his friend Gabe's roommate is.<br>He knows it is either Jack or Dave.",
	pragmatic: "Gabe and Matt are having lunch at Gabe's apartment.<br>Gabe says to Matt, 'My roommate washed his dishes today.'",
	literal: "Gabe and Matt are having lunch at Gabe's apartment.<br>Matt notices that the roommate has washed his dishes today.",
	question: "Who is Gabe's roommate?",
	frequency: {
		high: "<strong>Jack</strong>, he knows, always washes his dishes.",
		medium: "<strong>Jack</strong>, he knows, almost always washes his dishes."	
	},
	foil: "<strong>Dave</strong>, he knows, only occasionally washes his dishes.",
	likely: "Jack",
	unlikely: "Dave"
},
{
	item: "tutor",
	prompt: "Molly is having a hard time remembering which student her officemate, Jenna, is tutoring.<br>She knows it is either Tom or Jim.",
	pragmatic: "In their office Jenna says to Molly, 'My student turned in his homework on time today.'",
	literal: "In their office, Molly notices some papers on Jenna's desk.<br>Jenna's student turned in his homework on time today.",
	question: "Who is Jenna's student?",
	frequency: {
		high: "<strong>Tom</strong>, she knows, always turns in his homework on time.",
		medium: "<strong>Tom</strong>, she knows, almost always turns in his homework on time."	
	},
	foil: "<strong>Jim</strong>, she knows, only occasionally turns in his homework on time.",
	likely: "Tom",
	unlikely: "Jim"
}]
