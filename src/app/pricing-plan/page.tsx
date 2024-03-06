function PricingPlan() {
  return (
    <div className="w-full h-fit flex flex-col gap-y-16 md:px-36 lg:px-0 lg:flex-row lg:gap-x-4 lg:gap-y-0 items-center justify-center px-6 py-36">
      <div className="w-full max-w-[24rem] h-fit sm:h-[30rem] border-4 border-zinc-400 dark:border-zinc-200 shrink-0 flex flex-col justify-center px-12 py-7">
        <h1 className="text-6xl font-bold">Basic</h1>
        <p className="dark:text-zinc-200 lg:text-sm">
          Lortrtre consectetur adipisicing elit. Quia, quidem
        </p>
        <h2 className="w-fit p-2 mt-2 mb-1 text-3xl font-bold bg-orange-400 dark:bg-zinc-100 dark:text-zinc-800">
          7/month
        </h2>
        <h3 className=""></h3>
        <p className="dark:text-zinc-200">
          Loreonsectetur adipisicing elit. Voluptate est consectetur,
          reprehenderit in id tenetur iusto commodi quasi non nemo obcaecati.
          Ducimus facere molestias alias unde voluptates numq
        </p>
        <button className="w-full h-[4rem] bg-transparent border-4 border-zinc-500 dark:border-0 dark:bg-orange-500 dark:text-zinc-900 text-lg mt-4 font-bold shrink-0">
          Buy now!
        </button>
      </div>
      <div className="w-full max-w-[24rem] h-fit sm:h-[36rem] px-4 py-4 sm:px-12 border-4 border-zinc-400 dark:border-zinc-200 shrink-0 flex flex-col justify-center">
        <h1 className="text-6xl font-bold">Medium</h1>
        <p className="dark:text-zinc-200 lg:text-sm">
          Lortrtre consectetur adipisicing elit. Quia, quidem.
        </p>
        <h2 className="w-fit p-2 mt-2 mb-1 text-3xl font-bold bg-orange-400 dark:bg-zinc-100 dark:text-zinc-800">
          14/month, TRY FREE for 7 DAYS!
        </h2>
        <h3 className=""></h3>
        <p className="dark:text-zinc-200">
          Loreonsectetur adipisicing elit. Voluptate est consectetur,
          reprehenderit in id tenetur iusto commodi quasi non nemo obcaecati.
          Ducimus facere molestias alias unde voluptates numq
        </p>
        <button className="w-full h-[4rem] bg-transparent border-4 border-zinc-500 dark:border-0 dark:bg-orange-500 dark:text-zinc-900 text-lg mt-4 font-bold shrink-0">
          Buy now!
        </button>
      </div>
      <div className="w-full max-w-[24rem] h-fit sm:h-[30rem] border-4 border-zinc-400 dark:border-zinc-200 shrink-0 flex flex-col px-12 py-8">
        <h1 className="text-6xl font-bold">Plus!</h1>
        <p className="dark:text-zinc-200 lg:text-sm">
          Lortrtre consectetur adipisicing elit. Quia, quidem.
        </p>
        <h2 className="w-fit p-2 mt-2 mb-1 text-3xl font-bold bg-orange-400 dark:bg-zinc-100 dark:text-zinc-800">
          20/month
        </h2>
        <h3 className=""></h3>
        <p className="dark:text-zinc-200">
          Loreonsectetur adipisicing elit. Voluptate est consectetur,
          reprehenderit in id tenetur iusto commodi quasi non nemo obcaecati.
          Ducimus facere molestias alias unde voluptates numq
        </p>
        <button className="w-full h-[4rem] bg-transparent border-4 border-zinc-500 dark:border-0 dark:bg-orange-500 dark:text-zinc-900 text-lg mt-4 font-bold shrink-0">
          Buy now!
        </button>
      </div>
    </div>
  );
}

export default PricingPlan;
