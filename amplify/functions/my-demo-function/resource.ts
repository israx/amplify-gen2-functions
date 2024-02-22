// amplify/functions/my-demo-function/resource.ts
import { defineFunction } from "@aws-amplify/backend";

export const myDemoFunction = defineFunction({
  name: "my-demo-function",
  entry: "./handler.ts",
});
