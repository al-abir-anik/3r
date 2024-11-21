import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Cards = ({ tourData }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {tourData.map((card) => (
        <div className="card flex flex-col justify-between bg-base-100 w-80 lg:w-96" key={card.id}>
          <figure className="lg:h-64">
            <img src={card.image} />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title text-xl font-semibold">
              {card.adventureTitle}
            </h2>
            <ul className="list-inside space-y-1 text-base text-gray-700">
              {card.ecoFriendlyFeatures.map((feature, index) => (
                <li key={index} className="pl-2">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="card-actions justify-start">
              <Link to={user ? `/card/${card.id}` : "login"}>
                <button className="btn bg-[#80A4C0] hover:bg-[#A3C3D3] text-[#FAF9F6]">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
