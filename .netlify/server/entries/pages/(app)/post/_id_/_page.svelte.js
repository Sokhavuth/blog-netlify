import { c as create_ssr_component, b as add_attribute, d as each, e as escape, f as add_styles, g as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, v as validate_component } from "../../../../../chunks/ssr.js";
import { L as Layout } from "../../../../../chunks/Layout.js";
import { getUrl, facebook } from "static-social-links";
const css$2 = {
  code: ".video.svelte-1r52tpw .screen div.svelte-1r52tpw{position:relative;padding-top:56.25%;border:1px solid white}.video.svelte-1r52tpw .screen div iframe.svelte-1r52tpw{position:absolute;top:0;left:0;width:100%;height:100%}.video.svelte-1r52tpw .playlist.svelte-1r52tpw{max-height:405px;overflow:auto;margin-bottom:20px;border:1px solid white}.video.svelte-1r52tpw .playlist .part.svelte-1r52tpw{text-align:left;padding:10px;color:var(--playlist-color);display:block;height:auto;font-size:16px;background:var(--playlist-part);border:1px solid white;border-top:none}.video.svelte-1r52tpw .playlist .part.svelte-1r52tpw:last-child{margin-bottom:0}.video.svelte-1r52tpw .playlist .part.svelte-1r52tpw:hover{cursor:pointer;opacity:.7}.clickedPart.svelte-1r52tpw.svelte-1r52tpw{background:var(--playlist-clicked-bg) !important;color:var(--playlist-clicked) !important}",
  map: `{"version":3,"file":"Video.svelte","sources":["Video.svelte"],"sourcesContent":["<script>\\r\\nimport { onMount } from \\"svelte\\"\\r\\nexport let data = ''\\r\\n$: videos = JSON.parse(data.post.videos).reverse()\\r\\n$: title = data.post.title\\r\\nlet clicked = 0\\r\\nlet myElement\\r\\nlet url\\r\\nlet clickedPart = false\\r\\n\\r\\nfunction setScreen(video,id,click){\\r\\n    if(video['type'] == 'OK'){\\r\\n        url = \`//ok.ru/videoembed/\${video['id']}\`\\r\\n    }else if(video['type'] == 'YouTube'){\\r\\n        url = \`https://www.youtube.com/embed/\${video['id']}\`\\r\\n    }else if(video['type'] == 'YouTubePlaylist'){\\r\\n        url = \`https://www.youtube.com/embed/videoseries?list=\${video['id']}\`\\r\\n    }else if(video['type'] === \\"Facebook\\"){\\r\\n        url = \`https://www.facebook.com/watch/?v=\${video['id']}\`\\r\\n    }else if(video['type'] === \\"GoogleDrive\\"){\\r\\n        url = \`https://docs.google.com/file/d/\${video['id']}/preview\`\\r\\n    }else if(video['type'] === \\"Vimeo\\"){\\r\\n        url = \`https://player.vimeo.com/video/\${video['id']}\`\\r\\n    }else if(video['type'] === \\"Dailymotion\\"){\\r\\n        url = \`https://www.dailymotion.com/embed/video/\${video['id']}\`\\r\\n    }\\r\\n}\\r\\n\\r\\nfunction onClick(video,id,click){\\r\\n    let myElement = document.getElementById(\\"part\\"+clicked)\\r\\n    myElement.classList.remove('clickedPart')\\r\\n    let myElement2 = document.getElementById(\\"part\\"+id)\\r\\n    myElement2.classList.add('clickedPart')\\r\\n    clicked = id\\r\\n    setScreen(video,id,click)\\r\\n}\\r\\n\\r\\n$: title, setScreen(videos[0],0,false)\\r\\nonMount(() => {\\r\\n    myElement = document.getElementById(\\"part0\\")\\r\\n    myElement.classList.add('clickedPart')\\r\\n})\\r\\n<\/script>\\r\\n\\r\\n{#if videos}\\r\\n<div class=\\"video\\">\\r\\n    <div class=\\"screen\\">\\r\\n        {#if videos.type !== 'Facebook'}\\r\\n        <div><iframe title=''  src={url} frameborder=\\"0\\" allowfullscreen></iframe></div>\\r\\n        {:else}\\r\\n        <div class=\\"fb-video\\" data-href={url} data-width=\\"auto\\" data-show-captions=\\"true\\"></div>\\r\\n        {/if}\\r\\n    </div>\\r\\n    <div class=\\"playlist\\">\\r\\n    {#each videos as item, index }\\r\\n        {#if index === videos.length-1}\\r\\n        <div class=\\"part\\" class:clickedPart={clickedPart} id=\\"part{index}\\"  on:click={() => onClick(videos[index], index,true)}>\\r\\n            { title } ភាគ { index+1 } { videos[index].status }\\r\\n        </div>\\r\\n        {:else}\\r\\n        <div class=\\"part\\" class:clickedPart={clickedPart} id=\\"part{index}\\" on:click={() => onClick(videos[index], index,true)}>\\r\\n            { title } ភាគ { index+1 }\\r\\n        </div>\\r\\n        {/if}\\r\\n    {/each}\\r\\n    </div>\\r\\n</div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n    .video .screen div{\\r\\n        position: relative;\\r\\n        padding-top: 56.25%;\\r\\n        border: 1px solid white;\\r\\n    }\\r\\n    .video .screen div iframe{\\r\\n        position: absolute;\\r\\n        top: 0;\\r\\n        left: 0;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n    }\\r\\n    .video .playlist{\\r\\n        max-height: 405px;\\r\\n        overflow: auto;\\r\\n        margin-bottom: 20px;\\r\\n        border: 1px solid white;\\r\\n    }\\r\\n    .video .playlist .part{\\r\\n    text-align: left;\\r\\n    padding: 10px;\\r\\n    color: var(--playlist-color);\\r\\n    display: block;\\r\\n    height: auto;\\r\\n    font-size: 16px;\\r\\n    background: var(--playlist-part);\\r\\n    border: 1px solid white;\\r\\n    border-top: none;\\r\\n}\\r\\n.video .playlist .part:last-child{\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n.video .playlist .part:hover{\\r\\n    cursor: pointer;\\r\\n    opacity: .7;\\r\\n}\\r\\n.clickedPart{\\r\\n    background: var(--playlist-clicked-bg) !important;\\r\\n    color: var(--playlist-clicked) !important;\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AAsEI,qBAAM,CAAC,OAAO,CAAC,kBAAG,CACd,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACtB,CACA,qBAAM,CAAC,OAAO,CAAC,GAAG,CAAC,qBAAM,CACrB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,qBAAM,CAAC,wBAAS,CACZ,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,IAAI,CACd,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KACtB,CACA,qBAAM,CAAC,SAAS,CAAC,oBAAK,CACtB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAC5B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,UAAU,CAAE,IAChB,CACA,qBAAM,CAAC,SAAS,CAAC,oBAAK,WAAW,CAC7B,aAAa,CAAE,CACnB,CACA,qBAAM,CAAC,SAAS,CAAC,oBAAK,MAAM,CACxB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,EACb,CACA,0CAAY,CACR,UAAU,CAAE,IAAI,qBAAqB,CAAC,CAAC,UAAU,CACjD,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAAC,UACnC"}`
};
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videos;
  let title;
  let { data = "" } = $$props;
  let url;
  function setScreen(video, id, click) {
    if (video["type"] == "OK") {
      url = `//ok.ru/videoembed/${video["id"]}`;
    } else if (video["type"] == "YouTube") {
      url = `https://www.youtube.com/embed/${video["id"]}`;
    } else if (video["type"] == "YouTubePlaylist") {
      url = `https://www.youtube.com/embed/videoseries?list=${video["id"]}`;
    } else if (video["type"] === "Facebook") {
      url = `https://www.facebook.com/watch/?v=${video["id"]}`;
    } else if (video["type"] === "GoogleDrive") {
      url = `https://docs.google.com/file/d/${video["id"]}/preview`;
    } else if (video["type"] === "Vimeo") {
      url = `https://player.vimeo.com/video/${video["id"]}`;
    } else if (video["type"] === "Dailymotion") {
      url = `https://www.dailymotion.com/embed/video/${video["id"]}`;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css$2);
  videos = JSON.parse(data.post.videos).reverse();
  title = data.post.title;
  {
    setScreen(videos[0]);
  }
  return `${videos ? `<div class="video svelte-1r52tpw"><div class="screen svelte-1r52tpw">${videos.type !== "Facebook" ? `<div class="svelte-1r52tpw"><iframe title=""${add_attribute("src", url, 0)} frameborder="0" allowfullscreen class="svelte-1r52tpw"></iframe></div>` : `<div class="fb-video svelte-1r52tpw"${add_attribute("data-href", url, 0)} data-width="auto" data-show-captions="true"></div>`}</div> <div class="playlist svelte-1r52tpw">${each(videos, (item, index) => {
    return `${index === videos.length - 1 ? `<div class="${["part svelte-1r52tpw", ""].join(" ").trim()}" id="${"part" + escape(index, true)}">${escape(title)} ភាគ ${escape(index + 1)} ${escape(videos[index].status)} </div>` : `<div class="${["part svelte-1r52tpw", ""].join(" ").trim()}" id="${"part" + escape(index, true)}">${escape(title)} ភាគ ${escape(index + 1)} </div>`}`;
  })}</div></div>` : ``}`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { path } = $$props;
  let { iconColor = "white" } = $$props;
  let { size = 32 } = $$props;
  let { borderRadius = size * (6 / 32) } = $$props;
  let { round = void 0 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.iconColor === void 0 && $$bindings.iconColor && iconColor !== void 0) $$bindings.iconColor(iconColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0) $$bindings.borderRadius(borderRadius);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0) $$bindings.round(round);
  return `<svg viewBox="0 0 64 64"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} role="img" aria-label=""${add_styles({ "border-radius": `${borderRadius}px` })}>${round ? `<circle cx="32" cy="32" r="32"${add_attribute("fill", color, 0)}></circle>` : `<rect width="64" height="64"${add_attribute("fill", color, 0)}></rect>`}<path${add_attribute("d", path, 0)}${add_attribute("fill", iconColor, 0)}></path></svg>`;
});
const css$1 = {
  code: "a.svelte-a6i1tq{display:inline-block}",
  map: '{"version":3,"file":"Link.svelte","sources":["Link.svelte"],"sourcesContent":["<script>import Icon from \\"./Icon.svelte\\";\\nimport { getUrl } from \\"static-social-links\\";\\nexport let config;\\nexport let params;\\nexport let color = void 0;\\nexport let iconColor = \\"white\\";\\nexport let size = 32;\\nexport let borderRadius = size * (6 / 32);\\nexport let round = void 0;\\nexport let rel = \\"noreferrer noopener\\";\\nexport let target = \\"_blank\\";\\n$:\\n  _color = color || config.color;\\n$:\\n  _iconColor = iconColor === \\"brand\\" ? config.color : iconColor;\\n<\/script>\\n\\n<a\\n\\thref={getUrl(config.url, params)}\\n\\tstyle:height={`${size}px`}\\n\\t{rel}\\n\\t{target}\\n\\taria-label={`Share to ${config.name}`}\\n\\tstyle:border-radius=\\"{round ? size / 2 : borderRadius}px\\"\\n\\t{...$$restProps}\\n>\\n\\t<Icon {...config} {size} color={_color} iconColor={_iconColor} {borderRadius} {round} />\\n</a>\\n\\n<style>\\n\\ta {\\n\\t\\tdisplay: inline-block;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8BC,eAAE,CACD,OAAO,CAAE,YACV"}'
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _color;
  let _iconColor;
  let $$restProps = compute_rest_props($$props, [
    "config",
    "params",
    "color",
    "iconColor",
    "size",
    "borderRadius",
    "round",
    "rel",
    "target"
  ]);
  let { config } = $$props;
  let { params } = $$props;
  let { color = void 0 } = $$props;
  let { iconColor = "white" } = $$props;
  let { size = 32 } = $$props;
  let { borderRadius = size * (6 / 32) } = $$props;
  let { round = void 0 } = $$props;
  let { rel = "noreferrer noopener" } = $$props;
  let { target = "_blank" } = $$props;
  if ($$props.config === void 0 && $$bindings.config && config !== void 0) $$bindings.config(config);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.iconColor === void 0 && $$bindings.iconColor && iconColor !== void 0) $$bindings.iconColor(iconColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0) $$bindings.borderRadius(borderRadius);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0) $$bindings.round(round);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0) $$bindings.rel(rel);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  $$result.css.add(css$1);
  _color = color || config.color;
  _iconColor = iconColor === "brand" ? config.color : iconColor;
  return `<a${spread(
    [
      {
        href: escape_attribute_value(getUrl(config.url, params))
      },
      { rel: escape_attribute_value(rel) },
      { target: escape_attribute_value(target) },
      {
        "aria-label": escape_attribute_value(`Share to ${config.name}`)
      },
      escape_object($$restProps)
    ],
    {
      classes: "svelte-a6i1tq",
      styles: {
        "height": `${size}px`,
        "border-radius": `${round ? size / 2 : borderRadius}px`
      }
    }
  )}>${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, config, { size }, { color: _color }, { iconColor: _iconColor }, { borderRadius }, { round }), {}, {})} </a>`;
});
const FacebookLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _hashtag;
  let $$restProps = compute_rest_props($$props, ["url", "hashtag", "size", "color", "iconColor", "borderRadius", "round"]);
  let { url } = $$props;
  let { hashtag = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { color = void 0 } = $$props;
  let { iconColor = void 0 } = $$props;
  let { borderRadius = void 0 } = $$props;
  let { round = void 0 } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.hashtag === void 0 && $$bindings.hashtag && hashtag !== void 0) $$bindings.hashtag(hashtag);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.iconColor === void 0 && $$bindings.iconColor && iconColor !== void 0) $$bindings.iconColor(iconColor);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0) $$bindings.borderRadius(borderRadius);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0) $$bindings.round(round);
  _hashtag = hashtag ? `#${hashtag}` : void 0;
  return `${validate_component(Link, "Link").$$render($$result, Object.assign({}, { params: { hashtag: _hashtag, u: url } }, { config: facebook }, { size }, { color }, { iconColor }, { borderRadius }, { round }, $$restProps), {}, {})}`;
});
const css = {
  code: ".Ad.svelte-c9n5o6.svelte-c9n5o6{display:grid;grid-template-columns:repeat(2, auto);grid-gap:10px;padding-top:10px}.Ad.svelte-c9n5o6 img.svelte-c9n5o6{width:100%}.Post.svelte-c9n5o6.svelte-c9n5o6{margin-top:20px;display:grid;grid-template-columns:70% auto;grid-gap:15px}.Post.svelte-c9n5o6 .main.svelte-c9n5o6{background-color:rgb(224, 220, 220);color:rgb(22, 22, 22);padding:15px}.Post.svelte-c9n5o6 .main .title.svelte-c9n5o6{font:18px/1.5 Oswald, Koulen;margin-bottom:20px}.Post.svelte-c9n5o6 .main .categories span.svelte-c9n5o6:nth-child(2){float:right}.Post.svelte-c9n5o6 .main .author.svelte-c9n5o6{margin-bottom:30px}.Post.svelte-c9n5o6 .sidebar a.svelte-c9n5o6{display:block;color:white;position:relative;padding-top:56.25%;overflow:hidden;margin-bottom:20px}.Post.svelte-c9n5o6 .sidebar a.svelte-c9n5o6:last-child{margin-bottom:0}.Post.svelte-c9n5o6 .sidebar a img.svelte-c9n5o6{position:absolute;width:100%;min-height:100%;top:0;left:0}.Post.svelte-c9n5o6 .sidebar a .play-icon.svelte-c9n5o6{width:auto;min-height:auto;left:50%;top:50%;transform:translate(-50%, -50%);width:15%}.Post.svelte-c9n5o6 .sidebar a .title.svelte-c9n5o6{position:absolute;bottom:0;padding:5px 10px;font:16px/1.5 Oswald, Bayon;text-shadow:2px 2px 4px #000000;background:-webkit-linear-gradient(bottom, black,transparent);width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Post.svelte-c9n5o6 .main .post-bottom.svelte-c9n5o6{display:grid;grid-template-columns:auto auto}.Post.svelte-c9n5o6 .main .post-bottom .edit.svelte-c9n5o6{text-align:right}.Post.svelte-c9n5o6 .main .post-bottom .edit img.svelte-c9n5o6{width:30px}.Post.svelte-c9n5o6 .main .social-media.svelte-c9n5o6{width:50px;display:grid;grid-template-columns:auto auto;grid-gap:5px;align-items:center}@media only screen and (max-width:600px){.Ad.svelte-c9n5o6.svelte-c9n5o6{grid-template-columns:100%;padding:0 10px}.Post.svelte-c9n5o6.svelte-c9n5o6{grid-template-columns:100%}.Post.svelte-c9n5o6 .sidebar.svelte-c9n5o6{padding:0 15px}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>    \\r\\n    import { onMount } from \\"svelte\\"\\r\\n    import Layout from \\"$lib/components/Layout.svelte\\"\\r\\n    import Video from \\"$lib/components/Video.svelte\\"\\r\\n    import { FacebookLink } from \\"svelte-social-links\\"\\r\\n    export let data\\r\\n    $: post = data.post\\r\\n    const Categories = {\\r\\n        Khmer: 'រឿងខ្មែរ',\\r\\n        Thai: 'រឿងថៃ',\\r\\n        Chinese: 'រឿងចិន',\\r\\n        Korean: 'រឿងកូរ៉េ',\\r\\n        travel: 'ដើរ​លេង',\\r\\n        news: 'ព័ត៌មាន',\\r\\n        movie: 'ភាពយន្ត',\\r\\n        game: 'ពិភព​និម្មិត',\\r\\n        world: 'រឿង​​បរទេស'\\r\\n    }\\r\\n\\r\\n    $: postCategories = data.post.categories.split(\\",\\")\\r\\n    $: categories = postCategories.map((category)=>Categories[category.trim()])\\r\\n\\r\\n    onMount(() => { \\r\\n        var disqus_config = function () {\\r\\n            this.page.url = \`https://khmerweb-live.netlify.app/post/\${post.id}\`;  // Replace PAGE_URL with your page's canonical URL variable\\r\\n            this.page.identifier = \`\${post.id}\`; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\\r\\n        };\\r\\n    \\r\\n        (function() { // DON'T EDIT BELOW THIS LINE\\r\\n            var d = document, s = d.createElement('script');\\r\\n            s.src = 'https://khmerweb-live.disqus.com/embed.js';\\r\\n            s.setAttribute('data-timestamp', +new Date());\\r\\n            (d.head || d.body).appendChild(s);\\r\\n        })();\\r\\n    })\\r\\n<\/script>\\r\\n\\r\\n<Layout {data}>\\r\\n<section class=\\"Ad region\\">\\r\\n    <img src=\\"/images/ad.jpg\\" alt=''/>\\r\\n    <img src=\\"/images/ad.jpg\\" alt=''/>\\r\\n</section>\\r\\n\\r\\n<section class=\\"Post region\\">\\r\\n    <div class=\\"main\\">\\r\\n        <h3 class=\\"title\\">{post.title}</h3>\\r\\n        <div class=\\"categories\\">\\r\\n            <span>​​​​​​​​​ជំពូកៈ {(categories.filter(Boolean)).join(', ')}</span>\\r\\n            <span>{(new Date(post.date)).toLocaleDateString('it-IT')}</span>\\r\\n        </div>\\r\\n        <div class=\\"author\\">\\r\\n            <span>អ្នក​​​​​​​​​​រៀបរៀងៈ {data.authorName}</span>\\r\\n        </div>\\r\\n        {#if post.videos.length > 0}\\r\\n            <Video {data} />\\r\\n        {/if}\\r\\n        <div class=\\"content\\">\\r\\n            {@html post.content}\\r\\n        </div>\\r\\n        <div class='post-bottom'>\\r\\n            <div class=\\"social-media\\">\\r\\n                <FacebookLink\\r\\n\\t                url={\`https://khmerweb-live.netlify.app/post/\${post.id}\`}\\r\\n\\t                hashtag=\\"\\"\\r\\n                />\\r\\n                <span class=\\"fb-share-button\\" data-href={\`https://khmerweb-live.netlify.app/post/\${post.id}\`} data-layout=\\"\\" data-size=\\"\\"><a target=\\"_blank\\" href={\`https://www.facebook.com/sharer/sharer.php?u=https://khmerweb-live.netlify.app/post/\${post.id}%2F&amp;src=sdkpreparse\`} class=\\"fb-xfbml-parse-ignore\\">Share</a></span>\\r\\n            </div>\\r\\n            {#if data.user}\\r\\n            <div class='edit'>\\r\\n                <a href={\`/admin/post/edit/\${post.id}\`}><img src=\\"/images/edit.png\\" alt=''/></a>\\r\\n                <a href={\`/admin/post/delete/\${post.id}\`}><img src=\\"/images/delete.png\\" alt=''/></a>\\r\\n            </div>\\r\\n            {/if}\\r\\n        </div>\\r\\n        <div id=\\"disqus_thread\\"></div>\\r\\n        <noscript>Please enable JavaScript to view the <a href=\\"https://disqus.com/?ref_noscript\\">comments powered by Disqus.</a></noscript>\\r\\n    </div>\\r\\n    <div class=\\"sidebar\\">\\r\\n        {#each data.randomPosts as post}\\r\\n            <a  href={\`/post/\${post._id.$oid}\`}>\\r\\n                <img src={post.thumb} alt=''/>\\r\\n                {#if post.videos.length}\\r\\n                <img class=\\"play-icon\\" src=\\"/images/play.png\\" alt=''/>\\r\\n                {/if}\\r\\n                <div class=\\"title\\">{post.title}</div>\\r\\n            </a>\\r\\n        {/each}\\r\\n    </div>\\r\\n\\r\\n</section>\\r\\n</Layout>\\r\\n\\r\\n<style is:global>\\r\\n.Ad{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, auto);\\r\\n    grid-gap: 10px;\\r\\n    padding-top: 10px;\\r\\n}\\r\\n.Ad img{\\r\\n    width: 100%;\\r\\n}\\r\\n.Post{\\r\\n    margin-top: 20px;\\r\\n    display: grid;\\r\\n    grid-template-columns: 70% auto;\\r\\n    grid-gap: 15px;\\r\\n}\\r\\n.Post .main{\\r\\n    background-color: rgb(224, 220, 220);\\r\\n    color: rgb(22, 22, 22);\\r\\n    padding: 15px;\\r\\n}\\r\\n.Post .main .title{\\r\\n    font: 18px/1.5 Oswald, Koulen;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n.Post .main .categories span:nth-child(2){\\r\\n    float: right;\\r\\n}\\r\\n.Post .main .author{\\r\\n    margin-bottom: 30px;\\r\\n}\\r\\n.Post .sidebar a{\\r\\n    display: block;\\r\\n    color: white;\\r\\n    position: relative;\\r\\n    padding-top: 56.25%;\\r\\n    overflow: hidden;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n.Post .sidebar a:last-child{\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n.Post .sidebar a img{\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    min-height: 100%;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n}\\r\\n.Post .sidebar a .play-icon{\\r\\n    width: auto;\\r\\n    min-height: auto;\\r\\n    left: 50%;\\r\\n    top: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    width: 15%;\\r\\n}\\r\\n.Post .sidebar a .title{\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    padding: 5px 10px;\\r\\n    font: 16px/1.5 Oswald, Bayon;\\r\\n    text-shadow: 2px 2px 4px #000000;\\r\\n    background: -webkit-linear-gradient(bottom, black,transparent);\\r\\n    width: 100%;\\r\\n    white-space: nowrap;\\r\\n    overflow: hidden;\\r\\n    text-overflow: ellipsis;\\r\\n}\\r\\n.Post .main .post-bottom{\\r\\n    display: grid;\\r\\n    grid-template-columns: auto auto;\\r\\n}\\r\\n.Post .main .post-bottom .edit{\\r\\n    text-align: right; \\r\\n}\\r\\n.Post .main .post-bottom .edit img{\\r\\n    width: 30px;\\r\\n}\\r\\n.Post .main .social-media{\\r\\n    width: 50px;\\r\\n    display: grid;\\r\\n    grid-template-columns: auto auto;\\r\\n    grid-gap: 5px;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width:600px){\\r\\n    .Ad{\\r\\n        grid-template-columns: 100%;\\r\\n        padding: 0 10px;\\r\\n    }\\r\\n    .Post{\\r\\n        grid-template-columns: 100%;\\r\\n    }\\r\\n    .Post .sidebar{\\r\\n        padding: 0 15px;\\r\\n    }\\r\\n}\\r\\n</style>"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let post;
  let postCategories;
  let categories;
  let { data } = $$props;
  const Categories = {
    Khmer: "រឿងខ្មែរ",
    Thai: "រឿងថៃ",
    Chinese: "រឿងចិន",
    Korean: "រឿងកូរ៉េ",
    travel: "ដើរ​លេង",
    news: "ព័ត៌មាន",
    movie: "ភាពយន្ត",
    game: "ពិភព​និម្មិត",
    world: "រឿង​​បរទេស"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  post = data.post;
  postCategories = data.post.categories.split(",");
  categories = postCategories.map((category) => Categories[category.trim()]);
  return `${validate_component(Layout, "Layout").$$render($$result, { data }, {}, {
    default: () => {
      return `<section class="Ad region svelte-c9n5o6" data-svelte-h="svelte-hgm4bu"><img src="/images/ad.jpg" alt="" class="svelte-c9n5o6"> <img src="/images/ad.jpg" alt="" class="svelte-c9n5o6"></section> <section class="Post region svelte-c9n5o6"><div class="main svelte-c9n5o6"><h3 class="title svelte-c9n5o6">${escape(post.title)}</h3> <div class="categories"><span class="svelte-c9n5o6">​​​​​​​​​ជំពូកៈ ${escape(categories.filter(Boolean).join(", "))}</span> <span class="svelte-c9n5o6">${escape(new Date(post.date).toLocaleDateString("it-IT"))}</span></div> <div class="author svelte-c9n5o6"><span class="svelte-c9n5o6">អ្នក​​​​​​​​​​រៀបរៀងៈ ${escape(data.authorName)}</span></div> ${post.videos.length > 0 ? `${validate_component(Video, "Video").$$render($$result, { data }, {}, {})}` : ``} <div class="content"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div> <div class="post-bottom svelte-c9n5o6"><div class="social-media svelte-c9n5o6">${validate_component(FacebookLink, "FacebookLink").$$render(
        $$result,
        {
          url: `https://khmerweb-live.netlify.app/post/${post.id}`,
          hashtag: ""
        },
        {},
        {}
      )} <span class="fb-share-button svelte-c9n5o6"${add_attribute("data-href", `https://khmerweb-live.netlify.app/post/${post.id}`, 0)} data-layout="" data-size=""><a target="_blank"${add_attribute("href", `https://www.facebook.com/sharer/sharer.php?u=https://khmerweb-live.netlify.app/post/${post.id}%2F&amp;src=sdkpreparse`, 0)} class="fb-xfbml-parse-ignore svelte-c9n5o6">Share</a></span></div> ${data.user ? `<div class="edit svelte-c9n5o6"><a${add_attribute("href", `/admin/post/edit/${post.id}`, 0)} class="svelte-c9n5o6"><img src="/images/edit.png" alt="" class="svelte-c9n5o6"></a> <a${add_attribute("href", `/admin/post/delete/${post.id}`, 0)} class="svelte-c9n5o6"><img src="/images/delete.png" alt="" class="svelte-c9n5o6"></a></div>` : ``}</div> <div id="disqus_thread"></div> <noscript data-svelte-h="svelte-s14usp">Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" class="svelte-c9n5o6">comments powered by Disqus.</a></noscript></div> <div class="sidebar svelte-c9n5o6">${each(data.randomPosts, (post2) => {
        return `<a${add_attribute("href", `/post/${post2._id.$oid}`, 0)} class="svelte-c9n5o6"><img${add_attribute("src", post2.thumb, 0)} alt="" class="svelte-c9n5o6"> ${post2.videos.length ? `<img class="play-icon svelte-c9n5o6" src="/images/play.png" alt="">` : ``} <div class="title svelte-c9n5o6">${escape(post2.title)}</div> </a>`;
      })}</div></section>`;
    }
  })}`;
});
export {
  Page as default
};
