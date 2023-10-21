import Changestatus from "@/components/common/changestatus";
import OptionsBtn from "@/components/common/optionsBtn";

const Controll = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        <h2 className=" font-semibold">Manage your account</h2>
        <OptionsBtn />
      </div>
      <ul className="flex flex-col gap-2 mt-4">
        <li className="w-full flex justify-between items-center">
          <p>Update Notification</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Item comment notifications</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Buyer review notifications</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Rating reminders notifications</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Meetups near you notifications</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Company news notifications</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>New launches and projects</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Monthly product changes</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Subscribe to newsletter</p>
          <Changestatus />
        </li>
        <li className="w-full flex justify-between items-center">
          <p>Email me when someone follows me</p>
          <Changestatus />
        </li>
      </ul>
    </div>
  );
};

export default Controll;
