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
      $(".err2").hide();
      $(".err3").hide();

      $(".question1").html("How many Americans do you think have <strong> " + stim.past + "</strong> before?<br>");
      $(".question2").html("How many Americans do you think <strong> " +stim.habitual+ "</strong> yesterday?");
      $(".question3").html("Imagine a person who <strong> "+stim.habitual+"</strong> yesterday.<br>How often does he or she "+stim.verb+"?");
      $(".question4").html("Imagine a person who has <strong>" + stim.past + "</strong> before but did not do it yesterday. <br>How often does he or she "+stim.verb+"?");


    },

    button : function() {
      responses = [$("#population_frequency_a").val(),
                  $("#population_frequency_b").val(),
                  $("#population_comparison_a").val(),
                  $("#population_comparison_b").val(),
                   $("#time_frequency_a").val(),
                    $("#time_frequency_b").val(),
                     $("#time_comparison_a").val(),
                     $("#time_comparison_b").val()]
      $(".err").hide();
      $(".err2").hide();
      $(".err3").hide();

      if (_.contains(responses, ""))  {
        $(".err").show();
      //Check to make sure the second response is larger than the first
      }else if (parseInt(responses[0])/parseInt(responses[2]) < (parseInt(responses[1])/parseInt(responses[3]))){
        $(".err2").show();
      //Check to make sure responses are whole numbers
      }else if(parseFloat(responses[0])%1 != 0 || parseFloat(responses[1])%1 !=0 || parseFloat(responses[4])%1 != 0 || parseFloat(responses[5])%1 !=0){
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
         "item": this.stim.habitual,
         "category": this.stim.category,
         "q1_response": responses[0], 
         "q1_interval": responses[2], 
         "q2_response": responses[1], 
         "q2_interval": responses[3], 
         "q3_response": responses[4], 
         "q3_interval": responses[6], 
         "q4_response": responses[5], 
         "q4_interval": responses[7],
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
  exp.structure=["single_trial","i0", "instructions","catch",  'subj_info', 'thanks'];
  
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