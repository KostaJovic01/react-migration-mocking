import { createServer, Model, Registry } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { User } from "@/app/types";
import { generateFakeEnquiries } from "@/app/faker/fakeResponses";

type AppRegistry = Registry<{ user: ModelDefinition<User> }, {}>;
type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        id: "1", // Use string for ID as Mirage defaults to string IDs
        firstName: "Kosta",
        lastName: "Jovic",
        language: "English",
        email: "kosta.jovic@additive.eu",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/user", (schema: AppSchema) => {
        const user = {
          id: "1", // Use string for ID as Mirage defaults to string IDs
          firstName: "Kosta",
          lastName: "Jovic",
          language: "English",
          email: "kosta.jovic@additive.eu",
        };
        return {
          user,
        };
      });
      this.get("/inquiries", (schema: AppSchema) => {
        const enquiries = generateFakeEnquiries(100);
        console.log("Generated fake enquiries:", enquiries);

        return {
          enquiries,
        };
      });
    },
  });

  return server;
}
