import { useState } from "react";

import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import Featured from "@/components/Featured";
import Map from "@/components/Map";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Layout>
      <Intro />
      <Featured handleOpen={handleOpen} />
      <Map isOpen={isOpen} handleClose={handleClose} />
    </Layout>
  );
}
