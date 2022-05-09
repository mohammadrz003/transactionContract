import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({color, title, icon, subtitle}) => {
  return (
    <div className="flex flex-row items-center justify-start p-3 m-2 shadow-xl cursor-pointer white-glassmorphism">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col flex-1 ml-5">
        <h3 className="mt-2 text-lg text-white">{title}</h3>
        <p className="mt-2 text-sm text-white md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:flex-row gradient-bg-services">
      <div className="flex flex-col items-center justify-between px-4 py-12 mf:flex-row md:p-20">
        <div className="flex flex-col items-start justify-start flex-1">
          <h1 className="py-2 text-3xl text-white sm:text-5xl text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start flex-1">
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="security is guaranteed. we always main privacy and mainting the quality of products."
        />
        <ServiceCard
          color="bg-[#9845f8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="security is guaranteed. we always main privacy and mainting the quality of products."
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="security is guaranteed. we always main privacy and mainting the quality of products."
        />
      </div>
    </div>
  );
};

export default Services;
