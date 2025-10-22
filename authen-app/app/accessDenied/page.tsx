export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a002b] via-[#120019] to-black text-purple-200">
      <div className="text-center p-8 rounded-2xl bg-black/30 backdrop-blur-md shadow-lg border border-purple-800/30">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-lg text-white">
          You do not have permission to view this page. <br />
          <span className="text-purple-400 font-semibold">
            Only admins
          </span>{" "}
          have access.
        </p>
      </div>
    </div>
  );
}
