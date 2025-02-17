import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get("https://food-pocky01.vercel.app/Admin/user");
      return data;
    },
  });

  console.log(users);
  const handleMakeAdmin = (id) => {
    axios.patch(`https://food-pocky01.vercel.app/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("succesfully change the user Role", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto pb-6">
      <div className="w-1/5 pt-10">
        <h1 className="text-4xl  font-medium mt-10 border-user ">
          All User Collection
        </h1>
      </div>
      <div className="relative overflow-x-auto  mt-10">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs bg-slate-100  uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Gmail
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="b ">
                <th scope="row" className="px-6 py-4   whitespace-nowrap ">
                  {i + 1}
                </th>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium  whitespace-nowrap "
                >
                  <img
                    className="w-16  object-cover rounded-full"
                    src={user.image}
                    alt=""
                  />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {user.name}
                </th>

                <td className=" py-4 ">{user.email}</td>
                <td className="px-6 py-4">
                  {user.role ? (
                    <span className="bg-green-500 px-3 rounded-lg font-bold">
                      {user.role}
                    </span>
                  ) : (
                    "Normal User"
                  )}
                </td>
                <td className="px-6 py-4">
                  {user.role == "admin" ? (
                    <button className="font-medium bg-green-500 px-2 rounded-lg hover:underline">
                      Already Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeAdmin(user._id);
                      }}
                      href="#"
                      className="font-medium bg-green-200 px-2 rounded-lg text-blue-800  hover:underline"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
