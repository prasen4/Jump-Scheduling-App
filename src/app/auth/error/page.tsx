'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const getErrorMessage = (error: string | null) => {
  switch (error) {
    case 'OAuthAccountNotLinked':
      return 'This email is already associated with a different sign-in method. Please use your original sign-in method.';
    case 'OAuthSignin':
      return 'Error occurred during sign in. Please try again.';
    case 'OAuthCallback':
      return 'Error occurred during the OAuth callback. Please try again.';
    case 'OAuthCreateAccount':
      return 'Could not create OAuth account. Please try again.';
    case 'EmailCreateAccount':
      return 'Could not create email account. Please try again.';
    case 'Callback':
      return 'Error occurred during the callback. Please try again.';
    case 'AccessDenied':
      return 'Access denied. You do not have permission to sign in.';
    case 'Configuration':
      return 'There is a problem with the server configuration. Please contact support.';
    default:
      return 'An unknown error occurred. Please try again.';
  }
};

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const errorMessage = getErrorMessage(error);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <div className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-red-600">
              {errorMessage}
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/auth/signin"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Try signing in again
          </Link>
        </div>
      </div>
    </div>
  );
} 