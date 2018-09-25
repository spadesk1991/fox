import "reflect-metadata"; // this shim is required

import { getApp } from "koa2-router-decorator";

const app = getApp(`${__dirname}/controller`);

app.listen(3000);