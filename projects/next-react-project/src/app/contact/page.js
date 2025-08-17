export default function Page() {
  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-black">
        Contact Us
      </h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="focus:ring-2 focus:ring-blue-500 border-gray-300 border"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="focus:ring-2 focus:ring-blue-500 border-gray-300 border"
          ></textarea>
        </div>
        <button type="submit" className="text-white bg-blue-600 rounded-md p-3">
          Send message
        </button>
      </form>
    </main>
  );
}
