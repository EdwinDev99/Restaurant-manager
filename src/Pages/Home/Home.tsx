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
        <Table>Mesa 1</Table>
        <Table>Mesa 2</Table>
        <Table>Mesa 3</Table>
        <Table>Mesa 4</Table>
        <Table>Mesa 5</Table>
        <Table>Mesa 6</Table>
        <Table>Mesa 7</Table>
        <Table>Mesa 8</Table>
        <Table>Mesa 8</Table>
        <Table>Mesa 10</Table>
        <Table>Mesa 11</Table>
        <Table>Mesa 12</Table>
        <Table>Mesa 13</Table>
        <Table>Mesa 14</Table>
        <Table>Mesa 15</Table>
        <Table>Mesa 16</Table>
      </main>
    </div>
  );
}

export default Home;
