import Image from "next/image";
export default function OpdateringSection() {
  return (
    <section className="bg-primary text-white flex flex-col gap-6 md:flex-row px-6 md:px-[15vw] relative min-h-64">
      <div className="flex flex-col gap-4 text-white z-10 py-10">
        <h2 className="font-semibold text-2xl">
          Hold dig opdateret på salgsprocessen
        </h2>
        <p>
          Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
          ansvarlige mægler eller butik med vores app. Her kan du også se
          statistik på interessen for din bolig i alle vores salgskanaler.
        </p>
        <div className="flex gap-3 text-xs font-semibold">
          <button className="flex gap-1 items-center bg-white text-primary py-2 px-4 ">
            <Image
              src={"/images/play-store.svg"}
              alt="play-store"
              width={15}
              height={15}
            />
            Google Play
          </button>
          <button className="flex gap-2 items-center bg-primary border border-white text-white py-2 px-4">
            <Image
              src={"/images/apple-store.svg"}
              alt="app-store"
              width={15}
              height={15}
            />
            Apple Store
          </button>
        </div>
      </div>
      <Image
        src={"/images/phones-3.png"}
        alt="phone"
        width={441}
        height={394}
        className="w-80 h-auto hidden md:block z-10 pt-10"
      />
      <div className='bg-[url("/images/phones-3.png")] bg-cover bg-center w-60 h-60 filter brightness-[25%] absolute bottom-0 right-4 md:hidden z-0'></div>
    </section>
  );
}
