import React from "react" 
import {Button, Grid, Row, Col, Image } from "react-bootstrap"
import showOrg from './showOrgs'
import showContact from './showContacts'
import showGroup from './showGroups'

const ShadowResults = (props)=>{
    
    let orgParagraph = showOrg(
        props.results.org.name, 
        props.results.org.city
    );
    let showContactParagraph = showContact(
        props.results.contacts.fullName,
        props.results.contacts.city,
        props.results.contacts.orgName,
    );
    let showGroupParagraph = showGroup(
        props.results.groups.name,
        props.results.groups.city,
    );
    
    const customStyle ={
       border: "0.5px solid",
       width: "180px"
    }
        return (
            <div style={customStyle}>
                <p><strong>Orgs</strong></p>
                {orgParagraph}
                <p><strong>Contacts</strong></p>
                {showContactParagraph}
                <p><strong>Groups</strong></p>
                {showGroupParagraph}
            </div>
        )
        
    
}

export default ShadowResults;