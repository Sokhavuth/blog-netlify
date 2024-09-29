import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Anton.ttf","fonts/Bayon.ttf","fonts/BlackOpsOne.ttf","fonts/Courgette.ttf","fonts/HandWriting.ttf","fonts/Koulen.ttf","fonts/Limonf3.ttf","fonts/Lobster.ttf","fonts/Moul.ttf","fonts/Nokora.ttf","fonts/OdorMeanChey.ttf","fonts/Oswald.ttf","fonts/PirataOne.ttf","fonts/Rooster.ttf","fonts/setup.css","fonts/StardosStencil.ttf","fonts/Vidaloka.ttf","images/ad.jpg","images/arrow.png","images/background.jpg","images/blue_home.png","images/blue_left.png","images/blue_right.png","images/book.png","images/books.png","images/category.png","images/contact.png","images/delete.png","images/edit.png","images/green_home.png","images/green_left.png","images/green_right.png","images/home.png","images/horizontal-ad.png","images/house.png","images/job-search.png","images/left.png","images/livetv.png","images/load-more.png","images/loading.gif","images/logo.gif","images/movie.png","images/multimedia.png","images/news.jpg","images/newspaper.png","images/no-image.png","images/nomovie.jpg","images/page.png","images/play.png","images/playlist.jpg","images/posting.png","images/react.png","images/right.png","images/search.png","images/series.png","images/setting.png","images/siteLogo.png","images/upload.png","images/users.png","images/userthumb.png","scripts/ckeditor/ckeditor.js","scripts/ckeditor/ckeditor.js.map","scripts/ckeditor/config-page.js","scripts/ckeditor/config-user.js","scripts/ckeditor/config.js","scripts/ckeditor/translations/af.js","scripts/ckeditor/translations/ar.js","scripts/ckeditor/translations/ast.js","scripts/ckeditor/translations/az.js","scripts/ckeditor/translations/bg.js","scripts/ckeditor/translations/ca.js","scripts/ckeditor/translations/cs.js","scripts/ckeditor/translations/da.js","scripts/ckeditor/translations/de-ch.js","scripts/ckeditor/translations/de.js","scripts/ckeditor/translations/el.js","scripts/ckeditor/translations/en-au.js","scripts/ckeditor/translations/en-gb.js","scripts/ckeditor/translations/en.js","scripts/ckeditor/translations/eo.js","scripts/ckeditor/translations/es.js","scripts/ckeditor/translations/et.js","scripts/ckeditor/translations/eu.js","scripts/ckeditor/translations/fa.js","scripts/ckeditor/translations/fi.js","scripts/ckeditor/translations/fr.js","scripts/ckeditor/translations/gl.js","scripts/ckeditor/translations/gu.js","scripts/ckeditor/translations/he.js","scripts/ckeditor/translations/hr.js","scripts/ckeditor/translations/hu.js","scripts/ckeditor/translations/id.js","scripts/ckeditor/translations/it.js","scripts/ckeditor/translations/ja.js","scripts/ckeditor/translations/kn.js","scripts/ckeditor/translations/ko.js","scripts/ckeditor/translations/ku.js","scripts/ckeditor/translations/lt.js","scripts/ckeditor/translations/lv.js","scripts/ckeditor/translations/ms.js","scripts/ckeditor/translations/nb.js","scripts/ckeditor/translations/ne.js","scripts/ckeditor/translations/nl.js","scripts/ckeditor/translations/no.js","scripts/ckeditor/translations/oc.js","scripts/ckeditor/translations/pl.js","scripts/ckeditor/translations/pt-br.js","scripts/ckeditor/translations/pt.js","scripts/ckeditor/translations/ro.js","scripts/ckeditor/translations/ru.js","scripts/ckeditor/translations/si.js","scripts/ckeditor/translations/sk.js","scripts/ckeditor/translations/sl.js","scripts/ckeditor/translations/sq.js","scripts/ckeditor/translations/sr-latn.js","scripts/ckeditor/translations/sr.js","scripts/ckeditor/translations/sv.js","scripts/ckeditor/translations/th.js","scripts/ckeditor/translations/tk.js","scripts/ckeditor/translations/tr.js","scripts/ckeditor/translations/tt.js","scripts/ckeditor/translations/ug.js","scripts/ckeditor/translations/uk.js","scripts/ckeditor/translations/vi.js","scripts/ckeditor/translations/zh-cn.js","scripts/ckeditor/translations/zh.js","scripts/setplayer.js","siteLogo.png","styles/base.css"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".css":"text/css",".jpg":"image/jpeg",".gif":"image/gif",".js":"text/javascript",".map":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.BIGF2deR.js","app":"_app/immutable/entry/app.BywsT-3f.js","imports":["_app/immutable/entry/start.BIGF2deR.js","_app/immutable/chunks/entry.C1d4-V24.js","_app/immutable/chunks/scheduler.DH_Nrw1O.js","_app/immutable/entry/app.BywsT-3f.js","_app/immutable/chunks/scheduler.DH_Nrw1O.js","_app/immutable/chunks/index.B3JSNyDR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js')),
			__memo(() => import('../server/nodes/14.js')),
			__memo(() => import('../server/nodes/15.js')),
			__memo(() => import('../server/nodes/16.js')),
			__memo(() => import('../server/nodes/17.js')),
			__memo(() => import('../server/nodes/18.js')),
			__memo(() => import('../server/nodes/19.js')),
			__memo(() => import('../server/nodes/20.js')),
			__memo(() => import('../server/nodes/21.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/category",
				pattern: /^\/admin\/category\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/category/delete/[id]",
				pattern: /^\/admin\/category\/delete\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/category/delete/_id_/_server.js'))
			},
			{
				id: "/admin/category/edit/[id]",
				pattern: /^\/admin\/category\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/category/paginate/[page]",
				pattern: /^\/admin\/category\/paginate\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/category/paginate/_page_/_server.js'))
			},
			{
				id: "/admin/logout",
				pattern: /^\/admin\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/logout/_server.js'))
			},
			{
				id: "/admin/page",
				pattern: /^\/admin\/page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/page/delete/[id]",
				pattern: /^\/admin\/page\/delete\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/page/delete/_id_/_server.js'))
			},
			{
				id: "/admin/page/edit/[id]",
				pattern: /^\/admin\/page\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/page/paginate/[page]",
				pattern: /^\/admin\/page\/paginate\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/page/paginate/_page_/_server.js'))
			},
			{
				id: "/admin/post",
				pattern: /^\/admin\/post\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/post/delete/[id]",
				pattern: /^\/admin\/post\/delete\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/post/delete/_id_/_server.js'))
			},
			{
				id: "/admin/post/edit/[id]",
				pattern: /^\/admin\/post\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/admin/post/paginate/[page]",
				pattern: /^\/admin\/post\/paginate\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/post/paginate/_page_/_server.js'))
			},
			{
				id: "/admin/search",
				pattern: /^\/admin\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/admin/setting",
				pattern: /^\/admin\/setting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/admin/setting/delete/[id]",
				pattern: /^\/admin\/setting\/delete\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/setting/delete/_id_/_server.js'))
			},
			{
				id: "/admin/setting/edit/[id]",
				pattern: /^\/admin\/setting\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/admin/setting/paginate/[page]",
				pattern: /^\/admin\/setting\/paginate\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/setting/paginate/_page_/_server.js'))
			},
			{
				id: "/admin/upload",
				pattern: /^\/admin\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/admin/user",
				pattern: /^\/admin\/user\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/admin/user/delete/[id]",
				pattern: /^\/admin\/user\/delete\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/user/delete/_id_/_server.js'))
			},
			{
				id: "/admin/user/edit/[id]",
				pattern: /^\/admin\/user\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/admin/user/paginate/[page]",
				pattern: /^\/admin\/user\/paginate\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/admin/user/paginate/_page_/_server.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/page/[id]",
				pattern: /^\/page\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/post/[id]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/[page]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/[category]/[page]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
