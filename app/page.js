import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[50vh] bg-purple-100">
        <div className="flex flex-col justify-center items-center gap-3 p-5">
          <p className="text-3xl md:text-5xl font-bold text-center"> The best URL Shortener in the Market </p>
          <p className="text-xl md:text-2xl px-3 md:px-5 text-center"> We are the most straightforward URL Shortener in the world. Most URL shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortener. </p>
          <div className='flex gap-3'>
            <Link href="/shorten"> <button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200 text-white"> Try Now </button> </Link>
            <Link href="https://github.com/Vivek16-ops?tab=repositories"> <button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200 text-white"> GitHub </button> </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start relative p-5"> <Image src="/vector.jpg" fill={true} alt="Banner Image" className="object-cover rounded-lg shadow-lg mix-blend-darken" /> </div>
      </section>
    </main>
  );
}
