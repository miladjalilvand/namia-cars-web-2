export default async function Page({ params }) {
    const slug =await  params;
    return <div className="pt-60">My Post: {slug.slug}</div>
  }