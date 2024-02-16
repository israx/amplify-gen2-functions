import { defineAuth, defineFunction } from "@aws-amplify/backend";
/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    preSignUp: defineFunction({ entry: '../functions/pre-sign-up-handler.ts' }),
    createAuthChallenge: defineFunction({ entry: '../functions/create-auth-challenge-handler.ts' }),
    defineAuthChallenge: defineFunction({ entry: '../functions/define-auth-challenge-handler.ts' }),
    verifyAuthChallengeResponse: defineFunction({ entry: '../functions/verify-auth-challenge-response-handler.ts' })
  }
});
