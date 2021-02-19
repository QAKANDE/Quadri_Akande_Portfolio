import React, { Component } from 'react';


class ContactForm extends Component {
    state = {}
    render() {
        if (this.props.resumeExperience && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeExperience;
        }
        return ( <
            section className = "pb-5" >
            <
            div className = "col-md-12 mx-auto" >
            <
            div className = "col-md-12" >
            <
            h1 className = "section-title"
            style = {
                { color: "black" }
            } >
            <
            span className = "text-black"
            style = {
                { textAlign: "center", color: "black" }
            } > { sectionName } <
            /span> < /
            h1 > <
            /div> < /
            div > <
            /section>
        );
    }
}

export default ContactForm;