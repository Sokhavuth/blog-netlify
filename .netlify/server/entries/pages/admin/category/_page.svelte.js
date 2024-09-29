import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as Layout } from "../../../../chunks/Layout2.js";
import { I as Items } from "../../../../chunks/Items.js";
const css = {
  code: ".category.svelte-1mrv4v2.svelte-1mrv4v2{padding:20px;background:rgb(241, 198, 198);height:100%}.category.svelte-1mrv4v2 form.svelte-1mrv4v2{display:grid;grid-template-columns:80px 300px;grid-gap:5px 2px;align-items:center}.category.svelte-1mrv4v2 form span.svelte-1mrv4v2{text-align:right}.category.svelte-1mrv4v2 form input.svelte-1mrv4v2{font:var(--body-font);padding:2px 5px\r\n    }",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Layout from '$lib/components/admin/Layout.svelte'\\r\\n    import Items from '$lib/components/admin/Items.svelte'\\r\\n    export let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n    <section class=\\"category\\" slot=\\"editor\\">\\r\\n        <form method=\\"post\\" action=\\"/admin/category?/create\\" >\\r\\n            <span>ឈ្មោះ​ជំពូកៈ</span><input type=\\"text\\" name=\\"label\\" required />\\r\\n            <span>រូប​សញ្ញាៈ</span><input type=\\"text\\" name=\\"thumb\\" required />\\r\\n            <span>ពេល​បង្កើតៈ</span><input type=\\"datetime-local\\" step=\\"1\\" name=\\"datetime\\" required />\\r\\n            <span></span><input type=\\"submit\\" value=\\"បញ្ជូន\\" />\\r\\n            <span></span>\\r\\n        </form>\\r\\n    </section>\\r\\n    <Items slot=\\"items\\" {data} />\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n    .category{\\r\\n        padding: 20px;\\r\\n        background: rgb(241, 198, 198);\\r\\n        height: 100%;\\r\\n    }\\r\\n    .category form{\\r\\n        display: grid;\\r\\n        grid-template-columns: 80px 300px;\\r\\n        grid-gap: 5px 2px;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .category form span{\\r\\n        text-align: right;\\r\\n    }\\r\\n    .category form input{\\r\\n        font: var(--body-font);\\r\\n        padding: 2px 5px\\r\\n    }\\r\\n    \\r\\n</style>"],"names":[],"mappings":"AAoBI,uCAAS,CACL,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IACZ,CACA,wBAAS,CAAC,mBAAI,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAAK,CACjC,QAAQ,CAAE,GAAG,CAAC,GAAG,CACjB,WAAW,CAAE,MACjB,CACA,wBAAS,CAAC,IAAI,CAAC,mBAAI,CACf,UAAU,CAAE,KAChB,CACA,wBAAS,CAAC,IAAI,CAAC,oBAAK,CAChB,IAAI,CAAE,IAAI,WAAW,CAAC,CACtB,OAAO,CAAE,GAAG,CAAC,GAAG;AACxB,IAAI"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, { data }, {}, {
    items: () => {
      return `${validate_component(Items, "Items").$$render($$result, { slot: "items", data }, {}, {})}`;
    },
    editor: () => {
      return `<section class="category svelte-1mrv4v2" slot="editor" data-svelte-h="svelte-q254mg"><form method="post" action="/admin/category?/create" class="svelte-1mrv4v2"><span class="svelte-1mrv4v2">ឈ្មោះ​ជំពូកៈ</span><input type="text" name="label" required class="svelte-1mrv4v2"> <span class="svelte-1mrv4v2">រូប​សញ្ញាៈ</span><input type="text" name="thumb" required class="svelte-1mrv4v2"> <span class="svelte-1mrv4v2">ពេល​បង្កើតៈ</span><input type="datetime-local" step="1" name="datetime" required class="svelte-1mrv4v2"> <span class="svelte-1mrv4v2"></span><input type="submit" value="បញ្ជូន" class="svelte-1mrv4v2"> <span class="svelte-1mrv4v2"></span></form></section>`;
    }
  })}`;
});
export {
  Page as default
};
