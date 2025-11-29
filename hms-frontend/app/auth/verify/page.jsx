export default function VerifyEmail() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-green-600">Email Verification Sent</h1>
      <p className="mt-3 text-gray-600">Please check your email.</p>

      <a
        href="/onboarding"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Continue to Onboarding (dummy)
      </a>
    </div>
  );
}
