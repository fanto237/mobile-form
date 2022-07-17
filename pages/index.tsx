import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="block bg-slate-50 p-6 rounded-xl shadow-md  shadow-slate-300 w-[90]">
        <form action="">
          <h2 className="text-[#ff6a39] text-justify text-3xl font-semibold my-4">
            Schaden Formular
          </h2>

          <label className="text-sm">Unternehmen</label>
          <input
            type="emial"
            name=""
            id="email"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />
          <label className="text-sm">Email</label>
          <input
            type="emial"
            name=""
            id="email"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
          />
          <input
            type="submit"
            name=""
            id="signUp"
            className="bg-[#ff7b27] w-full h-10 cursor-pointer text-white rounded-md nav-item text-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
