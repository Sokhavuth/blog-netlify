import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from "../../../../../../chunks/ssr.js";
import { L as Layout } from "../../../../../../chunks/Layout2.js";
import { a as activePage, I as Items } from "../../../../../../chunks/Items.js";
const css = {
  code: ".category.svelte-1ie40ff.svelte-1ie40ff{padding:20px;background:rgb(241, 198, 198);height:100%}.category.svelte-1ie40ff form.svelte-1ie40ff{display:grid;grid-template-columns:80px 300px;grid-gap:5px 2px;align-items:center}.category.svelte-1ie40ff form span.svelte-1ie40ff{text-align:right}.category.svelte-1ie40ff form input.svelte-1ie40ff{font:var(--body-font);padding:2px 5px\r\n    }",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Layout from '$lib/components/admin/Layout.svelte'\\r\\n    import Items from '$lib/components/admin/Items.svelte'\\r\\n    import {activePage} from \\"$lib/stores/page.js\\"\\r\\n    export let data\\r\\n    \\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n    <section class=\\"category\\" slot=\\"editor\\">\\r\\n        <form method=\\"post\\" action={\`?/update&p=\${$activePage}\`} >\\r\\n            <input type=\\"hidden\\" name=\\"id\\" value={data.category.id} />\\r\\n            <span>ឈ្មោះ​ជំពូកៈ</span><input type=\\"text\\" value={data.category.title} name=\\"label\\" required />\\r\\n            <span>រូប​សញ្ញាៈ</span><input type=\\"text\\" name=\\"thumb\\" value={data.category.thumb} required />\\r\\n            <span>ពេល​បង្កើតៈ</span><input type=\\"datetime-local\\" value={data.category.date} step=\\"1\\" name=\\"datetime\\" required />\\r\\n            <span></span><input type=\\"submit\\" value=\\"បញ្ជូន\\" />\\r\\n            <span></span>\\r\\n        </form>\\r\\n    </section>\\r\\n    <Items slot=\\"items\\" {data} />\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n    .category{\\r\\n        padding: 20px;\\r\\n        background: rgb(241, 198, 198);\\r\\n        height: 100%;\\r\\n    }\\r\\n    .category form{\\r\\n        display: grid;\\r\\n        grid-template-columns: 80px 300px;\\r\\n        grid-gap: 5px 2px;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .category form span{\\r\\n        text-align: right;\\r\\n    }\\r\\n    .category form input{\\r\\n        font: var(--body-font);\\r\\n        padding: 2px 5px\\r\\n    }\\r\\n    .category .flash{\\r\\n        text-align: center;\\r\\n        color: white;\\r\\n        padding: 5px;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAuBI,uCAAS,CACL,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IACZ,CACA,wBAAS,CAAC,mBAAI,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAAK,CACjC,QAAQ,CAAE,GAAG,CAAC,GAAG,CACjB,WAAW,CAAE,MACjB,CACA,wBAAS,CAAC,IAAI,CAAC,mBAAI,CACf,UAAU,CAAE,KAChB,CACA,wBAAS,CAAC,IAAI,CAAC,oBAAK,CAChB,IAAI,CAAE,IAAI,WAAW,CAAC,CACtB,OAAO,CAAE,GAAG,CAAC,GAAG;AACxB,IAAI"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activePage, $$unsubscribe_activePage;
  $$unsubscribe_activePage = subscribe(activePage, (value) => $activePage = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_activePage();
  return `${validate_component(Layout, "Layout").$$render($$result, { data }, {}, {
    items: () => {
      return `${validate_component(Items, "Items").$$render($$result, { slot: "items", data }, {}, {})}`;
    },
    editor: () => {
      return `<section class="category svelte-1ie40ff" slot="editor"><form method="post"${add_attribute("action", `?/update&p=${$activePage}`, 0)} class="svelte-1ie40ff"><input type="hidden" name="id"${add_attribute("value", data.category.id, 0)} class="svelte-1ie40ff"> <span class="svelte-1ie40ff" data-svelte-h="svelte-1p4236l">ឈ្មោះ​ជំពូកៈ</span><input type="text"${add_attribute("value", data.category.title, 0)} name="label" required class="svelte-1ie40ff"> <span class="svelte-1ie40ff" data-svelte-h="svelte-1nvx1ha">រូប​សញ្ញាៈ</span><input type="text" name="thumb"${add_attribute("value", data.category.thumb, 0)} required class="svelte-1ie40ff"> <span class="svelte-1ie40ff" data-svelte-h="svelte-15vydf4">ពេល​បង្កើតៈ</span><input type="datetime-local"${add_attribute("value", data.category.date, 0)} step="1" name="datetime" required class="svelte-1ie40ff"> <span class="svelte-1ie40ff"></span><input type="submit" value="បញ្ជូន" class="svelte-1ie40ff"> <span class="svelte-1ie40ff"></span></form></section>`;
    }
  })}`;
});
export {
  Page as default
};
