import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, changeIndex }) => {
  const { title } = data?.card?.card;

  // only track own component's state
  //   const [showItems, setShowItems] = useState(false)

  const handleShow = () => {
    changeIndex();
  };
  return (
    <>
      <div
        className="flex justify-between items-center w-full lg:w-8/12 mx-auto my-2 p-4 bg-gray-200 text-xl cursor-pointer mt-4 shadow-md hover:shadow-lg"
        onClick={handleShow}
      >
        <span className="font-bold">
          {title} ({data?.card?.card.itemCards.length})
        </span>
        <span className="">{showItems ? <FaCaretUp /> : <FaCaretDown />}</span>
      </div>

      {showItems && (
        <div>
          <ItemList itemData={data?.card?.card?.itemCards} />
        </div>
      )}
    </>
  );
};

export default RestaurantCategory;
