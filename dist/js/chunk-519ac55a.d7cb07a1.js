(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519ac55a"],{"44ae":function(a,e,r){"use strict";var i=r("67d2"),n=r.n(i);n.a},"67d2":function(a,e,r){},eaff:function(a,e,r){"use strict";r.r(e);var i=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"container"},[r("b-icon",{staticClass:"myiconlogin",attrs:{icon:"pencil","aria-hidden":"true","font-scale":"2"}}),a._m(0),r("b-form",{staticClass:"myformstyle",on:{submit:function(e){return e.preventDefault(),a.onRegister(e)},reset:function(e){return e.preventDefault(),a.onReset(e)}}},[r("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",type:"text",state:a.validateState("username")},model:{value:a.$v.form.username.$model,callback:function(e){a.$set(a.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),a.$v.form.username.required?a.$v.form.username.length?a._e():r("b-form-invalid-feedback",[a._v(" Username length should be between 3-8 characters long ")]):r("b-form-invalid-feedback",[a._v(" Username is required ")]),a.$v.form.username.alpha?a._e():r("b-form-invalid-feedback",[a._v(" Username alpha ")])],1),r("b-form-group",{attrs:{id:"input-group-firstName","label-cols-sm":"3",label:"First Name:","label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstName",type:"text",state:a.validateState("firstName")},model:{value:a.$v.form.firstName.$model,callback:function(e){a.$set(a.$v.form.firstName,"$model",e)},expression:"$v.form.firstName.$model"}}),a.$v.form.firstName.required?a._e():r("b-form-invalid-feedback",[a._v(" First Name is required ")]),a.$v.form.firstName.alpha?a._e():r("b-form-invalid-feedback",[a._v(" should contain only characters ")])],1),r("b-form-group",{attrs:{id:"input-group-lastName","label-cols-sm":"3",label:"Last Name:","label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",type:"text",state:a.validateState("lastName")},model:{value:a.$v.form.lastName.$model,callback:function(e){a.$set(a.$v.form.lastName,"$model",e)},expression:"$v.form.lastName.$model"}}),a.$v.form.lastName.required?a._e():r("b-form-invalid-feedback",[a._v(" Last Name is required ")]),a.$v.form.lastName.alpha?a._e():r("b-form-invalid-feedback",[a._v(" should contain only characters ")])],1),r("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[r("b-form-select",{attrs:{id:"country",options:a.countries,state:a.validateState("country")},model:{value:a.$v.form.country.$model,callback:function(e){a.$set(a.$v.form.country,"$model",e)},expression:"$v.form.country.$model"}}),r("b-form-invalid-feedback",[a._v(" Country is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",state:a.validateState("password")},model:{value:a.$v.form.password.$model,callback:function(e){a.$set(a.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),a.$v.form.password.required?a.$v.form.password.$error?r("b-form-text",{attrs:{"text-variant":"info"}},[a._v(" Your password should be "),r("strong",[a._v("strong")]),a._v(". "),r("br"),a._v(" For that, your password should be also: ")]):a._e():r("b-form-invalid-feedback",[a._v(" Password is required ")]),a.$v.form.password.required&&!a.$v.form.password.pass?r("b-form-invalid-feedback",[a._v(" Have length between 5-10 characters long and contain at least one number and one special character ")]):a._e()],1),r("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[r("b-form-input",{attrs:{id:"confirmedPassword",type:"password",state:a.validateState("confirmedPassword")},model:{value:a.$v.form.confirmedPassword.$model,callback:function(e){a.$set(a.$v.form.confirmedPassword,"$model",e)},expression:"$v.form.confirmedPassword.$model"}}),a.$v.form.confirmedPassword.required?a.$v.form.confirmedPassword.sameAsPassword?a._e():r("b-form-invalid-feedback",[a._v(" The confirmed password is not equal to the original password ")]):r("b-form-invalid-feedback",[a._v(" Password confirmation is required ")])],1),r("b-form-group",{attrs:{id:"input-group-email","label-cols-sm":"3",label:"Email:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"text",state:a.validateState("email")},model:{value:a.$v.form.email.$model,callback:function(e){a.$set(a.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),a.$v.form.email.required?a._e():r("b-form-invalid-feedback",[a._v(" Email is required ")]),a.$v.form.email.email?a._e():r("b-form-invalid-feedback",[a._v(" must be a valid email ")])],1),r("b-row",[r("b-col",[r("b-button",{staticClass:"myloginbtn",attrs:{type:"reset",variant:"danger"}},[a._v("Reset")])],1),r("b-col",{attrs:{sm:"10"}},[r("b-button",{staticClass:"ml-5 w-75 myloginbtn onregisterbtn",attrs:{type:"submit",variant:"primary"}},[a._v("Register")])],1)],1),r("div",{staticClass:"mt-2"},[a._v(" You have an account already? "),r("router-link",{attrs:{to:"login"}},[a._v(" Log in here")])],1)],1),a.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[a._v(" Register failed: "+a._s(a.form.submitError)+" ")]):a._e()],1)},n=[function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("h1",{staticClass:"title"},[r("span",[a._v("Register")])])}],o=(r("96cf"),r("1da1")),t=r("2909"),s=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],l=r("b5ae"),d=l["helpers"].regex("password",/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}$/),u={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:l["required"],length:function(a){return Object(l["minLength"])(3)(a)&&Object(l["maxLength"])(8)(a)},alpha:l["alpha"]},firstName:{required:l["required"],alpha:l["alpha"]},lastName:{required:l["required"],alpha:l["alpha"]},country:{required:l["required"]},password:{required:l["required"],pass:d},confirmedPassword:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")},email:{required:l["required"],email:l["email"]}}},mounted:function(){var a;(a=this.countries).push.apply(a,Object(t["a"])(s))},methods:{validateState:function(a){var e=this.$v.form[a],r=e.$dirty,i=e.$error;return r?!i:null},Register:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.axios.post("https://bgnbrecipes.cs.bgu.ac.il/Register",{username:a.form.username,password:a.form.password});case 3:e.sent,a.$router.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0.response),a.form.submitError=e.t0.response.data.message;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var a=this;this.form={username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:""},this.$nextTick((function(){a.$v.$reset()}))}}},m=u,c=(r("44ae"),r("2877")),f=Object(c["a"])(m,i,n,!1,null,"8faba9bc",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-519ac55a.d7cb07a1.js.map