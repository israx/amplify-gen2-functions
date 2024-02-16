import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { myDemoFunction } from './functions/my-demo-function/resource';

defineBackend({
  auth,
  myDemoFunction,
});
