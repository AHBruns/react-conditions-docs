import { Link } from "react-router-dom";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";

export function Header() {
  return (
    <div className="relative z-20 flex items-center justify-between p-4 bg-gray-800 shadow-lg">
      <div className="px-4">
        <Link to="/" className="text-2xl font-bold text-green-500">
          React Conditions
        </Link>
      </div>
      <div className="flex items-center gap-4 px-4">
        <a
          className="text-gray-100 hover:text-green-500"
          href="https://github.com/AHBruns/react-conditions"
          target="_blank"
        >
          <VscGithubInverted size={24} />
        </a>
        <a
          className="text-gray-100 hover:text-green-500"
          href="https://twitter.com/AlexHBruns"
          target="_blank"
        >
          <VscTwitter size={24} />
        </a>
      </div>
    </div>
  );
}
