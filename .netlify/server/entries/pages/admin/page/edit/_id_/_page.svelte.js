import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../../../../chunks/ssr.js";
import { L as Layout } from "../../../../../../chunks/Layout2.js";
import { a as activePage, I as Items } from "../../../../../../chunks/Items.js";
const css = {
  code: ".Editor.svelte-y5mvnd.svelte-y5mvnd{background-color:white;height:100%;position:relative}.Editor.svelte-y5mvnd .wrapper.svelte-y5mvnd{height:350px}.Editor.svelte-y5mvnd input.svelte-y5mvnd{width:100%;font:var(--body-font);padding:3px 5px}.Editor.svelte-y5mvnd .frame.svelte-y5mvnd{display:grid;grid-template-columns:45% auto 15%;position:absolute;bottom:0;width:100%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Layout from \\"$lib/components/admin/Layout.svelte\\"\\r\\n    import Items from \\"$lib/components/admin/Items.svelte\\"\\r\\n    import { browser } from \'$app/environment\'\\r\\n    import {activePage} from \\"$lib/stores/page.js\\"\\r\\n\\r\\n    export let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n    <div class=\\"Editor\\" slot=\\"editor\\">\\r\\n        <form action={`?/update&p=${$activePage}`} method=\\"post\\">\\r\\n            <input type=\\"hidden\\" name=\\"id\\" value={data.page.id} />\\r\\n            <input type=\\"text\\" name=\\"title\\" value={data.page.title} requred placeholder=\\"ចំណងជើង\\" />\\r\\n            <div class=\\"wrapper\\">\\r\\n                <textarea name=\\"content\\" id=\\"editor\\">{data.page.content}</textarea>\\r\\n            </div>\\r\\n            <div class=\\"frame\\">\\r\\n                <input type=\\"text\\" name=\\"thumb\\" value={data.page.thumb} required placeholder=\\"រូប​​តំណាង\\" />\\r\\n                <input type=\\"datetime-local\\" step=\\"1\\" value={data.page.date} name=\\"datetime\\" required />\\r\\n                <input type=\\"submit\\" value=\\"ចុះ​ផ្សាយ\\" />\\r\\n            </div>\\r\\n            {#if browser}\\r\\n                <script src=\\"/scripts/ckeditor/config-page.js\\"><\/script>\\r\\n            {/if}\\r\\n        </form>\\r\\n    </div>\\r\\n    \\r\\n    <Items slot=\\"items\\" {data} />\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n    .Editor{\\r\\n        background-color: white;\\r\\n        height: 100%;\\r\\n        position: relative;\\r\\n    } \\r\\n    .Editor .wrapper{\\r\\n        height: 350px;\\r\\n    }\\r\\n    .Editor input{\\r\\n        width: 100%;\\r\\n        font: var(--body-font);\\r\\n        padding: 3px 5px;\\r\\n    }\\r\\n    .Editor .frame{\\r\\n        display: grid;\\r\\n        grid-template-columns: 45% auto 15%;\\r\\n        position: absolute;\\r\\n        bottom: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgCI,mCAAO,CACH,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QACd,CACA,qBAAO,CAAC,sBAAQ,CACZ,MAAM,CAAE,KACZ,CACA,qBAAO,CAAC,mBAAK,CACT,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IAAI,WAAW,CAAC,CACtB,OAAO,CAAE,GAAG,CAAC,GACjB,CACA,qBAAO,CAAC,oBAAM,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CACnC,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IACX"}'
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
      return `<div class="Editor svelte-y5mvnd" slot="editor"><form${add_attribute("action", `?/update&p=${$activePage}`, 0)} method="post"><input type="hidden" name="id"${add_attribute("value", data.page.id, 0)} class="svelte-y5mvnd"> <input type="text" name="title"${add_attribute("value", data.page.title, 0)} requred placeholder="ចំណងជើង" class="svelte-y5mvnd"> <div class="wrapper svelte-y5mvnd"><textarea name="content" id="editor">${escape(data.page.content, false)}</textarea></div> <div class="frame svelte-y5mvnd"><input type="text" name="thumb"${add_attribute("value", data.page.thumb, 0)} required placeholder="រូប​​តំណាង" class="svelte-y5mvnd"> <input type="datetime-local" step="1"${add_attribute("value", data.page.date, 0)} name="datetime" required class="svelte-y5mvnd"> <input type="submit" value="ចុះ​ផ្សាយ" class="svelte-y5mvnd"></div> ${``}</form></div>`;
    }
  })}`;
});
export {
  Page as default
};
