import React from "react" 

const showGroup = (name, city) =>{
    if(name !== "" || city !== ""){
        return(
            <div>
                <p>
                    <em>Group Name:</em>  {name}
                </p>
                <p>
                    <em>City:</em>  {city}
                </p>
            </div>
        )
        
        
    }
}

export default showGroup;