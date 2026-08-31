

import { AppMetodsClass } from './vendors/AppMetodsClass.js';
import { FinishMessageClass } from './vendors/FinishMessageClass.js';
import { TaskClass } from './vendors/TaskClass.js';
import { WordsListClass } from './vendors/WordsListClass.js';
import { GroupClass } from './vendors/GroupClass.js';
import { CurrentWordClass } from './vendors/CurrentWordClass.js';


export class AppLearnModeClass extends AppMetodsClass {

    constructor(){
        super();

        this.FinishMessage = new FinishMessageClass;
        this.Task = new TaskClass;
        this.WordsList = new WordsListClass;
        this.Group = new GroupClass;
        this.CurrentWord = new CurrentWordClass;



        this.StartForStep = this.StartForStep.bind( this );
        this.Next = this.Next.bind( this );
        this.GetCurrentWordId = this.GetCurrentWordId.bind( this );


        



    }

    StartForStep( stepNumber ){

        console.dir( 'stepNumber' );
        console.dir( stepNumber );

        if( stepNumber === null ){
            this.Task.Clear();
            this.FinishMessage.Clear();
            this.WordsList.Clear();
        }else{
            this.Task.SetForStep( stepNumber );
            this.WordsList.Create();
            this.WordsList.SetToStore();

            this.Group.Bind({
                WordsList: this.WordsList
            });

            this.Group.Create();

            this.CurrentWord = new CurrentWordClass;
            this.CurrentWord.Bind({
                WordsList: this.WordsList,
                Group: this.Group,
            });
            this.CurrentWord.SetToStore();

        };

    }

    Next( isAccess = false ){

        this.Group.AcceptResponse( isAccess );
        this.CurrentWord.SetToStore();
        console.dir( this );

    }

    GetCurrentWordId(){
        return this.Group.GetCurrentWordId();

    }



}