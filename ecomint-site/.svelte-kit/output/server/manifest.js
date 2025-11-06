export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.jpg","favicon.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.C7NO_8Ll.js",app:"_app/immutable/entry/app.yfoh-P43.js",imports:["_app/immutable/entry/start.C7NO_8Ll.js","_app/immutable/chunks/D_4I5Xv1.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/entry/app.yfoh-P43.js","_app/immutable/chunks/Du92p8SS.js","_app/immutable/chunks/xCRI5bb8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/sandbox",
				pattern: /^\/api\/sandbox\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./entries/endpoints/api/sandbox/_server.ts.js'))
			}
		],
		prerendered_routes: new Set(["/","/agents","/learning","/operators","/users"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
