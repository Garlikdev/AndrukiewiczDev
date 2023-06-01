import { authOptions } from "@app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function Admin() {
  const session = await getServerSession(authOptions)
  if (session?.user.role !== "ADMIN") {
    throw new Error("Nie masz uprawnień")
  }
  return <div>Admin panel</div>
}
