import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
console.log('hello')
export default boot(async ({ app, router, ssrContext }) => {
  // Quasar does not call this
  // something to do
  console.log('hello', ssrContext)
  app.provide('foo', 'foo')
})
