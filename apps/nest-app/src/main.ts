// noinspection JSIgnoredPromiseFromCall

import { AppModule } from "./app.module";
import configuration from "./core/config/configuration";
import { hichchiBootstrap } from "@test-group/nest-core";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
hichchiBootstrap(AppModule, { allowedOrigins: configuration().app.allowedOrigins });
