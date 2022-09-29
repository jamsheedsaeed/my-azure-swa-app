import React from "react";
import Survey from "material-survey/components/Survey";
import CardQuestionContainer from "material-survey/components/CardQuestionContainer";
import AddToDoComponent from "./AddToDoComponent";
 

export default function SurveyComponent(){
    return (
        <>
        <Survey
            onFinish={answers => {
            // Do something with the answers
            }}
            form={{
            questions: [
                {
                name: "favorite-fruit",
                title: "WHAT IS YOUR PLANT NUMBER?",
                type: "autocomplete",
                choices: ["1", "2", "3"]
                },
                {
                    name: "favorite-fruit",
                    title: "PERFORMANCE WALK IS HAPPENING FOR WHICH LINE?",
                    type: "dropdown",
                    choices: ["Apple", "Orange", "Watermelon"]
                },
                {
                    choices: ["1st Round (Power Walk/Hand Off)", "2nd Round-1st hour", "3rd Round-3rd hour", "4th Round-5th hour", "5th Round-7th hour (Power Walk/hand off)"],
                    name: "strongest-bear",
                    title: "PERFORMANCE WALK ROUND?",
                    type: "radiogroup"
                },
                {
                    items: [
                      { name: "math", title: "VERIFY CREWING LEVEL/PRODUCTION - ENSURE PEOPLE ARE AVAILABLE, ANY CALL OFFS?" },
                      { name: "reading", title: "MAKE ADJUSTMENTS (I.E CREW, SCHEDULES, MACHINE)- ADJUSTMENTS MADE BASED ON SHIFT REQUIREMENTS" },
                      { name: "writing", title: "POWER WALK WITH OFF GOING TEAM LEADER - FOLLOW THE PRODUCT PATH FROM MIXING THROUGH WRAPPING" },
                      { name: "writing", title: "PRODUCT REVIEW AND SENSORY CHECK - PRODUCT APPEARANCE, TASTE, TEXTURE, AND ANY WATCH OUTS" }
                    ],
                    name: "multipletext-example",
                    title: "PRE-SHIFT / POWER WALK",
                    type: "multipletext",
                    class: "hAUCU",
                    validators: [{ maxValue: 800, minValue: 0, type: "numeric" }]
                  },
            ]
            }}
            autocompleteRequest={function noRefCheck() {}}
        />
                    { <AddToDoComponent /> }

        </>
        
    );
}