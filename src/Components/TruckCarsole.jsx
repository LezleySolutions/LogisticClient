import React, { useState } from "react";

const TruckCarsole = () => {
  let size = window.innerWidth;
  console.log(size);

  const [imagesBg, setImagesBg] = useState("img/truck/reefer.jpg");
  const [NameTruck, setNameTruck] = useState("Reefer");
  const [TruckCode, setTruckCode] = useState(1);

  return (
    <>
      <div className="container-fulid mx-2 rounded position-relative mb-5">
        <div
          className="hero-wrap"
          style={{
            backgroundImage: `url(${imagesBg})`,
            position: "absolute",
            top: "0px",
            opacity: "0.3",
          }}
        ></div>
        <div className="d-md-flex d-lg-flex d-sm-block justify-content-center align-items-center flex-end">
          <div className="col-lg-1 col-md-0 col-sm-0 d-lg-block"></div>
          <div className="col-lg-3 col-md-3 col-sm-12 TruckNav">
            <div className="text-center m-auto">
              <div className="d-md-block d-lg-block d-sm-none d-none text-center my-4">
                <img
                  src={imagesBg}
                  alt="smallimg"
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                  }}
                />
                <p className="fs-4 fw-bold mt-2">{NameTruck} </p>
              </div>
              <div className="d-lg-block d-md-block d-sm-flex d-flex navtruck">
                <div
                  className="p-lg-2 me-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setImagesBg("img/truck/reefer.jpg");
                    setNameTruck("Reefer");
                    setTruckCode(1);
                  }}
                >
                  <p>Reefer</p>
                </div>
                <div
                  className=" p-lg-2 me-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setImagesBg("img/truck/step-deck.jpg");
                    setNameTruck("Step Deck");
                    setTruckCode(2);
                  }}
                >
                  <p>Step Deck</p>
                </div>

                <div
                  className=" p-lg-2 me-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setImagesBg("img/truck/hot-shot.png");
                    setNameTruck("Hot Shot");
                    setTruckCode(3);
                  }}
                >
                  <p>Hot Shot</p>
                </div>
                <div
                  className=" p-lg-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setImagesBg("img/truck/Dry-Van.jpg");
                    setTruckCode(4);
                  }}
                >
                  <p>Dry Van</p>
                </div>
                <div
                  className=" p-lg-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setImagesBg("img/truck/Box-truck.jpg");
                    setNameTruck("Box Truck");
                    setTruckCode(5);
                  }}
                >
                  <p>Box Truck</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-9 col-sm-12">
            <div
              className=""
              style={{ display: TruckCode === 1 ? "block" : "none" }}
            >
              <h3 className="mb-5 mt-5">WHY CUSTOMERS LOVE US</h3>
              <p className="fs-6">
                Reefer trailers, alternatively referred to as refrigerated
                trailers, are a variety of semi-trailer specifically engineered
                to uphold a precise temperature range, ensuring the preservation
                of perishable cargo's freshness and quality during transit. This
                particular trailer is outfitted with a refrigeration mechanism
                capable of sustaining a temperature spectrum generally ranging
                from -20 to 70 degrees Fahrenheit (-29 to 21 degrees Celsius),
                contingent upon the cargo's specific needs.
              </p>
              <p className="fs-6">
                Reefer trailers are widely employed for the transportation of
                perishable commodities, encompassing fruits, vegetables, dairy
                products, meat, seafood, and pharmaceuticals. The temperature
                regulation within reefer trailers serves to decelerate the
                degradation process and prolong the longevity of the cargo
                throughout its transit, thereby extending its shelf life.
              </p>
              <p className="fs-6">
                In general, the step deck trailer is a favored option for the
                conveyance of substantial cargo, including construction
                equipment, industrial machinery, and other oversized loads that
                necessitate additional clearance.
              </p>
              <p className="fs-6">
                The refrigeration unit in the reefer trailer is energized by
                either a diesel engine or an electric power source, effectively
                upholding the desired temperature within the trailer,
                independent of the external climate. This guarantees the
                preservation of the cargo's freshness and optimal state upon
                reaching its intended destination.
              </p>
            </div>
            <div
              className="mb-5 mt-5"
              style={{ display: TruckCode === 2 ? "block" : "none" }}
            >
              <h3 className="mb-5">DROP DECK TRAILER</h3>
              <p className="fs-6">
                A step deck trailer, alternatively referred to as a "drop deck"
                trailer, is a specific type of semi-trailer that features a
                lowered deck in the rear section. This distinctive design
                enables the transportation of taller cargo with greater ease.
                Unlike a regular flatbed truck with a single-level flat deck,
                the step deck trailer provides the capacity to accommodate cargo
                that exceeds the height limitations of a standard flatbed.
              </p>
              <p className="fs-6">
                The drop deck configuration of the step deck trailer offers an
                extra level of clearance to accommodate taller cargo. The cargo
                is loaded onto the elevated section of the trailer and
                subsequently lowered onto the lower deck section, which is
                typically positioned at a height of approximately 2 feet from
                the ground. This design enhances the efficiency of loading and
                unloading procedures while minimizing the potential for cargo
                damage during transportation.
              </p>
              <p className="fs-6">
                In general, the step deck trailer is a widely preferred option
                for transporting larger cargo, including construction equipment,
                industrial machinery, and other oversized loads that necessitate
                additional clearance.
              </p>
            </div>
            <div
              className="mb-5 mt-5"
              style={{ display: TruckCode === 3 ? "block" : "none" }}
            >
              <h3 className="mb-5">FLATBED TRAILERS</h3>
              <p className="fs-6">
                Hotshot trucking pertains to a specialized transportation
                service that focuses on the efficient delivery of smaller and
                time-sensitive loads within specific timeframes. These hotshot
                loads are typically transported using flatbed trailers that are
                towed behind a truck.
              </p>
              <p className="fs-6">
                Hotshot trucking is frequently employed when the size of the
                load does not warrant the expense of a full-size trailer, yet it
                is too sizable or time-sensitive to be shipped through
                traditional parcel delivery services. Hotshot drivers commonly
                operate as owner-operators, owning and operating their own truck
                and trailer, or they may work for a small trucking company that
                specializes in providing this specific service.
              </p>
              <p className="fs-6">
                Flatbed trailers are the prevailing choice when it comes to
                hotshot trucking, as they offer a flat surface devoid of walls
                or a roof. This design makes them well-suited for transporting
                larger or irregularly shaped items that cannot fit within the
                confines of a standard trailer. Additionally, flatbed trailers
                facilitate convenient loading and unloading of goods, resulting
                in time savings and cost reductions.
              </p>
              <p className="fs-6">
                In summary, hotshot trucking provides a specialized
                transportation service that proves to be efficient and
                cost-effective for shipping smaller, time-sensitive loads.
              </p>
            </div>
            <div
              className="mb-5 mt-5"
              style={{ display: TruckCode === 4 ? "block" : "none" }}
            >
              <h3 className="mb-5">COMPLETELY ENCLOSED AND SEALED TRAILERS</h3>
              <p className="fs-6">
                Dry van truckload shipping is a widely utilized transportation
                service that encompasses the transportation of cargo using fully
                enclosed and sealed trailers, commonly referred to as dry vans.
                These trailers are specifically designed to transport a diverse
                range of goods, including packaged consumer goods, electronics,
                and raw materials.
              </p>
              <p className="fs-6">
                Dry van trailers are typically constructed using aluminum or
                steel materials and have a standard length of 53 feet, enabling
                the transportation of larger loads. These trailers are equipped
                with a rear door that opens, facilitating the efficient loading
                and unloading of goods. Furthermore, the rear door can be
                securely locked to ensure the safety and security of the cargo
                during transit.
              </p>
              <p className="fs-6">
                Dry van truckload shipping services are employed in situations
                where it is crucial to safeguard the cargo from adverse weather
                conditions, theft, or damage during transportation. The enclosed
                nature of dry van trailers provides a protective barrier against
                environmental factors, ensuring the integrity of the cargo.
                Additionally, the sealed design of these trailers acts as a
                deterrent to unauthorized access, further enhancing the security
                of the cargo throughout its journey.
              </p>
              <p className="fs-6">
                In summary, dry van truckload shipping services offer an
                effective and dependable means of transporting a wide range of
                goods over long distances, while prioritizing their safety and
                security.
              </p>
            </div>
            <div
              className="mb-5 mt-5"
              style={{ display: TruckCode === 5 ? "block" : "none" }}
            >
              <h3 className="mb-5">STRAIGHT TRUCK</h3>
              <p className="fs-6">
                A straight truck, also referred to as a box truck, is a
                commercial motor vehicle extensively utilized for the
                transportation of goods. It features a single container that
                spans the distance between each axle, extending from the front
                of the cab to the rear of the trailer.
              </p>
              <p className="fs-6">
                The container of a straight truck is typically rectangular in
                shape and is affixed to a specially designed chassis specific to
                straight trucks. It can be constructed from different materials,
                including aluminum or fiberglass, and is fully enclosed to
                provide protection for the cargo against weather conditions and
                other external factors.
              </p>
              <p className="fs-6">
                Straight trucks are available in various sizes, spanning from
                small vehicles capable of carrying a few thousand pounds to
                larger counterparts capable of transporting several tons of
                cargo. They are frequently utilized for local deliveries, such
                as furniture moving or package delivery, but can also serve for
                long-haul transportation purposes.
              </p>
              <p className="fs-6">
                Straight trucks are well-suited for navigating narrow roads and
                maneuvering through urban areas with dense traffic due to their
                compact size and enhanced maneuverability. Furthermore, they can
                be operated with a regular driver's license, unlike larger
                commercial trucks that necessitate a commercial driver's license
                (CDL).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TruckCarsole;
