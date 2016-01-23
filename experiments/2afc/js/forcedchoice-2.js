function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
      $(".total-num").html(exp.numTrials);  
     }
  });

  slides.instructions = slide({
    name : "instructions",
     start: function() {
      // _.mapObject(exp.judgeButtons, function(val,key){
      //   $("#"+key).html(val);
      // });
      var instructions = {
        baseline: "On each trial, you will be asked how often a typical person does an action.",
        observation: "On each trial, you will be given a random fact about a person doing an action and be asked to judge how often that person does the action.",
        communication: "On each trial, you will read a short conversation between two friends and be asked a question about the person they are talking about."
      }
      $(".instructions").html(instructions[exp.condition]);  
      $(".total-num").html(exp.numTrials);  
    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.truthJudge = slide({
    name: "truthJudge",
    present : exp.stimuli,
    //this gets run only at the beginning of the block
    present_handle : function(stim) {

       $(".err").hide();
       $('input[name="response"]').attr("checked", false);

      this.judgeButtons = _.object(_.zip(["likely-key","unlikely-key","zero-key"],
                                _.shuffle(["A","B","C"])));
      this.startTime = Date.now();
      this.stim = stim;

      var observationSentence = stim.character.name + " " + stim.past + " today."

      // var communicationSentence = 


      // var baselineSentence = stim.character.name + " is a person."

      var possible_sentences = {
        observation: observationSentence,
        communication: 'You overhear two friends talking. <br>One of them says to the other, "' + observationSentence +'"',
        baseline: stim.character.name + " is a person."
      }
      var targetSentence = possible_sentences[exp.condition]

      // exp.condition == "observation" ?
      //                         observationSentence : 
      //                         exp.condition == "communication" ?
      //                         communicationSentence :
      //                         baselineSentence

      $(".prompt").html(targetSentence)
      $(".question").html("Which do you think is most likely?")

      var keyDictionary = {
        "likely-key": "Relative to other people, " +stim.character.name + " " + stim.habitual  + " often.",
        "unlikely-key": "Relative to other people, "+ stim.character.name + " <strong>does not</strong> " + stim.verb  + " often.",
        "zero-key":stim.character.name + " <strong>never</strong> " + stim.habitual  + ".",
      }

      _.mapObject(this.judgeButtons, function(val,key){
        $("#"+val+"key-reminder").html(keyDictionary[key]);
      });
      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
    },
    init_sliders : function() {
      utils.make_slider("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

    button : function() {
     var response = $('input[name="response"]:checked').val()
    if ( (typeof response == 'undefined') ||  (exp.sliderPost == null)  ){
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      var response = _.invert(this.judgeButtons)[$('input[name="response"]:checked').val()]
      var person = response == "likely-key" ? this.stim.likely : this.stim.unlikely

      exp.data_trials.push({
        "trial_type" : "truthJudge",
        "item": this.stim.item,
        "condition": this.stim.condition,
        "question": this.stim.question,
        "prompt":this.stim.prompt,
        "response" : response,
        "confidence": exp.sliderPost,
        "likely_person":this.stim.likely,
        "unlikely_person": this.stim.unlikely,
        "person": person,
        "likely_info":this.stim.frequency.high,
        "unlikely_info":this.stim.foil,
        "rt":this.rt,
        "personOrder":exp.personOrder
      });
    }
  });

  slides.likelihood_judgment = slide({
    name: "likelihood_judgment",
    present : exp.stimuli,
    //this gets run only at the beginning of the block
    present_handle : function(stim) {

      $(".err").hide();

      this.startTime = Date.now();
      this.stim = stim;

      var observationSentence = stim.character.name + " " + stim.past + " today."

      var possible_sentences = {
        observation: observationSentence,
        communication: 'You overhear two friends talking. <br>One of them says to the other, "' + observationSentence +'"',
        baseline: stim.character.name + " is a person."
      }
      var targetSentence = possible_sentences[exp.condition]

      $(".prompt").html(targetSentence)
      $(".question").html("How likely is it that "+stim.character.name +" will " + stim.verb + " in the next "+stim.predict_test_freq+"?")

      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
    },
    init_sliders : function() {
      utils.make_slider("#single_slider_2", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

    button : function() {
     var response = $('input[name="response"]:checked').val()
    if ( (exp.sliderPost == null)  ){
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {

      exp.data_trials.push({
        "trial_type" : "likelihood_judge",
        "item": this.stim.past,
        "condition": exp.condition,
        "response": exp.sliderPost,
        "characterGender": this.stim.character.gender,
        "rt":this.rt
      });
    }
  });


  slides.frequency_judgment = slide({
    name: "frequency_judgment",
    
    present: exp.stimuli,

    present_handle : function(stim) {


      $(".err").hide();
      $("#time_frequency").val('')
      $("#time_comparison").val('')

      this.startTime = Date.now();
      this.stim = stim;
      this.trialNum = exp.stimscopy.indexOf(stim);

      this.observationSentence = stim.character.name + " " + stim.past + " today."

      var possible_sentences = {
        observation: this.observationSentence,
        communication: 'You overhear two friends talking. <br>One of them says to the other, "' + this.observationSentence +'"',
        baseline: ""
      }
      this.targetSentence = possible_sentences[exp.condition]


      $(".prompt").html(this.targetSentence)
      this.charName = exp.condition == "baseline" ? "a typical person" : stim.character.name
      $(".question").html("How often does "+this.charName + " " + stim.verb + "?")


    },

    button : function() {
      var responses = [$("#time_frequency").val(),
                     $("#time_comparison").val()]
      if (_.contains(responses, ""))  {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      var timeTransform = {
        "week":52*5,
        "month":12*5,
        "year":5,
        "5 years":1,
      }
      var responses = [$("#time_frequency").val(),
                   $("#time_comparison").val()]
      exp.data_trials.push({
        "trial_type" : "frequency_judgment",
        "condition": exp.condition,
        "trial_num": this.trialNum,
        "past": this.stim.past,
        "verb": this.stim.verb,
        "item": this.stim.habitual,
        "observationSentence": this.observationSentence,
        "targetSentence": this.targetSentence,
        "category": this.stim.category,
        "n_times" : parseFloat(responses[0]),
        "timeWindow": responses[1],
        "rt":this.rt,
        "freq_5years":timeTransform[responses[1]]*parseFloat(responses[0]),
        "logfreq":Math.log(timeTransform[responses[1]]*parseFloat(responses[0]))
      });
    }
  });


  slides.catch_trial = slide({
     name : "catch_trial",
     start: function() {
      this.startTime = Date.now();
            $(".err").hide();
     },
    button : function() {
      var response1 = $("#catch").val()
      if (response1 == -1) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        exp.go();
      }
    },
    log_responses : function() {
      var correctAnswer = {
        "observation": 1,
        "communication":2,
        "baseline":0
      }
      var response1 = $("#catch").val()
      var el = document.getElementById('catch');
      var text = el.options[el.selectedIndex].innerHTML;
      exp.catch_trials.push({
        "trial_type" : "catch",
        "condition" : exp.condition, 
        "response" : response1,
        "selection":text,
        "pass": (response1 == correctAnswer[exp.condition])? 1 : 0,
        "rt":this.rt
      });
    }
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
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val(),
        comments : $("#comments").val()
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

  repeatWorker = false;
  (function(){
      var ut_id = "mht-backfire-20151218a";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();

  exp.trials = [];
  exp.catch_trials = [];





  exp.condition = _.sample(["baseline","observation","communication"])


  var allGenders = _.shuffle(_.flatten([maleCharacters, femaleCharacters]))


  var stims_w_names =  _.shuffle(_.flatten(_.map(stimuli, function(s){
    var newObj = jQuery.extend(true, {}, s);
    return _.extend(s, {character: allGenders.pop()})  
  }), true))

  exp.stimuli = _.shuffle(stims_w_names);
  exp.stimscopy = exp.stimuli.slice(0)
  // debugger;
  exp.personOrder = _.sample(["likely-unlikely","unlikely-likely"])
  exp.buttonCodes = {80:"P", 81:"Q"};
  // exp.judgeButtons = _.object(_.zip(["likely-key","unlikely-key"],
  //                           _.shuffle(["P","Q"])));


  // debugger;
  exp.numTrials = exp.stimuli.length;


  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
  };

  //blocks of the experiment:
   exp.structure=["i0", "instructions","catch_trial","frequency_judgment",'subj_info', 'thanks'];
 
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