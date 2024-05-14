const Footer = () => {
  return (
    <>
      <div className="my-[96px] flex flex-col md:flex-row flex-wrap justify-between gap-[30px] md:gap-[83px]">
        <div className="w-full lg:w-[207px]">
          <h2 className="text-[40px] text-primary">Jadoo.</h2>
          <p className="mt-[19px] text-[13px] text-[#5E6282]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div>
          <h5 className="text-[21px] font-bold mb-[10px] md:mb-[35px]">
            Company
          </h5>
          <div className="flex flex-col gap-[12px] text-[18px] text-[#5E6282]">
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
        </div>
        <div>
          <h5 className="text-[21px] font-bold mb-[10px] md:mb-[35px]">
            Contact
          </h5>
          <div className="flex flex-col gap-[12px] text-[18px] text-[#5E6282]">
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affiliates</p>
          </div>
        </div>
        <div>
          <h5 className="text-[21px] font-bold mb-[10px] md:mb-[35px]">More</h5>
          <div className="flex flex-col gap-[12px] text-[18px] text-[#5E6282]">
            <p>Airlinefees</p>
            <p>Airline</p>
            <p>Low fare tips</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[25px] md:justify-between">
            <div className="w-[41px] h-[41px] bg-[#5E6282] rounded-full"></div>
            <div className="w-[41px] h-[41px] bg-[#5E6282] rounded-full"></div>
            <div className="w-[41px] h-[41px] bg-[#5E6282] rounded-full"></div>
          </div>
          <p className="text-[20px] text-[#5E6282] my-[26px]">
            Discover our app
          </p>
          <div className="flex items-center gap-[7px] md:justify-between">
            <div className="w-[107px] h-[35px] bg-[#5E6282] rounded-full"></div>
            <div className="w-[107px] h-[35px] bg-[#5E6282] rounded-full"></div>
          </div>
        </div>
      </div>
      <p className="text-center text-[#5E6282]">All rights reserved@jadoo.co</p>
    </>
  );
};

export default Footer;
