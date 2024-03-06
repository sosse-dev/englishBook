import Image from "next/image";

function ContactUs() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-fit h-fit px-5 py-3 border-4 dark:border-zinc-200">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="flex space-x-3 mt-3">
          <a
            target="_blank"
            href="https://www.instagram.com/sosse.dev"
            className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 p-2 hover:p-1"
          >
            <Image
              src="/instagram.png"
              title="Instagram by icons8"
              width={30}
              height={30}
              className="w-full h-full object-cover"
              alt="instagram icon"
            />
          </a>
          <a
            target="_blank"
            href="https://wa.me/62882019600180"
            className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 p-2 hover:p-1"
          >
            <Image
              src="/whatsapp.png"
              title="Whatsapp by icons8"
              width={30}
              height={30}
              className="w-full h-full object-cover"
              alt="whatsapp icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/people/Ahmad-Sosse/pfbid02QqMvBwCbprkHDxNH6juf239Xusc4ominF6jaM4E1nQFTVVeL6P4i8jonV39PJPNnl/?locale=id_ID"
            className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 p-2 hover:p-1"
          >
            <Image
              src="/facebook.png"
              title="Facebook by icons8"
              width={30}
              height={30}
              className="w-full h-full object-cover"
              alt="facebook icon"
            />
          </a>
        </div>
        <p className="dark:text-zinc-200 mt-1">Email: sosse3135@gmail.com</p>
        <p className="text-center dark:text-zinc-300 text-sm lg:text-xs">
          All Icons by icons 8
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
