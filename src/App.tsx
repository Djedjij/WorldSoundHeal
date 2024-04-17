import React, { useRef, useState } from "react";
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
import Modal from "./UI/Modal/Modal";

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
  const [activeModal, setActiveModal] = useState<boolean>(false);
  return (
    <div className="App">
      <Header
        refToAbout={refToAbout}
        refToContacts={refToContacts}
        refToServices={refToServices}
        setActiveModal={setActiveModal}
      />
      <DropHeader
        refToAbout={refToAbout}
        refToContacts={refToContacts}
        refToServices={refToServices}
        setActiveModal={setActiveModal}
      />
      <Main refToAbout={refToAbout} setActiveModal={setActiveModal} />
      <About ref={refAbout} />
      <SoundHealing />
      <Services ref={refServices} />
      <Motivation setActiveModal={setActiveModal} />
      <Advantages />
      <Reviews />
      <FormBlock />
      <Contacts ref={refContacts} />
      <PhoneButton activeModal={activeModal} setActiveModal={setActiveModal} />
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
      <Footer />
    </div>
  );
}

export default App;
