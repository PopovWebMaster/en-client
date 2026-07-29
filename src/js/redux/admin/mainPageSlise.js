
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

        languagePageTitle: '',
        languagePageHeader: '',
        languagePageParagraphList: [],
        languagePageDescription: '',
        languagePageKeywords: '',

        lessonsListPageTitle: '',
        lessonsListPageHeader: '',
        lessonsListPageParagraphList: [],
        lessonsListPageDescription: '',
        lessonsListPageKeywords: '',



        languageActiveList: [],



        

       


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



        setLanguagePageTitle: ( state, action ) => { 
            state.languagePageTitle =  action.payload;
        },
        setLanguagePageHeader: ( state, action ) => { 
            state.languagePageHeader =  action.payload;
        },
        setLanguagePageParagraphList: ( state, action ) => { 
            state.languagePageParagraphList =  action.payload;
        },
        setLanguagePageDescription: ( state, action ) => { 
            state.languagePageDescription =  action.payload;
        },
        setLanguagePageKeywords: ( state, action ) => { 
            state.languagePageKeywords =  action.payload;
        },

        setLessonsListPageTitle: ( state, action ) => { 
            state.lessonsListPageTitle =  action.payload;
        },
        setLessonsListPageHeader: ( state, action ) => { 
            state.lessonsListPageHeader =  action.payload;
        },
        setLessonsListPageParagraphList: ( state, action ) => { 
            state.lessonsListPageParagraphList =  action.payload;
        },
        setLessonsListPageDescription: ( state, action ) => { 
            state.lessonsListPageDescription =  action.payload;
        },
        setLessonsListPageKeywords: ( state, action ) => { 
            state.lessonsListPageKeywords =  action.payload;
        },

















        setLanguageActiveList: ( state, action ) => { 
            state.languageActiveList =  action.payload;
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
    setLanguagePageTitle,
    setLanguagePageHeader,
    setLanguagePageParagraphList,
    setLanguagePageDescription,
    setLanguagePageKeywords,

    setLessonsListPageTitle,
    setLessonsListPageHeader,
    setLessonsListPageParagraphList,
    setLessonsListPageDescription,
    setLessonsListPageKeywords,



    setLanguageActiveList,

} = mainPageSlise.actions;

export const selectorData = ( state ) => {

    return {
        mainPageDataIsChanged:  state.mainPage.mainPageDataIsChanged,

        siteTitle:              state.mainPage.siteTitle,
        siteHeader:             state.mainPage.siteHeader,
        siteParagraphList:      state.mainPage.siteParagraphList,
        siteKeywords:           state.mainPage.siteKeywords,
        siteDescription:        state.mainPage.siteDescription,


        languagePageTitle:         state.mainPage.languagePageTitle,
        languagePageHeader:        state.mainPage.languagePageHeader,
        languagePageParagraphList: state.mainPage.languagePageParagraphList,
        languagePageDescription:   state.mainPage.languagePageDescription,
        languagePageKeywords:      state.mainPage.languagePageKeywords,


        lessonsListPageTitle:         state.mainPage.lessonsListPageTitle,
        lessonsListPageHeader:        state.mainPage.lessonsListPageHeader,
        lessonsListPageParagraphList: state.mainPage.lessonsListPageParagraphList,
        lessonsListPageDescription:   state.mainPage.lessonsListPageDescription,
        lessonsListPageKeywords:      state.mainPage.lessonsListPageKeywords,


















        languageActiveList:      state.mainPage.languageActiveList,









    };
};

export default mainPageSlise.reducer;






