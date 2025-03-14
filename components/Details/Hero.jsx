import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
      <Image
        height={900}
        width={900}
        src="/google-io-2023-1.png"
        alt="Event 1"
        className="h-[450px] mx-auto"
      />
    </div>
  );
}
