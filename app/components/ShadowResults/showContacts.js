import React from "react" 

const showContact = (fullName, city, orgName) =>{
    if(fullName !== "" || city !== "" || orgName !== ""){
        return(
            <div>
                <p>
                    <em>Full Name:</em>  {fullName}
                </p>
                <p>
                    <em>Org Name:</em>  {orgName}
                </p>
                <p>
                    <em>City:</em>  {city}
                </p>
            </div>
        )
        
        
    }
}

export default showContact;