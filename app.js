(function(){
  "use strict";

  var ICON = {
    compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    trending:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    sprout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 8 5 4 5c0 5 2 8 8 8"/><path d="M12 12c0-4 3-6 8-6 0 4-2 7-8 7"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>',
    wallet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="15" r="1.2"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    arrowleft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    arrowright:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="11"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>',
    scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7l-3 7a4 4 0 0 0 7 0z"/><path d="M19 7l-3 7a4 4 0 0 0 7 0z"/><path d="M5 7h14"/></svg>',
    calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>'
  };

  var STEP_ORDER = ["goal","about","snapshot","location","review"];
  var STEP_LABEL = {goal:"Your goal", about:"About you", snapshot:"Financial snapshot", location:"Location", review:"Review"};

  var GOALS = [
    {v:"retirement", icon:"compass", title:"Planning for retirement", desc:"Get income and savings on track for the years ahead."},
    {v:"growth", icon:"trending", title:"Growing my investments", desc:"Put savings to work toward long-term goals."},
    {v:"estate", icon:"shield", title:"Estate & legacy planning", desc:"Protect assets and plan for what you leave behind."},
    {v:"starting", icon:"sprout", title:"Just getting started", desc:"New to financial planning and want a starting point."}
  ];
  var AGES = ["Under 45","45 - 55","56 - 65","66 - 70","71 - 75","Over 75"];
  var RETIRE_IN = ["I'm already retired","1 - 4 years","5 - 9 years","10 - 19 years","20 - 29 years","30+ years"];
  var ACCOUNTS = [
    {v:"401k", title:"401(k) or employer plan", desc:"Workplace retirement account"},
    {v:"ira", title:"IRA", desc:"Traditional or Roth"},
    {v:"brokerage", title:"Brokerage account", desc:"Taxable investment account"},
    {v:"pension", title:"Pension", desc:"Employer-funded retirement income"},
    {v:"none", title:"None of these yet", desc:"Starting from scratch"}
  ];
  var ASSETS = ["Less than $25,000","$25,000 – $99,999","$100,000 – $249,999","$250,000 – $999,999","$1,000,000 – $4,999,999","Over $5,000,000"];
  var STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming","District of Columbia"];
  var MEETING = [
    {v:"person", icon:"pin", title:"In person", desc:"Meet locally with an advisor near you."},
    {v:"remote", icon:"video", title:"Remote / video", desc:"Meet from anywhere by phone or video call."},
    {v:"either", icon:"user", title:"Either works", desc:"Open to whichever fits best."}
  ];
  var GOAL_FOCUS = {
    retirement:"Retirement income, Social Security timing",
    growth:"Portfolio strategy, tax-efficient investing",
    estate:"Estate planning, trusts & legacy",
    starting:"Financial planning fundamentals"
  };

  var state = {
    step: "intro",
    editing: false,
    answers: { goal:null, age:null, retireIn:null, accounts:[], assets:null, state:null, meeting:null },
    errors: {},
    requested: {}
  };

  var app = document.getElementById("app");
  var progressTrack = document.getElementById("progressTrack");
  var progressFill = document.getElementById("progressFill");
  var stepcount = document.getElementById("stepcount");

  function esc(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function updateProgress(){
    var idx = STEP_ORDER.indexOf(state.step);
    if(idx === -1){ progressTrack.style.display = "none"; stepcount.textContent = ""; return; }
    progressTrack.style.display = "block";
    var pct = ((idx+1)/STEP_ORDER.length)*100;
    progressFill.style.width = pct + "%";
    stepcount.textContent = "Step " + (idx+1) + " of " + STEP_ORDER.length + " · " + STEP_LABEL[state.step];
  }

  function optionCard(kind, name, value, checked, iconSvg, title, desc){
    var id = name + "-" + value;
    var type = kind === "checkbox" ? "checkbox" : "radio";
    return '<div class="opt '+ (kind==="checkbox"?"checkbox":"") +'">' +
      '<input type="'+type+'" id="'+id+'" name="'+name+'" value="'+esc(value)+'" '+(checked?"checked":"")+' data-field="'+name+'" data-kind="'+kind+'">' +
      '<label for="'+id+'">' +
        (iconSvg ? '<span class="opt-icon">'+iconSvg+'</span>' : '') +
        '<span class="opt-text"><span class="opt-title">'+esc(title)+'</span>'+(desc?'<span class="opt-desc">'+esc(desc)+'</span>':'')+'</span>' +
        '<span class="opt-mark">'+ICON.check+'</span>' +
      '</label></div>';
  }

  function pill(name, value, checked){
    var id = name + "-pill-" + value.replace(/[^a-z0-9]/gi,"");
    return '<div class="pill"><input type="radio" id="'+id+'" name="'+name+'" value="'+esc(value)+'" '+(checked?"checked":"")+' data-field="'+name+'" data-kind="radio">' +
      '<label for="'+id+'">'+esc(value)+'</label></div>';
  }

  function continueBtn(label, enabled){
    return '<button type="button" class="btn btn-primary" id="continueBtn" '+(enabled?"":"disabled")+'>'+esc(label)+' '+ICON.arrowright+'</button>';
  }
  function backBtn(){
    return '<button type="button" class="btn btn-ghost" data-action="back">'+ICON.arrowleft+' Back</button>';
  }

  function whyBlock(text){
    return '<div class="why">'+ICON.info+'<span>'+text+'</span></div>';
  }

  function renderStep(){
    var a = state.answers, html = "";
    var contLabel = state.editing ? "Save & return to review" : "Continue";

    if(state.step === "intro"){
      html =
        '<div class="step-icon">'+ICON.compass+'</div>' +
        '<h2 id="stepHeading">Find your advisor match</h2>' +
        '<p class="sub">Answer a few questions about your finances and goals. We\'ll match you with vetted fiduciary financial advisors — free, with no obligation to work with any of them.</p>' +
        '<div class="trust">'+ICON.lock+'<span>5 short steps · about 2 minutes · your answers are never sold without your consent</span></div>' +
        '<div class="actions"><span></span>'+continueBtn("Start", true)+'</div>';
    }

    else if(state.step === "goal"){
      html =
        '<div class="step-icon">'+ICON.compass+'</div>' +
        '<h2 id="stepHeading">What brings you here today?</h2>' +
        '<p class="sub">This helps us understand what to prioritize in your match.</p>' +
        '<fieldset><legend class="sr-only">Your goal</legend><div class="options">' +
        GOALS.map(function(g){ return optionCard("radio","goal",g.v,a.goal===g.v,ICON[g.icon],g.title,g.desc); }).join("") +
        '</div></fieldset>' +
        '<div class="actions">'+backBtn()+continueBtn(contLabel, !!a.goal)+'</div>';
    }

    else if(state.step === "about"){
      html =
        '<div class="step-icon">'+ICON.user+'</div>' +
        '<h2 id="stepHeading">A little about you</h2>' +
        '<p class="sub">Age and timeline shape how an advisor would approach your plan.</p>' +
        '<fieldset><legend>What is your current age?</legend><div class="pills">' +
        AGES.map(function(v){ return pill("age", v, a.age===v); }).join("") +
        '</div>'+whyBlock("Helps advisors tailor recommendations to your investment horizon.")+'</fieldset>' +
        '<fieldset><legend>When would you like to retire?</legend><div class="pills">' +
        RETIRE_IN.map(function(v){ return pill("retireIn", v, a.retireIn===v); }).join("") +
        '</div></fieldset>' +
        '<div class="actions">'+backBtn()+continueBtn(contLabel, !!(a.age && a.retireIn))+'</div>';
    }

    else if(state.step === "snapshot"){
      html =
        '<div class="step-icon">'+ICON.wallet+'</div>' +
        '<h2 id="stepHeading">Your financial snapshot</h2>' +
        '<p class="sub">A rough picture is enough — nothing here needs to be exact.</p>' +
        '<fieldset><legend>Which of these do you currently have?</legend><div class="options">' +
        ACCOUNTS.map(function(c){ return optionCard("checkbox","accounts",c.v, a.accounts.indexOf(c.v)>-1, null, c.title, c.desc); }).join("") +
        '</div></fieldset>' +
        '<fieldset><legend>Estimated investable assets</legend><div class="pills">' +
        ASSETS.map(function(v){ return pill("assets", v, a.assets===v); }).join("") +
        '</div>'+whyBlock("A range, not an exact number — it helps match you with advisors who work with clients like you.")+'</fieldset>' +
        '<div class="trust">'+ICON.lock+'<span>Your information is secure and is only shared with advisors you\'re matched with.</span></div>' +
        '<div class="actions">'+backBtn()+continueBtn(contLabel, a.accounts.length>0 && !!a.assets)+'</div>';
    }

    else if(state.step === "location"){
      var stErr = state.errors.state;
      html =
        '<div class="step-icon">'+ICON.pin+'</div>' +
        '<h2 id="stepHeading">Where should we look for advisors?</h2>' +
        '<p class="sub">Matches are drawn from advisors licensed to serve your state.</p>' +
        '<div class="field"><label class="flabel" for="stateSelect">State</label>' +
        '<select id="stateSelect" '+(stErr?'aria-invalid="true" aria-describedby="stateErr"':'')+'>' +
        '<option value="">Select your state</option>' +
        STATES.map(function(s){ return '<option value="'+s+'" '+(a.state===s?"selected":"")+'>'+s+'</option>'; }).join("") +
        '</select>' +
        (stErr ? '<div class="err" id="stateErr">'+ICON.alert+'<span>Select your state to continue.</span></div>' : '') +
        '</div>' +
        '<fieldset><legend>Meeting preference</legend><div class="options">' +
        MEETING.map(function(m){ return optionCard("radio","meeting",m.v,a.meeting===m.v,ICON[m.icon],m.title,m.desc); }).join("") +
        '</div></fieldset>' +
        '<div class="actions">'+backBtn()+continueBtn(contLabel, true)+'</div>';
    }

    else if(state.step === "review"){
      var rows = [
        {k:"Goal", v: a.goal ? GOALS.filter(function(g){return g.v===a.goal;})[0].title : "—", step:"goal"},
        {k:"Age / retirement timeline", v: (a.age||"—")+" · "+(a.retireIn||"—"), step:"about"},
        {k:"Accounts", v: a.accounts.length ? a.accounts.map(function(v){return ACCOUNTS.filter(function(c){return c.v===v;})[0].title;}).join(", ") : "—", step:"snapshot"},
        {k:"Investable assets", v: a.assets || "—", step:"snapshot"},
        {k:"Location & meeting", v: (a.state||"—")+" · "+(a.meeting? MEETING.filter(function(m){return m.v===a.meeting;})[0].title : "—"), step:"location"}
      ];
      html =
        '<div class="step-icon">'+ICON.scale+'</div>' +
        '<h2 id="stepHeading">Review your answers</h2>' +
        '<p class="sub">Everything here is editable before we look for matches.</p>' +
        '<div class="rev-list">' +
        rows.map(function(r){
          return '<div class="rev-row"><div><div class="rev-k">'+r.k+'</div><div class="rev-v">'+esc(r.v)+'</div></div>' +
            '<button type="button" class="rev-edit" data-action="edit" data-goto="'+r.step+'">Edit</button></div>';
        }).join("") +
        '</div>' +
        '<div class="method"><h3>'+ICON.scale+' How matching works</h3>' +
        '<p>We match you using your goal, age, financial snapshot, and location. Every advisor shown is a vetted fiduciary.</p>' +
        '<p>Advisor order can also be influenced by advertising relationships with SmartAsset — we wanted you to know that before you see your matches.</p></div>' +
        '<div class="actions">'+backBtn()+'<button type="button" class="btn btn-primary" id="continueBtn" style="margin-left:auto">See my matches '+ICON.arrowright+'</button></div>';
    }

    else if(state.step === "loading"){
      html =
        '<div class="loading">' +
        '<div class="spinner" aria-hidden="true"></div>' +
        '<p id="stepHeading">Finding your matches</p>' +
        '<p class="lstep" id="loadingSub">Checking vetted fiduciaries in '+esc(a.state||"your area")+'…</p>' +
        '</div>';
    }

    else if(state.step === "results"){
      var focus = GOAL_FOCUS[a.goal] || "General financial planning";
      var meetingLabel = a.meeting ? MEETING.filter(function(m){return m.v===a.meeting;})[0].title : "Remote & in-person";
      var matches = [
        {name:"J. Alvarez, CFP®", initials:"JA", focus: focus},
        {name:"M. Okafor, CFP®", initials:"MO", focus: (a.goal==="estate" ? "Estate & legacy planning, trusts" : "Retirement income, tax-efficient withdrawals")}
      ];
      html =
        '<div class="step-icon">'+ICON.compass+'</div>' +
        '<h2 id="stepHeading">Your advisor matches</h2>' +
        '<p class="sub">Based on your answers. Reaching out is free — you\'re never obligated to work with anyone.</p>' +
        '<div class="sample-note">'+ICON.info+'<span>Sample matches shown for this prototype. A live version would query SmartAsset\'s vetted advisor network.</span></div>' +
        matches.map(function(m,i){
          var req = state.requested[i];
          return '<div class="match-card">' +
            '<div class="match-top"><div class="match-avatar">'+m.initials+'</div>' +
            '<div><div class="match-name">'+m.name+'</div><span class="badge">'+ICON.check+' Fee-only fiduciary</span></div></div>' +
            '<div class="match-meta">' +
              '<span>'+ICON.wallet+' '+m.focus+'</span>' +
              '<span>'+ICON.pin+' '+meetingLabel+'</span>' +
            '</div>' +
            '<div class="match-actions">' +
            (req
              ? '<span class="requested">'+ICON.check+' Introduction requested — they\'ll reach out, no obligation to continue.</span>'
              : '<button type="button" class="btn btn-primary btn-sm" data-action="request" data-idx="'+i+'">Request an introduction</button>')
            + '</div></div>';
        }).join("") +
        '<button type="button" class="how-link" data-action="how">'+ICON.info+' How matches are chosen</button>' +
        '<div class="restart"><button type="button" data-action="restart">Start over</button></div>';
    }

    app.innerHTML = html;
    app.classList.remove("anim-enter");
    void app.offsetWidth;
    app.classList.add("anim-enter");
    updateProgress();
    var heading = document.getElementById("stepHeading");
    if(heading){ heading.setAttribute("tabindex","-1"); heading.focus({preventScroll:true}); }
  }

  function goTo(step){
    state.step = step;
    state.errors = {};
    window.scrollTo({top: document.querySelector(".product").offsetTop - 12, behavior: (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto":"smooth")});
    renderStep();
  }

  function nextFrom(step){
    if(state.editing){ state.editing = false; goTo("review"); return; }
    var idx = STEP_ORDER.indexOf(step);
    if(step === "review"){
      goTo("loading");
      setTimeout(function(){ goTo("results"); }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 1300);
      return;
    }
    goTo(STEP_ORDER[idx+1]);
  }

  function prevFrom(step){
    if(step === "goal"){ goTo("intro"); return; }
    var idx = STEP_ORDER.indexOf(step);
    if(idx > 0){ goTo(STEP_ORDER[idx-1]); }
  }

  app.addEventListener("change", function(e){
    var t = e.target;
    var field = t.dataset && t.dataset.field;
    if(!field) return;
    if(t.dataset.kind === "checkbox"){
      var arr = state.answers[field];
      if(t.checked){ if(arr.indexOf(t.value) === -1) arr.push(t.value); }
      else { state.answers[field] = arr.filter(function(v){ return v !== t.value; }); }
    } else {
      state.answers[field] = t.value;
    }
    renderStep();
  });

  app.addEventListener("change", function(e){
    if(e.target.id === "stateSelect"){
      state.answers.state = e.target.value;
      if(e.target.value) state.errors.state = false;
    }
  });

  app.addEventListener("click", function(e){
    var btn = e.target.closest("button");
    if(!btn) return;

    if(btn.id === "continueBtn"){
      if(state.step === "location" && !state.answers.state){
        state.errors.state = true;
        renderStep();
        var sel = document.getElementById("stateSelect");
        if(sel) sel.focus();
        return;
      }
      nextFrom(state.step);
      return;
    }
    var action = btn.dataset.action;
    if(action === "back"){ prevFrom(state.step); }
    else if(action === "edit"){ state.editing = true; goTo(btn.dataset.goto); }
    else if(action === "request"){
      state.requested[btn.dataset.idx] = true;
      renderStep();
    }
    else if(action === "how"){ goTo("review"); state.editing = false; }
    else if(action === "restart"){
      state.answers = { goal:null, age:null, retireIn:null, accounts:[], assets:null, state:null, meeting:null };
      state.requested = {};
      state.editing = false;
      goTo("intro");
    }
  });

  renderStep();
})();
