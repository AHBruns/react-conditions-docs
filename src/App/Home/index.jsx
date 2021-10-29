import { VscArrowDown } from "react-icons/vsc";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="absolute z-0 w-1/2 bg-blue-600 h-1/2 top-0 left-1/2 filter blur-[100px]" />
      <div className="absolute z-0 w-full bg-purple-700 h-3/5 bottom-0 left-1/5 filter blur-[100px]" />
      <div className="absolute z-0 w-3/4 bg-green-600 h-4/5 top-1/5 left-0 filter blur-[200px]" />
      <div className="absolute z-0 w-1/4 bg-green-500 h-1/2 bottom-0 right-0 filter blur-[100px]" />
      <div className="absolute w-full bg-white inset-0 h-full filter blur-[400px]" />
      <div className="relative z-10 flex flex-col items-center p-8 space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="max-w-2xl text-5xl font-bold text-center text-gray-700">
            <span className="text-green-500">React Conditions</span> makes
            conditional rendering pretty
          </h1>
          <Link to="/getting-started">
            <button className="px-6 py-4 text-xl font-bold leading-none text-gray-700 transition-all duration-500 ease-in-out transform bg-green-500 rounded-md shadow-lg hover:bg-green-400 hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <pre className="w-full overflow-hidden rounded-md">
            <code className="w-full">{`{
  value?.x?.y === 1
    ? <Thingy1 />
    : Array.isArray(value?.x?.y)
      ? <Thingy2 />
      : value?.x?.y?.[0] === 1 && value?.x?.y?.[1] === "a"
        ? <Thingy3 />
        : null
}`}</code>
          </pre>
          <VscArrowDown size={48} className="text-gray-700 animate-bounce" />
          <pre className="w-full overflow-hidden rounded-md">
            <code className="w-full">{`<Match value={{ x: { y: [1, "a"]}}}>
  <Match.With pattern={{ x: { y: 1 } }} show={<Thingy1 />} />
  <Match.With pattern={{ x: { y: Array } }} show={<Thingy2 />} />
  <Match.With pattern={{ x: { y: [1, "a"] } }} show={<Thingy3 />} />
</Match>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
