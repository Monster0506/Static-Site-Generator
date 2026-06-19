import type { ApiRoutes } from "../types";
export const pageRoutes = {
  "/page/:id": {
    async GET(req) {
      return Response.json({
        message: "Hello, World",
        method: "GET",
      });
    },
  },

} satisfies ApiRoutes<"/page/:id">;