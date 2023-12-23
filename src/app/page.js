import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Featured />
      <CategoryList />
      <div className="w-full flex gap-4 justify-between maxsm:flex-col">
        <CardList />
        <Menu />
      </div>
    </>
  );
}
