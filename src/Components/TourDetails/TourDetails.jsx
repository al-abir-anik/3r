import { useLoaderData, useParams } from "react-router-dom";

const TourDetails = () => {
  const { id } = useParams();
  const tourData = useLoaderData();
  const tourCard = tourData.find((c) => c.id == id);

  const {
    adventureTitle,
    image,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = tourCard;

  const handleTalkWithExpert = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const startHour = 10;
    const endHour = 20;

    if (currentHour >= startHour && currentHour < endHour) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      const modal = document.getElementById("twe-modal");
      if (modal) modal.showModal();
    }
  };
  const closeModal = () => {
    const modal = document.getElementById("twe-modal");
    if (modal) modal.close();
  };

  return (
    <main>
      <div className="w-full h-fit py-8 text-center space-y-3">
        <h2 className="font-bold text-3xl text-black">Adventure Details</h2>
        <p className="font-normal text-base text-black/70">
        Explore in-depth information about thrilling adventures, including key highlights, features, and experiences, and discover everything you need to plan and enjoy your next unforgettable journey.
        </p>
      </div>

      <div className="w-3/4 h-fit mx-auto mb-10 p-10 rounded-3xl bg-white flex gap-10">
        <div className="w-2/5">
          <img src={image} className=" rounded-2xl" />
        </div>
        <div className="space-y-3">
          <h2 className="font-semibold text-2xl text-[#09080f]">
            {adventureTitle}
          </h2>
          <p className="font-semibold text-xl text-[#09080f]/80">
            Price:$ {adventureCost}
          </p>

          <p className="font-normal text-base text-[#09080f]/60">
            {shortDescription}
          </p>

          <h5 className="font-bold text-xl text-[#09080f]/80">
            Specification:
          </h5>
          <ol className="list-decimal ml-5">
            {includedItems.map((spec) => (
              <li className="font-normal text-base text-[#09080f]/60">
                {spec}
              </li>
            ))}
          </ol>
          <h5 className="font-medium text-xl text-[#09080f]/80">
            Avaivility: {bookingAvailability}
          </h5>
          <p className="font-normal text-base text-[#09080f]/60">
            Location: {location}
          </p>
          <p className="font-normal text-base text-[#09080f]/60">
            Duration: {duration}
          </p>
          <p className="font-normal text-base text-[#09080f]/60">
            Adventure level: {adventureLevel}
          </p>
          <p className="font-normal text-base text-[#09080f]/60">
            Max Group size: {maxGroupSize}
          </p>
          <ol className="list-decimal ml-5">
            {ecoFriendlyFeatures.map((spec) => (
              <li className="font-normal text-base text-[#09080f]/60">
                {spec}
              </li>
            ))}
          </ol>
          <ol className="list-decimal ml-5">
            {specialInstructions.map((spec) => (
              <li className="font-normal text-base text-[#09080f]/60">
                {spec}
              </li>
            ))}
          </ol>

          <button
            onClick={handleTalkWithExpert}
            className="btn bg-[#80A4C0] hover:bg-[#a3c3d3] text-white font-semibold text-lg px-10"
          >
            Talk with Expert
          </button>
        </div>
      </div>

      {/* Modal */}

      <dialog id="twe-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Consultation Unavailable</h3>
          <p className="py-4">
            Our experts are available between 10:00 AM and 8:00 PM.
          </p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
};

export default TourDetails;
