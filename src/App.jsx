import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/*  Navbar */}
    <div className="paddingX flexCenter">
      <div className="boxWidth">
        <Navbar />
      </div>
    </div>

    {/* Hero Section */}
    <div className="bg-primary flexStart">
      <div className="boxWidth">
        <Hero />
      </div>
    </div>

    {/* below hero */}
    <div className="bg-primary paddingX flexStart">
      <div className="boxWidth">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
