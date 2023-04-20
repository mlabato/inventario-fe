import Overlay from "../ui/Overlay";

const Navbar = () => {
 
    const listClasses = "hover:border-b-2 hover:border-black hover:text-gray-500 duration-300 hover:mb-[-4px] ml-[1rem]"
  return (
    <Overlay>
      <article className="px-[4rem] flex flex-row justify-between items-center">
        <div className="text-[3rem] font-bold">inventarioAPP</div>
        <ul className="flex flex-row font-semibold text-[1.25rem]">
          <li className={listClasses}><a href="/agregar">agregar bien</a></li>
          <li className={listClasses}><a href="/usuarios">usuarios</a></li>
        </ul>
      </article>
    </Overlay>
  );
};

export default Navbar;
