
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/components";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/components": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/favicon_152.png" | "/favicon_16.png" | "/favicon_167.png" | "/favicon_180.png" | "/favicon_192.png" | "/favicon_32.png" | "/favicon_48.png" | "/favicon_512.png" | "/favicon_96.png" | "/fonts/AllertaStencil-Regular.ttf" | "/fonts/Orbitron-VariableFont_wght.ttf" | "/logoPelis.png" | "/logo_TMBD.png" | "/manifest.json" | string & {};
	}
}