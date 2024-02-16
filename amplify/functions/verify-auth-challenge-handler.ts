export const handler = async(event:any) => {
    console.log(`Got request: ${JSON.stringify(event.request, null, 2)}`);
     if (
       event.request.privateChallengeParameters.answer ===
       event.request.challengeAnswer
     ) {
       event.response.answerCorrect = true;
     } else {
       event.response.answerCorrect = false;
     }
     return event;
   };
   