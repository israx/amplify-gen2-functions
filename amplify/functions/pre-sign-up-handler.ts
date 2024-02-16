export const handler = async (event:any) => {
    console.log(event);
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
  
    return event
   
  };