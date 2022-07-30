import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.dbPort,
  dialect: "postgres",
  storage: ":memory:",
});

// // s3 => http://udagramfrontend.s3-website-us-east-1.amazonaws.com

// Udagramapi-env.eba-irm2shxi.us-east-1.elasticbeanstalk.com

// "build": "npm run clean && tsc && cp -rf src/config www/config && cp -R .elasticbeanstalk www/.elasticbeanstalk && cp .npmrc www/.npmrc && cp package.json www/package.json && cd www && zip -r Archive.zip . && cd ..",
