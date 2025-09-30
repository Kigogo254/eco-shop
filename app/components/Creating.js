export function Creating() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

      {/* Message */}
      <h1 className="mt-6 text-xl font-semibold text-gray-700 text-center">
        Creating your product...  
        <br /> Please wait a moment!
      </h1>
    </div>
  );
}
