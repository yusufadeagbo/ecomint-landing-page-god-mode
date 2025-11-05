import { json } from "@sveltejs/kit";
const POST = async ({ request }) => {
  const body = await request.json();
  const { type } = body;
  const sandboxId = `sandbox_${type}_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  return json({
    success: true,
    sandboxId,
    message: `${type} sandbox created successfully`,
    credentials: {
      apiKey: `sk_test_${Math.random().toString(36).substring(7)}`,
      endpoint: "https://sandbox-api.ecomint.example/v1"
    },
    expiresIn: "24 hours"
  });
};
export {
  POST
};
