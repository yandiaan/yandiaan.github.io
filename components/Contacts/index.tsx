import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="bg-[url('/img/macos.jpg')] bg-cover w-screen h-screen flex justify-center items-center "
    >
      <div className="h-3/4 w-3/4 mac-glass-full flex">
        <div className="mac-glass w-1/4 relative flex flex-col items-center gap-5 py-12 px-10">
          <div className="flex flex-col gap-4"></div>
          <div className="absolute top-5 left-5 flex gap-2">
            <div className="dot bg-[#E9524A] h-[20px] w-[20px] rounded-full "></div>
            <div className="dot bg-[#F1AE1B] h-[20px] w-[20px] rounded-full "></div>
            <div className="dot bg-[#59C837] h-[20px] w-[20px] rounded-full "></div>
          </div>
          <div className="flex justify-center gap-4  items-center">
            <Image
              src={"/img/lastprofile2.png"}
              width={100}
              height={100}
              className="basis-1/4"
              alt=""
            />
            <div className="basis-3/4">
              <h1 className="font-bold text-xl">Dian Setiawan</h1>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-2xl tracking-wide">
              Contact Information
            </h1>
            <p className="font-thin">
              Jika anda tertarik bekerja sama dengan saya, jangan sungkan untuk
              kunjungi dan hubungi social media saya!
            </p>
            <div className="flex flex-col justify-center gap-8 mt-8">
              <Link href={"https://instagram.com/yandian.s"}>
                <a className="text-xl flex justify-start gap-2 items-center overflow-y-hidden">
                  <AiFillInstagram className="text-3xl" />{" "}
                  <span>yandian.s</span>
                </a>
              </Link>
              <Link href={"https://github.com/yandiaan"}>
                <a className="text-xl flex justify-start gap-2 items-center overflow-y-hidden">
                  <AiFillGithub className="text-3xl" /> <span>yandiaan</span>
                </a>
              </Link>
              <Link href={"https://www.linkedin.com/in/yandian/"}>
                <a className="text-xl flex justify-start gap-2 items-center overflow-y-hidden">
                  <AiFillLinkedin className="text-3xl" /> <span>yandian</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto h-3/4">
          <h1 className="font-bold text-3xl w-[400px] text-center mx-auto mb-8">
            Isi Form Dibawah untuk menghubungi saya via Email!
          </h1>
          <div className="flex flex-col">
            <div className="py-16 px-24 bg-glass flex flex-col gap-4 text-lg font-thin justify-center items-center">
              <div className="flex items-center justify-between w-full px-0">
                <label className="basis-1/6">Nama</label>
                <input
                  type="text"
                  className="mac-glass-full basis-2/6 outline-none border-none px-4 py-2 mr-8"
                />
                <label className="basis-1/6">Email</label>
                <input
                  type="text"
                  className="mac-glass-full basis-2/6 outline-none border-none px-4 py-2 mr-8"
                />
              </div>
              <div className="flex gap-12 items-center  justify-between w-full px-0">
                <label className="flex-none">Subject</label>
                <input
                  type="text"
                  className="mac-glass-full grow outline-none border-none px-4 py-2 mr-8"
                />
              </div>
              <div className="flex gap-10 items-center justify-between w-full px-0">
                <label className="flex-none">Isi Pesan</label>
                <textarea className="mac-glass-full grow outline-none border-none px-4 py-4 mr-8"></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 mac-glass rounded-full py-2 px-8"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
