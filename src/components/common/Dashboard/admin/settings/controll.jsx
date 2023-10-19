import Changestatus from "@/components/common/changestatus";
import OptionsBtn from "@/components/common/optionsBtn";

const Controll = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className=" font-semibold">Manage your account</h2>
        <OptionsBtn />
      </div>
      <ul>
        <li className="w-full flex justify-between items-center">
          <p>Update Notification</p>
          <Changestatus />
        </li>
      </ul>
    </div>
  );
};

export default Controll;
