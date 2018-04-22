import React from "react" 

const showOrg = (name, city) =>{
    if(name !== "" || city !== ""){
        return(
            <div>
                <p>
                    <em>Org Name:</em>  {name}
                </p>
                <p>
                    <em>City:</em>  {city}
                </p>
            </div>
        )
        
        
    }
}

export default showOrg;