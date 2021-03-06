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
      $(".total-num").html(exp.numTrials);  
    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.truthJudge = slide({
    name: "truthJudge",
    present : exp.stims,
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      // debugger;
       $(".err").hide();
       $('input[name="response"]').attr("checked", false);//val()
      // var stim = stim1[0]
      // stim["condition"] = stim1[1]

    this.judgeButtons = _.object(_.zip(["likely-key","unlikely-key"],
                              _.shuffle(["P","Q"])));

      // debugger;
      this.startTime = Date.now();

      this.stim = stim 
      console.log(stim.condition)
      $(".prompt").html(stim.prompt)

      var peopleEvidence = exp.personOrder == "likely-unlikely" ? 
            stim.frequency.high + " <br> " + stim.foil :
            stim.foil + " <br> " + stim.frequency.high 

      $(".alternatives").html(peopleEvidence)
      stim.condition !="prior" ?  $(".evidence").html(stim[stim.condition]) : $(".evidence").html("")
      $(".question").html(stim.question)

      // this.stim.description = description

      var keyDictionary = {
        "likely-key": stim.likely,
        "unlikely-key": stim.unlikely
      }

      _.mapObject(this.judgeButtons, function(val,key){
        // $("#"+val+"response").text(keyDictionary[key]);
        $("#"+val+"key-reminder").html(keyDictionary[key]);
      });

      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
      // $(document).one("keydown", _s.keyPressHandler);

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
        // console.log("err")
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        // exp.go();
        _stream.apply(this);

      }
    },

    // keyPressHandler : function(event) {
    //   var keyCode = event.which;
    //   if (keyCode != 81 && keyCode != 80) {
    //     // If a key that we don't care about is pressed, re-attach the handler (see the end of this script for more info)
    //     $(document).one("keydown", _s.keyPressHandler);
    //   } else {
    //     // If a valid key is pressed (code 80 is p, 81 is q),
    //       _s.rt = Date.now() - _s.startTime;
    //       _s.log_responses(keyCode);
    //       /* use _stream.apply(this); if and only if there is
    //       "present" data. (and only *after* responses are logged) */
    //      setTimeout(function(){_stream.apply(_s)}, 250);
    //   }

    // },
    // log_responses : function(keyCode) {
    log_responses : function() {
      // console.log('log')
      var response = _.invert(this.judgeButtons)[$('input[name="response"]:checked').val()]
      // var response = _.invert(exp.judgeButtons)[exp.buttonCodes[keyCode]]
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

  slides.check = slide({
     name : "check",
     start: function() {
      this.startTime = Date.now();
            $(".err").hide();

     },
    button : function() {
     var responses = ["veg","vacuums","music","dishes","twojobs","attendance","homework"].filter(
        function(x){
          return $("input:checkbox[name="+x+"]").is(":checked")
      })
      if (responses.length != 4) {
        $(".err").show();
      } else {
        this.rt = Date.now() - this.startTime;
        this.log_responses();
        exp.go();
      }
    },

    log_responses : function() {
    
     var responses = ["veg","vacuums","music","dishes","twojobs","attendance","homework"].filter(
        function(x){
          return $("input:checkbox[name="+x+"]").is(":checked")
      })

      exp.catch_trials.push({
        "trial_type" : "catch",
        "response1":responses[0],
        "response2":responses[1],
        "response3":responses[2],
        "response4":responses[3],
        "pass": arraysEqual(responses, ["veg","music","dishes","homework"]) ? 1 : 0,
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

  // debugger;
  exp.personOrder = _.sample(["likely-unlikely","unlikely-likely"])
  exp.buttonCodes = {80:"P", 81:"Q"};
  // exp.judgeButtons = _.object(_.zip(["likely-key","unlikely-key"],
  //                           _.shuffle(["P","Q"])));

  var allConditions = ["pragmatic","literal","prior","speakermanipulation"]

  var conditions = _.shuffle(_.flatten(_.map(allConditions, function(c){
    return utils.fillArray(c, Math.floor(stimuli.length/allConditions.length))
  })))

  // var conditions = _.flatten(_.map(allConditions, function(c){
  //   return utils.fillArray(c, stimuli.length)
  // }))

  // for testing all the stimuli
  // var testSims = _.flatten(_.map(_.shuffle(stimuli), function(s){
  //   return _.zip(utils.fillArray(s, 4), allConditions)
  // }), true)
  // exp.stims = _.map(testSims, function(s){return [s[0], s[1]]})

  // debugger;
  // var conditions =  _.shuffle(_.flatten([utils.fillArray("pragmatic", stimuli.length/2), utils.fillArray("literal", stimuli.length/2)]))

  // debugger;
  // exp.stims = _.map(testSims, function(s){return _.extend(s[0], {"condition": s[1]})})

  exp.stims = _.shuffle(_.map(_.zip(stimuli.slice(0,16),conditions), function(s){return _.extend(s[0], {"condition": s[1]})}))

  // debugger;
  exp.numTrials = exp.stims.length;


  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
  };

  //blocks of the experiment:
   exp.structure=["i0", "instructions","truthJudge",'subj_info', 'thanks'];
 
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