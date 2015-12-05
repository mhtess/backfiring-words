var stimuli = [
{
	item: "vegetarian",
	prompt: "Steve is having a hard time remembering who is roommate Jonathon is dating. He knows it is either Jessica or Stephanie.",
	pragmatic: "Jonathon arrives home from a date. Steve asks, ''How was the date?'' Jonathon says, ''It was great. We ordered vegetarian food.''",
	literal: "Steve notices on the kitchen counter a receipt for Jonathon’s most recent date. On the receipt, Steve saw that they ordered vegetarian food.",
	question: "Who is Jonathon dating?",
	frequency: {
		high: "Jessica, he knows, is vegetarian and never eats meat.",
		medium: "Jessica, he knows, is sort-of a vegetarian and eats meat only once a week."	
	},
	foil: "Stephanie, he knows, eats whatever.",
	likely: "Jessica",
	unlikely: "Stephanie"
},{
	item: "music_lesson",
	prompt: "Sally is having a hard time remembering who her son has for his elementary school teacher. She knows it is either Ms. Smith or Ms. Johnson.",
	pragmatic: "At the dinner table her son Billy says: ''Mommy, the teacher taught music today.''",
	literal: "At the dinner table, she notices her son Billy’s composition notebook, which had his daily schedule on it. It read that there was a music lesson today.",
	question: "Who is Billy's teacher?",
	frequency: {
		high: "Ms. Smith, she knows, has a musical lesson incorporated into her class every day.",
		medium: "Ms. Smith, she knows, has a musical lesson 4 out of 5 days."	
	},
	foil: "Ms. Johnson, she knows, only has a musical lesson occasionally.",
	likely: "Ms. Smith",
	unlikely: "Ms. Johnson"
},{
	item: "high_school_teacher",
	prompt: "Sally is having a hard time remembering who her son has for his high school teacher. She knows it is either Ms. Smith or Ms. Johnson.",
	pragmatic: "At the dinner table, her son says to her, 'My teacher took attendance today!'",
	literal: "At the dinner table, she notices her son Billy’s notebook, which has his daily report card in it. It reports that his teacher took attendance today.",
	question: "Who is Billy's teacher?",
	frequency: {
		high: "Ms. Smith, she knows, takes attendance every day.",
		medium: "Ms. Smith, she knows, takes attendance most days."	
	},
	foil: "Ms. Johnson, she knows, rarely takes attendance.",
	likely: "Ms. Smith",
	unlikely: "Ms. Johnson"
},{
	item: "friend_movie",
	prompt: "Matt is having a hard time remembering who his friend's, Gabe's, roommate is.  He knows it is either Jack or Dave.",
	pragmatic: "During lunch Gabe says to Matt, 'My roommate took out the trash!'",
	literal: "During lunch Matt notices a chore report on Gabe's apartment's wall.  It states that Gabe's roommate took out the trash.",
	question: "Who is Gabe's roommate?",
	frequency: {
		high: "Jack, he knows, always takes out the trash.",
		medium: "Jack, he knows, sometimes takes out the trash."	
	},
	foil: "Dave, he knows, never takes out the trash.",
	likely: "Jack",
	unlikely: "Dave"
}]
