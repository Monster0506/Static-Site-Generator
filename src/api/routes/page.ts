import type { ApiRoutes } from "../types";
import {read } from "../../lib/load-file.ts"
export const pageRoutes = {
  "/page/:id": {
    async GET(req) {
      return Response.json({
        message: await read(req.params.id),
        method: "GET",
      });
    },
  },

} satisfies ApiRoutes<"/page/:id">;