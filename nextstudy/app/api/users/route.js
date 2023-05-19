export async function GET(request) {
  return new Response(JSON.stringify({ name: "김경범" }));
}
