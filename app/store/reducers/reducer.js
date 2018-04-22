import axios from "axios"
import {MONGO_SEARCHED_TERM, SHOW_SPINNER} from "../actions/actions"

const initialState={
    inputText: "",
    mongo: {
        org:{
            name: "",
            city: "",
            type: ""
        },
        contacts:{
            fullName: "",
            city: "",
            orgName: ""
        },
        groups: {
            name: "",
            city: ""
        },
    },
    showSpinner: false
}

const mongoResponseActionCreator = (inputText, mongoResponse)=>{
    return{
        type: MONGO_SEARCHED_TERM, 
        payload: {
            inputText,
            mongoResponse, 
        }
    }
}

export const searchTermInMongoDB = (inputText)=>{
    return dispatch => {
        if(inputText) dispatch({type:SHOW_SPINNER });
        return axios.post('http://localhost:8082/mongoSearch', {
            orgs: inputText,
            contacts: inputText,
            groups: inputText
          })
          .then(function (response) {
            dispatch(mongoResponseActionCreator(inputText, response["data"]["response"]))
          })
          .catch(function (error) {
            console.log(error);
          });
    }        
    
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case MONGO_SEARCHED_TERM:
            if(action.payload) {
                var {inputText, mongoResponse} = action.payload;
                state = initialState;
                if(Object.keys(mongoResponse).length === 0){
                    state = {
                        ...state,
                        mongo: {
                            ...state.mongo
                        },
                        showSpinner: false,
                        inputText, 
                    }
                    return state;
                }
                if(mongoResponse.hasOwnProperty("orgs")){
                    state = {
                        ...state,
                        mongo: {
                            ...state.mongo,
                            org:{
                                ...state.mongo.org,
                                name: mongoResponse["orgs"][0]["name"],
                                city: mongoResponse["orgs"][0]["city"],
                                type: mongoResponse["orgs"][0]["type"]
                            }
                        },
                    }
                }
                if(mongoResponse.hasOwnProperty("contacts")){
                    const fullName = `${mongoResponse["contacts"][0]["first_name"]}
                     ${mongoResponse["contacts"][0]["last_name"]}`;
                    state = {
                        ...state,
                        mongo: {
                            ...state.mongo,
                            contacts:{
                                ...state.mongo.contacts,
                                fullName: fullName,
                                city: mongoResponse["contacts"][0]["address"]["city"],
                                orgName: mongoResponse["contacts"][mongoResponse["contacts"].length -1]["orgName"]
                            }
                            
                        },
                    }
                }
                if(mongoResponse.hasOwnProperty("groups")){
                    state = {
                        ...state,
                        mongo: {
                            ...state.mongo,
                            groups:{
                                ...state.mongo.groups,
                                name: mongoResponse["groups"][0]["name"],
                                city: mongoResponse["groups"][0]["address"]["city"],
                            }
                            
                        },
                    }
                }
                state = {
                    ...state,
                    mongo: {
                        ...state.mongo
                    },
                    showSpinner: false,
                    inputText, 
                }
                return state;
            }
        case SHOW_SPINNER:
            return {...state, showSpinner: true}
        default:
            return state
    }
}
