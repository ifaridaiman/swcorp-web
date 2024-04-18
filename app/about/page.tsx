import StatePartial from "@/components/partials/StatePartial";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" mt-12">
      <div className="container mx-auto my-16">
        <div className="flex justify-center items-center">
          <Image
            className="rounded shadow-xl"
            src={"/about-call.webp"}
            alt="SWCorp Aduan Sisa"
            width={550}
            height={550}
          />
        </div>
        <div className="mx-auto w-2/3 mt-16">
          <h1 className="font-black text-black text-4xl text-center">
            Perkhidmatan Aduan & Pertanyaan
          </h1>
          <p className="text-black font-normal text-center text-lg mt-8">
            Portal Talian Indahkan Malaysia menyediakan perkhidmatan aduan dan
            pertanyaan dalam talian yang komprehensif. Jika terdapat sebarang
            masalah berkaitan perkhidmatan kutipan dan pembersihan awam, sila
            pilih lokasi negeri dari pilihan menu di bawah ini. Aduan atau
            pertanyaan anda akan diajukan kepada pasukan khidmat pelanggan kami
            untuk bertindak. Pelanggan hendaklah melengkapkan borang aduan dan
            wakil konsesi akan menjawab aduan anda. Pelanggan juga boleh
            menghubungi kami sekiranya mempunyai sebarang pertanyaan melalui
            telefon, surat atau e-mel.
          </p>
          <p className="text-center my-4">----</p>
          <p className="text-black font-normal text-center text-lg mt-8">
            Talian Indahkan Malaysia Portal provides a comprehensive online
            complaints service. If there are any problems with the collection
            and public cleansing services, please select the location of the
            state from the menu below. Complaints or queries, will be forwarded
            to our customer service team for action. Customers should complete
            the complaint form and our concessions representative will answer
            your complaint. Please also feel free to contact us by phone, mail
            or email.
          </p>
        </div>
      </div>
      
    </main>
  );
}
