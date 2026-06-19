import type { ApiRoutes } from "./types";

export function createApiRoutes<R extends string>(modules: ApiRoutes<R>[]): ApiRoutes<R> {
  const routes = {} as Record<string, unknown>;

  for (const module of modules) {
    for (const [path, handler] of Object.entries(module)) {
      if (path in routes) {
        throw new Error(`Duplicate API route registered: ${path}`);
      }
      routes[path] = handler;
    }
  }

  return routes as ApiRoutes<R>;
}
