

import { create_list_from_wordsList } from './vendors/create_list_from_wordsList.js';


export const create_words_selected_list_from = {

    wordsList: ( alIsSelected = true ) => {
        create_list_from_wordsList( alIsSelected );
    },

}