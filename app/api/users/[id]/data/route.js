import prisma from "@app/(site)/prismadb"

// Exclude keys from user
function exclude(user, keys) {
  for (let key of keys) {
    delete user[key]
  }
  return user
}

export const GET = async (request, { params }) => {
  try {
    const userWithoutPass = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    })
    const user = exclude(userWithoutPass, ["hashedPassword"])

    return new Response(JSON.stringify(user), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch user data", { status: 500 })
  }
}
