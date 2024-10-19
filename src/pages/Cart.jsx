import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../utils/constants";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const Cart = () => {
  const { items, totalPrice, totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {items?.length === 0 && (
        <div className="w-screen mt-24 lg:mt-32 justify-center items-center flex flex-col">
          <p className="text-xl md:text-3xl py-2">
            Looks like your cart is empty!
          </p>
          <p className="text-xl md:text-3xl">
            Browse our menu and add something tasty to it!
          </p>

          <Link to="/">
            <button className="bg-blue-500 text-white p-2 w-28 rounded-lg my-4">
              Home
            </button>
          </Link>
        </div>
      )}

      <div className="w-full mt-24 lg:mt-32 flex flex-col lg:flex-row mx-auto lg:px-24 pb-4 mb:pb-16">
        <div className="lg:w-8/12 w-full mb-9">
          {items?.length > 0 &&
            items.map((item) => {
              const {
                imageId,
                name,
                price,
                description,
                id,
                defaultPrice,
                quantity,
              } = item;
              return (
                <div
                  key={id}
                  className="flex items-center md:flex-row flex-col justify-between p-3 lg:p-4 bg-slate-200 mb-2 rounded-lg"
                >
                  <div className="flex items-center gap-5 lg:gap-10 text-xl">
                    <img
                      src={IMAGE_CDN_URL + imageId}
                      alt="item-image"
                      className="size-36 rounded-lg"
                    />

                    <div>
                      <h2>{name}</h2>
                      <p className="text-gray-700 my-1">
                        ₹{(price || defaultPrice) / 100}
                      </p>

                      <div className="flex items-center gap-6 border-white border-4 w-fit px-2 py-1">
                        <span onClick={() => dispatch(decreaseQuantity(id))}>
                          <FaMinus className="hover:scale-125 cursor-pointer" />
                        </span>
                        <button className="cursor-text">{quantity}</button>
                        <span onClick={() => dispatch(increaseQuantity(id))}>
                          <FaPlus className="hover:scale-125 cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="p-2 bg-red-500 hover:bg-red-600 border rounded-lg text-white w-28 mt-2 md:mt-0"
                    onClick={() => dispatch(removeItem(id))}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
        </div>

        {items?.length > 0 && (
          <div className="lg:w-4/12 xl:w-3/12 mt-4 mb-16 lg:mt-0 lg:fixed lg:right-5 h-fit w-full p-6 bg-[#faf9f6] shadow-xl shadow-[#aaa] rounded-lg flex flex-col justify-between">
            <div>
              <p className="quicksand text-3xl mb-6 text-center underline">
                Summary
              </p>
              <div className="mb-4">
                <div className="flex flex-row justify-between">
                  <p>Total Items:</p>
                  <p>{totalItems}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Total Amount:</p>
                  <p>₹{totalPrice / 100}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <button className="w-full bg-[#007BFF] text-white px-6 py-3 mb-3 rounded-lg hover:bg-[#0069d9]">
                CheckOut
              </button>
              <button
                className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
