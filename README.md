# WhiteWalker
React Guide

Create the name App
npx create-react-app graphql-typescript-react --typescript

Dependencies: 

For querying API and cache data local in memory, and provide React bindings, and wrapping Apollo queries in a React Hook
yarn add apollo-boost react-apollo react-apollo-hooks graphql-tag graphql


Add Codegen To Automate Typescript Workflow
yarn add -D @graphql-codegen/cli
Configure Codegen: 
$(npm bin)/graphql-codegen init

This will launch a CLI wizard. Do the following steps:

1. Application built with React.
2. The schema is located at https://spacexdata.herokuapp.com/graphql.
3. Set your operations and fragments location to ./src/components/**/*.{ts,tsx} so that it will search all our TypeScript files for query declarations.
4. Use the default plugins “TypeScript”, “TypeScript Operations”, “TypeScript React Apollo.”
5. Update the generated destination to src/generated/graphql.tsx (.tsx is required by the react-apollo plugin).
6. Do not generate an introspection file. I did anyway
7. Use the default codegen.yml file.
8. Make your run script codegen

To install the plugins.
npm install

To run GraphQL Code Generator.
npm run codegen




yarn codegen
