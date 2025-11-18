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
          ApiriHallowed Foundation was established on June 3rd 2007,{" "}
          <i>inspired by the word of God in Matthew 25: 31  46.</i> It was
          founded by Mr. Apiriala Atedoghu, who is also the President of the
          NGO. The NGO was established in the Federal Capital Territory (FCT),
          Abuja and was registered under the Corporate Affairs Commission (CAC)
          on February 8, 2008, with registration Number CAC/IT/
          N026765.ApiriHallowed Foundation began its first operation in General
          Hospital Kubwa, Abuja on June 3, 2007, and subsequently continued her
          operations to the hospital monthly. The NGO opened a branch Office in
          Warri at No. 10 Market Road Jeddo, Warri, Delta State in the year
          2009, and was made the Corporate Headquarters on the 4th of January
          2014. AHF currently has two (2) branches, which is situated at Warri -
          Delta State and Benin City - Edo State, Warri which is currently the
          Corporate Headquarters.
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
      {/* goals beginning */}
      {/* goals beginning */}
      {/* goals beginning */}
      <div className="my-[70px] w-[90%] mx-auto">
        <h2 className="font-catamaran mb-[20px] text-[30px]">
          GOALS / OBJECTIVES OF APIRIHALLOWED FOUNDATION (AHF)
        </h2>
        <div className="mb-[30px]">
          <h3 className="font-catamaran mb-[10px] text-[20px]">A. GOALS</h3>
          <p className="font-raleway text-[20px]">
            <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
            Alleviate or eradicate the rate at which Orphans and Vulnerable
            <br />
            <span className="font-catamaran text-[30px] mr-[10px]">
              &bull;
            </span>{" "}
            Children suffer from eye defects and also provide education for
            Orphans at all levels.
            <br />{" "}
            <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
            Provide reasonable atmosphere by making available education through
            skill acquisition for those in prisons.
            <br />{" "}
            <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
            Provide Ambulance on our roads and at homes in other to rescue
            accident victims.
            <br />{" "}
            <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
            Provide RESTORATION AGLOW for all in the prisons, hospitals, orphans
            and Vulnerable children, widows and to provide clothes for the naked
            in our society.
          </p>
        </div>
        {/* End of goals */}
        <div className="mb-[30px]">
          <h3 className="font-catamaran mb-[10px] text-[20px]">
            B. OBJECTIVES
          </h3>
          <p className="font-raleway text-[20px]">
            <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
            To provide scholarship schemes for Orphans from Primary to
            University level and free eye tests and treatment to be conducted
            for the Orphans and Vulnerable children (OVC).
            <br />
            <span className="font-catamaran text-[30px] mr-[10px]">
              &bull;
            </span>{" "}
            Prison Reform Scheme (PRS), to provide skill acquisition, education
            and counseling for inmates in the prisons.
            <br />{" "}
            <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
            To convey accident victims in designated areas homes, roads and
            other places in Nigeria to the hospital.
            <br />{" "}
            <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
            To visit those in the prison, hospital and the naked, pray and
            provide succor for them in terms of material needs.
          </p>
        </div>
      </div>
      {/* End of objectives */}
      {/* End of objectives */}
      <div className="w-[90%] mb-[70px] mx-auto">
        <div className="w-[60%] mx-auto text-center">
          <h2 className="font-catamaran text-[30px]">VALUES FOR EXCELLENCE</h2>
          <p className="font-raleway text-[20px]">
            All project / programme personnel of AHF shall possess and maintain
            the following values for excellent performance.
          </p>
        </div>
        <p className="font-catamaran w-[60%] mx-auto text-[30px] my-[30px]  p-[50px] bg-[#e32227] text-center text-[#ffffff]">
          Love, Discipline, Accountability, Honesty, Integrity, Sincerity and
          Transparency
        </p>
        <p className="font-raleway text-[20px]">
          <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
          All Project / Programme personnel of AHF shall promote love,
          discipline, accountability, Honesty, Integrity, Sincerity and
          Transparency in all activities.
          <br />
          <span className="font-catamaran text-[30px] mr-[10px]">
            &bull;
          </span>{" "}
          Staff behavior and conduct must consider and be willing to obey the
          stated values.
          <br />{" "}
          <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
          Staff and the members of AHF will never hide any information to the
          stakeholders
          <br />{" "}
          <span className="font-catamaran text-[30px] mr-[10px]">&bull;</span>
          All personnel of AHF must posit the following: Power, riches, Wisdom,
          Strength, Honour, Glory and Blessing (Rev 5:12).
        </p>
      </div>
    </>
  );
};

export default page;
