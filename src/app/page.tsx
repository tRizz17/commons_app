import Image from "next/image";


export default function Home() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative h-screen">
      <Image
        alt="Sailing Race Homepage"
        src="/hero.jpg"
        fill
        className="object-cover"
      />
      <h1 className="absolute z-10 mt-10 left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-white text-4xl font-bold drop-shadow-xl">
        Welcome to the Commons Yacht Club
      </h1>
    </div>
  );
}
