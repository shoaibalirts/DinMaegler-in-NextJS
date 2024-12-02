import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getAllHomes } from "@/lib/apidinmaegler";
import Boligertilsalg from "@/components/boligertilsalg/boligertilsalg";
export default async function PagePropertyListWithTwoFilters() {
  const allHomesData = await getAllHomes();
  return (
    <>
      <Header></Header>
      <main>
        <Boligertilsalg allHomesData={allHomesData}></Boligertilsalg>
      </main>
      <Footer></Footer>
    </>
  );
}
