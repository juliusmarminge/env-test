import { env } from "../../env.mjs";

export const config = {
  runtime: "edge",
};

const handler = (req: Request) => {
  return new Response(JSON.stringify({ env, url: req.url }), { status: 200 });
};

export default handler;
