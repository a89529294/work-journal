import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  return redirect("/");
}

export default function Index() {
  return (
    <div className="p-10">
      <h1 className="text-5xl">Work Journal</h1>
      <p className="mt-2 text-lg text-gray-400">
        Learnings and doings. Updated Weekly.
      </p>

      <div className="my-8 border p-2">
        <Form method="post">
          <p className="italic">Create an entry</p>

          <div>
            <div className="mt-4">
              <input type="date" name="name" className="text-gray-700" />
            </div>

            <div className="mt-2 space-x-6">
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="category"
                  value="work"
                />
                Work
              </label>
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="category"
                  value="learning"
                />
                Learning
              </label>
              <label>
                <input
                  className="mr-1"
                  type="radio"
                  name="category"
                  value="interesting-things"
                />
                Interesting thing
              </label>
            </div>

            <div className="mt-2">
              <textarea
                name="text"
                className="w-full text-gray-700"
                placeholder="Write your entry..."
              />
            </div>

            <div className="mt-1 text-right">
              <button className="bg-blue-500 px-4 py-1 font-medium text-white">
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>

      <div className="mt-6">
        <p>
          Week of January 23<sup>rd</sup>
        </p>

        <div className="mt-3 space-y-4">
          <div>
            <p>Work</p>
            <ul className="ml-8 list-disc">
              <li>First item</li>
              <li>Second item</li>
            </ul>
          </div>
          <div>
            <p>Learnings</p>
            <ul className="ml-8 list-disc">
              <li>First item</li>
              <li>Second item</li>
            </ul>
          </div>
          <div>
            <p>Interesting things</p>
            <ul className="ml-8 list-disc">
              <li>First item</li>
              <li>Second item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
