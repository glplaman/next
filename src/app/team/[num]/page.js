import rank from '@/data/202601.json'
export default async function Team({ params }) {
  const { num } = await params
  return (
    <>
      <p>team {num}</p>
      <ul>
        {rank?.map(item => <li key={item.usn}>{item.uname}{item.ucredit}</li>)}
      </ul>
    </>
  )
}