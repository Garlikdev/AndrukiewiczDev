export const GET = async (request, { params }) => {
  try {
    const payment = "Test payment route"

    return new Response(JSON.stringify(payment), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch user data", { status: 500 })
  }
}
