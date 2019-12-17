const js = import("./node_modules/@actyi/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("GMTC全球大前端技术大会");
});
