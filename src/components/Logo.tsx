import Image from "next/image";

function Logo() {
  return (
    <div className=" sm:flex h-full items-center justify-center sm:min-h-screen sm:flex-col">
      <Image
        src="/logo-black.png"
        alt="ConnectMe Logo"
        width={2000}
        height={1080}
        className="object-cover object-left"
      />
      <div className="absolute inset-y-0 left-1/2 hidden w-3 bg-black sm:block"></div>
    </div>
  );
}

export default Logo;
