import React, { Component } from 'react';
import { Form, Col, Row, Container } from "react-bootstrap"
import emailjs from 'emailjs-com';


class ContactForm extends Component {
    state = {
        successAlert: true,
        contactMe: {
            fromName: "",
            message: "",
            email: ""
        }
    }

    updateDetails = (event) => {
        let contactMe = this.state.contactMe;
        let id = event.currentTarget.id;
        contactMe[id] = event.currentTarget.value;
        this.setState({
            contactMe,
        });
    };

    sendEmail = (e) => {
        e.preventDefault()

        const templateParams = {
            from_name: this.state.contactMe.fromName,
            to_name: "Quadri",
            message: this.state.contactMe.message,
            reply_to: this.state.contactMe.email
        };
        emailjs.send("service_ia5l4o9", "template_ymws2pm", templateParams, "user_wvm45ao5pnfJi83cs73sz")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message Sent")

            }, function(error) {
                console.log('FAILED...', error);

            });
        this.setState({
            contactMe: {
                fromName: "",
                message: "",
                email: ""
            }
        })






    }
    render() {
        if (this.props.resumeExperience && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeExperience;
        }
        return ( <
            section className = "pb-5" >

            <
            div className = "col-md-12 mx-auto" >
            <
            div className = "col-md-12" > <
            h1 className = "section-title"
            style = {
                { color: "black" }
            } >
            <
            span className = "text-black"
            style = {
                { textAlign: "center", color: "black" }
            } > CONTACT ME <
            /span> < /
            h1 > <
            /div>   <
            Container >

            <
            Form >
            <
            Form.Row >
            <
            Form.Group as = { Col } >
            <
            Form.Label htmlFor = "fromName" > Your Name < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Enter Your Name"
            id = "fromName"
            onChange = {
                (e) => this.updateDetails(e)
            }
            value = { this.state.contactMe.fromName }
            /> < /
            Form.Group > <
            /Form.Row> <
            Form.Row >
            <
            Form.Group as = { Col } >
            <
            Form.Label htmlFor = "email" > Email < /Form.Label> <
            Form.Control placeholder = "Enter Your Email Address "
            type = "email"
            id = "email"
            onChange = {
                (e) => this.updateDetails(e)
            }
            value = { this.state.contactMe.email }
            /> < /
            Form.Group > <
            /Form.Row> <
            Form.Row >
            <
            Form.Group as = { Col } >
            <
            Form.Label htmlFor = "message" > Message < /Form.Label> <
            Form.Control placeholder = "Enter Your Message"
            type = "text"
            id = "message"
            onChange = {
                (e) => this.updateDetails(e)
            }
            value = { this.state.contactMe.message }
            /> < /
            Form.Group > <
            /Form.Row>  <
            div className = "text-center"
            style = {
                { marginTop: "1rem" }
            } > <
            button style = {
                {
                    backgroundColor: "#e9d5a1",
                    border: "0",
                    width: "10%",
                    fontSize: "1.2rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontWeight: "bold",
                    borderRadius: "5%"
                }
            }
            onClick = {
                (e) => this.sendEmail(e)
            } > Send message < /button> < /
            div > < /
            Form >
            <
            /Container><

            /
            div >
            <
            /section>
        );
    }
}

export default ContactForm;