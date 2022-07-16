import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center w-full h-screen place-items-start">
      <h1 className="text-3xl text-center ">Schaden Meldung Formular</h1>
      <div className="grid grid-cols-1 mt-10">
        <span className="text-2xl"> Unternehmen :</span>
        <input
          className="m-2 border-2"
          type="text"
          placeholder="geben sie der Unternehmensname ein"
        />
        <span className="text-2xl"> Datum :</span>
        <input
          className="m-2 border-2"
          type="text"
          placeholder="geben sie das Datum ein"
        />
        <span className="text-2xl"> Dachwerbeschild :</span>
        <input
          className="m-2 border-2"
          type="text"
          placeholder="geben sie die Seriennummer ein"
        />
      </div>
    </div>
  );
};

export default Home;
