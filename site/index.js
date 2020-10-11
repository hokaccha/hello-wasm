(async () => {
  const { greet } = await import("../pkg/hello_wasm.js");
  greet("WebAssembly");
})();
