import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { L as Layout } from "../../../../chunks/Layout2.js";
const css = {
  code: ".editor.svelte-4cbefp.svelte-4cbefp{display:grid;grid-template-columns:calc(50% - 5px) calc(50% - 5px);grid-gap:10px}.editor.svelte-4cbefp .item.svelte-4cbefp{background:rgb(241, 198, 198);display:grid;grid-template-columns:100px auto;align-items:center;grid-gap:10px;padding-right:10px}.editor.svelte-4cbefp .item .thumb.svelte-4cbefp{display:block;position:relative;padding-top:56.25%;overflow:hidden}.editor.svelte-4cbefp .item a img.svelte-4cbefp{width:100%;min-height:100%;position:absolute;top:0;left:0}.editor.svelte-4cbefp .item a .play-icon.svelte-4cbefp{position:absolute;min-height:auto;width:25%;top:50%;left:50%;transform:translate(-50%,-50%)}.editor.svelte-4cbefp .item .title.svelte-4cbefp{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 600px){.editor.svelte-4cbefp.svelte-4cbefp{grid-template-columns:100%}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport Layout from \\"$lib/components/admin/Layout.svelte\\"\\r\\n\\texport let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data} >\\r\\n\\t<div slot=\\"editor\\" class=\\"editor\\">\\r\\n\\t\\t{#each data.posts as post}\\r\\n\\t\\t<div class=\\"item\\">\\r\\n\\t\\t\\t<a class=\\"thumb\\" href={`/post/${post.id}`}>\\r\\n\\t\\t\\t\\t<img src={post.thumb} alt=\\"\\"/>\\r\\n\\t\\t\\t\\t{#if post.videos?.length}\\r\\n\\t\\t\\t\\t<img class=\\"play-icon\\" src=\\"/images/play.png\\" alt=\\"\\"/>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</a>\\r\\n\\t\\t\\t<div class=\\"title\\">\\r\\n\\t\\t\\t\\t<a href={`/post/${post.id}`}>{post.title}</a>\\r\\n\\t\\t\\t\\t<div class=\\"date\\">{(new Date(post.date)).toLocaleDateString(\\"it-IT\\")}</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t\\t{/each }\\r\\n\\t</div>\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n\\t.editor{\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: calc(50% - 5px) calc(50% - 5px);\\r\\n\\t\\tgrid-gap: 10px;\\r\\n\\t}\\r\\n\\t.editor .item{\\r\\n\\t\\tbackground: rgb(241, 198, 198);\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: 100px auto;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tgrid-gap: 10px;\\r\\n\\t\\tpadding-right: 10px;\\r\\n\\t}\\r\\n\\t.editor .item .thumb{\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding-top: 56.25%;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\t.editor .item a img{\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tmin-height: 100%;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t}\\r\\n\\t.editor .item a .play-icon{\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tmin-height: auto;\\r\\n\\t\\twidth: 25%;\\r\\n\\t\\ttop: 50%;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translate(-50%,-50%);\\r\\n\\t}\\r\\n\\t.editor .item .title{\\r\\n\\t\\twhite-space: nowrap;\\r\\n        overflow: hidden;\\r\\n    \\ttext-overflow: ellipsis;\\r\\n\\t}\\r\\n\\r\\n\\t@media only screen and (max-width: 600px){\\r\\n\\t\\t.editor{\\r\\n\\t\\t\\tgrid-template-columns: 100%;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AAyBC,mCAAO,CACN,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,CACtD,QAAQ,CAAE,IACX,CACA,qBAAO,CAAC,mBAAK,CACZ,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,CAAC,IAAI,CACjC,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,IAAI,CACd,aAAa,CAAE,IAChB,CACA,qBAAO,CAAC,KAAK,CAAC,oBAAM,CACnB,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MACX,CACA,qBAAO,CAAC,KAAK,CAAC,CAAC,CAAC,iBAAG,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACP,CACA,qBAAO,CAAC,KAAK,CAAC,CAAC,CAAC,wBAAU,CACzB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,IAAI,CAC/B,CACA,qBAAO,CAAC,KAAK,CAAC,oBAAM,CACnB,WAAW,CAAE,MAAM,CACb,QAAQ,CAAE,MAAM,CACnB,aAAa,CAAE,QACnB,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CACxC,mCAAO,CACN,qBAAqB,CAAE,IACxB,CACD"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, { data }, {}, {
    editor: () => {
      return `<div slot="editor" class="editor svelte-4cbefp">${each(data.posts, (post) => {
        return `<div class="item svelte-4cbefp"><a class="thumb svelte-4cbefp"${add_attribute("href", `/post/${post.id}`, 0)}><img${add_attribute("src", post.thumb, 0)} alt="" class="svelte-4cbefp"> ${post.videos?.length ? `<img class="play-icon svelte-4cbefp" src="/images/play.png" alt="">` : ``}</a> <div class="title svelte-4cbefp"><a${add_attribute("href", `/post/${post.id}`, 0)}>${escape(post.title)}</a> <div class="date">${escape(new Date(post.date).toLocaleDateString("it-IT"))}</div></div> </div>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
