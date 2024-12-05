import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
export default function LoginPage() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="relative h-[100px] md:h-[120px] flex justify-center items-center">
          <Image
            width={800}
            height={533}
            decoding="async"
            data-nimg={1}
            className="w-full h-full object-cover absolute inset-0 z-0"
            src="/images/nyhedsbrevBuildingBackground.jpg"
            alt="main background heading"
            style={"color: transparent"}
          />
          <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
          <h2 className="relative text-white font-semibold text-3xl sm:text-5xl z-10">
            Log ind
          </h2>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
