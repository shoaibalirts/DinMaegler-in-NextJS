import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Favorites from "@/components/favorites/favorites";
export default function FavoritesPage() {
  return (
    <>
      <Header></Header>
      <main>
        <Favorites />
      </main>
      <Footer></Footer>
    </>
  );
}
