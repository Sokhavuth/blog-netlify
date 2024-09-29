import { c as create_ssr_component, v as validate_component, d as each, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { L as Layout } from "../../../../chunks/Layout.js";
const css = {
  code: ".Ad.svelte-cb4q7t.svelte-cb4q7t{display:grid;grid-template-columns:repeat(2, auto);grid-gap:10px;padding-top:10px}.Ad.svelte-cb4q7t img.svelte-cb4q7t{width:100%}.Home.svelte-cb4q7t .container.svelte-cb4q7t{display:grid;grid-template-columns:repeat(4, calc(100% / 4 - 11.25px));grid-gap:30px 15px;padding:30px 0}.Home.svelte-cb4q7t .container .wrapper a.svelte-cb4q7t{position:relative;padding-top:56.25%;overflow:hidden;width:100%;display:block}.Home.svelte-cb4q7t .container .wrapper a img.svelte-cb4q7t{position:absolute;width:100%;min-height:100%;top:0;left:0}.Home.svelte-cb4q7t .container .wrapper a .play-icon.svelte-cb4q7t{width:auto;min-height:auto;width:15%;top:50%;left:50%;transform:translate(-50%, -50%)\r\n}.Home.svelte-cb4q7t .container .wrapper .title.svelte-cb4q7t{padding-top:0}.Home.svelte-cb4q7t .container .wrapper .title div.svelte-cb4q7t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Home.svelte-cb4q7t .pagination.svelte-cb4q7t{display:block;text-align:center}@media only screen and (max-width:600px){.Ad.svelte-cb4q7t.svelte-cb4q7t{grid-template-columns:100%;padding:10px 10px 0}.Home.svelte-cb4q7t .container.svelte-cb4q7t{grid-template-columns:100%;padding:30px 10px}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<!--src/components/Pagination.astro-->\\r\\n<script>\\r\\n    import Layout from \\"$lib/components/Layout.svelte\\"\\r\\n    export let data\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n<section class=\\"Ad region\\">\\r\\n    <img src=\\"/images/ad.jpg\\" alt=\\"\\"/>\\r\\n    <img src=\\"/images/ad.jpg\\" alt=\\"\\"/>\\r\\n</section>\\r\\n\\r\\n<section class=\\"Home region\\">\\r\\n    <div class=\\"container\\">\\r\\n        {#each data.posts as post}\\r\\n            <div class=\\"wrapper\\">\\r\\n                <a href={`/post/${post.id}`}>\\r\\n                    <img src={post.thumb} alt=\\"\\"/>\\r\\n                    {#if post.videos.length}\\r\\n                    <img class=\\"play-icon\\" src=\\"/images/play.png\\" alt=\\"\\"/>\\r\\n                    {/if}\\r\\n                </a>\\r\\n                <div class=\\"date\\">{(new Date(post.date)).toLocaleDateString(\'it-IT\')}</div>\\r\\n                <a class=\\"title\\" href={`/post/${post.id}`}>\\r\\n                    <div >{post.title}</div>\\r\\n                </a>\\r\\n            </div>\\r\\n        {/each}\\r\\n    </div>\\r\\n    <div class=\\"pagination\\">\\r\\n        <span>ទំព័រ </span>\\r\\n        <select on:change={(event)=>{document.location = `/${event.target.value}`}}>\\r\\n            {#each [...Array(data.lastPage).keys()] as pageNumber}\\r\\n                {#if pageNumber+1 == data.currentPage}\\r\\n                <option selected>{pageNumber+1}</option>\\r\\n                {:else}\\r\\n                <option>{pageNumber+1}</option>\\r\\n                {/if}\\r\\n            {/each}\\r\\n        </select>\\r\\n        <span> នៃ {data.lastPage}</span>\\r\\n    </div>\\r\\n</section>\\r\\n</Layout>\\r\\n\\r\\n<style>\\r\\n.Ad{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, auto);\\r\\n    grid-gap: 10px;\\r\\n    padding-top: 10px;\\r\\n}\\r\\n.Ad img{\\r\\n    width: 100%;\\r\\n}\\r\\n.Home .container{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(4, calc(100% / 4 - 11.25px));\\r\\n    grid-gap: 30px 15px;\\r\\n    padding: 30px 0;\\r\\n}\\r\\n.Home .container .wrapper a{\\r\\n    position: relative;\\r\\n    padding-top: 56.25%;\\r\\n    overflow: hidden;\\r\\n    width: 100%;\\r\\n    display: block;\\r\\n}\\r\\n.Home .container .wrapper a img{\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    min-height: 100%;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n}\\r\\n.Home .container .wrapper a .play-icon{\\r\\n    width: auto;\\r\\n    min-height: auto;\\r\\n    width: 15%;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%)\\r\\n}\\r\\n.Home .container .wrapper .title{\\r\\n    padding-top: 0;\\r\\n}\\r\\n.Home .container .wrapper .title div{\\r\\n    white-space: nowrap;\\r\\n    overflow: hidden;\\r\\n    text-overflow: ellipsis;\\r\\n}\\r\\n.Home .pagination{\\r\\n    display: block;\\r\\n    text-align: center;\\r\\n}\\r\\n@media only screen and (max-width:600px){\\r\\n    .Ad{\\r\\n        grid-template-columns: 100%;\\r\\n        padding: 10px 10px 0;\\r\\n    }\\r\\n    .Home .container{\\r\\n        grid-template-columns: 100%;\\r\\n        padding: 30px 10px;\\r\\n    }\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AA8CA,+BAAG,CACC,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,CACtC,QAAQ,CAAE,IAAI,CACd,WAAW,CAAE,IACjB,CACA,iBAAG,CAAC,iBAAG,CACH,KAAK,CAAE,IACX,CACA,mBAAK,CAAC,wBAAU,CACZ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAC1D,QAAQ,CAAE,IAAI,CAAC,IAAI,CACnB,OAAO,CAAE,IAAI,CAAC,CAClB,CACA,mBAAK,CAAC,UAAU,CAAC,QAAQ,CAAC,eAAC,CACvB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KACb,CACA,mBAAK,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,CAAC,iBAAG,CAC3B,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACV,CACA,mBAAK,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,CAAC,wBAAU,CAClC,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC;AACpC,CACA,mBAAK,CAAC,UAAU,CAAC,QAAQ,CAAC,oBAAM,CAC5B,WAAW,CAAE,CACjB,CACA,mBAAK,CAAC,UAAU,CAAC,QAAQ,CAAC,MAAM,CAAC,iBAAG,CAChC,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QACnB,CACA,mBAAK,CAAC,yBAAW,CACb,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,MAChB,CACA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,WAAW,KAAK,CAAC,CACpC,+BAAG,CACC,qBAAqB,CAAE,IAAI,CAC3B,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,CACvB,CACA,mBAAK,CAAC,wBAAU,CACZ,qBAAqB,CAAE,IAAI,CAC3B,OAAO,CAAE,IAAI,CAAC,IAClB,CACJ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `  ${validate_component(Layout, "Layout").$$render($$result, { data }, {}, {
    default: () => {
      return `<section class="Ad region svelte-cb4q7t" data-svelte-h="svelte-5dxe4u"><img src="/images/ad.jpg" alt="" class="svelte-cb4q7t"> <img src="/images/ad.jpg" alt="" class="svelte-cb4q7t"></section> <section class="Home region svelte-cb4q7t"><div class="container svelte-cb4q7t">${each(data.posts, (post) => {
        return `<div class="wrapper svelte-cb4q7t"><a${add_attribute("href", `/post/${post.id}`, 0)} class="svelte-cb4q7t"><img${add_attribute("src", post.thumb, 0)} alt="" class="svelte-cb4q7t"> ${post.videos.length ? `<img class="play-icon svelte-cb4q7t" src="/images/play.png" alt="">` : ``}</a> <div class="date svelte-cb4q7t">${escape(new Date(post.date).toLocaleDateString("it-IT"))}</div> <a class="title svelte-cb4q7t"${add_attribute("href", `/post/${post.id}`, 0)}><div class="svelte-cb4q7t">${escape(post.title)}</div></a> </div>`;
      })}</div> <div class="pagination svelte-cb4q7t"><span data-svelte-h="svelte-in87ct">ទំព័រ</span> <select>${each([...Array(data.lastPage).keys()], (pageNumber) => {
        return `${pageNumber + 1 == data.currentPage ? `<option selected${add_attribute("value", pageNumber + 1, 0)}>${escape(pageNumber + 1)}</option>` : `<option${add_attribute("value", pageNumber + 1, 0)}>${escape(pageNumber + 1)}</option>`}`;
      })}</select> <span>នៃ ${escape(data.lastPage)}</span></div></section>`;
    }
  })}`;
});
export {
  Page as default
};
