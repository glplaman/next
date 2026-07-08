import rank from '@/data/202601.json'
import Hero from '../../../components/Hero'
import { notFound } from 'next/navigation';
export const metadata = {
  title: "Test",
};
export default async function Team({ params }) {
  const { num } = await params
  // notFound()
  return (
    <>
      <Hero image='/w1.jpg' text='team image' />
      <ul>
        {rank?.map(item => <li key={item.usn}>{item.uname}{item.ucredit}</li>)}
      </ul>
    </>
  )
}