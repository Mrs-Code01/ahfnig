import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main
        className="w-[100%] relative flex flex-col items-center justify-center min-h-[100vh] bg-cover bg-center bg-no-repeat px-[5%] mb-[70px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/hero.jpg')"
        }}
      >
        <h1 className="font-catamaran text-center text-[40px] text-[#ffffff] mb-[7px]">
          APIRIHALLOWED FOUNDATION (AHF)
        </h1>
      </main>
      <div className="w-[90%] mx-auto mb-[70px] text-center">
        <h2 className="font-catamaran text-[30px] mb-[10px]">
          HISTORY AND ESTABLISHMENT OF THE NGO
        </h2>
        <p className="font-raleway text-[20px]">
          ApiriHallowed Foundation was established on June 3rd 2007, inspired by
          the word of God in Matthew 25: 31  46. It was founded by Mr. Apiriala
          Atedoghu, who is also the President of the NGO. The NGO was
          established in the Federal Capital Territory (FCT), Abuja and was
          registered under the Corporate Affairs Commission (CAC) on February 8,
          2008, with registration Number CAC/IT/ N026765.ApiriHallowed
          Foundation began its first operation in General Hospital Kubwa, Abuja
          on June 3, 2007, and subsequently continued her operations to the
          hospital monthly. The NGO opened a branch Office in Warri at No. 10
          Market Road Jeddo, Warri, Delta State in the year 2009, and was made
          the Corporate Headquarters on the 4th of January 2014. AHF currently
          has two (2) branches, which is situated at Warri - Delta State and
          Benin City - Edo State, Warri which is currently the Corporate
          Headquarters.
        </p>
      </div>
      <div className="flex justify-between mb-[70px] w-[90%] mx-auto">
        <Image
          src="/images/viv7.jpg"
          width={200}
          height={200}
          alt="Our vision"
          className="w-[47%] h-[300px] object-cover"
        />
        <div className="w-[47%]">
          <h2 className="font-catamaran text-[30px] mb-[10px]">
            VISION STATEMENT OF THE NGO
          </h2>
          <p className="font-raleway text-[20px]">
            Improved well-being of Humanity amongst the Poor and needy in the
            society as assigned by God.
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-[70px] w-[90%] mx-auto">
        <div className="w-[47%]">
          <h2 className="font-catamaran text-[30px] mb-[10px]">
            MISSION STATEMENT OF THE NGO
          </h2>
          <p className="font-raleway text-[20px]">
            Restore hope to the impoverished, Prison inmates and Hospital
            patients, through the giving of arms and the message of love.
          </p>
        </div>
        <Image
          src="/images/viv8.jpg"
          width={200}
          height={200}
          alt="Our mission"
          className="w-[47%] h-[300px] object-cover"
        />
      </div>
      <div className="w-[100%] py-[70px] bg-[#eeeeee]">
        <div className="w-[60%] mx-auto text-center">
          <h2 className="font-catamaran mb-[10px] text-[30px]">
            CORE MANDATES
          </h2>
          <p className="font-raleway text-[20px]">
            ApiriHallowed Foundation (AHF) has her core mandate targeted at the
            Hospitalized, Orphans and Vulnerable Children, Widows, the Prison
            inmates, Medical Outreaches and Community Development.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
