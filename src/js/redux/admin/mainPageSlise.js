
import { createSlice } from '@reduxjs/toolkit';

export const mainPageSlise = createSlice({

    name: 'mainPage',

    initialState: {

        mainPageDataIsChanged: false,

        siteTitle: '',
        siteHeader: '',
        siteParagraphList: [],
        siteKeywords: '',
        siteDescription: '',
        pageTitle: '',
        pageHeader: '',
        pageParagraphList: [],
        pageDescription: '',
        pageKeywords: '',

       




        

       


    },

    reducers: {

        setMainPageDataIsChanged: ( state, action ) => { 
            state.mainPageDataIsChanged =  action.payload;
        },

        setSiteTitle: ( state, action ) => { 
            state.siteTitle =  action.payload;
        },
        setSiteHeader: ( state, action ) => { 
            state.siteHeader =  action.payload;
        },
        setSiteParagraphList: ( state, action ) => { 
            state.siteParagraphList =  action.payload;
        },
        setSiteKeywords: ( state, action ) => { 
            state.siteKeywords =  action.payload;
        },
        setSiteDescription: ( state, action ) => { 
            state.siteDescription =  action.payload;
        },
        setPageTitle: ( state, action ) => { 
            state.pageTitle =  action.payload;
        },
        setPageHeader: ( state, action ) => { 
            state.pageHeader =  action.payload;
        },
        setPageParagraphList: ( state, action ) => { 
            state.pageParagraphList =  action.payload;
        },
        setPageDescription: ( state, action ) => { 
            state.pageDescription =  action.payload;
        },
        setPageKeywords: ( state, action ) => { 
            state.pageKeywords =  action.payload;
        },





        
    },

})

export const {  
    setMainPageDataIsChanged,

    setSiteTitle,
    setSiteHeader,
    setSiteParagraphList,
    setSiteKeywords,
    setSiteDescription,
    setPageTitle,
    setPageHeader,
    setPageParagraphList,
    setPageDescription,
    setPageKeywords,

} = mainPageSlise.actions;

export const selectorData = ( state ) => {

    return {
        mainPageDataIsChanged:  state.mainPage.mainPageDataIsChanged,

        siteTitle:              state.mainPage.siteTitle,
        siteHeader:             state.mainPage.siteHeader,
        siteParagraphList:      state.mainPage.siteParagraphList,
        siteKeywords:           state.mainPage.siteKeywords,
        siteDescription:        state.mainPage.siteDescription,
        pageTitle:              state.mainPage.pageTitle,
        pageHeader:             state.mainPage.pageHeader,
        pageParagraphList:      state.mainPage.pageParagraphList,
        pageDescription:        state.mainPage.pageDescription,
        pageKeywords:           state.mainPage.pageKeywords,








    };
};

export default mainPageSlise.reducer;






