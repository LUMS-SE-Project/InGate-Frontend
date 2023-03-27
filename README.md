# InGate Frontend

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
