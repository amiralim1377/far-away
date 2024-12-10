import Input from "../Input/Input";

function InputElemet() {
  return (
    <div className="text-white text-center mt-6 max-w-2xl p-4 ">
      <h5 className="text-sm md:text-3xl font-Roboto font-semibold">
        What do you need for your trip?
      </h5>
      <p className="text-xs md:text-lg font-Roboto md:font-semibold font-thin mt-4 ">
        TRAVELERS CHECKLIST FOR HOLIDAY OR BUSINESS
      </p>
      <Input />
    </div>
  );
}

export default InputElemet;
