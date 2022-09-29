## minimal import example in ts 

Code to set up minimal ts server

```sh
mkdir ts_import_test
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
mkdir src
touch src/index.ts
npm install --save-dev ts-node nodemon 
npm install --save-dev rimraf
npm install express
npm i @types/express --save-dev
```

added scripts to package json:

```json
{
"start:dev": "nodemon",
"build": "rimraf ./build && tsc",
"start": "npm run build && node build/index.js"
}
```

created a `nodemon.json` config: 

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
```

added minimal working example of express server to ```index.ts```:

```ts
```

started the dev build:
```npm run start:dev```