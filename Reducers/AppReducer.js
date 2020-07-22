import { 
    UPDATE_USER,
    UPDATE_CONTACT,
    RESET_DATA,
    UPDATE_COUNTRY,
    UPDATE_INTNUMBER,
    UPDATE_PROGRAM,
    UPDATE_COURSE,
    UPDATE_PHOTO,
    UPDATE_ENROLLED,
    UPDATE_LESSONS,
    UPDATE_FILES
} from '../actions/types';

const initialState = {
    UserId:'',
    Country:'',
    Int_phone:'',
    Contacts:[],
    Program:{},
    Courses:{},
    photo:'',
    enrolled:{},
    lessons:{},
    files:{}

};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONTACT:
            console.log(action.payload)
            return {
                ...state,
                Contacts:action.payload.contacts,
                ContactsById: {
                    ...state.ContactsById,
                    ...action.payload.ContactById
                }

            };
            break;
        case UPDATE_USER:
            console.log("action",action.payload)
            return {
                ...state,
                UserId:action.payload
            };
            break;

        case UPDATE_ENROLLED:
            //console.log("action",action.payload)
            return {
                ...state,
                enrolled:{
                    ...state.enrolled,
                    [action.payload]:action.payload
                }
            };
            break;
        
        case UPDATE_FILES:
            console.log("action",action.payload)
            return {
                ...state,
                files:{
                    ...state.files,
                    [action.payload.lesson_id]:{
                        ...state.lessons[action.payload.lesson_id],
                        [action.payload.id]:{
                            ...action.payload
                        }
                    }
                }
            };
            break;

        case UPDATE_LESSONS:
            console.log("action",action.payload)
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    [action.payload.course_id]:{
                        ...state.lessons[action.payload.course_id],
                        [action.payload.id]:{
                            ...action.payload
                        }
                    }
                }
            };
            break;

        case UPDATE_COUNTRY:
                    return {
                        ...state,
                        Country:action.country
                    };
                    break;   

         case UPDATE_COURSE:
            
                    return {
                        ...state,
                        Courses:{
                            ...state.Courses,
                         [action.payload.program_id]:{
                            ...state.Courses[action.payload.program_id],
                          [action.payload.id]:{
                            ...action.payload
                          } 
                         }
                        }
                    };
                    break;   

        case UPDATE_PROGRAM:
                    return {
                        ...state,
                        Program:{
                            ...state.Program,
                            [action.payload.program_id]:{
                                ...state.Program[action.payload.program_id],
                                ...action.payload
                                
                            }
                        }
                    }
                    break;
        case UPDATE_INTNUMBER:
                        return {
                            ...state,
                            Int_phone:action.number.toString()
                        };
                        break;  

        case RESET_DATA:
            return {
                ...state,
                UserId:'',
                Country:'',
                Int_phone:'',
                Contacts:[],
                ContactsById:{},
                names:''
            };
            break;
        default:
            return state;
    }
} 