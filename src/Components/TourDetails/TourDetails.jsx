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
      <div className="w-full h-96 py-8 bg-[#9538e2] text-center space-y-3">
        <h2 className="font-bold text-3xl text-white">Product Details</h2>
        <p className="font-normal text-base text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-full h-96 bg-[#f6f6f6] relative">
        <div className="w-3/4 h-fit mx-auto p-10 rounded-3xl bg-white flex gap-10 absolute inset-0 m-auto -top-72">
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
            <h5 className="font-bold text-xl text-[#09080f]/80">Rating</h5>

            <button
              onClick={handleTalkWithExpert}
              className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10"
            >
              Talk with Expert
            </button>
          </div>
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
