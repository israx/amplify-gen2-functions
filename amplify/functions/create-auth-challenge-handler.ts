export const handler = async(event:any) => {
    console.log(`Got request: ${JSON.stringify(event, null, 2)}`);
    if (event.request.challengeName === "CUSTOM_CHALLENGE") {
    event.response.publicChallengeParameters = { "test-key": "test-value" };
    event.response.privateChallengeParameters = { answer: "123" };
  }

  return event;
};
