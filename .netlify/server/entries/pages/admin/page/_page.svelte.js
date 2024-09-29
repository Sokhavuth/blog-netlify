import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as Layout } from "../../../../chunks/Layout2.js";
import { I as Items } from "../../../../chunks/Items.js";
const css = {
  code: ".Editor.svelte-1im14rx.svelte-1im14rx{background-color:white;height:100%;position:relative}.Editor.svelte-1im14rx .wrapper.svelte-1im14rx{height:350px}.Editor.svelte-1im14rx input.svelte-1im14rx{width:100%;font:var(--body-font);padding:3px 5px}.Editor.svelte-1im14rx .frame.svelte-1im14rx{display:grid;grid-template-columns:45% auto 15%;position:absolute;bottom:0;width:100%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Layout from \\"$lib/components/admin/Layout.svelte\\"\\r\\n    import Items from \\"$lib/components/admin/Items.svelte\\"\\r\\n    import { browser } from '$app/environment'\\r\\n\\r\\n    export let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n    <div class=\\"Editor\\" slot=\\"editor\\">\\r\\n        <form action=\\"/admin/page?/create\\" method=\\"post\\">\\r\\n            <input type=\\"text\\" name=\\"title\\" requred placeholder=\\"ចំណងជើង\\" />\\r\\n            <div class=\\"wrapper\\">\\r\\n                <textarea name=\\"content\\" id=\\"editor\\"></textarea>\\r\\n            </div>\\r\\n            <div class=\\"frame\\">\\r\\n                <input type=\\"text\\" name=\\"thumb\\" required placeholder=\\"រូប​​តំណាង\\" />\\r\\n                <input type=\\"datetime-local\\" step=\\"1\\" name=\\"datetime\\" required />\\r\\n                <input type=\\"submit\\" value=\\"ចុះ​ផ្សាយ\\" />\\r\\n            </div>\\r\\n            {#if browser}\\r\\n                <script src=\\"/scripts/ckeditor/config-page.js\\"><\/script>\\r\\n            {/if}\\r\\n        </form>\\r\\n    </div>\\r\\n    \\r\\n    <Items slot=\\"items\\" {data} />\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n    \\r\\n    .Editor{\\r\\n        background-color: white;\\r\\n        height: 100%;\\r\\n        position: relative;\\r\\n    } \\r\\n    .Editor .wrapper{\\r\\n        height: 350px;\\r\\n    }\\r\\n    .Editor input{\\r\\n        width: 100%;\\r\\n        font: var(--body-font);\\r\\n        padding: 3px 5px;\\r\\n    }\\r\\n    .Editor .frame{\\r\\n        display: grid;\\r\\n        grid-template-columns: 45% auto 15%;\\r\\n        position: absolute;\\r\\n        bottom: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+BI,qCAAO,CACH,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QACd,CACA,sBAAO,CAAC,uBAAQ,CACZ,MAAM,CAAE,KACZ,CACA,sBAAO,CAAC,oBAAK,CACT,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IAAI,WAAW,CAAC,CACtB,OAAO,CAAE,GAAG,CAAC,GACjB,CACA,sBAAO,CAAC,qBAAM,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CACnC,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IACX"}`
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
      return `<div class="Editor svelte-1im14rx" slot="editor"><form action="/admin/page?/create" method="post"><input type="text" name="title" requred placeholder="ចំណងជើង" class="svelte-1im14rx"> <div class="wrapper svelte-1im14rx" data-svelte-h="svelte-1hlx49t"><textarea name="content" id="editor"></textarea></div> <div class="frame svelte-1im14rx" data-svelte-h="svelte-1erp8u9"><input type="text" name="thumb" required placeholder="រូប​​តំណាង" class="svelte-1im14rx"> <input type="datetime-local" step="1" name="datetime" required class="svelte-1im14rx"> <input type="submit" value="ចុះ​ផ្សាយ" class="svelte-1im14rx"></div> ${``}</form></div>`;
    }
  })}`;
});
export {
  Page as default
};
