import { useContext } from "react";
import {
  AiOutlineCheck,
  AiOutlineCloseCircle,
  AiOutlineClose,
  AiOutlineEdit,
} from "react-icons/ai";
import ProductContext from "../store/product-context";
import Overlay from "../ui/Overlay";

const ProductsContainer = () => {
  const productsCtx = useContext(ProductContext);
  const products = productsCtx?.products;


  const titleClasses = "px-[2rem] py-[1rem]  ";
  const columnClasses = "px-[1rem] py-[.5rem] ";

  return (
    <Overlay>
      <table>
        
        <thead>
        <tr className="text-white bg-black">
          <th className={titleClasses}>Estado</th>
          <th className={titleClasses}>Código</th>
          <th className={titleClasses}>Marca</th>
          <th className={titleClasses}>Modelo</th>
          <th className={titleClasses}>Fecha de alta</th>
          <th className={titleClasses}>Empleado</th>
          <th className={titleClasses}>Area</th>
          <th className={titleClasses}>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {
          products.map((product, i) => {
            const modulo = i % 2;
            return (
              <tr
                className={
                  modulo === 0 ? "text-center bg-gray-100 " : "text-center"
                }
                key={i}
              >
                <td className={columnClasses}>
                  {product.active ? (
                    <AiOutlineCheck className="text-green-800 font-bold text-[1.5rem] mx-auto" />
                  ) : (
                    <AiOutlineCloseCircle className="text-red-800 font-bold text-[1.5rem] mx-auto" />
                  )}
                </td>
                <td className={columnClasses}>{product._id}</td>
                <td className={columnClasses}>{product.brand}</td>
                <td className={columnClasses}>{product.model} </td>
                <td className={columnClasses}>{product.registrationDate} </td>
                <td className={columnClasses}> {product.user}</td>
                <td className={columnClasses}>{product.area} </td>
                <td className="flex flex-row justify-center text-[1.2rem] pt-[1rem] items-center">
                  <a href="google.com">
                    <AiOutlineEdit className="mr-[1rem]" />
                  </a>
                  <a href="google.com">
                    <AiOutlineClose className="text-red-800 " />
                  </a>{" "}
                </td>
              </tr>
              
            );
          })}
          </tbody>
      </table>
    </Overlay>
  );
};

export default ProductsContainer;
