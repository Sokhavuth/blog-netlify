import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import "jquery";
import { L as Layout } from "../../../../chunks/Layout2.js";
const css = {
  code: "section.svelte-uy3b28{background:rgb(241, 198, 198);height:100%;width:100%\r\n    }",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import jq from \\"jquery\\"\\r\\n    import Layout from \\"$lib/components/admin/Layout.svelte\\"\\r\\n\\r\\n    export let data\\r\\n    onMount(()=>{\\r\\n        const clientId = 'a7cc802dc449fd7'\\r\\n        let clientSecret = '6b4851c08184f75087776002d617c4c6e2d87317'\\r\\n    })\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n    <section slot=\\"editor\\">\\r\\n      <iframe src=\\"https://img.doerig.dev/\\" width=\\"100%\\" height=\\"100%\\" frameBorder=\\"0\\" title=\\"\\"></iframe>\\r\\n    </section>\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n    section{\\r\\n        background: rgb(241, 198, 198);\\r\\n        height: 100%;\\r\\n        width: 100%\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAoBI,qBAAO,CACH,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI;AACnB,IAAI"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, { data }, {}, {
    editor: () => {
      return `<section slot="editor" class="svelte-uy3b28" data-svelte-h="svelte-uwp8ju"><iframe src="https://img.doerig.dev/" width="100%" height="100%" frameborder="0" title=""></iframe></section>`;
    }
  })}`;
});
export {
  Page as default
};
