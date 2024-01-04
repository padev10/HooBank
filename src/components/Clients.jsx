import { clients } from "../constants";

const Clients = () => (
  <section className="flexCenter my-4">
    <div className="flexCenter flex-wrap w-full ">
      {clients.map((clientt) => (
        <div
          key={clientt.id}
          className="flex-1 flexCenter sm:min-w-[192x] min-w-[120px] hover:invert hover:cursor-pointer transition"
        >
          <img
            src={clientt.logo}
            alt="client logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
