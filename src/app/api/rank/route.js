// localhost/api/rank
export async function GET(request) {
  const res = await fetch('https://glplaman.github.io/utils/data/rank/202602.json')
  const data = await res.json()
  return Response.json(data.cont);
}