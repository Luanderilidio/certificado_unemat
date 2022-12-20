import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className=" flex justify-end flex-row p-5 w-full hover:font-medium text-white">
      <div className="transition ease-in-out hover:-translate-y-1 rounded-md  active:border-blue-300 flex border-solid border-2 border-blue-500 hover:border-blue-700 flex-g p-2 items-center ">
        <FaGithub className="mr-2 " />
        <p className="">Github</p>
      </div>
    </div>
  );
}
