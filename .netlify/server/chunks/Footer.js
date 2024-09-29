import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: ".Footer.svelte-nnnu89 .wrapper.svelte-nnnu89{text-align:center;padding:50px 0}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<!--src/layouts/Footer.svelte-->\\n<section class=\\"Footer\\">\\n    <footer class=\\"wrapper\\">\\n        <p>Copyright &copy;2024 Khmer Web</p>\\n        <p>Powered by <a target=\\"_blank\\" href=\\"https://kit.svelte.dev/\\">Sveltekit</a></p>\\n    </footer>\\n</section>\\n\\n<style>\\n    .Footer .wrapper{\\n        text-align: center;\\n        padding: 50px 0;\\n    }\\n</style>"],"names":[],"mappings":"AASI,qBAAO,CAAC,sBAAQ,CACZ,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CAAC,CAClB"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <section class="Footer svelte-nnnu89" data-svelte-h="svelte-88bdw7"><footer class="wrapper svelte-nnnu89"><p>Copyright ©2024 Khmer Web</p> <p>Powered by <a target="_blank" href="https://kit.svelte.dev/">Sveltekit</a></p></footer> </section>`;
});
export {
  Footer as F
};
