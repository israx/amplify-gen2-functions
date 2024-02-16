// amplify/functions/my-demo-function/handler.ts

export const handler = async (event: any) => {
  console.log(event);
  // your function code goes here
  return 'You made a function!';
};