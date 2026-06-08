"use client"

import { Button } from "../ui/button"

const Header = () => {
  
const download = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // file in public folder
  link.download = "Ian_Divinagracia_Resume.pdf";
  link.click();
};

  return (
    <nav className="text-white bg-[#030a16] w-full h-20  shadow-white/10 shadow-sm flex flex-row items-center justify-between px-20 fixed z-100 ">
        <Button variant="hover"> IAN DIVINAGRACIA</Button>
        <div className="flex gap-16">
        <Button variant="hover"> HOME</Button>
        <Button variant="hover"> PROJECTS</Button>
        <Button variant="hover"> CONTACT</Button>
        </div>
        <button 
        onClick={download}
        className="font-mono text-sm bg-[#0099b1] px-4 py-1 rounded-sm border-b-2 active:border-0 border-[#0dbdfb] hover:bg-[#0dbdfb]/80 transition-all ease-in-out duration-300"
        > My Resume </button>
    </nav>
  )
}

export default Header
