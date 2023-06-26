# Welcome to InGate's Frontend Repository

## About InGate

InGate started off as a course project for CS360 - Software Engineering. It is a cross-platform app written in React Native with Tailwind. All active issues are listed in the issues tab of the repository. 

InGate aims to be an app providing services and employment to university students. Students can sign up to deliver orders or place them, all from the same app.

### Contributing

If you wish to contribute to this app, please fork this repository, and create a PR. List all changes you have made in the PR.

## Component Guide

To add a component, go to `src/components` and create a new file `<component name>.ts` and add the following code:

```ts
const <component name> = () => {
  return( 
    <div>
    
    </div>
    
    );
};

export const <component name>;
```

To add a page, go to `src/pages` and create a new file `<page name>.ts` and add the following code:

```ts
import { <component name> } from "../components/<component name>";

const <page name> = () => {
  return( 
    <div>
      <component name />
    </div>
    
    );
};

export const <page name>;
```

To add a route, go to `src/routes.ts` and add the following code:

```ts
import { <page name> } from "./pages/<page name>";

const routes = [
    ...,
  {
    path: "/<route path>",
    component: <page name>,
  },
];

```
## To run the project

To run the project, do the following

If you don't have yarn, install it with `npm install -g yarn`

Then, install Android Studio.

Once you have installed both yarn and Android Studio, run the following commands:

```bash
git clone git@github.com:LUMS-SE-Project/cs360-frontend.git
cd cs360-frontend
yarn install
```

To run Metro, run the following command:

```bash
yarn start
```

To run the app on an emulator, run the following command:

```bash
yarn android
```

or 

```bash
yarn ios
```
