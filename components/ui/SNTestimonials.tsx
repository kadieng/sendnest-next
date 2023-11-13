import Avatar1 from '@/images/avatar1.png';
import Avatar2 from '@/images/avatar2.png';
import Avatar3 from '@/images/avatar3.png';
import Avatar4 from '@/images/avatar4.png';
import Avatar5 from '@/images/avatar5.png';
import Image from 'next/image';
import React from 'react';

export default function SNTestimonials() {
  return (
    <div className="clients-bg relative h-[1000px] md:h-[700px]">
      <h1 className="font-radio-canada pt-16 text-center text-4xl font-semibold text-[#424242] md:text-5xl">
        What our Clients are sayings
      </h1>
      <div className="relative flex justify-center">
        <div className="relative mt-48 h-[180px] w-[300px] md:mt-32 md:h-[240px] md:w-[500px] lg:h-[270px]">
          <div className="font-inter relative z-20 h-full w-full rounded-[10px] bg-[#372666] pl-5 pr-8 pt-4 text-xs text-white md:pt-10 md:text-base">
            I&apos;ve been using SendNest to send money to my family in Nigeria for over a year now, and I couldn&apos;t
            be happier with the service. The website is user-friendly, and the fees and exchange rates are always
            transparent. I appreciate that I can track the status of my transfer and receive updates throughout the
            process.
          </div>

          <div className="absolute -bottom-[11px] z-10 h-20 w-full rounded-[10px] bg-[#D5AF34]"></div>

          <div className="relative bottom-[40px] left-28 md:left-32">
            <svg width="120" height="130" className="absolute z-20 rotate-90">
              <path d="M0 0 L0 130 L120 130 Z" fill="#372666" />
            </svg>

            <svg width="120" height="130" className="absolute left-[18px] z-10 rotate-90">
              <path d="M0 0 L0 130 L120 130 Z" fill="#D5AF34" />
            </svg>
          </div>
        </div>
      </div>
      <Image
        src={Avatar1}
        height={48}
        width={48}
        alt="personal card"
        className="absolute left-[15px] top-[180px] md:left-[20px] md:top-[115px] lg:left-[90px] lg:top-[120px] xl:left-[170px] xl:top-[150px]"
      />
      <Image
        src={Avatar2}
        height={48}
        width={48}
        alt="personal card"
        className="absolute bottom-[220px] left-[220px] md:bottom-[80px] md:left-[100px] lg:bottom-[80px] lg:left-[180px] xl:bottom-[100px] xl:left-[300px]"
      />
      <Image
        src={Avatar3}
        height={48}
        width={48}
        alt="personal card"
        className="absolute bottom-[190px] md:bottom-[10px] md:right-[300px] lg:right-[450px] xl:right-[600px]"
      />
      <Image
        src={Avatar4}
        height={48}
        width={48}
        alt="personal card"
        className="absolute bottom-[50px] right-[100px] md:bottom-[50px] md:right-[100px] lg:bottom-[70px] lg:right-[120px] xl:right-[300px]"
      />
      <Image
        src={Avatar5}
        height={48}
        width={48}
        alt="personal card"
        className="absolute right-[15px] top-[200px] md:right-[110px] md:top-[130px] lg:right-[110px] lg:top-[130px] xl:right-[300px] xl:top-[130px]"
      />
    </div>
  );
}
