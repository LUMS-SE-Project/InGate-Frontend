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

