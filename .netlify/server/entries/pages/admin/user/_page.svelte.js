import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as Layout } from "../../../../chunks/Layout2.js";
import { I as Items } from "../../../../chunks/Items.js";
const css = {
  code: ".Editor.svelte-1vskdyz.svelte-1vskdyz{background-color:white;height:100%;position:relative}.Editor.svelte-1vskdyz .wrapper.svelte-1vskdyz{height:350px}.Editor.svelte-1vskdyz input.svelte-1vskdyz{width:100%;font:var(--body-font);padding:3px 5px}.Editor.svelte-1vskdyz .frame.svelte-1vskdyz{display:grid;grid-template-columns:8% auto auto auto 23% 10%;position:absolute;bottom:0;width:100%}@media only screen and (max-width: 600px){.Editor.svelte-1vskdyz .frame.svelte-1vskdyz{grid-template-columns:100%\r\n        }}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Layout from \\"$lib/components/admin/Layout.svelte\\"\\r\\n    import Items from \\"$lib/components/admin/Items.svelte\\"\\r\\n    import { browser } from '$app/environment'\\r\\n\\r\\n    export let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n    <div class=\\"Editor\\" slot=\\"editor\\">\\r\\n        <form action=\\"?/create\\" method=\\"post\\">\\r\\n            <input type=\\"text\\" name=\\"title\\" requried placeholder=\\"ឈ្មោះ\\" />\\r\\n            <div class=\\"wrapper\\">\\r\\n                <textarea name=\\"content\\" id=\\"editor\\"></textarea>\\r\\n            </div>\\r\\n            <div class=\\"frame\\">\\r\\n                <select name=\\"role\\" required >\\r\\n                    <option>Author</option>\\r\\n                    <option>Editor</option>\\r\\n                    <option>Admin</option>\\r\\n                </select>\\r\\n                <input type=\\"email\\" name=\\"email\\" required placeholder=\\"Email\\" />\\r\\n                <input type=\\"password\\" name=\\"password\\" required />\\r\\n                <input type=\\"text\\" name=\\"thumb\\" required placeholder=\\"រូប​​តំណាង\\" />\\r\\n                <input type=\\"datetime-local\\" step=\\"1\\" name=\\"datetime\\" required />\\r\\n                <input type=\\"submit\\" value=\\"បញ្ចូល\\" />\\r\\n            </div>\\r\\n            {#if browser}\\r\\n                <script src=\\"/scripts/ckeditor/config-user.js\\"><\/script>\\r\\n            {/if}\\r\\n        </form>\\r\\n    </div>\\r\\n    <Items slot=\\"items\\" {data} />\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n    .Editor{\\r\\n        background-color: white;\\r\\n        height: 100%;\\r\\n        position: relative;\\r\\n    } \\r\\n    .Editor .wrapper{\\r\\n        height: 350px;\\r\\n    }\\r\\n    .Editor input{\\r\\n        width: 100%;\\r\\n        font: var(--body-font);\\r\\n        padding: 3px 5px;\\r\\n    }\\r\\n    .Editor .frame{\\r\\n        display: grid;\\r\\n        grid-template-columns: 8% auto auto auto 23% 10%;\\r\\n        position: absolute;\\r\\n        bottom: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    @media only screen and (max-width: 600px){\\r\\n        .Editor .frame{\\r\\n            grid-template-columns: 100%\\r\\n        }\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoCI,qCAAO,CACH,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QACd,CACA,sBAAO,CAAC,uBAAQ,CACZ,MAAM,CAAE,KACZ,CACA,sBAAO,CAAC,oBAAK,CACT,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IAAI,WAAW,CAAC,CACtB,OAAO,CAAE,GAAG,CAAC,GACjB,CACA,sBAAO,CAAC,qBAAM,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,EAAE,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAChD,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IACX,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CACrC,sBAAO,CAAC,qBAAM,CACV,qBAAqB,CAAE,IAAI;AACvC,QAAQ,CACJ"}`
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
      return `<div class="Editor svelte-1vskdyz" slot="editor"><form action="?/create" method="post"><input type="text" name="title" requried placeholder="ឈ្មោះ" class="svelte-1vskdyz"> <div class="wrapper svelte-1vskdyz" data-svelte-h="svelte-1hlx49t"><textarea name="content" id="editor"></textarea></div> <div class="frame svelte-1vskdyz"><select name="role" required><option value="Author" data-svelte-h="svelte-1seov9n">Author</option><option value="Editor" data-svelte-h="svelte-1v7dwxt">Editor</option><option value="Admin" data-svelte-h="svelte-1gmy9h7">Admin</option></select> <input type="email" name="email" required placeholder="Email" class="svelte-1vskdyz"> <input type="password" name="password" required class="svelte-1vskdyz"> <input type="text" name="thumb" required placeholder="រូប​​តំណាង" class="svelte-1vskdyz"> <input type="datetime-local" step="1" name="datetime" required class="svelte-1vskdyz"> <input type="submit" value="បញ្ចូល" class="svelte-1vskdyz"></div> ${``}</form></div>`;
    }
  })}`;
});
export {
  Page as default
};