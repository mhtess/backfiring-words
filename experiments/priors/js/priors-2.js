function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      $("#n_trials").html(exp.n_trials);
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.catch = slide({
     name : "catch",
     start: function() {
      this.startTime = Date.now();
            $(".err").hide();
     },
    button : function() {
      var response1 = $("#catch1").val()
      var response2 = $("#catch2").val()
      if ((response1 == -1) || (response2 == -1)) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        exp.go();
      }
    },
    log_responses : function() {
      var response1 = $("#catch1").val()
      var response2 = $("#catch2").val()
      exp.catch_trials.push({
        "trial_type" : "catch",
        "response1" : response1,
        "response2" : response2,
        "pass": (response1 == 1 && response2==1)? 1 : 0,
        "rt":this.rt
      });
    }
  });

  slides.single_trial = slide({
    name: "single_trial",
    
    present: exp.stimuli,

    present_handle : function(stim) {
      this.startTime = Date.now()
      this.stim =  stim; 
      this.trialNum = exp.stimscopy.indexOf(stim);
      $("#population_frequency_a").val('')
      $("#population_frequency_b").val('')
      $("#population_comparison_b").val('1000')
      $("#population_comparison_a").val('1000')
      $("#time_frequency_a").val('')
      $("#time_frequency_b").val('')
      $("#time_comparison_a").val('')
      $("#time_comparison_b").val('')
      $(".err").hide();
      $(".err0").hide();

      $(".err2").hide();
      $(".err3").hide();

      var intervalDictionary = {
        day: "yesterday",
        week: "last week",
        month: "last month",
        year: "last year",
        "5 years": "in the last 5 years"
      }

      this.q1 = "How many Americans do you think have <em>" + stim.past_participle + "</em><strong> before</strong>?<br>"
      this.q2 = "How many Americans do you think  <em>" +stim.past+ "</em><strong> "+intervalDictionary[stim.interval]+"</strong>?"
      this.q3 = "Imagine a person who <em> "+stim.past+"</em> <strong>"+intervalDictionary[stim.interval]+"</strong>.<br>How often does he or she "+stim.verb+"?"
      this.q4 = "Imagine a person who has <em>" + stim.past_participle + "</em> before but did not do it <strong>"+intervalDictionary[stim.interval]+"</strong>. <br>How often does he or she "+stim.verb+"?"
      $(".question1").html(this.q1);
      $(".question2").html(this.q2);
      $(".question3").html(this.q3);
      $(".question4").html(this.q4);


    },

    button : function() {
      // Record the user responses with these dictionaries
      response_1 = {
        ntimes: $("#population_frequency_a").val(),
        out_of: $("#population_comparison_a").val()
      }
      response_2 = {
        ntimes: $("#population_frequency_b").val(), 
        out_of: $("#population_comparison_b").val()
      }
      response_3 = {
        ntimes: $("#time_frequency_a").val(),
        out_of: $("#time_comparison_a").val()
      }
      response_4 = {
        ntimes: $("#time_frequency_b").val(),
        out_of: $("#time_comparison_b").val()
      }
      //We keep the responses array to easily check if any of the entries are " " in the first error check.
      responses = [$("#population_frequency_a").val(),
                  $("#population_frequency_b").val(),
                  $("#population_comparison_a").val(),
                  $("#population_comparison_b").val(),
                   $("#time_frequency_a").val(),
                    $("#time_frequency_b").val(),
                     $("#time_comparison_a").val(),
                     $("#time_comparison_b").val()]
      

      //Hide the error message if the error has been corrected
      $(".err").hide();
      $(".err0").hide();
      $(".err2").hide();
      $(".err3").hide();
      if ((_.contains(responses, "")) || (_.contains(responses, null))) {
        $(".err").show();
      //Check to make sure the second response is larger than the first
      }else if (_.contains(responses, "0")){
        $(".err0").show();
      //Check to make sure the second response is larger than the first
      }else if (parseInt(response_1.ntimes)/parseInt(response_1.out_of) < (parseInt(response_2.ntimes)/parseInt(response_2.out_of))){
        $(".err2").show();
      //Check to make sure responses are whole numbers
      }else if(parseFloat(response_1.ntimes)%1 != 0 || parseFloat(response_2.ntimes)%1 !=0 || parseFloat(response_3.ntimes)%1 != 0 || parseFloat(response_4.ntimes)%1 !=0){
        $(".err3").show();
      }else{
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        _stream.apply(this);
      }
    },

    log_responses : function() {
      //debugger;
       exp.data_trials.push({
         "trial_type" : "twostep_elicitation",
         "trial_num": this.trialNum,
         "item": this.stim.verb,
         "q1_people": response_1.ntimes, 
         "q1_sample": response_1.out_of, 
         "q2_people": response_2.ntimes, 
         "q2_sample": response_2.out_of, 
         "q3_instances": response_3.ntimes, 
         "q3_interval": response_3.out_of, 
         "q4_instances": response_4.ntimes, 
         "q4_interval": response_4.out_of,
         "past":this.stim.past,
         "past_participle":this.stim.past_participle,
         "question1":this.q1,
         "question2":this.q2,
         "question3":this.q3,
         "question4":this.q4,
         //"existence" : exp.sliderPost,
         //"nTimes" : response,
         //"timeWindow": freq,
         //Here we log the 
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
      var ut_id = "mht-bf-priors-20160402";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();


  exp.trials = [];
  exp.catch_trials = [];
  exp.stimuli = _.shuffle(stimuli);
  exp.n_trials = stimuli.length
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
  exp.structure=["i0", "instructions","catch","single_trial", 'subj_info', 'thanks'];
  
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