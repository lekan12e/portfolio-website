import { Menu, X } from "lucide-react";
import React from "react";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerIcon: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="md:hidden cursor-pointer text-2xl text-white"
      aria-label="Toggle menu">
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};

export default HamburgerIcon;
