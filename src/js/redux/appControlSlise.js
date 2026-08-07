
import { createSlice } from '@reduxjs/toolkit';



export const appControlSlise = createSlice({

    name: 'appControl',

    initialState: {

        showStatus: false,


    },

    reducers: {

        setShowStatus: ( state, action ) => {
            state.showStatus = action.payload;
        },

    },

})

export const {  
    setShowStatus,
   

} = appControlSlise.actions;





export const selectorData = ( state ) => {
    return {
        showStatus: state.appControl.showStatus,

        



    };
};

export default appControlSlise.reducer;






