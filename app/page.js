import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="w-[100%] px-[5%] py-[15px] flex justify-between items-center">
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          alt="logo"
          className="w-[100px]"
          unoptimized
        />
        <nav className="font-raleway text-[#000000] flex w-[55%] justify-between">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Events</Link>
          <Link href="#">Courses</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Admin Login</Link>
        </nav>
      </div>

      <section className="bg-[#e32227] w-[100%] py-[70px] overflow-y-hidden">
        <h1 className="font-catamaran text-[40x] text-[#ffffff] ml-[20px]">
          Online Courses
        </h1>
        <div className="flex whitespace-nowrap w-[1500px] ">
          <div className="w-[320px] h-[400px] bg-[#ffffff] mx-[20px]">
            <Image
              src="/images/hero.jpg"
              width={70}
              height={70}
              alt="logo"
              className="w-[100%] h-[50%]"
              unoptimized
            />
            <div className="p-[10px] h-[50%] flex flex-col justify-between">
              <div className="h-[70%]">
                <p className="font-raleway">AFNIG</p>
                <h3 className="font-catamaran">
                  Artificial Intelligence Practitioner
                </h3>
              </div>
              <Link
                href="#"
                className="block text-[#ffffff] w-[100%] text-center p-[10px] bg-[#000000]"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* Course 1 */}
          <div className="w-[320px] h-[400px] bg-[#ffffff] mx-[20px]">
            <Image
              src="/images/hero.jpg"
              width={70}
              height={70}
              alt="logo"
              className="w-[100%] h-[50%]"
              unoptimized
            />
            <div className="p-[10px] h-[50%] flex flex-col justify-between">
              <div className="h-[70%]">
                <p className="font-raleway">AFNIG</p>
                <h3 className="font-catamaran">
                  Artificial Intelligence Practitioner
                </h3>
              </div>
              <Link
                href="#"
                className="block text-[#ffffff] w-[100%] text-center p-[10px] bg-[#000000]"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* Course 1 */}
          <div className="w-[320px] h-[400px] bg-[#ffffff] mx-[20px]">
            <Image
              src="/images/hero.jpg"
              width={70}
              height={70}
              alt="logo"
              className="w-[100%] h-[50%]"
              unoptimized
            />
            <div className="p-[10px] h-[50%] flex flex-col justify-between">
              <div className="h-[70%]">
                <p className="font-raleway">AFNIG</p>
                <h3 className="font-catamaran">
                  Artificial Intelligence Practitioner
                </h3>
              </div>
              <Link
                href="#"
                className="block text-[#ffffff] w-[100%] text-center p-[10px] bg-[#000000]"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* Course 1 */}
          <div className="w-[320px] h-[400px] bg-[#ffffff] mx-[20px]">
            <Image
              src="/images/hero.jpg"
              width={70}
              height={70}
              alt="logo"
              className="w-[100%] h-[50%]"
              unoptimized
            />
            <div className="p-[10px] h-[50%] flex flex-col justify-between">
              <div className="h-[70%]">
                <p className="font-raleway">AFNIG</p>
                <h3 className="font-catamaran">
                  Artificial Intelligence Practitioner
                </h3>
              </div>
              <Link
                href="#"
                className="block text-[#ffffff] w-[100%] text-center p-[10px] bg-[#000000]"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* Course 1 */}
          <div className="w-[320px] h-[400px] bg-[#ffffff] mx-[20px]">
            <Image
              src="/images/hero.jpg"
              width={70}
              height={70}
              alt="logo"
              className="w-[100%] h-[50%]"
              unoptimized
            />
            <div className="p-[10px] h-[50%] flex flex-col justify-between">
              <div className="h-[70%]">
                <p className="font-raleway">AFNIG</p>
                <h3 className="font-catamaran">
                  Artificial Intelligence Practitioner
                </h3>
              </div>
              <Link
                href="#"
                className="block text-[#ffffff] w-[100%] text-center p-[10px] bg-[#000000]"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* Course 1 */}
          <div className="w-[320px] h-[400px] bg-[#ffffff] mx-[20px]">
            <Image
              src="/images/hero.jpg"
              width={70}
              height={70}
              alt="logo"
              className="w-[100%] h-[50%]"
              unoptimized
            />
            <div className="p-[10px] h-[50%] flex flex-col justify-between">
              <div className="h-[70%]">
                <p className="font-raleway">AFNIG</p>
                <h3 className="font-catamaran">
                  Artificial Intelligence Practitioner
                </h3>
              </div>
              <Link
                href="#"
                className="block text-[#ffffff] w-[100%] text-center p-[10px] bg-[#000000]"
              >
                Find out more
              </Link>
            </div>
          </div>
          {/* Course 1 */}
        </div>
      </section>
    </>
  );
};

export default page;
