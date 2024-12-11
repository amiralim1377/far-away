import { useDispatch, useSelector } from "react-redux";
import { deleteitem } from "../../Slice/tripSlice";
import { updatechecked } from "../../Slice/tripSlice";
// eslint-disable-next-line
function RequirementItem({ requirement }) {
  // eslint-disable-next-line
  const { number, input, id, checked } = requirement;
  const dispatch = useDispatch();

  console.log(checked);

  const ischecked = useSelector((state) => state.trip.requirement).find(
    (item) => item.id == id
  ).checked;

  function handledelete() {
    dispatch(deleteitem(id));
  }

  function handleupdatechecked() {
    dispatch(updatechecked(id));
    console.log(id);
  }

  return (
    <li className="max-w-lg flex items-center justify-between   p-4 cursor-pointer rounded-xl    hover:bg-blue-800">
      <div className="flex items-center overflow-hidden">
        <span className="font-Roboto text-white md:text-3xl font-semibold">
          {number}-
        </span>
        <span
          className={`${
            // eslint-disable-next-line
            input?.length > 12 ? "text-xs" : "text-xl"
          } font-Roboto text-white  font-semibold`}
        >
          {input}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handledelete}
          className="p-2 md:px-4 md:py-2 text-white bg-red-600 hover:opacity-90 text-sm rounded-xl font-Roboto   uppercase font-semibold"
        >
          delete
        </button>
        <button
          onClick={handleupdatechecked}
          className={`${
            ischecked ? "bg-green-400" : "bg-yellow-400"
          } p-2 md:px-4 md:py-2 text-black  rounded-xl font-Roboto  text-sm uppercase font-semibold`}
        >
          {ischecked ? "checked" : "unchecked"}
        </button>
      </div>
    </li>
  );
}

export default RequirementItem;
