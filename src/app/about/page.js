import Hero from '../../components/Hero'
export const metadata = {
  title: "Test",
};
export default async function About() {
  const res = await fetch('https://glplaman.github.io/utils/data/rank/202602.json')
  const data = await res.json()
  const rank = data.cont
  return (
    <>
      <Hero image='/w3.jpg' text='about image' />
      <ul>
        {rank?.map(item => <li key={item.usn}>{item.uname}{item.ucredit}</li>)}
      </ul>
    </>
  )
}