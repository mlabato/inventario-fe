import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";

import ProductContext from "../store/product-context";
import Overlay from "../ui/Overlay";
import Navbar from "../components/Navbar";

const Users = () => {
  const productsCtx = useContext(ProductContext);
  const users = productsCtx?.users;

  const navigate = useNavigate();

  const deleteHandler = async (e, id) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:4000/users/" + id, {
            method: "DELETE"
        })

        console.log(response)

        if (response.status === 200) {
            navigate("/usuarios");
          }
      
    } catch (err) {
      console.log(err);
    }
  };

  const titleClasses = "px-[2rem] py-[1rem]  ";
  const columnClasses = "px-[1rem] py-[.5rem] ";

  return (
    <Overlay>
      <Navbar />
      <p className="font-bold text-center text-[2rem] ">usuarios</p>
      <table className="mx-auto">
        <thead>
          <tr className="text-white bg-black">
            <th className={titleClasses}>usuario</th>
            <th className={titleClasses}>área</th>
            <th className={titleClasses}>acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            const modulo = i % 2;
            return (
              <tr
                className={
                  modulo === 0 ? "text-center bg-gray-100 " : "text-center"
                }
                key={i}
              >
                <td className={columnClasses}>{user.username}</td>
                <td className={columnClasses}>{user.area}</td>
                <td className="flex flex-row justify-center text-[1.2rem] pt-[1rem] items-center">
                  <a href="google.com">
                    <AiOutlineEdit className="mr-[1rem]" />
                  </a>
                  <button onClick={(e) => deleteHandler(e, user.id)}>
                    <AiOutlineClose className="text-red-800 " />
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Overlay>
  );
};

export default Users;
