import { Link } from "react-router-dom";
import { Novatrix } from "uvcanvas";

const Landing = () => {
  return (
    <div className="h-screen opacity-80 relative">
      <Novatrix />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl text-center font-Kaushan font-bold tracking-wider">
            Policies and more, made super easy for you!
          </h2>
          <Link
            to="chat"
            className="relative inline-block left-1/2 -translate-x-1/2 bg-black p-5 py-2 text-white rounded-full mt-10 "
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
