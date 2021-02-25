import React, { useState, useRef, useContext, useEffect } from 'react';
import { Form, Input, TextArea, Button, Message, Ref } from 'semantic-ui-react';
import { StoreContext } from '../Store/StoreProvider';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const  { contactForm, setContactForm  } = useContext(StoreContext);

    const nameRef = useRef();
    const subjectRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [nameState, setNameState] = useState({value:'', isClicked: false});
    const [subjectState, setSubjectState] = useState({value:'', isClicked: false});
    const [emailState, setEmailState] = useState({value:'', isClicked: false});
    const [messageState, setMessageState] = useState({value:'', isClicked: false});
    const [formCheckerState, setFormCheckerState] = useState({success: false, error: false});

    let isEmailOK;
    emailState.value.includes('@') && emailState.value.includes('.') ? isEmailOK = true : isEmailOK = false
    console.log("isEmailOK: "+isEmailOK);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setContactForm({name: nameState.value, subject: subjectState.value, email: emailState.value, message: messageState.value});
        // setContactForm({
        //   name: nameRef.current.lastChild.firstChild.value,
        //   subject: subjectRef.current.lastChild.firstChild.value,
        //   email: emailRef.current.lastChild.firstChild.value, 
        //   message: messageRef.current.lastChild.value
        //               });
        setNameState({value:'', isClicked: false});
        setSubjectState({value:'', isClicked: false});
        setEmailState({value:'', isClicked: false});
        setMessageState({value:'', isClicked: false});
        setFormCheckerState({success: true, error: false});
    }

      
useEffect(() => {
  emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID)
},[])

    
  function sendEmail(e) {
    e.preventDefault();
       
    const templateParams =  {
      name: nameState.value, 
      subject: subjectState.value, 
      email: emailState.value, 
      message: messageState.value
     }

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        setNameState({value:'', isClicked: false});
        setSubjectState({value:'', isClicked: false});
        setEmailState({value:'', isClicked: false});
        setMessageState({value:'', isClicked: false});
        setFormCheckerState({success: true, error: false});
      }, (error) => {
        setFormCheckerState({success: false, error: true});
      });
  }
    

    

    
    return ( 
        <>
         <Form inverted color="white" widths="equal" success={formCheckerState.success} error={formCheckerState.error}> 
                        <Form.Group widths='equal'>
                        <Ref innerRef={nameRef}>
                          <Form.Field
                            error={nameState.value.length === 0 && nameState.isClicked}
                            id='form-input-control-first-name'
                            control={Input}
                            label='Name'
                            placeholder='Name'
                            value={nameState.value}
                            onChange ={(e) => {setNameState({value: e.target.value, isClicked: true});}}
                            // onClick ={() => {nameRef.current.lastChild.firstChild.focus(); isNameClicked = true}}
                          /></Ref>
                          <Ref innerRef={subjectRef}>
                          <Form.Field
                            error={subjectState.value.length === 0 && subjectState.isClicked}
                            id='form-input-control-last-name'
                            control={Input}
                            label='Subject'
                            placeholder='Subject'
                            value={subjectState.value}
                            onChange ={(e) => {setSubjectState({value: e.target.value, isClicked: true});}}
                          /></Ref>
                          </Form.Group>
                        <Form.Group>
                          <Ref innerRef={emailRef}>
                          <Form.Field
                            error={(emailState.value.length === 0 && emailState.isClicked) || (emailState.length > 1 && !isEmailOK  && emailState.isClicked)}
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            placeholder='joe@wp.pl'
                            value={emailState.value}
                            onChange ={(e) => {setEmailState({value: e.target.value, isClicked: true});}}
                          /></Ref>
                        </Form.Group>
                        <Form.Group>
                          <Ref innerRef={messageRef}>
                          <Form.Field
                            error={messageState.value.length === 0 && messageState.isClicked}
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Message'
                            placeholder='Message'
                            value={messageState.value}
                            onChange ={(e) => {setMessageState({value: e.target.value, isClicked: true});}}
                          /></Ref>
                        </Form.Group>
                        <Form.Group>
                          <Form.Field
                            disabled={nameState.value.length === 0 || subjectState.value.length === 0 || emailState.value.length === 0 || messageState.value.length === 0 || !isEmailOK}
                            id='form-button-control-public'
                            control={Button}
                            content='Send'
                            onClick ={(e) => {sendEmail(e)}}
                         />
                        </Form.Group>
                        <Message
                            success
                            header='Form Completed'
                            content="Message sent sucessfully"
                        />
                        <Message
                            error
                            header='An Error Ocurred'
                            content='Propably bad e-mail adress or a mail-server problem'
                        />
                      </Form>
        </>
     );
}
 
export default ContactForm;