import { p as get_store_value, c as create_ssr_component, a as subscribe, q as set_store_value, f as add_styles, e as escape, d as each, b as add_attribute } from "./ssr.js";
import { w as writable } from "./index2.js";
import { p as page } from "./stores.js";
const activePage = writable(0);
const defaultOptions = {
  clearArray: false,
  clearOnNavigate: true,
  clearAfterMs: 0,
  flashCookieOptions: {
    path: "/",
    maxAge: 120,
    httpOnly: false,
    sameSite: "strict"
  }
};
class FlashMessage {
  options;
  _message;
  get message() {
    return this._message;
  }
  _flashTimeout = 0;
  get flashTimeout() {
    return this._flashTimeout;
  }
  constructor(message, options) {
    this.options = options ?? defaultOptions;
    this._message = {
      subscribe: message.subscribe,
      set: (value, options2) => message.update(($message) => this.update($message, value, options2?.concatenateArray ?? false)),
      update: (updater, options2) => message.update(($message) => this.update($message, updater($message), options2?.concatenateArray ?? false))
    };
  }
  update(current, newData, concatenateArray = false) {
    if (this._flashTimeout)
      clearTimeout(this.flashTimeout);
    if (concatenateArray && Array.isArray(newData)) {
      if (Array.isArray(current)) {
        if (current.length > 0 && newData.length > 0 && current[current.length - 1] === newData[newData.length - 1]) {
          return current;
        } else {
          return current.concat(newData);
        }
      }
    }
    return newData;
  }
}
function _initFlash(page2, options) {
  {
    return new FlashMessage(writable(get_store_value(page2).data.flash));
  }
}
function getFlash(page2, options) {
  return _initFlash(page2).message;
}
const css = {
  code: "footer.svelte-zvdu6l.svelte-zvdu6l{margin-top:0}footer.svelte-zvdu6l .info.svelte-zvdu6l{background-color:rgb(241, 198, 198);text-align:center;margin-top:10px;padding:5px}footer.svelte-zvdu6l .items.svelte-zvdu6l{display:grid;grid-template-columns:calc(50% - 5px ) calc(50% - 5px );grid-gap:10px;margin-top:10px}footer.svelte-zvdu6l .items .item.svelte-zvdu6l{background-color:rgb(241, 198, 198);display:grid;grid-template-columns:130px auto;grid-gap:10px;align-items:center;padding-right:10px}footer.svelte-zvdu6l .items .item.svelte-zvdu6l:hover{grid-template-columns:130px auto 75px}footer.svelte-zvdu6l .items .item .thumb.svelte-zvdu6l{position:relative;padding-top:56.25%;overflow:hidden}footer.svelte-zvdu6l .items .item .thumb img.svelte-zvdu6l{position:absolute;top:0;left:0;width:100%;min-height:100%;float:left}footer.svelte-zvdu6l .items .item .thumb .play.svelte-zvdu6l{width:25%;top:50%;left:50%;min-height:auto;transform:translate(-50%,-50%)}footer.svelte-zvdu6l .items .item .title.svelte-zvdu6l{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}footer.svelte-zvdu6l .items .item .edit.svelte-zvdu6l{text-align:right;display:none}footer.svelte-zvdu6l .items .item .edit a.svelte-zvdu6l{float:right}footer.svelte-zvdu6l .items .item .edit img.svelte-zvdu6l{width:30px}footer.svelte-zvdu6l .items .item .edit img.svelte-zvdu6l:hover{cursor:pointer;opacity:.7}footer.svelte-zvdu6l .items .item:hover .edit.svelte-zvdu6l{display:block;dispaly:grid;grid-template-columns:auto auto}footer.svelte-zvdu6l .pagination.svelte-zvdu6l{text-align:center;margin-top:20px}footer.svelte-zvdu6l .flash.svelte-zvdu6l{text-align:center;color:white;padding:5px;margin-top:10px}@media only screen and (max-width: 600px){footer.svelte-zvdu6l .items.svelte-zvdu6l{grid-template-columns:100%}footer.svelte-zvdu6l .items .item .edit img.svelte-zvdu6l{width:35px}}",
  map: `{"version":3,"file":"Items.svelte","sources":["Items.svelte"],"sourcesContent":["<script>\\r\\n    export let data\\r\\n\\timport {activePage} from \\"$lib/stores/page.js\\"\\r\\n\\timport { getFlash } from 'sveltekit-flash-message'\\r\\n    import { page } from '$app/stores'\\r\\n    const flash = getFlash(page)\\r\\n\\tlet value\\r\\n\\t$: $activePage = value\\r\\n\\tlet navPage = data.navPage || 1\\r\\n\\t\\r\\n\\tasync function paginate(e){\\r\\n\\t\\tconst response = await fetch(\`/admin/\${data.type}/paginate/\${e.target.value}\`)\\r\\n\\t\\tdata.items = await response.json()\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n\\t{#if $flash}\\r\\n        {@const bg = $flash.type == 'success' ? '#3D9970' : '#FF4136'}\\r\\n        <div style:background-color={bg} class=\\"flash\\">{$flash.message}</div>\\r\\n    {/if}\\r\\n    <div class=\\"info\\">{data.info}​ទាំងអស់​មានចំនួនៈ {data.count}</div>\\r\\n    <div class=\\"items\\">\\r\\n        {#each data.items as item}\\r\\n        <div class=\\"item\\">\\r\\n            <a class=\\"thumb\\" href=\\"/{data.type}/{item.id}\\">\\r\\n                <img src={item.thumb} alt='' />\\r\\n                {#if item.videos?.length}\\r\\n                <img class=\\"play\\" src=\\"/images/play.png\\" alt='' />\\r\\n                {/if}\\r\\n            </a>\\r\\n            <div class=\\"title\\">\\r\\n                <a href=\\"/{data.type}/{item.id}\\">{item.title}</a>\\r\\n                <div>{new Date(item.date).toLocaleDateString('it-IT')}</div>\\r\\n            </div>\\r\\n            <div class=\\"edit\\">\\r\\n\\t\\t\\t\\t<a href=\\"/admin/{data.type}/delete/{item.id}\\">\\r\\n\\t\\t\\t\\t\\t<img src=\\"/images/delete.png\\" alt=''/>\\r\\n\\t\\t\\t\\t</a>\\r\\n                <a style=\\"padding-right:5px;\\" href={\`/admin/\${data.type}/edit/\${item.id}?p=\${value}\`}>\\r\\n\\t\\t\\t\\t\\t<img src=\\"/images/edit.png\\" alt='' />\\r\\n\\t\\t\\t\\t</a>\\r\\n            </div> \\r\\n        </div>\\r\\n        {/each}\\r\\n    </div>\\r\\n\\t<div class=\\"pagination\\">\\r\\n\\t\\t<span>​​​​​​​​​​​​​​​​​​​​​ទំព័រ </span>\\r\\n\\t\\t\\t<select bind:value on:change={paginate}> \\r\\n\\t\\t\\t\\t{#each [...Array(data.pageNumber).keys()] as page}\\r\\n\\t\\t\\t\\t\\t{#if page+1 == parseInt(navPage)}\\r\\n\\t\\t\\t\\t\\t<option selected>{page+1}</option>\\r\\n\\t\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t<option>{page+1}</option>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t</select> \\r\\n            \\r\\n        <span>នៃ {data.pageNumber}</span>\\r\\n\\t</div>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n    footer{\\r\\n\\t\\tmargin-top: 0;\\r\\n\\t}\\r\\n\\tfooter .info{\\r\\n\\t\\tbackground-color: rgb(241, 198, 198);\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tmargin-top: 10px;\\r\\n\\t\\tpadding: 5px;\\r\\n\\t}\\r\\n\\tfooter .items{\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: calc(50% - 5px ) calc(50% - 5px );\\r\\n\\t\\tgrid-gap: 10px;\\r\\n\\t\\tmargin-top: 10px;\\r\\n\\t}\\r\\n\\tfooter .items .item{\\r\\n\\t\\tbackground-color: rgb(241, 198, 198);\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: 130px auto;\\r\\n\\t\\tgrid-gap: 10px;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tpadding-right: 10px;\\r\\n\\t}\\r\\n\\tfooter .items .item:hover{\\r\\n\\t\\tgrid-template-columns: 130px auto 75px;\\r\\n\\t}\\r\\n\\tfooter .items .item .thumb{\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tpadding-top: 56.25%;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\tfooter .items .item .thumb img{\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tmin-height: 100%;\\r\\n\\t\\tfloat: left;\\r\\n\\t}\\r\\n\\tfooter .items .item .thumb .play{\\r\\n\\t\\twidth: 25%;\\r\\n\\t\\ttop: 50%;\\r\\n    \\tleft: 50%;\\r\\n\\t\\tmin-height: auto;\\r\\n\\t\\ttransform: translate(-50%,-50%);\\r\\n\\t}\\r\\n\\tfooter .items .item .title{\\r\\n\\t\\twhite-space: nowrap;\\r\\n        overflow: hidden;\\r\\n    \\ttext-overflow: ellipsis;\\r\\n\\t}\\r\\n\\tfooter .items .item .edit{\\r\\n    \\ttext-align: right;\\r\\n\\t\\tdisplay: none;\\r\\n\\t}\\r\\n\\tfooter .items .item .edit a{\\r\\n    \\tfloat: right;\\r\\n\\t}\\r\\n\\tfooter .items .item .edit img{\\r\\n\\t\\twidth: 30px;\\r\\n\\t}\\r\\n\\tfooter .items .item .edit img:hover{\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\topacity: .7;\\r\\n\\t}\\r\\n\\tfooter .items .item:hover .edit{\\r\\n    \\tdisplay: block;\\r\\n\\t\\tdispaly: grid;\\r\\n\\t\\tgrid-template-columns: auto auto;\\r\\n\\t}\\r\\n\\tfooter .pagination{\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tmargin-top: 20px;\\r\\n\\t}\\r\\n\\tfooter .flash{\\r\\n        text-align: center;\\r\\n        color: white;\\r\\n        padding: 5px;\\r\\n\\t\\tmargin-top: 10px;\\r\\n    }\\r\\n\\r\\n    @media only screen and (max-width: 600px){\\r\\n        footer .items{\\r\\n            grid-template-columns: 100%;\\r\\n        }\\r\\n        footer .items .item .edit img{\\r\\n\\t\\t    width: 35px;\\r\\n\\t    }\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"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"}`
};
const Items = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activePage, $$unsubscribe_activePage;
  let $flash, $$unsubscribe_flash;
  $$unsubscribe_activePage = subscribe(activePage, (value2) => $activePage = value2);
  let { data } = $$props;
  const flash = getFlash(page);
  $$unsubscribe_flash = subscribe(flash, (value2) => $flash = value2);
  let value;
  let navPage = data.navPage || 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  set_store_value(activePage, $activePage = value, $activePage);
  $$unsubscribe_activePage();
  $$unsubscribe_flash();
  return `<footer class="svelte-zvdu6l">${$flash ? (() => {
    let bg = $flash.type == "success" ? "#3D9970" : "#FF4136";
    return ` <div class="flash svelte-zvdu6l"${add_styles({ "background-color": bg })}>${escape($flash.message)}</div>`;
  })() : ``} <div class="info svelte-zvdu6l">${escape(data.info)}​ទាំងអស់​មានចំនួនៈ ${escape(data.count)}</div> <div class="items svelte-zvdu6l">${each(data.items, (item) => {
    return `<div class="item svelte-zvdu6l"><a class="thumb svelte-zvdu6l" href="${"/" + escape(data.type, true) + "/" + escape(item.id, true)}"><img${add_attribute("src", item.thumb, 0)} alt="" class="svelte-zvdu6l"> ${item.videos?.length ? `<img class="play svelte-zvdu6l" src="/images/play.png" alt="">` : ``}</a> <div class="title svelte-zvdu6l"><a href="${"/" + escape(data.type, true) + "/" + escape(item.id, true)}" class="svelte-zvdu6l">${escape(item.title)}</a> <div>${escape(new Date(item.date).toLocaleDateString("it-IT"))}</div></div> <div class="edit svelte-zvdu6l"><a href="${"/admin/" + escape(data.type, true) + "/delete/" + escape(item.id, true)}" class="svelte-zvdu6l"><img src="/images/delete.png" alt="" class="svelte-zvdu6l"></a> <a style="padding-right:5px;"${add_attribute("href", `/admin/${data.type}/edit/${item.id}?p=${value}`, 0)} class="svelte-zvdu6l"><img src="/images/edit.png" alt="" class="svelte-zvdu6l"> </a></div> </div>`;
  })}</div> <div class="pagination svelte-zvdu6l"><span data-svelte-h="svelte-1yxouv0">​​​​​​​​​​​​​​​​​​​​​ទំព័រ</span> <select>${each([...Array(data.pageNumber).keys()], (page2) => {
    return `${page2 + 1 == parseInt(navPage) ? `<option selected${add_attribute("value", page2 + 1, 0)}>${escape(page2 + 1)}</option>` : `<option${add_attribute("value", page2 + 1, 0)}>${escape(page2 + 1)}</option>`}`;
  })}</select> <span>នៃ ${escape(data.pageNumber)}</span></div> </footer>`;
});
export {
  Items as I,
  activePage as a
};
