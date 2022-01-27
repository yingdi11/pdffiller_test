## Testing
```
$ cd hello-world
$ npm run compile
$ npx ts-node src-ts/app.ts

Expected:
This shouldn't generate a compile error
Actual:
Got below error:
⨯ Unable to compile TypeScript:
src-ts/app.ts:1:23 - error TS7016: Could not find a declaration file for module 'pdffiller'. 'C:/development/pdf-generation/aws-lambda-nodejs-ts/hello-world/node_modules/pdffiller/index.js' implicitly has an 'any' type.
  Try `npm install @types/pdffiller` if it exists or add a new declaration (.d.ts) file containing `declare module 
'pdffiller';`
```


