import { defineConfig } from 'slidev'

// PUBLIC_INTERFACE
export default defineConfig({
  /**
   * Slidev configuration to ensure the dev server works inside a container environment.
   * - server.port: 3000 to match container healthcheck and requirement
   * - server.host: 0.0.0.0 so it's reachable from outside the container
   * - remote: true to enable remote control and public host bindings
   */
  // Note: Slidev will pass these to Vite under the hood
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  remote: true,
})
