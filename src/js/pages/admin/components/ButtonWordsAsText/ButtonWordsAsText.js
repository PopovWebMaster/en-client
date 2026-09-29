
import React, { useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ButtonWordsAsText.scss';

import { selectorData as wordsSlice } from './../../../../redux/admin/wordsSlice.js';
import { selectorData as lessonsSlice } from './../../../../redux/admin/lessonsSlice.js';

import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';



import { ButtonAdd } from './../../../../components/ButtonAdd/ButtonAdd.js';

import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWTextarea } from './../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';

// import { BDWGComponent } from './BDWGComponent/BDWGComponent.js';


const ButtonWordsAsTextComponent = ( props ) => {

    let {
        wordList,
        languageKeyName,
        currentLessonTitle,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ text, setText ] = useState( '' );
    let [ type, setType ] = useState( 'row' );
    let [ count, setCount ] = useState( 0 );

    useEffect( () => {
        if( isOpen === true ){

            setText( get_text() );

        }else{
            setText( '' );
            setCount( 0 );
        }

    }, [ isOpen, wordList, type ]);

    const get_text  = () => {

        let result = '';

        let endSymb = type === 'row'? '. ': type === 'col'? `\n`: '';
        let countVal = 0;

        for( let i = 0; i < wordList.length; i++ ){
            let { foreign } = wordList[ i ];
            if( foreign.trim() !== '' ){
                // result = `${result}${foreign}${endSymb}`;
                countVal++;
                if( type === 'row' ){
                result = `${result}${ foreign.replace(/^./, ( char ) => char.toUpperCase() )}${endSymb}`;
                }else{
                    result = `${result}${foreign}${endSymb}`;
                }
            };
        };

        setCount( countVal );

        return result;

    }



    
    const click = () => {
        setIsOpen( true )
    }

    const change = ( e ) => {
        let val = e.target.value;
        setText( val );

    }

    const download = () => {
        var blob = new Blob([text], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = `${languageKeyName} ${currentLessonTitle} (${count} слов) ${type}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div className = 'buttonWordsAsText'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'Слова как текст'
                width = '80vw'
                height = '92vh'
            >
                <div className = 'BWAT_type'>

                    <span
                        onClick = { () => { setType( 'row' ) } }
                        className = { `${type === 'row'? 'isActive': ''}` }
                    >Строка</span>

                    <span
                        onClick = { () => { setType( 'col' ) } }
                        className = { `${type === 'col'? 'isActive': ''}` }
                    >Колонка</span>

                </div>

                <AWTextarea
                    title = { 'Слова' }
                    value = { text }
                    onChange = { change }
                    max = {  10000 } 
                    style = { { minHeight: '40vh', fontSize: '0.9em' } }
                />

                <div className = 'BWAT_btn'>
                    <span onClick = { download }>Скачать.txt</span>
                </div>

            </AlertWindowContainer>

            <ButtonAdd
                style = {{
                    fontSize: '0.75em'
                }}
                icon = { 'icon-doc-text' }

                click = { click }
                title = ''
            />
        </div>
    )

};


export function ButtonWordsAsText( props ){

    const words = useSelector( wordsSlice );
    const language = useSelector( languageSlice );
    const lessons = useSelector( lessonsSlice );



    // const dispatch = useDispatch();

    return (
        <ButtonWordsAsTextComponent
            { ...props }
            wordList = { words.wordList }
            languageKeyName = { language.languageKeyName }
            currentLessonTitle = { lessons.currentLessonTitle }



            

            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
