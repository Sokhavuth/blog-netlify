import { c as create_ssr_component, v as validate_component, d as each, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { L as Layout } from "../../../../chunks/Layout.js";
const css = {
  code: ".Ad.svelte-e81r1t.svelte-e81r1t{display:grid;grid-template-columns:repeat(2, auto);grid-gap:10px;padding-top:10px}.Ad.svelte-e81r1t img.svelte-e81r1t{width:100%}.Category.svelte-e81r1t .container.svelte-e81r1t{display:grid;grid-template-columns:repeat(4, calc(100% / 4 - 11.25px));grid-gap:30px 15px;padding:30px 0}.Category.svelte-e81r1t .container .wrapper a.svelte-e81r1t{position:relative;padding-top:56.25%;overflow:hidden;width:100%;display:block}.Category.svelte-e81r1t .container .wrapper a img.svelte-e81r1t{position:absolute;width:100%;min-height:100%;top:0;left:0}.Category.svelte-e81r1t .container .wrapper a .play-icon.svelte-e81r1t{width:auto;min-height:auto;width:15%;top:50%;left:50%;transform:translate(-50%, -50%)\r\n}.Category.svelte-e81r1t .container .wrapper .title.svelte-e81r1t{padding-top:0}.Category.svelte-e81r1t .container .wrapper .title div.svelte-e81r1t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width:600px){.Ad.svelte-e81r1t.svelte-e81r1t{grid-template-columns:100%;padding:0 10px}.Category.svelte-e81r1t .container.svelte-e81r1t{grid-template-columns:100%;padding:30px 10px}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Layout from \\"$lib/components/Layout.svelte\\"\\r\\n    export let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n<section class=\\"Ad region\\">\\r\\n    <img src=\\"/images/ad.jpg\\" alt=''/>\\r\\n    <img src=\\"/images/ad.jpg\\" alt=''/>\\r\\n</section>\\r\\n\\r\\n<section class=\\"Category region\\">\\r\\n    <div class=\\"container\\">\\r\\n        {#each data.posts as item}\\r\\n            <div class=\\"wrapper\\">\\r\\n                <a href=\\"/post/{item.id}\\">\\r\\n                    <img src={item.thumb} alt=''/>\\r\\n                    <img class=\\"play-icon\\" src=\\"/images/play.png\\" alt=''/>\\r\\n                </a>\\r\\n                <div class=\\"date\\">{(new Date(item.date)).toLocaleDateString(\\"it-IT\\")}</div>\\r\\n                <a class=\\"title\\" href=\\"/post/{item.id}\\">\\r\\n                    <div >{item.title}</div>\\r\\n                </a>\\r\\n            </div>\\r\\n        {/each}\\r\\n    </div>\\r\\n</section>\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n.Ad{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, auto);\\r\\n    grid-gap: 10px;\\r\\n    padding-top: 10px;\\r\\n}\\r\\n.Ad img{\\r\\n    width: 100%;\\r\\n}\\r\\n.Category .container{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(4, calc(100% / 4 - 11.25px));\\r\\n    grid-gap: 30px 15px;\\r\\n    padding: 30px 0;\\r\\n}\\r\\n.Category .container .wrapper a{\\r\\n    position: relative;\\r\\n    padding-top: 56.25%;\\r\\n    overflow: hidden;\\r\\n    width: 100%;\\r\\n    display: block;\\r\\n}\\r\\n.Category .container .wrapper a img{\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    min-height: 100%;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n}\\r\\n.Category .container .wrapper a .play-icon{\\r\\n    width: auto;\\r\\n    min-height: auto;\\r\\n    width: 15%;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%)\\r\\n}\\r\\n.Category .container .wrapper .title{\\r\\n    padding-top: 0;\\r\\n}\\r\\n.Category .container .wrapper .title div{\\r\\n    white-space: nowrap;\\r\\n    overflow: hidden;\\r\\n    text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width:600px){\\r\\n    .Ad{\\r\\n        grid-template-columns: 100%;\\r\\n        padding: 0 10px;\\r\\n    }\\r\\n    .Category .container{\\r\\n        grid-template-columns: 100%;\\r\\n        padding: 30px 10px;\\r\\n    }\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA8BA,+BAAG,CACC,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,CACtC,QAAQ,CAAE,IAAI,CACd,WAAW,CAAE,IACjB,CACA,iBAAG,CAAC,iBAAG,CACH,KAAK,CAAE,IACX,CACA,uBAAS,CAAC,wBAAU,CAChB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAC1D,QAAQ,CAAE,IAAI,CAAC,IAAI,CACnB,OAAO,CAAE,IAAI,CAAC,CAClB,CACA,uBAAS,CAAC,UAAU,CAAC,QAAQ,CAAC,eAAC,CAC3B,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KACb,CACA,uBAAS,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,CAAC,iBAAG,CAC/B,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACV,CACA,uBAAS,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,CAAC,wBAAU,CACtC,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC;AACpC,CACA,uBAAS,CAAC,UAAU,CAAC,QAAQ,CAAC,oBAAM,CAChC,WAAW,CAAE,CACjB,CACA,uBAAS,CAAC,UAAU,CAAC,QAAQ,CAAC,MAAM,CAAC,iBAAG,CACpC,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QACnB,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,WAAW,KAAK,CAAC,CACpC,+BAAG,CACC,qBAAqB,CAAE,IAAI,CAC3B,OAAO,CAAE,CAAC,CAAC,IACf,CACA,uBAAS,CAAC,wBAAU,CAChB,qBAAqB,CAAE,IAAI,CAC3B,OAAO,CAAE,IAAI,CAAC,IAClB,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, { data }, {}, {
    default: () => {
      return `<section class="Ad region svelte-e81r1t" data-svelte-h="svelte-hgm4bu"><img src="/images/ad.jpg" alt="" class="svelte-e81r1t"> <img src="/images/ad.jpg" alt="" class="svelte-e81r1t"></section> <section class="Category region svelte-e81r1t"><div class="container svelte-e81r1t">${each(data.posts, (item) => {
        return `<div class="wrapper svelte-e81r1t"><a href="${"/post/" + escape(item.id, true)}" class="svelte-e81r1t"><img${add_attribute("src", item.thumb, 0)} alt="" class="svelte-e81r1t"> <img class="play-icon svelte-e81r1t" src="/images/play.png" alt=""></a> <div class="date svelte-e81r1t">${escape(new Date(item.date).toLocaleDateString("it-IT"))}</div> <a class="title svelte-e81r1t" href="${"/post/" + escape(item.id, true)}"><div class="svelte-e81r1t">${escape(item.title)}</div></a> </div>`;
      })}</div></section>`;
    }
  })}`;
});
export {
  Page as default
};