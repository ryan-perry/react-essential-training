export default function Page() {
  async function submitForm(formData) {
    "use server";

    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("formFields: ", formFields);
    console.log("TODO: send these form field values to a backend");

    return formFields;
  }

  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-black">
        Contact Us
      </h1>
      <form className="space-y-4" action={submitForm}>
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
            className="focus:ring-2 focus:ring-blue-500 border-gray-300 border text-gray-700"
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
            className="focus:ring-2 focus:ring-blue-500 border-gray-300 border text-gray-700"
          ></textarea>
        </div>
        <button type="submit" className="text-white bg-blue-600 rounded-md p-3">
          Send message
        </button>
      </form>
    </main>
  );
}
