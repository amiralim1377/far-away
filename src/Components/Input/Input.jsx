import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { additem, clearitem, togglelist } from "../../Slice/tripSlice";
import { v4 as uuidv4 } from "uuid";

function Input() {
  const showrequirement = useSelector((state) => state.trip?.show);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const newobj = { id: uuidv4(), checked: false, ...data };
    dispatch(additem(newobj));
    reset();
  }

  function handleclearall(e) {
    e.preventDefault();

    if (confirm("Are you sure you want to clear all the list?")) {
      dispatch(clearitem());
    }
  }

  function handleshowlist(e) {
    e.preventDefault();
    dispatch(togglelist());
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mt-8 md:text-left"
    >
      <select
        className="w-full p-1 rounded-lg bg-white text-black hover:opacity-70"
        {...register("number")}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option
            className="font-semibold mx-4 bg-white text-black"
            value={i + 1}
            key={i}
            defaultValue={i + 1}
          >
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="w-full p-3 rounded-lg bg-white text-black placeholder:text-sm placeholder:font-Roboto placeholder:font-semibold"
        placeholder="What do you need for your trip?"
        {...register("input", { required: "just type everything you need" })}
      />
      {errors.input?.type === "required" && (
        <p
          role="alert"
          className="text-red-700 font-semibold text-sm font-Roboto "
        >
          {errors?.input.message}
        </p>
      )}
      <div className="flex mt-4 items-center justify-between space-x-2">
        <button className="px-2 py-1 md:px-4 md:py-2 bg-white text-black font-bold font-Roboto rounded-md hover:opacity-60 text-sm md:text-lg">
          Add Item
        </button>
        <button
          onClick={handleshowlist}
          className="px-2 py-1  md:px-4 md:py-2 bg-white text-black font-bold font-Roboto rounded-md hover:opacity-60 text-sm md:text-lg"
        >
          {showrequirement ? "hidden List" : "show List"}
        </button>
        <button
          onClick={handleclearall}
          className="px-2 py-1 md:px-4 md:py-2 bg-white text-black font-bold font-Roboto rounded-md hover:opacity-60 text-sm md:text-lg"
        >
          Clear All
        </button>
      </div>
    </form>
  );
}

export default Input;
