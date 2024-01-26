export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/AllertaStencil-Regular.ttf","fonts/Orbitron-VariableFont_wght.ttf","logoPelis.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.enKIPWdD.js","app":"_app/immutable/entry/app.tsCeJSuM.js","imports":["_app/immutable/entry/start.enKIPWdD.js","_app/immutable/chunks/entry.1ejaa5jq.js","_app/immutable/chunks/scheduler.clUROcG5.js","_app/immutable/entry/app.tsCeJSuM.js","_app/immutable/chunks/scheduler.clUROcG5.js","_app/immutable/chunks/index.Xu7U07Ss.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
