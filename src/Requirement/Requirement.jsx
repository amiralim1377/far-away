import { useSelector } from "react-redux";
import RequirementItem from "../Components/RequirementItem/RequirementItem";

function Requirement() {
  const requirement = useSelector((state) => state.trip?.requirement);
  const showrequirement = useSelector((state) => state.trip?.show);

  if (!showrequirement) return null;
  return (
    <ul className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-2   ">
      {requirement?.map((requirement) => (
        <RequirementItem key={requirement.id} requirement={requirement} />
      ))}
    </ul>
  );
}

export default Requirement;
