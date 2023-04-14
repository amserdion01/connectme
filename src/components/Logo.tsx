import Image from 'next/image';

function Logo() {
  return (
    <div className="col-span-1 flex justify-center items-center h-full">
      <Image
        src="/logo-black.png"
        alt="ConnectMe Logo"
        width={2000}
        height={1080}
        className="object-cover object-left"
      />
      <div className="absolute inset-y-0 left-1/2 w-3 bg-black"></div>
    </div>
  );
}

export default Logo;
