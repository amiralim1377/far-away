function Input() {
  return (
    <div className="space-y-4 mt-8 md:text-left">
      <select
        className="w-full p-1 rounded-lg bg-white text-black hover:opacity-70"
        id=""
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
      <form action="">
        <input
          type="text"
          className="w-full p-1 rounded-lg bg-white text-black placeholder:text-sm placeholder:font-Roboto placeholder:font-semibold hover:opacity-70 "
          placeholder="What do you need for your trip?"
        />
        <div className="flex mt-4 items-center justify-between space-x-2">
          <button className="px-2 py-1 md:px-4 md:py-2 bg-white text-black font-bold font-Roboto rounded-md hover:opacity-60 text-sm md:text-lg     ">
            Add Item
          </button>
          <button className="px-2 py-1  md:px-4 md:py-2 bg-white text-black font-bold font-Roboto rounded-md hover:opacity-60 text-sm md:text-lg">
            show/hidden List
          </button>
          <button className="px-2 py-1 md:px-4 md:py-2 bg-white text-black font-bold font-Roboto rounded-md hover:opacity-60 text-sm md:text-lg ">
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
