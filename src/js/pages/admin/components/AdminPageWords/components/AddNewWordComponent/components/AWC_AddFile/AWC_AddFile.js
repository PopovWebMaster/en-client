
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_AddFile.scss';

import { selectorData as wordEditSlice, setFiles } from './../../../../../../../../redux/admin/wordEditSlice.js';

import { OC_InputFiles } from './../../../../../../../../components/OpeningContainer/OC_InputFiles/OC_InputFiles.js';

import { MAX_LENGTH } from './../../../../../../../../config/words.js';

const AWC_AddFileComponent = ( props ) => {

    let {
        // FileList,
        // setFileList,
        files,
        setFiles,

        isOpen,

    } = props;

    let [ fileNamesList, setFileNamesList ] = useState( [] );

    useEffect( () => {

        if( isOpen ){
            if( files.length === 0 ){
                setFileNamesList( [] );
            };

        }else{
            setFileNamesList( [] );
        };

    }, [ isOpen, files ] );

    const change = ( files_arr ) => {

        let list = getFileNamesList( files_arr );

        setFileNamesList( list );

        async function audioToBase64(audioFile) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onerror = reject;
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(audioFile);
            });
        }

        let base64List = [];
        for( let i = 0; i < files_arr.length; i++ ){
            

            audioToBase64( files_arr[i] ).then( ( result ) => {
                let name = files_arr[ i ].name;
                base64List.push( {
                    name: name,
                    base64: result
                } );
                if( i + 1 === files_arr.length  ){

                    // console.dir( 'base64List' );
                    // console.dir( base64List );

                    setFiles( base64List );
                }
            })

        }
        

        // console.dir( files );

    }

    const getFileNamesList = ( files ) => {
        let result = [];

        for( let i = 0; i < files.length; i++ ){
            let { name } = files[ i ];
            
            result.push( name );

        };
        return result;
    }

   


    


    return (
        <div className = 'AWC_WordRu'>

            <OC_InputFiles
                change = { change }
                fileNames = { fileNamesList }
                multiple = { true }
            
            />

          
          

        </div>
    )

};


export function AWC_AddFile ( props ){

    const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AWC_AddFileComponent
            { ...props }
            files = { wordEdit.files }
            setFiles = { ( val ) => { dispatch( setFiles( val ) ) } }

        />
    );


}
