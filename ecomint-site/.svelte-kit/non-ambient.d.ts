
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
	export interface AppTypes {
		RouteId(): "/" | "/agents" | "/api" | "/api/sandbox" | "/learning" | "/operators" | "/users";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/agents": Record<string, never>;
			"/api": Record<string, never>;
			"/api/sandbox": Record<string, never>;
			"/learning": Record<string, never>;
			"/operators": Record<string, never>;
			"/users": Record<string, never>
		};
		Pathname(): "/" | "/agents" | "/agents/" | "/api" | "/api/" | "/api/sandbox" | "/api/sandbox/" | "/learning" | "/learning/" | "/operators" | "/operators/" | "/users" | "/users/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.jpg" | "/favicon.svg" | string & {};
	}
}