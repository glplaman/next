export default async function About() {
  const res = await fetch('http://localhost:3000/api/rank')
  const rank = await res.json()
  return (
    <>
      <p>About page</p>
      <ul>
        {rank?.map(item => <li key={item.usn}>{item.uname}{item.ucredit}</li>)}
      </ul>
    </>
  )
}