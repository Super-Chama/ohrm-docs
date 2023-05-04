# Introduction

## What is a "Composable"?

In the context of Vue applications, a "composable" is a function that leverages Vue's Composition API to encapsulate and reuse stateful logic.

When building frontend applications, we often need to reuse logic for common tasks. For example, we may need to format dates in many places, so we extract a reusable function for that. This formatter function encapsulates stateless logic: it takes some input and immediately returns expected output. There are many libraries out there for reusing stateless logic - for example lodash and date-fns, which you may have heard of.

By contrast, stateful logic involves managing state that changes over time. A simple example would be tracking the current position of the mouse on a page. In real-world scenarios, it could also be more complex logic such as touch gestures or connection status to a database.

[Read more on Vue.js docs](https://vuejs.org/guide/reusability/composables.html)

## Best Practices

### Naming

It is a convention to name composable functions with camelCase names that start with "use".

### Folder

Globally reusable composables should be kept in `src/utils/composables`
Locally reusable composables should be kept in  `src/modules/yourModule/utils/composables/`

### Return Values

Perfer object destructing to extract return values. 

```js
const { x, y } = useSomeComposable()
```

[Read more on Vueuse docs](https://vueuse.org/guide/best-practice.html)
