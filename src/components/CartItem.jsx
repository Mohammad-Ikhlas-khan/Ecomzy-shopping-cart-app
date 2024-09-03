import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item, itemIndex,cartLength }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (

    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

      <div className="w-[100%] wd:w-[60%] flex flex-col p-2">
        <div className="flex items-center justify-between mt-5 mb-3 md:mx-5">
          <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-full">
            <div className="w-[30%]">
              <img src={item.image} alt={item.name} className="object-cover" />
            </div>
            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
              <h1 className="text-xl text-slate-700 font-semibold">
                {item.title}
              </h1>
              <h1 className="text-base text-slate-700 font-medium">
                {item.description.split(" ").slice(0, 15).join(" ") + "..."}
              </h1>
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg text-green-600">${item.price}</p>
                <button
                  onClick={removeFromCart}
                  className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
                  <MdDelete className="text-red-800 group-hover:text-white h-[1em] w-[1em]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {itemIndex !== cartLength - 1 && (
          <hr className="h-[.08rem] border-t-2 border-slate-500 mt-2 mb- md:mx-1" />
        )}

      </div>
    </div>
  );
};

export default CartItem;