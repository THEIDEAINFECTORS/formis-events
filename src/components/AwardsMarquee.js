import Marquee from "react-fast-marquee";

const AwardsMarquee = () => {
  const row = [
    "https://cdn.prod.website-files.com/65f89c155558188f8fd870b9/661f8929788de4ac919e2259_10%20(1).png",
    "https://cdn.prod.website-files.com/65f89c155558188f8fd870b9/661f89293933af85cd93983d_4%20(2).png",
    "https://cdn.prod.website-files.com/65f89c155558188f8fd870b9/661f8929c69ef277871197ea_1%20(7).png",
    "https://cdn.prod.website-files.com/65f89c155558188f8fd870b9/661f8929af7cc746ce4e69b8_6.png",
    "https://cdn.prod.website-files.com/65f89c155558188f8fd870b9/661f8929540b6d4960c6ab1a_5%20(1).png",
    "https://cdn.prod.website-files.com/65f89c155558188f8fd870b9/661f89292d8c1fb0ae41ef62_7.png",
  ];
  
  return (
    <Marquee speed={100} className="marquee-container">
      {row.map((el, index) => (
        <img
          src={el}
          alt={`Award ${index}`}
          className="mr-10 lg:mr-20 2xl:mr-40 w-[100px] md:w-[150px]"
        />
      ))}
      {row.map((el, index) => (
        <img
          src={el}
          alt={`Award ${index}`}
          className="mr-10 lg:mr-20 2xl:mr-40 w-[100px] md:w-[150px]"
        />
      ))}
    </Marquee>
  );
};

export default AwardsMarquee;
