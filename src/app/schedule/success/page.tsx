export default function Success() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Meeting Scheduled!</h1>
        <p className="mt-2 text-gray-600">
          You&apos;ll receive an email confirmation with the meeting details shortly.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          The meeting has been added to both your and the advisor&apos;s calendar.
        </p>
      </div>
    </div>
  );
} 