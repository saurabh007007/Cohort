import { Client } from "pg";
const pgClient = new Client(
  "postgresql://neondb_owner:4KJlNvbcekU9@ep-sweet-moon-a5myuca8.us-east-2.aws.neon.tech/neondb?sslmode=requir"
);
const pgClient2 = new Client({
  user: "neondb_owner",
  password: "4KJlNvbcekU9",
  port: 5432,
  host: "ep-sweet-moon-a5myuca8.us-east-2.aws.neon.tech",
  database: "neondb",
  ssl: true,
});

async function main() {
  await pgClient.connect();
  const resposne = await pgClient.query("SELECT * FROM users;");
  console.log(resposne.rows);
}
main();
