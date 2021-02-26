(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),c=a(5),l=a.n(c),s=a(6),o=a(7),r=a(8),d=a(3),u=a(10),j=a(9),h=(a(15),a(16),a(17),a(0)),x=function(e){var t=e.handlePersonalData,a=e.personalData,n=a.name,i=a.mail,c=a.number,l=a.about,s=a.whyFit,o=function(e){var a,n=e.target.id,i=e.target.value;(e.target.id="name0")&&(a=+n.slice(-1),n=n.slice(0,-1)),console.log(a),t(n,i,a)};return Object(h.jsxs)("div",{className:"form-fields",children:[Object(h.jsx)("input",{type:"text",id:"name0",className:"names",defaultValue:n[0],placeholder:"Enter your first name",onBlur:o}),Object(h.jsx)("input",{type:"text",id:"name1",className:"names",defaultValue:n[1],placeholder:"Enter your last name",onBlur:o}),Object(h.jsx)("input",{type:"email",id:"mail",className:"secondary-info",defaultValue:i,placeholder:"Enter your e-mail",onBlur:o}),Object(h.jsx)("input",{type:"text",id:"number",className:"secondary-info",defaultValue:c,placeholder:"Enter your phone number",onBlur:o}),Object(h.jsx)("textarea",{cols:"62",id:"about",defaultValue:l,rows:"5",placeholder:"Tell us about yourself.",onBlur:o}),Object(h.jsx)("textarea",{cols:"62",id:"whyFit",defaultValue:s,rows:"5",placeholder:"Tell us why are you a good fit for our company.",onBlur:o})]})},p=a(1),b=a.n(p),m=function(e){var t=e.handleEducationData,a=e.educationData,n=e.addNewEducationField,i=e.switchOngoing,c=function(e){var a=+e.target.id.slice(-1),n=e.target.id.slice(0,-1),i=e.target.value;t(a,n,i)},l=function(e){var a=e.target.id.slice(-2),n=e.target.id.slice(0,-2),i=e.target.value;t(a,n,i)},s=a[0],o=s.title,r=s.institution,d=s.educationDate,u=s.ongoing;return Object(h.jsxs)("div",{className:"form-fields",children:[Object(h.jsx)("input",{type:"text",id:"title0",className:"title-name",placeholder:"Enter your title",defaultValue:o,onBlur:c}),Object(h.jsx)("input",{type:"text",id:"institution0",className:"institution-name",placeholder:"Institution",defaultValue:r,onBlur:c}),Object(h.jsx)("input",{type:"date",id:"educationDate00",className:"start-date",defaultValue:d[0],onBlur:l}),Object(h.jsx)("input",{type:"date",id:"educationDate01",className:"end-date",defaultValue:d[1],onBlur:l}),Object(h.jsx)("input",{type:"checkbox",className:"switch-ongoing-checkbox",checked:u,onChange:function(){return i(0,"educationData")}}),function(){var e=a.length;if(1!==e){for(var t=[],n=function(e){var n=a[e],s=n.title,o=n.institution,r=n.educationDate,d=n.ongoing;t.push(Object(h.jsxs)("div",{className:"form-fields",children:[Object(h.jsx)("input",{type:"text",id:"title".concat(e),className:"title-name",placeholder:"Enter your title",defaultValue:s,onBlur:c}),Object(h.jsx)("input",{type:"text",id:"institution".concat(e),className:"institution-name",placeholder:"Institution",defaultValue:o,onBlur:c}),Object(h.jsx)("input",{type:"date",id:"educationDate".concat(e,"0"),className:"start-date",defaultValue:r[0],onBlur:l}),Object(h.jsx)("input",{type:"date",id:"educationDate".concat(e,"1"),className:"end-date",defaultValue:r[1],onBlur:l}),Object(h.jsx)("input",{type:"checkbox",className:"switch-ongoing-checkbox",checked:d,onChange:function(){return i(e,"educationData")}})]},b()()))},s=1;s<e;s++)n(s);return t}}(),Object(h.jsx)("button",{onClick:function(){a.length>=3||n()},className:"new-education-form-button",children:"Add education"})]},b.a)},f=function(e){var t=e.handleExperienceData,a=e.experienceData,n=e.addNewExperienceField,i=e.switchOngoing,c=function(e){var a=+e.target.id.slice(-1),n=e.target.id.slice(0,-1),i=e.target.value;t(a,n,i)},l=function(e){var a=e.target.id.slice(-2),n=e.target.id.slice(0,-2),i=e.target.value;t(a,n,i)},s=a[0],o=s.field,r=s.employer,d=s.fieldDate,u=s.ongoing;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"form-fields",children:[Object(h.jsx)("input",{type:"text",id:"field0",className:"work-field",placeholder:"Work field",defaultValue:o,onBlur:c}),Object(h.jsx)("input",{type:"text",id:"employer0",className:"employer-name",placeholder:"Employer",defaultValue:r,onBlur:c}),Object(h.jsx)("input",{type:"date",id:"fieldDate00",className:"start-date",defaultValue:d[0],onBlur:l}),Object(h.jsx)("input",{type:"date",id:"fieldDate01",className:"end-date",defaultValue:d[1],onBlur:l}),Object(h.jsx)("input",{type:"checkbox",className:"switch-ongoing-checkbox",checked:u,onChange:function(){return i(0,"experienceData")}}),function(){var e=a.length;if(1!==e){for(var t=[],n=function(e){var n=a[e],s=n.field,o=n.employer,r=n.fieldDate,d=n.ongoing;t.push(Object(h.jsxs)("div",{className:"form-fields",children:[Object(h.jsx)("input",{type:"text",id:"field".concat(e),className:"work-field",placeholder:"work field",defaultValue:s,onBlur:c}),Object(h.jsx)("input",{type:"text",id:"employer".concat(e),className:"employer-name",placeholder:"employer",defaultValue:o,onBlur:c}),Object(h.jsx)("input",{type:"date",id:"fieldDate".concat(e,"0"),className:"start-date",defaultValue:r[0],onBlur:l}),Object(h.jsx)("input",{type:"date",id:"fieldDate".concat(e,"1"),className:"end-date",defaultValue:r[1],onBlur:l}),Object(h.jsx)("input",{type:"checkbox",className:"switch-ongoing-checkbox",checked:d,onChange:function(){return i(e,"experienceData")}})]},b()()))},s=1;s<e;s++)n(s);return t}}(),Object(h.jsx)("button",{onClick:function(){a.length>=3||n()},className:"new-education-form-button",children:"Add experiece"})]},b()())})},O=function(e){var t=e.handleSkills,a=e.skills,n=e.addNewSkill;return Object(h.jsxs)("div",{className:"form-fields",children:[function(){var e=0;return a.map((function(){return Object(h.jsx)("input",{type:"text",className:"skill-input",placeholder:"Skill example",id:e++,defaultValue:a[e-1],onBlur:t},b()())}))}(),Object(h.jsx)("button",{className:"new-skill-button",onClick:n,children:"New skill"})]})},N=function(e){return e.map((function(e){return Object(h.jsx)("li",{children:e},b()())}))},g=function(e,t,a){return a?Object(h.jsxs)("p",{className:"subText",children:[e," - ongoing"]}):Object(h.jsxs)("p",{className:"subText",children:[e," - ",t]})},D=function(e){if(1===e.length)return"";for(var t=[],a=1;a<e.length;a++){var n=e[a],i=n.title,c=n.institution,l=n.educationDate,s=n.ongoing;t.push(Object(h.jsxs)("div",{className:"additional-education",children:[Object(h.jsx)("h2",{className:"title",children:"Education Title:"}),Object(h.jsx)("p",{className:"subText",children:i}),Object(h.jsx)("h2",{className:"title",children:"Name of Institution:"}),Object(h.jsx)("p",{className:"subText",children:c}),Object(h.jsx)("h2",{className:"title",children:"Time of concurrence:"}),g(l[0],l[1],s)]},b()()))}return t},v=function(e){if(1===e.length)return"";for(var t=[],a=1;a<e.length;a++){var n=e[a],i=n.field,c=n.employer,l=n.fieldDate,s=n.ongoing;t.push(Object(h.jsxs)("div",{className:"additional-experience",children:[Object(h.jsx)("h2",{className:"title",children:"Work experience:"}),Object(h.jsx)("p",{className:"subText",children:i}),Object(h.jsx)("h2",{className:"title",children:"Employer:"}),Object(h.jsx)("p",{className:"subText",children:c}),Object(h.jsx)("h2",{className:"title",children:"Time of concurrence:"}),g(l[0],l[1],s)]},b()()))}return t},w=function(e){var t=e.personalData,a=e.educationData,n=e.experienceData,i=e.skills;return function(e,t,a,n,i){if(e){var c=t.name,l=t.mail,s=t.number,o=t.about,r=t.whyFit,d=a[0],u=d.title,j=d.institution,x=d.educationDate,p=n[0],b=p.field,m=p.employer,f=p.fieldDate;return Object(h.jsxs)("div",{className:"preview-container",children:[Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsxs)("div",{className:"personal-info",children:[Object(h.jsxs)("h1",{className:"name",children:[c[0]," ",c[1]]}),Object(h.jsx)("h3",{children:"E-mail"}),Object(h.jsx)("p",{className:"subText",children:l}),Object(h.jsx)("h3",{children:"Phone number"}),Object(h.jsx)("p",{className:"subText",children:s})]}),Object(h.jsxs)("div",{className:"about",children:[Object(h.jsx)("h2",{children:"About Myself"}),Object(h.jsx)("p",{children:o})]}),Object(h.jsxs)("div",{className:"skills",children:[Object(h.jsx)("h2",{children:"My main skills"}),Object(h.jsx)("ul",{children:N(i)})]})]}),Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsxs)("div",{className:"why-fit",children:[Object(h.jsx)("h2",{className:"title",children:"Why am i a good fit?"}),Object(h.jsx)("p",{className:"subText",children:r})]}),Object(h.jsxs)("div",{className:"education-experience-container",children:[Object(h.jsxs)("div",{className:"education",children:[Object(h.jsx)("h2",{className:"title",children:"Education Title:"}),Object(h.jsx)("p",{className:"subText",children:u}),Object(h.jsx)("h2",{className:"title",children:"Name of Institution:"}),Object(h.jsx)("p",{className:"subText",children:j}),Object(h.jsx)("h2",{className:"title",children:"Time of concurrence:"}),g(x[0],x[1],a[0].ongoing),D(a)]}),Object(h.jsxs)("div",{className:"experience",children:[Object(h.jsx)("h2",{className:"title",children:"Work experience:"}),Object(h.jsx)("p",{className:"subText",children:b}),Object(h.jsx)("h2",{className:"title",children:"Employer:"}),Object(h.jsx)("p",{className:"subText",children:m}),Object(h.jsx)("h2",{className:"title",children:"Time of concurrence:"}),g(f[0],f[1],n[0].ongoing),v(n)]})]})]})]})}return""}(e.showPreview,t,a,n,i)},y=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).switchOngoing=function(t,a){e.state[a][t].ongoing=!e.state[a][t].ongoing,e.setState(Object(s.a)({},a,e.state[a]),(function(){return console.log(e.state[a])}))},e.handleForms=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.showPreview,a=e.state,n=a.personalData,i=a.educationData,c=a.experienceData,l=a.skills;return t?"":Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsx)(x,{handlePersonalData:e.handlePersonalData,personalData:n}),Object(h.jsx)(m,{handleEducationData:e.handleEducationData,educationData:i,addNewEducationField:e.addNewEducationField,switchOngoing:e.switchOngoing}),Object(h.jsx)(f,{handleExperienceData:e.handleExperienceData,experienceData:c,addNewExperienceField:e.addNewExperienceField,switchOngoing:e.switchOngoing}),Object(h.jsx)(O,{handleSkills:e.handleSkills,skills:l,addNewSkill:e.addNewSkill})]})},e.handlePersonalData=function(t,a,n){null!=n?e.state.personalData[t][n]=a:e.state.personalData[t]=a,e.setState({personalData:e.state.personalData},(function(){return console.log(e.state.personalData)}))},e.handleEducationData=function(t,a,n){var i=e.state.educationData;if(t.length>1){var c=+t.slice(0,1),l=+t.slice(1);i[c][a][l]=n}else i[t][a]=n;e.setState({educationData:e.state.educationData},(function(){return console.log(e.state.educationData)}))},e.addNewEducationField=function(){e.setState({educationData:e.state.educationData.concat([{title:"",institution:"",educationDate:["",""],ongoing:!1}])},(function(){return console.log(e.state.educationData)}))},e.handleExperienceData=function(t,a,n){var i=e.state.experienceData;if(t.length>1){var c=+t.slice(0,1),l=+t.slice(1);i[c][a][l]=n}else i[t][a]=n;e.setState({experienceData:e.state.experienceData},(function(){return console.log(e.state.experienceData)}))},e.addNewExperienceField=function(){e.setState({experienceData:e.state.experienceData.concat([{field:"",employer:"",fieldDate:["",""]}])},(function(){return console.log(e.state.experienceData)}))},e.handleSkills=function(t){e.state.skills[t.target.id]=t.target.value,e.setState({skills:e.state.skills}),console.log(e.state.skills)},e.addNewSkill=function(){e.setState({skills:e.state.skills.concat([""])},(function(){return console.log(e.state.skills)}))},e.switchPreview=function(){e.setState({showPreview:!e.state.showPreview})},e.state={personalData:{name:["",""],mail:"",number:"",about:"",whyFit:""},educationData:[{title:"",institution:"",educationDate:["",""],ongoing:!1}],experienceData:[{field:"",employer:"",fieldDate:["",""]}],skills:[""],showPreview:!1},e.handlePersonalData=e.handlePersonalData.bind(Object(d.a)(e)),e.handleEducationData=e.handleEducationData.bind(Object(d.a)(e)),e.addNewEducationField=e.addNewEducationField.bind(Object(d.a)(e)),e.handleExperienceData=e.handleExperienceData.bind(Object(d.a)(e)),e.addNewExperienceField=e.addNewExperienceField.bind(Object(d.a)(e)),e.handleSkills=e.handleSkills.bind(Object(d.a)(e)),e.addNewSkill=e.addNewSkill.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.personalData,a=e.educationData,n=e.experienceData,i=e.skills,c=e.showPreview;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"main-container",children:[Object(h.jsxs)("div",{className:"top-bar",children:[Object(h.jsx)("h1",{children:"CV Maker"}),Object(h.jsx)("div",{className:"switch-container",children:Object(h.jsx)("input",{type:"checkbox",className:"switch-preview",onChange:this.switchPreview})})]}),this.handleForms()]}),Object(h.jsx)(w,{showPreview:c,personalData:t,educationData:a,experienceData:n,skills:i})]})}}]),a}(n.Component);l.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.678f6e81.chunk.js.map