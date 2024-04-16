import React, { useRef } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import SoundHealing from "./components/SoundHealing/SoundHealing";
import Motivation from "./components/Motivation/Motivation";
import Advantages from "./components/Advantages/Advantages";
import Reviews from "./components/Reviews/Reviews";
import FormBlock from "./components/FormBlock/FormBlock";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import DropHeader from "./components/Header/DropHeader";
import PhoneButton from "./UI/PhoneButton/PhoneButton";

function App() {
  const refAbout = useRef<HTMLDivElement>(null);
  const refContacts = useRef<HTMLDivElement>(null);
  const refServices = useRef<HTMLDivElement>(null);

  const refToAbout = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" });
  };
  const refToContacts = () => {
    refContacts.current?.scrollIntoView({ behavior: "smooth" });
  };
  const refToServices = () => {
    refServices.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header
        refToAbout={refToAbout}
        refToContacts={refToContacts}
        refToServices={refToServices}
      />
      <DropHeader
        refToAbout={refToAbout}
        refToContacts={refToContacts}
        refToServices={refToServices}
      />
      <Main refToAbout={refToAbout} />
      <About ref={refAbout} />
      <SoundHealing />
      <Services ref={refServices} />
      <Motivation />
      <Advantages />
      <Reviews />
      <FormBlock />
      <Contacts ref={refContacts} />
      <PhoneButton />
      <Footer />
    </div>
  );
}

export default App;
