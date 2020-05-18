import { 
    UPDATE_USER,
    UPDATE_CONTACT,
    RESET_DATA,
    UPDATE_COUNTRY,
    UPDATE_INTNUMBER,
    UPDATE_PROGRAM,
    UPDATE_COURSE,
    UPDATE_PHOTO
 } from './types';


/////////////////////////////////////
/////////  ACTION TRIGGERS  /////////
/////////////////////////////////////
export const updateUser =(data)=>{
    return{
        type:UPDATE_USER,
        payload:data
    }
}

export const updateProgram =(data)=>{
    return{
        type:UPDATE_PROGRAM,
        payload:data
    }
}

export const updateCourse =(data)=>{
    return{
        type:UPDATE_COURSE,
        payload:data
    }
}

export const updateCountry =(data)=>{
    return{
        type:UPDATE_COUNTRY,
        country:data
    }
}

export const updateIntNumber =(data)=>{
    return{
        type:UPDATE_INTNUMBER,
        number:data
    }
}

export const resetData = () => {
    return {
        type: RESET_DATA
    }
}