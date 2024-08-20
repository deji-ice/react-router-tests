import { useState } from "react";
import { Navigate } from "react-router-dom";

export function Register() {
  const [toDashboard, setToDashboard] = useState(false);

  if (toDashboard === true) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-full bg-blue-600">
      <h1 className="text-white">Register</h1>
      <p className="text-right text-lg font-semibold flex flex-col p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
        Consectetur quia quod natus beatae obcaecati at <br /> consequuntur
        accusamus recusandae laborum quisquam, <br /> facilis neque praesentium
        delectus accusantium iste veritatis architecto!
        <button
          onClick={() => {
            setToDashboard(true);
          }}
          className="bg-blue-500 w-fit self-center mt-20 text-right hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg"
        >
          here
        </button>
      </p>
    </div>
  );
}
