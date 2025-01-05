import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Hello User
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
        <div className="flex flex-col justify-center h-full mr-4">
          <button
            onClick={() => {
              if (localStorage.getItem("token")) {
                localStorage.removeItem("token");
              }
              navigate("/signin");
            }}
            className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
