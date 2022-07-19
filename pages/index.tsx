import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <div className="block w-full p-6 shadow-md bg-slate-50 rounded-xl shadow-slate-300">
        <form action="">
          <h2 className="text-[#ff7b27]  text-3xl text-center font-semi bold my-4">
            Digitalisierter Aufbauzettel
          </h2>

          <label className="text-xl">Unternehmen: </label>
          <input
            type="text"
            name=""
            id="email"
            className="w-full h-8 pt-2 mb-5 text-xl bg-transparent border rounded-md shadow-sm border-slate-300 "
          />
          <label className="text-xl">Ort: </label>
          <button className="w-full h-8 pt-2  mb-5 text-xl bg-transparent border rounded-md shadow-sm border-slate-300 " />
          <label className="text-xl">Datum: </label>
          <input
            type="date"
            name=""
            id="email"
            className="w-full h-8 pt-2 mb-5 text-xl bg-transparent border rounded-md shadow-sm border-slate-300 "
          />
          <label className="text-xl">Kennzeichnen:</label>
          <input
            type="file"
            name=""
            id="email"
            className="w-full h-8  mb-5 text-xl bg-transparent border rounded-md shadow-sm border-slate-300 "
          />
          <label className="text-xl">Dachwerbeschild:</label>
          <input
            type="number"
            name=""
            id="email"
            className="w-full h-8 pt-2 mb-5 text-xl bg-transparent border rounded-md shadow-sm border-slate-300 "
          />
          <input
            type="submit"
            name=""
            id="signUp"
            className="bg-[#ff7b27] w-full h-10  mt-4 cursor-pointer text-white hover:scale-100 rounded-md nav-item text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
