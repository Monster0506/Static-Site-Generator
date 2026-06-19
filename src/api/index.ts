import { createApiRoutes } from "./registry";
import { pageRoutes } from "./routes/page";

// Add new route modules here to register them with the server.
export const apiRoutes = createApiRoutes([pageRoutes]);
