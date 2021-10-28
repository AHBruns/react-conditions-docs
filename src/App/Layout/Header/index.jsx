import { Link } from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc";

export function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="px-4">
        <Link to="/" className="text-2xl font-bold text-green-500">
          React Conditions
        </Link>
      </div>
      <div className="flex items-center px-4">
        <a
          className="text-gray-700 hover:text-green-500"
          href="https://github.com/AHBruns/react-conditions"
          target="_blank"
        >
          <VscGithubInverted size={24} />
        </a>
      </div>
    </div>
  );
}
