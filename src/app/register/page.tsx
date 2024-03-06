import Link from "next/link";

function Register() {
  return (
    <div className="w-full min-h-screen h-fit grid place-items-center bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 pt-24 pb-12">
      <form className="w-[20rem] h-[30rem] 2xl:h-[50rem] 2xl:w-[35rem] flex flex-col justify-center items-center bg-zinc-600 dark:bg-zinc-700">
        <h1 className="text-5xl 2xl:text-8xl font-thin text-zinc-200">
          Sign Up
        </h1>
        <p className="dark:text-zinc-400 mb-6 mt-1 2xl:mt-5 text-zinc-300">
          Hei, come on join us!!..
        </p>

        <label className=" mb-1 font-thin text-zinc-200">Email</label>
        <input
          type="text"
          className="w-[80%] h-[4rem] pl-4 bg-zinc-800 text-white"
        />
        <label className="mt-4 mb-1 font-thin text-zinc-200">Password</label>
        <input
          type="text"
          className="w-[80%] h-[4rem] pl-4 bg-zinc-800 text-white"
        />
        <button
          type="submit"
          className="relative w-[80%] h-[3rem] dark:bg-zinc-500 dark:hover:bg-zinc-600 mt-8 bg-orange-400 bg-opacity-70 hover:bg-opacity-100 cursor-not-allowed group"
        >
          Sign Up
          <p className="absolute -bottom-10 right-0 left-0 z-30 bg-slate-800 text-white py-2 group-hover:block hidden">
            Currently is not avaliable
          </p>
        </button>
        <div className="flex mt-3">
          <p className=" text-sm text-slate-200">have an account already?</p>
          <Link
            href="/login"
            className="relative text-blue-300 hover:underline text-sm pl-2"
          >
            Login Page
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
