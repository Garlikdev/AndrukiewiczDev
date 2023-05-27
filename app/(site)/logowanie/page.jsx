"use client"

import { useRouter } from "next/navigation"
import {
  getSession,
  useSession,
  getProviders,
  signIn,
  signOut,
} from "next-auth/react"
import { useEffect, useState } from "react"

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [providers, setProviders] = useState(null)
  const router = useRouter()

  // check all providers available and make them usable
  useEffect(() => {
    ;(async () => {
      const res = await getProviders()
      setProviders(res)
    })()
  }, [])

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/")
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type='button'
            key={provider.name}
            onClick={() => {
              signIn(provider.id)
            }}
            className='black_btn'
          >
            Zaloguj się z {provider.name}
          </button>
        ))}
    </div>
  )
}

export default AuthPage
