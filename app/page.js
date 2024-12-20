import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh] bg-purple-100">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className={`text-5xl font-bold`}>
            The best URL Shortner in the Market
          </p>
          <p className="text-2xl px-5 text-center">
            We are the most straightforward URL Shortner in the world.Most of the url shortner will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortner.
          </p>
          <div className='flex gap-3'>
            <Link href={"/generate"}><button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200 text-white"> Try Now </button></Link>
            <Link href={"https://github.com/Vivek16-ops?tab=repositories"}><button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200 text-white"> GitHub </button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image src={"/vector.jpg"} fill={true} alt="Banner Image" className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
