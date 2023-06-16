import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <h1>Nie znaleziono strony – 404!</h1>
      <div>
        <Link href='/'>Wróć do strony głównej</Link>
      </div>
    </div>
  )
}
