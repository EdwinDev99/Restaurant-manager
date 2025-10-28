import Table from "../../components/Table";
import DeliLogo from "../../assets/DeliLogo.png";

type Props = {};

function Home({}: Props) {
  return (
    <div className="bg-orange-200 min-h-screen flex flex-wrap flex-col items-center p-5">
      <header className="p-2">
        <h1 className="text-green-900 text-7xl font-bold font-serif pb-20 flex items-center gap-1">
          <img className="size-22" src={DeliLogo} alt="Delisopas Logo" />
          Delisopas
        </h1>
      </header>
      <main className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-32   ">
        <Table nameTable="Mesa 1" />
        <Table nameTable="Mesa 2" />
        <Table nameTable="Mesa 3" />
        <Table nameTable="Mesa 4" />
        <Table nameTable="Mesa 5" />
        <Table nameTable="Mesa 6" />
        <Table nameTable="Mesa 7" />
        <Table nameTable="Mesa 8" />
        <Table nameTable="Mesa 9" />
        <Table nameTable="Mesa 10" />
        <Table nameTable="Mesa 11" />
        <Table nameTable="Mesa 12" />
        <Table nameTable="Mesa 13" />
        <Table nameTable="Mesa 14" />
        <Table nameTable="Mesa 15" />
        <Table nameTable="Mesa 16" />
      </main>
    </div>
  );
}

export default Home;
