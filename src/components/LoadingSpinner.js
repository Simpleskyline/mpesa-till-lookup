function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-3 py-8">
      <div className="w-10 h-10 border-4 border-gray-700 border-t-green-500 rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm">Looking up till number...</p>
    </div>
  );
}

export default LoadingSpinner;
