(function(e){function i(i){for(var t,r,a=i[0],s=i[1],u=i[2],l=0,b=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);c&&c(i);while(b.length)b.shift()();return d.push.apply(d,u||[]),n()}function n(){for(var e,i=0;i<d.length;i++){for(var n=d[i],t=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(t=!1)}t&&(d.splice(i--,1),e=r(r.s=n[0]))}return e}var t={},o={app:0},d=[];function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,i,n){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var t in e)r.d(n,t,function(i){return e[i]}.bind(null,t));return n},r.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="/voiceapp/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=i,a=a.slice();for(var u=0;u<a.length;u++)i(a[u]);var c=s;d.push([0,"chunk-vendors"]),n()})({0:function(e,i,n){e.exports=n("56d7")},"034f":function(e,i,n){"use strict";var t=n("85ec"),o=n.n(t);o.a},"22d7":function(e,i,n){"use strict";var t=n("be87"),o=n.n(t);o.a},"56d7":function(e,i,n){"use strict";n.r(i);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),o=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{attrs:{id:"app"}},[n("SoundsOfImpact")],1)},d=[],r=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{attrs:{id:"background"}},[n("h3",{attrs:{id:"messageTwo"}},[e._v(e._s(e.msg2))]),n("span"),e.isHidden3?n("button",{staticClass:"landscape",attrs:{id:"woodlands"},on:{click:function(i){e.isWoodLand(),e.generateSoundscape(),e.isHidden3=!1,e.isHidden2=!0}}},[e._v("Woodlands")]):e._e(),e.isHidden3?n("button",{staticClass:"landscape",attrs:{id:"coast"},on:{click:function(i){e.isCoast(),e.generateSoundscape(),e.isHidden3=!1,e.isHidden2=!0}}},[e._v("Coast")]):e._e(),e.isHidden3?n("button",{staticClass:"landscape",attrs:{id:"backyard"},on:{click:function(i){e.isBackyard(),e.generateSoundscape(),e.isHidden3=!1,e.isHidden2=!0}}},[e._v("Backyard")]):e._e(),n("ul",{attrs:{id:"birds"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:e.card1,expression:"card1"}],staticClass:"card",style:{color:e.birdColor1}},[e._v(e._s(e.birdName1))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card2,expression:"card2"}],staticClass:"card",style:{color:e.birdColor2}},[e._v(e._s(e.birdName2))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card3,expression:"card3"}],staticClass:"card",style:{color:e.birdColor3}},[e._v(e._s(e.birdName3))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card4,expression:"card4"}],staticClass:"card",style:{color:e.birdColor4}},[e._v(e._s(e.birdName4))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card5,expression:"card5"}],staticClass:"card",style:{color:e.birdColor5}},[e._v(e._s(e.birdName5))])]),n("h2",{staticClass:"messageOne",attrs:{id:"time"}},[e._v(e._s(e.msg))]),n("h1",{staticClass:"messageThree",style:{color:e.activeColor}},[e._v(e._s(e.msg3))]),n("h3",[e._v(e._s(e.msg4))]),n("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{voice:this.reInitiateVoiceControl,close:function(i){e.isModalVisible=!1}}}),e.isHidden?e._e():n("button",{attrs:{id:"generateButton"},on:{click:function(i){e.aboutHidden=!0,e.voiceHidden=!0,e.isHidden=!0,e.isHidden3=!0,e.biome()}}},[e._v("Generate Soundscape")]),e.isHidden2?n("button",{attrs:{id:"nineteenSeventyButton"},on:{click:e.nineteenSeventy}},[e._v("Play 1970")]):e._e(),e.isHidden2?n("button",{attrs:{id:"twentyTwentyButton"},on:{click:e.twentyTwenty}},[e._v("Play Today")]):e._e(),n("p",[e.isHidden2?n("button",{attrs:{id:"resetButton"},on:{click:function(i){e.aboutHidden=!1,e.isHidden=!1,e.isHidden2=!1,e.reset(),e.voiceHidden=!1}}},[e._v("Reset")]):e._e(),e.aboutHidden?e._e():n("button",{attrs:{id:"aboutButton"},on:{click:function(i){e.isModalVisible=!0}}},[e._v("About")]),e.voiceHidden?e._e():n("button",{attrs:{id:"voiceButton"},on:{click:function(i){return e.initiateVoiceControl()}}},[e._v("Enable Voice Control")])]),n("canvas")],1)},a=[],s=(n("4de4"),n("c975"),n("b64b"),n("d3b7"),n("bc3a")),u=n.n(s),c=n("7c02"),l=n.n(c),b=n("37d0"),f=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._v(" About ")]),n("div",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._v(" Byrd Bot expresses differences in bird populations between 1970 and 2020 as unique soundscapes, composed computationally using known bird population data and the Audubon Society's database of bird songs. "),n("p",[e._v("The application is born out of the Sounds of Human Impact project, a collaborative effort between communication studies and environmental science scholars interested to explore the role of sound as a means to expressing the impacts of the Anthroprocene. ")]),n("p",[e._v("When the user clicks "),n("button",{attrs:{id:"generate"}},[e._v("Generate Soundscape")]),e._v(" the software will generate a new soundscape, based on probabilities in which birds might be heard in "),n("button",{attrs:{id:"nineteenSeventy"}},[e._v("1970")]),e._v(". Then, the system generates a soundscape of those very same bird sounds, using probabilities for "),n("button",{attrs:{id:"twentyTwenty"}},[e._v("2020")]),e._v(". ")]),n("p",[e._v(" The listener is invited to listen deeply for the differences in ecology between these two time periods. ")])]),n("footer",{staticClass:"modal-footer"},[n("button",{on:{click:e.close}},[e._v("Close ")])])])])])},h=[],p={name:"Modal",methods:{close:function(){this.$emit("close")}}},m=p,v=(n("22d7"),n("2877")),S=Object(v["a"])(m,f,h,!1,null,null,null),w=S.exports,g={name:"SoundsOfImpact",components:{Modal:w},data:function(){return{msg:"",msg2:"",msg3:"",msg4:"",birdName1:"",birdNumber1:"",birdSound1:"",birdSound1Pan:"",birdAudio1:"",birdName2:"",birdNumber2:"",birdSound2:"",birdSound2Pan:"",birdAudio2:"",birdName3:"",birdNumber3:"",birdSound3:"",birdSound3Pan:"",birdAudio3:"",birdName4:"",birdSound4:"",birdSound4Pan:"",birdAudio4:"",birdName5:"",birdSound5:"",birdSound5Pan:"",birdAudio5:"",birdAudio1Pan:"",birdAudio2Pan:"",birdAudio3Pan:"",birdAudio4Pan:"",birdAudio5Pan:"",group:[],isHidden2:!1,aboutHidden:!1,card1:!1,card2:!1,card3:!1,card4:!1,card5:!1,twenty:!1,placeHolder:[],placeHolder2:[],birdColor1:"salmon",birdColor2:"turquoise",birdColor3:"violet",birdColor4:"orange",birdColor5:"yellow",isModalVisible:!1,stop:!1,doItAgain:!1,woodLand:!1,activeColor:"white",integer:"",coast:!1,backYard:!1,filteredResults:[],seventyStop:!1,twentyStop:!1,resultsType:"",flipCard1:!1,flipCard2:!1,flipCard3:!1,flipCard4:!1,flipCard5:!1,flipCardA:!1,flipCardB:!1,flipCardC:!1,flipCardD:!1,flipCardE:!1}},mounted:function(){this.msg="BYRD BOT",this.msg2="","webkitSpeechRecognition"in window?this.voiceHidden=!1:this.voiceHidden=!0},methods:{initiateVoiceControl:function(){var e=this;console.log("voice control initiated"),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;var i="",n=new window.SpeechRecognition;n.interimResults=!0,n.maxAlternatives=10,n.continuous=!0,n.onresult=function(t){for(var o="",d=t.resultIndex,r=t.results.length;d<r;d++){var a=t.results[d][0].transcript;t.results[d].isFinal?i+=a:o+=a,"generate soundscape"==o&&(e.generateSoundscape(),e.isHidden2=!0,e.aboutHidden=!0,e.doItAgain=!0,e.reInitiateVoiceControl()),"about"==o&&(e.isModalVisible=!0,e.doItAgain=!0,e.reInitiateVoiceControl()),"close"==o&&(e.isModalVisible=!1,e.doItAgain=!0,e.reInitiateVoiceControl()),"play 1970"==o&&(e.nineteenSeventy(),e.doItAgain=!0,e.reInitiateVoiceControl()),"play today"==o&&(e.twentyTwenty(),e.doItAgain=!0,e.reInitiateVoiceControl()),"reset"==o&&(e.reset(),e.aboutHidden=!1,e.isHidden2=!1,e.doItAgain=!0,e.reInitiateVoiceControl()),"disable voice control"==o?(n.abort(),console.log("voice control disabled"),e.doItAgain=!1):e.sleep(3500).then((function(){e.reInitiateVoiceControl()}))}console.log("transcript: "+i)},n.start()},reInitiateVoiceControl:function(){console.log("reinitiate"),1==this.doItAgain&&this.initiateVoiceControl()},biome:function(){this.msg2="Select a Biome",this.msg=""},isWoodLand:function(){this.woodLand=!0,this.msg3="Woodlands",this.activeColor="green",this.resultsType="Woodlands"},isCoast:function(){alert("Coming soon! For now, current variables are set to Woodlands.")},isBackYard:function(){alert("Coming soon! For now, current variables are set to Woodlands.")},generateSoundscape:function(){var e=this;l.a.context.resume(),u.a.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdsAndSounds.json").then((function(i){1==e.woodLand&&(e.filteredResults=i.data.filter((function(e){return"woodlands"==e.scape}))),1==e.coast&&(e.filteredResults=i.data.filter((function(e){return"coast"==e.scape}))),1==e.backYard&&(e.filteredResults=i.data.filter((function(e){return"backyard"==e.scape})));var n=Object.keys(e.filteredResults).length;console.log("Total number of "+e.resultsType+" birds is: "+n);var t=[];function o(){return e.filteredResults[Math.round(Math.random()*(e.filteredResults.length-1))]}function d(e){return t.indexOf(e)>-1}for(var r=0;r<5;r++){var a;do{a=o()}while(d(a));t.push(a)}console.log("Random entries retrieved:"+t),e.msg2="Soundscape Variables Generated",e.msg4="Select a Time Period to Listen";var s=10*Math.random();console.log("Probability number is: "+s),console.log(100*t[0].frequency_1970);var u="sound"+Math.floor(4*Math.random()+1)+"_url";e.birdName1=t[0].species,e.birdNumber1=t[0][u];var c=100*t[0].frequency_1970,b=100*t[0].frequency_2017,f=2*Math.random()-1;s<=c&&(e.birdSound1=new l.a.Sound(e.birdNumber1,(function(){e.birdSound1.volume=t[0].frequency_1970,e.birdSound1Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdSound1.addEffect(e.birdSound1Pan)})),e.flipCard1=!0),s>=c&&(e.birdSound1=new l.a.Sound(e.birdNumber1,(function(){e.birdSound1Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdSound1.volume=0,e.birdSound1.addEffect(e.birdSound1Pan)})),e.flipCard1=!1),s<=b&&(e.birdAudio1=new l.a.Sound(e.birdNumber1,(function(){e.birdAudio1.volume=t[0].frequency_2017,e.birdAudio1Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio.addEffect(e.birdAudio1Pan)})),e.flipCardA=!0),s>=b&&(e.birdAudio1=new l.a.Sound(e.birdNumber1,(function(){e.birdAudio1.volume=0,e.birdAudio1Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio1.addEffect(e.birdAudio1Pan)})),e.flipCardA=!1),e.birdName2=t[1].species,e.birdNumber2=t[1][u];var h=100*t[1].frequency_1970,p=100*t[1].frequency_2017,m=2*Math.random()-1;s<=h&&(e.birdSound2=new l.a.Sound(e.birdNumber2,(function(){e.birdSound2.volume=t[1].frequency_1970,e.birdSound2Pan=new l.a.Effects.StereoPanner({pan:m}),e.birdSound2.addEffect(e.birdSound2Pan)})),e.flipCard2=!0),s>=h&&(e.birdSound2=new l.a.Sound(e.birdNumber2,(function(){e.birdSound2Pan=new l.a.Effects.StereoPanner({pan:m}),e.birdSound2.volume=0,e.birdSound2.addEffect(e.birdSound2Pan)})),e.flipCard2=!1),s<=p&&(e.birdAudio2=new l.a.Sound(e.birdNumber2,(function(){e.birdAudio2.volume=t[1].frequency_2017,e.birdAudio2Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio2.addEffect(e.birdAudio2Pan)})),e.flipCardB=!0),s>=p&&(e.birdAudio2=new l.a.Sound(e.birdNumber2,(function(){e.birdAudio2.volume=0,e.birdAudio2Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio2.addEffect(e.birdAudio2Pan)})),e.flipCardB=!1),e.birdName3=t[2].species,e.birdNumber3=t[2][u];var v=100*t[2].frequency_1970,S=100*t[2].frequency_2017,w=2*Math.random()-1;s<=v&&(e.birdSound3=new l.a.Sound(e.birdNumber3,(function(){e.birdSound3.volume=t[2].frequency_1970,e.birdSound3Pan=new l.a.Effects.StereoPanner({pan:w}),e.birdSound3.addEffect(e.birdSound3Pan)})),e.flipCard3=!0),s>=v&&(e.birdSound3=new l.a.Sound(e.birdNumber3,(function(){e.birdSound3Pan=new l.a.Effects.StereoPanner({pan:w}),e.birdSound3.volume=0,e.birdSound3.addEffect(e.birdSound3Pan)})),e.flipCard3=!1),s<=S&&(e.birdAudio3=new l.a.Sound(e.birdNumber3,(function(){e.birdAudio3.volume=t[2].frequency_2017,e.birdAudio3Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio3.addEffect(e.birdAudio3Pan)})),e.flipCardC=!0),s>=S&&(e.birdAudio3=new l.a.Sound(e.birdNumber3,(function(){e.birdAudio3.volume=0,e.birdAudio3Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio3.addEffect(e.birdAudio3Pan)})),e.flipCardC=!1),e.birdName4=t[3].species,e.birdNumber4=t[3][u];var g=100*t[3].frequency_1970,y=100*t[3].frequency_2017,C=2*Math.random()-1;s<=g&&(e.birdSound4=new l.a.Sound(e.birdNumber4,(function(){e.birdSound4.volume=t[3].frequency_1970,e.birdSound4Pan=new l.a.Effects.StereoPanner({pan:C}),e.birdSound4.addEffect(e.birdSound4Pan)})),e.flipCard4=!0),s>=g&&(e.birdSound4=new l.a.Sound(e.birdNumber4,(function(){e.birdSound4Pan=new l.a.Effects.StereoPanner({pan:C}),e.birdSound4.volume=0,e.birdSound4.addEffect(e.birdSound4Pan)})),e.flipCard4=!1),s<=y&&(e.birdAudio4=new l.a.Sound(e.birdNumber4,(function(){e.birdAudio4.volume=t[3].frequency_2017,e.birdAudio4Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio4.addEffect(e.birdAudio4Pan)})),e.flipCardD=!0),s>=y&&(e.birdAudio4=new l.a.Sound(e.birdNumber4,(function(){e.birdAudio4.volume=0,e.birdAudio4Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio4.addEffect(e.birdAudio4Pan)})),e.flipCardD=!1),e.birdName5=t[4].species,e.birdNumber5=t[4][u];var A=100*t[4].frequency_1970,P=100*t[4].frequency_2017,_=2*Math.random()-1;s<=A&&(e.birdSound5=new l.a.Sound(e.birdNumber5,(function(){e.birdSound5.volume=t[4].frequency_1970,e.birdSound5Pan=new l.a.Effects.StereoPanner({pan:_}),e.birdSound5.addEffect(e.birdSound5Pan)})),e.flipCard5=!0),s>=A&&(e.birdSound5=new l.a.Sound(e.birdNumber5,(function(){e.birdSound5Pan=new l.a.Effects.StereoPanner({pan:_}),e.birdSound5.volume=0,e.birdSound5.addEffect(e.birdSound5Pan)})),e.flipCard5=!1),s<=P&&(e.birdAudio5=new l.a.Sound(e.birdNumber5,(function(){e.birdAudio5.volume=t[4].frequency_2017,e.birdAudio5Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio5.addEffect(e.birdAudio5Pan)})),e.flipCardE=!0),s>=P&&(e.birdAudio5=new l.a.Sound(e.birdNumber5,(function(){e.birdAudio5.volume=0,e.birdAudio5Pan=new l.a.Effects.StereoPanner({pan:f}),e.birdAudio5.addEffect(e.birdAudio5Pan)})),e.flipCardE=!1),e.group=new l.a.Group([])})).catch((function(e){console.log(e)}))},sleep:function(e){return new Promise((function(i){return setTimeout(i,e)}))},loopOne:function(){this.nineteenSeventy()},loopTwo:function(){this.twentyTwenty()},nineteenSeventy:function(){var e=this;if(1==this.seventyStop)this.group.stop(),this.group.removeSound(this.birdAudio1),this.group.removeSound(this.birdAudio2),this.group.removeSound(this.birdAudio3),this.group.removeSound(this.birdAudio4),this.group.removeSound(this.birdAudio5),this.seventyStop=!1,this.sleep(700).then((function(){e.loopOne()}));else{this.msg4="";var i=document.getElementsByTagName("canvas")[0];i.width=0,i.height=0,this.group.addSound(this.birdSound1),this.group.addSound(this.birdSound2),this.group.addSound(this.birdSound3),this.group.addSound(this.birdSound4),this.group.addSound(this.birdSound5),this.msg="1970",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.stop=!1,1==this.flipCard1&&(this.card1=!0),1==this.flipCard2&&(this.card2=!0),1==this.flipCard3&&(this.card3=!0),1==this.flipCard4&&(this.card4=!0),1==this.flipCard5&&(this.card5=!0),this.sleep(700).then((function(){e.visualizeNineteenSeventy()}))}},twentyTwenty:function(){var e=this;if(1==this.twentyStop)this.group.stop(),this.group.removeSound(this.birdSound1),this.group.removeSound(this.birdSound2),this.group.removeSound(this.birdSound3),this.group.removeSound(this.birdSound4),this.group.removeSound(this.birdSound5),this.twentyStop=!1,this.sleep(700).then((function(){e.loopTwo()}));else{this.msg4="";var i=document.getElementsByTagName("canvas")[0];i.width=0,i.height=0,this.group.addSound(this.birdAudio1),this.group.addSound(this.birdAudio2),this.group.addSound(this.birdAudio3),this.group.addSound(this.birdAudio4),this.group.addSound(this.birdAudio5),this.msg="Today",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1,this.stop=!1,1==this.flipCardA&&(this.card1=!0),1==this.flipCardB&&(this.card2=!0),1==this.flipCardC&&(this.card3=!0),1==this.flipCardD&&(this.card4=!0),1==this.flipCardE&&(this.card5=!0),this.stop=!0,this.sleep(700).then((function(){e.visualizeTwentyTwenty()}))}},end:function(){this.group.stop()},reset:function(){this.msg="BYRD BOT",this.msg2="",this.msg3="",this.msg4="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.card5=!1;var e=document.getElementsByTagName("canvas")[0];e.width=0,e.height=0,0==this.stop&&(this.placeHolder=new l.a.Sound("https://wompwompwomp.com/audio/f06f6a8e.sad-trombone-56.mp3"),this.placeHolder2=new l.a.Sound("https://wompwompwomp.com/audio/f06f6a8e.sad-trombone-56.mp3"),this.end()),1==this.stop&&this.end()},visualizeNineteenSeventy:function(){var e=l.a.context;this.group.play(),this.twentyStop=!0;var i=document.getElementsByTagName("canvas")[0];i.width=window.innerWidth,i.height=window.innerHeight;var n=l.a.context.createAnalyser();this.group.connect(n);var t=new b["a"](n);n.connect(e.destination);var o=i.getContext("2d");function d(){o.clearRect(0,0,i.width,i.height);var e=i.height/3;o.strokeStyle="limegreen",t.draw(o,0,e,void 0,e),window.requestAnimationFrame(d)}o.lineWidth=3,o.shadowBlur=4,o.shadowColor="white",d()},visualizeTwentyTwenty:function(){var e=l.a.context;this.group.play(),this.seventyStop=!0;var i=document.getElementsByTagName("canvas")[0];i.width=window.innerWidth,i.height=window.innerHeight;var n=l.a.context.createAnalyser();this.group.connect(n);var t=new b["a"](n);n.connect(e.destination);var o=i.getContext("2d");function d(){o.clearRect(0,0,i.width,i.height);var e=i.height/3;o.strokeStyle="salmon",t.draw(o,0,e,void 0,e),window.requestAnimationFrame(d)}o.lineWidth=3,o.shadowBlur=4,o.shadowColor="white",d()}},closeModal:function(){this.isModalVisible=!1}},y=g,C=(n("f3d2"),Object(v["a"])(y,r,a,!1,null,"a5ad8186",null)),A=C.exports,P={name:"App",components:{SoundsOfImpact:A}},_=P,N=(n("034f"),Object(v["a"])(_,o,d,!1,null,null,null)),E=N.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(E)}}).$mount("#app")},"85ec":function(e,i,n){},be87:function(e,i,n){},d83e:function(e,i,n){},f3d2:function(e,i,n){"use strict";var t=n("d83e"),o=n.n(t);o.a}});
//# sourceMappingURL=app.97146b94.js.map