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
    </div>
  );
}
