"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[799],{3183:function(n,t,e){e.r(t),e.d(t,{ContactForm:function(){return v}});var r,o,i,a,g,s=e(9439),A=e(1156),x=e(2791),c=e(3531),l=e(2751),d=e(6351),p=e(168),u=e(5867),f=u.styled.form(r||(r=(0,p.Z)(["\n  display: flex;\n  width: 400px;\n  height: 300px;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n  margin-bottom: 15px;\n  margin-left: 50px;\n  outline: 1px solid #000000;\n  border-radius: 15px;\n  background: linear-gradient(\n    90deg,\n    rgba(134, 40, 80, 1) 0%,\n    rgba(200, 11, 32, 0.9724264705882353) 74%\n  );\n  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.6);\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.6);\n"]))),m=u.styled.label(o||(o=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  margin: 7px 15px;\n  font-size: 22px;\n  font-weight: 600;\n"]))),b=u.styled.p(i||(i=(0,p.Z)(["\n  font-size: 22px;\n  color: beige;\n"]))),h=u.styled.input(a||(a=(0,p.Z)(["\n  display: flex;\n  width: 280px;\n  height: 20px;\n  font-size: 20px;\n  font-weight: 500;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);\n  margin-bottom: 15px;\n  margin-top: 30px;\n  /* margin-left: 5px; */\n  padding: 7px;\n  margin-left: 1px;\n  background: rgba(0, 0, 0, 0.19);\n  border: 1px solid rgba(46, 45, 45, 0.3);\n  border-radius: 5px;\n  outline: none;\n"]))),w=u.styled.button(g||(g=(0,p.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);\n  width: 150px;\n  height: 35px;\n  text-align: center;\n  padding: 5px;\n  border: 1px solid #000;\n  border-radius: 4px;\n  background-color: rgb(190, 255, 233);\n  color: rgb(41, 18, 18);\n  margin-left: 15px;\n  margin-bottom: 5px;\n  &: hover {\n    background: rgba(223, 125, 125, 0.8);\n    color: white;\n  }\n"]))),D=e(1198),C=e(184),v=function(){var n=(0,c.useDispatch)(),t=(0,c.useSelector)(d.Af),e=(0,x.useState)(""),r=(0,s.Z)(e,2),o=r[0],i=r[1],a=(0,x.useState)(""),g=(0,s.Z)(a,2),p=g[0],u=g[1],v=function(n){var t=n.target,e=t.name,r=t.value;("number"!==e||/^\d+$/.test(r))&&("name"===e?i(r):"number"===e&&u(r))};return(0,C.jsxs)(f,{onSubmit:function(e){e.preventDefault();var r={name:o,number:p};if(t.find((function(n){return n.name===r.name})))return alert("".concat(r.name," is already in contacts"));n((0,l.addNewContact)(r)),i(""),u("")},children:[(0,C.jsxs)(m,{children:[(0,C.jsxs)(A.NA,{children:[(0,C.jsx)("img",{src:D,alt:"email Img ",width:"25"}),(0,C.jsx)(b,{children:"Name"})]}),(0,C.jsx)(h,{onChange:v,value:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"name"})]}),(0,C.jsxs)(m,{children:[(0,C.jsxs)(A.NA,{children:[(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA1ZJREFUSEvllV9oHFUUxn/nzuyflmzS1qqRNjbZdLNojaitxdIoxr+UIkj6YCsiglAaX4ooFKnSiuKDVm0bLVQQtGCtFfNSKOqLzbopBIJU8lASEnfZtiYmad1sara7sztXZtK02ZCZRH30vF3mO9937znfnCPMDo3QHa+ibNVi8oQSWjTE0axEoyqwosuIXBbotzVJzMD3WIzT0j85Gyc3Dg5BonEVBttF9E5gbQWh/8EGLmo4QtH8nNaB8Rn4tIBD3ttUrwrWPi3y4j8gngvNi6bTrtGv0Zz6w/koOGVJNK5Whv3ufySfEbsmyCm7WN5JazorJOMRKO0S0e/73VwQlqgwYRUiqAJcswtkSzmvlJwgHXaxbr/QFY2JyWm/mgckwOpQLU/WbOb+qnXcvTRGz+Q59mcOMWXnvUQuaWGL0B1tF6c5HhEQkwcj9/LBmjfYFHngBmrMukz70Ft0XvnB5xV8JOps9Cuted4LdUfwNj5rfI+ty1srIFdKWfZmDnB05GuvVAtIiJyN9qJZPx/KFIONVfeRbD6JjWaqPIWlS2g06cIlXh7cw69/nfdrXVqkO5oG1syHCqsgW5c/xrfxT8mVr3JsrJPBfJq8XaAr18NAPrWQozMiyWgGoW5+gRDP3vIUx2MHGS6O0tbf7jZ30aG58D8SGLHG2DGw2y2R0+SCXVy4Um6JuhtSIPVePXhmxeN809TBRHmSoyPHOTd13iXvvdrHxcKwK+YTGV+bGmKwoaqZrntOEJRABU+m8DsP9bUxUhybn9+ZcprfFvzRagO3ciJ+mEeqN1YQ/Vma4O0Lhzg8/KX3jyYkZkbFJzBnoVxPc+bQ5ur1HIsdYIW5jJAEUaJc276Z+ZAvRr/zHxX0xBukZJ0B7vRCGqJoCNWxZ9Uu1i2NUWNG+DGb5NXUO14pTmOGtFLPTY9rsV4R2AcsWdgai0BosoIcsVuG9k5vtJ+aVqpA6aAWtgHhRVD4QfIgCR0yXmDDwPjNndzXcLvKqQ6Nfhqo/hcijmsmEOnR2t5NS6rf4bgp4L6kfpkKGq9r9EtA5HrJKv05W3naiiXA2TqjouWkHTY+dm4+A6sUcEUeNQll7lKaNg0PA42uw5zdPZccLIS0aH62lTrFpsFf5r78b0uAWbegZHBUAAAAAElFTkSuQmCC",alt:"email Img ",width:"20"}),(0,C.jsx)(b,{children:"Number"})]}),(0,C.jsx)(h,{onChange:v,value:p,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"number"})]}),(0,C.jsx)(w,{type:"submit",children:"Add contact"})]})}},9677:function(n,t,e){e.r(t),e.d(t,{Section:function(){return x}});var r,o,i=e(168),a=e(5867),g=a.styled.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 5px;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(\n    86deg,\n    rgba(134, 40, 80, 1) 0%,\n    rgba(113, 10, 52, 1) 22%,\n    rgba(112, 45, 51, 1) 63%,\n    rgba(133, 133, 133, 1) 100%\n  );\n"]))),s=a.styled.h2(o||(o=(0,i.Z)(["\n  color: beige;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 50px;\n"]))),A=e(184),x=function(n){var t=n.title,e=n.children;return(0,A.jsxs)(g,{children:[(0,A.jsx)(s,{children:t}),e]})}},1156:function(n,t,e){e.d(t,{AB:function(){return u},Js:function(){return l},NA:function(){return p},bj:function(){return d},eG:function(){return m},oo:function(){return b},vJ:function(){return f}});var r,o,i,a,g,s,A,x=e(168),c=e(5867),l=c.styled.h2(r||(r=(0,x.Z)(["\n  color: beige;\n  font-size: 38px;\n  font-weight: 600;\n  margin-bottom: 40px;\n  margin-top: 5px;\n"]))),d=c.styled.form(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 20px;\n  justify-content: center;\n  align-items: center;\n  color: beige;\n  font-size: 42px;\n  font-weight: 600;\n  margin-bottom: 50px;\n  margin-top: 25px;\n  width: 500px;\n  height: 300px;\n  border-radius: 20px;\n  background: linear-gradient(\n    90deg,\n    rgba(134, 40, 80, 1) 0%,\n    rgba(200, 11, 32, 0.9724264705882353) 74%\n  );\n  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.6);\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.6);\n"]))),p=c.styled.div(i||(i=(0,x.Z)(["\n  display: flex;\n  position: absolute;\n  transform: translateY(-40px);\n  gap: 7px;\n  justify-content: center;\n  align-items: center;\n"]))),u=c.styled.p(a||(a=(0,x.Z)(["\n  font-size: 22px;\n"]))),f=c.styled.input(g||(g=(0,x.Z)(["\n  display: flex;\n  width: 280px;\n  height: 20px;\n  font-size: 20px;\n  font-weight: 500;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);\n  margin-bottom: 15px;\n  margin-top: 30px;\n  /* margin-left: 5px; */\n  padding: 7px;\n  margin-left: 1px;\n  background: rgba(0, 0, 0, 0.19);\n  border: 1px solid rgba(46, 45, 45, 0.3);\n  border-radius: 5px;\n  outline: none;\n"]))),m=c.styled.label(s||(s=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  margin: 7px 15px;\n  font-size: 22px;\n  font-weight: 600;\n"]))),b=c.styled.button(A||(A=(0,x.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);\n  width: 150px;\n  height: 35px;\n  text-align: center;\n  padding: 5px;\n  border: 1px solid #000;\n  border-radius: 4px;\n  background-color: rgb(290, 255, 233);\n  color: rgb(41, 18, 18);\n  margin-left: 15px;\n  margin-bottom: 5px;\n  &: hover {\n    background: rgba(223, 125, 125, 0.8);\n    color: white;\n  }\n"])))},4799:function(n,t,e){e.r(t);var r=e(184),o=e(3183).ContactForm,i=e(9677).Section,a=e(2791).useEffect,g=e(3531).useDispatch,s=e(2751).getAllContacts;t.default=function(){var n=g();return a((function(){n(s())})),(0,r.jsx)(i,{children:(0,r.jsx)(o,{})})}},6351:function(n,t,e){e.d(t,{AD:function(){return o},Af:function(){return r},NH:function(){return i}});var r=function(n){return n.contacts.contacts.items},o=function(n){return n.contacts.filter},i=function(n){return n.contacts.contacts.isLoading}},1198:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=799.23e6e740.chunk.js.map