import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../store/product-context";

import Overlay from "../ui/Overlay";

const AddForm = () => {
  const productsCtx = useContext(ProductContext);
  const users = productsCtx?.users;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/products", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const inputClasses =
    "border-gray-500 border-2 focus:bg-gray-500 focus:text-white px-[.25rem] ";
  const labelClasses = "font-bold mt-[1rem] text-[1.25rem]";

  return (
    <Overlay>
      <p className="font-bold text-center text-[2rem] ">crear bien</p>
      <form
        className="flex flex-col w-[40%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={labelClasses}>marca</label>
        <input
          className={inputClasses}
          {...register("brand", { required: true, maxLength: 20 })}
        />
        {errors.brand?.type === "required" && (
          <p className="text-red-500 text-center">
            Debes ingresar una marca para el bien
          </p>
        )}

        <label className={labelClasses}>modelo</label>
        <input
          className={inputClasses}
          {...register("model", { required: true, maxLength: 20 })}
        />
        {errors.model?.type === "required" && (
          <p className="text-red-500 text-center">
            Debes ingresar un modelo para el bien
          </p>
        )}

        <label className={labelClasses}>usuario</label>
        <select {...register("user")} className={inputClasses}>
          {users.map((user, i) => {
            return <option value={user.username}>{user.username}</option>;
          })}
        </select>

        <input
          className="bg-black text-white py-[.5rem] font-bold my-[2rem] hover:bg-gray-500 duration-300"
          type="submit"
          value="crear"
        />
      </form>
    </Overlay>
  );
};

export default AddForm;
