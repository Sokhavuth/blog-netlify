import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as Layout } from "../../../../chunks/Layout2.js";
import { I as Items } from "../../../../chunks/Items.js";
const css = {
  code: ".setting.svelte-l3cu5s.svelte-l3cu5s{padding:20px;background:rgb(241, 198, 198);height:100%}.setting.svelte-l3cu5s form.svelte-l3cu5s{display:grid;grid-template-columns:130px 300px;grid-gap:5px 2px;align-items:center}.setting.svelte-l3cu5s form span.svelte-l3cu5s{text-align:right}.setting.svelte-l3cu5s form input.svelte-l3cu5s{font:var(--body-font);padding:2px 5px\r\n    }",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Layout from '$lib/components/admin/Layout.svelte'\\r\\n    import Items from \\"$lib/components/admin/Items.svelte\\"\\r\\n    export let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n    <section class=\\"setting\\" slot=\\"editor\\">\\r\\n        <form method=\\"post\\" action='?/create' >\\r\\n            <span>គេហទំព័រៈ</span><input type=\\"text\\" name=\\"title\\" required />\\r\\n            <span>​ខ្លឹមសារៈ</span><input type=\\"text\\" name=\\"description\\" required />\\r\\n            <span>​ទំព័រ​ក្នុងៈ</span><input type=\\"number\\"  name=\\"dashboard\\" required />\\r\\n            <span>ទំព័រ​មុខៈ</span><input type=\\"number\\" name=\\"frontend\\" required />\\r\\n            <span>​ទំព័រ​ជំពូកៈ</span><input type=\\"number\\" name=\\"categories\\" required />\\r\\n            <span>រូប​​តំណាងៈ</span><input type=\\"text\\" name=\\"thumb\\" required />\\r\\n            <span>ពេល​បង្កើតៈ</span><input type=\\"datetime-local\\" step=\\"1\\" name=\\"datetime\\" required />\\r\\n            <span></span><input type=\\"submit\\" value=\\"បញ្ជូន\\" />\\r\\n            <span></span>\\r\\n        </form>\\r\\n    </section>\\r\\n    <Items slot=\\"items\\" {data} />\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n    .setting{\\r\\n        padding: 20px;\\r\\n        background: rgb(241, 198, 198);\\r\\n        height: 100%;\\r\\n    }\\r\\n    .setting form{\\r\\n        display: grid;\\r\\n        grid-template-columns: 130px 300px;\\r\\n        grid-gap: 5px 2px;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .setting form span{\\r\\n        text-align: right;\\r\\n    }\\r\\n    .setting form input{\\r\\n        font: var(--body-font);\\r\\n        padding: 2px 5px\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAwBI,oCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IACZ,CACA,sBAAQ,CAAC,kBAAI,CACT,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,CAAC,KAAK,CAClC,QAAQ,CAAE,GAAG,CAAC,GAAG,CACjB,WAAW,CAAE,MACjB,CACA,sBAAQ,CAAC,IAAI,CAAC,kBAAI,CACd,UAAU,CAAE,KAChB,CACA,sBAAQ,CAAC,IAAI,CAAC,mBAAK,CACf,IAAI,CAAE,IAAI,WAAW,CAAC,CACtB,OAAO,CAAE,GAAG,CAAC,GAAG;AACxB,IAAI"}`
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
      return `<section class="setting svelte-l3cu5s" slot="editor" data-svelte-h="svelte-x6cvsr"><form method="post" action="?/create" class="svelte-l3cu5s"><span class="svelte-l3cu5s">គេហទំព័រៈ</span><input type="text" name="title" required class="svelte-l3cu5s"> <span class="svelte-l3cu5s">​ខ្លឹមសារៈ</span><input type="text" name="description" required class="svelte-l3cu5s"> <span class="svelte-l3cu5s">​ទំព័រ​ក្នុងៈ</span><input type="number" name="dashboard" required class="svelte-l3cu5s"> <span class="svelte-l3cu5s">ទំព័រ​មុខៈ</span><input type="number" name="frontend" required class="svelte-l3cu5s"> <span class="svelte-l3cu5s">​ទំព័រ​ជំពូកៈ</span><input type="number" name="categories" required class="svelte-l3cu5s"> <span class="svelte-l3cu5s">រូប​​តំណាងៈ</span><input type="text" name="thumb" required class="svelte-l3cu5s"> <span class="svelte-l3cu5s">ពេល​បង្កើតៈ</span><input type="datetime-local" step="1" name="datetime" required class="svelte-l3cu5s"> <span class="svelte-l3cu5s"></span><input type="submit" value="បញ្ជូន" class="svelte-l3cu5s"> <span class="svelte-l3cu5s"></span></form></section>`;
    }
  })}`;
});
export {
  Page as default
};
