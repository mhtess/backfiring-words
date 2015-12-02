function cartesianProductOf() {
    return _.reduce(arguments, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [ [] ]);
};


function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
      $("#n_trials").html(exp.n_trials);
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.multi_slider = slide({
    name : "multi_slider",

    present : exp.stimuli,
    
    present_handle : function(stim) {
      this.condition = stim[0]
      this.startTime = Date.now()
      this.stim =  stim[1]; 
      this.character = this.stim.requiresGender == "male" ? 
                        {name: "John",gender:"male"} : 
                        this.stim.requiresGender == "female" ? 
                        {name: "Kate",gender:"female"} : 
                       stim[2];
      this.possessive =  this.character.gender == "male" ? "his" : "her"
      this.pronoun =  this.character.gender == "male" ? "he" : "she"
      this.requiresGender = 

      this.trialNum = exp.stimscopy.indexOf(stim);
      $(".err").hide();
      // debugger;

      var targetSentence = this.stim.needsPossessive ? 
         this.character.name + " " + this.stim.pastverb + " "+ this.possessive + " " + this.stim.pastobject + " today." :
          this.character.name + " " + this.stim.pastverb + " " + this.stim.pastobject + " today."

      var prompt = this.condition == "survey" ? this.character.name + " is taking an online survey about the habits of ordinary Americans. "+
        "It is a long survey with many different kinds of questions. " +
        "At the end of the survey, the computer compiled all of " + this.character.name + "'s responses and displayed them on the screen. " + 
        "One of "+this.possessive+" answers read: <br>"  : 
        "Imagine you overhear the following conversation between A and B: "

      $("#context").html(prompt);

      this.condition == "survey" ?
        $("#target").html(targetSentence):
        $("#target").html('<br><div id ="conversation">A: How is '+this.character.name+" these days? <br>" +
        "B: "+utils.upperCaseFirst(this.pronoun)+"'s good. " +  targetSentence +"</div></br>")

      $("#conversation").css("text-align","justify")

      this.sentence_types = _.shuffle(["expl1", "expl2", "expl3", "habitual"]);
      this.sentences = {
        "expl1": this.character.name +  " " + this.stim.explanation1 + ".",
        "expl2":  this.character.name + " " + this.stim.explanation2 + ".",
        "expl3": this.character.name +  " " + this.stim.explanation3 + ".",
        "habitual": this.character.name + " " + this.stim.item + "."
      };

      this.n_sliders = this.sentence_types.length;
      $(".slider_row").remove();
      for (var i=0; i<this.n_sliders; i++) {
        var sentence_type = this.sentence_types[i];
        var sentence = this.sentences[sentence_type];
        $("#multi_slider_table").append('<tr class="slider_row"><td class="slider_target" id="sentence' + i + '">' + sentence + '</td><td colspan="2"><div id="slider' + i + '" class="slider">-------[ ]--------</div></td></tr>');
        utils.match_row_height("#multi_slider_table", ".slider_target");
      }

      this.init_sliders(this.sentence_types);
      exp.sliderPost = [];
    },

    button : function() {
      if (exp.sliderPost.length < this.n_sliders) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this); if and only if there is "present" data.
      }
    },

    init_sliders : function(sentence_types) {
      for (var i=0; i<sentence_types.length; i++) {
        var sentence_type = sentence_types[i];
        utils.make_slider("#slider" + i, this.make_slider_callback(i));
      }
    },
    make_slider_callback : function(i) {
      return function(event, ui) {
        exp.sliderPost[i] = ui.value;
      };
    },
    log_responses : function() {
      for (var i=0; i<this.sentence_types.length; i++) {
        var sentence_type = this.sentence_types[i];
        var sentence = this.sentences[sentence_type];
        exp.data_trials.push({
          "trial_type" : "multi_slider",
          "rt":this.rt,
          "trial_num": 1+this.trialNum,
          "evidence": this.stim.past,
          "sentence_type" : sentence_type,
          "explanation": sentence,
          "character": this.character.name,
          "character_gender":this.character.gender,
          "response" : exp.sliderPost[i]
        });
      }
    },
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  exp.trials = [];
  exp.catch_trials = [];

    // var stimuli = [{
    //   item: "does not wear high heels",
    //   past: "did not wear high heels",
    //   pastverb: "did not wear",
    //   pastobject: "high heels",
    //   needsPossessive: false,
    //   explanation1: "likes to dress like a woman",
    //   explanation2: "wishes he were taller",
    //   explanation3: "likes the way he looks in high heels"

    // },
    // {
    //   item: "fosters tigers",
    //   past: "foster a tiger",
    //   pastverb: "fostered",
    //   pastobject: "tigers",
    //   needsPossessive: false,
    //   explanation1: "works with wild animals",
    //   explanation2: "likes tigers",
    //   explanation3: "is a risk taker"
    // }]


  var contexts = ["communicative","survey"]

  var stims = cartesianProductOf(contexts, stimuli)

  var names =  _.shuffle(_.flatten([characters, characters, characters], true).slice(0,stims.length))
  exp.stimuli = _.map(_.zip(_.shuffle(stims), names), function(lst){return _.flatten(lst, true)});
  exp.n_trials = stims.length
  exp.stimscopy = exp.stimuli.slice(0);

  // exp.condition = _.sample(["CONDITION 1", "condition 2"]); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["multi_slider","i0", "instructions","multi_slider",'subj_info', 'thanks'];
  
  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}