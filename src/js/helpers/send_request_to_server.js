
// import store from './../redux/store.js';

// let sendCount = 0;

import { get_keyName_for_admin } from './get_keyName_for_admin.js';
import { get_lessonId_for_admin } from './get_lessonId_for_admin.js';
import { get_testId_for_admin } from './get_testId_for_admin.js';


export const send_request_to_server = ( params, withWaiting = false ) => {
    let {
        route,
        data,
        addKeyName = false,
        addLessonId = false,
        addTestId = false,
        breakdownSending = false,

        successCallback = () => {},
        errorCallback = () => {},
    } = params;

    

    let token = '';
    let url = '';
    let headers = {};

    // let sendCount = 0;
    // let isError = false;

    let data_complete = { ...data };

    if( addKeyName === true ){
        data_complete.keyName = get_keyName_for_admin(); 
    };

    if( addLessonId === true ){
        data_complete.lessonId = get_lessonId_for_admin(); 
    };

    if( addTestId === true ){
        data_complete.testId = get_testId_for_admin(); 
    };



    if( IS_DEVELOPMENT ){

        data_complete.route = `${route}`;
        url = `${HOST_TO_API_SERVER}/api`;
        headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
        };

    }else{
        url = `${HOST_TO_API_SERVER}/${route}`;

        if( document.querySelector('meta[name="csrf-token"]') ){
            token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            headers = {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            };
        }else{
            console.error( 'Токен не найден' );
        };
    };

    const send = async ( recursivSendError = () => {} ) => {

        if( withWaiting ){

            let elem = document.createElement( 'div' );
            elem.id = 'totalWaiting';
            let app = document.getElementById( 'app' );

            app.append( elem );

        };

        console.dir({
            headers,
            url,
             route,
            data_complete,
        });

        try {
            const response = await fetch( url, {
                method: 'post',  
                headers,
                credentials: "same-origin",
                dataType: "json",
                body: JSON.stringify({
                    _token: token,
                    data: data_complete,
                }) 
            });

            

            if ( response.ok ) { 
                let data_respons = await response.json();
                successCallback( data_respons );

                recursivSendError( false );

                let totalWaiting = document.getElementById( 'totalWaiting' );
                if( totalWaiting ){
                    totalWaiting.remove();
                };


            }else{

                recursivSendError( true );

                console.error( `Ошибка 1:  При попытке вызвать fetch` );

                errorCallback( response );
                let totalWaiting = document.getElementById( 'totalWaiting' );
                if( totalWaiting ){
                    totalWaiting.remove();
                };
            };

        } catch (error) {

            // sendCount++;
            recursivSendError( true );

            console.error( `Ошибка 2: ${error}. При попытке вызвать fetch` );
            console.error({
                _token: token,
                url,
                data_complete,
            });
            console.log('');
            let totalWaiting = document.getElementById( 'totalWaiting' );
            if( totalWaiting ){
                totalWaiting.remove();
            };
        };

    };

    if( breakdownSending ){

        function recursiveeSend( count ){
            send( ( isError ) => {
                if( isError === true ){
                    if( count < 10 ){
                        recursiveeSend( count + 1 )
                    }else{

                    };
                };
            } );
        };

        recursiveeSend( 0 );

    }else{
        send();
    };


        
        

}