export function Lost() {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-xl p-4 space-y-2 bg-gray-100 rounded-md">
        <h3 className="text-lg font-bold leading-tight tracking-wider">
          It looks like this page doesn't exist!
        </h3>
        <p className="leading-tight tracking-wider text-gray-700">
          This is probably because I forgot to make this page before linking to
          it. Dropping an issue on GitHub would really be appreciated. In the
          meantime, you can use the sidebar to find your way back to a working
          page.
        </p>
      </div>
    </div>
  );
}
