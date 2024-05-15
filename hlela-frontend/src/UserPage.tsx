import { useQuery } from "react-query";
import { usersApi } from "./api/api";

const UsersPage = () => {
  const { data, isLoading } = useQuery("users", usersApi);

  if (isLoading) {
    return (
      <div className='flex justify-center self-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through data to generate table rows */}
          {data.map(
            (user: {
              id: number;
              firstName: string;
              surname: string;
              username: string;
              email: string;
              isAdmin: boolean;
            }) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.surname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "Yes" : "No"}</td>
                <td className='flex justify-between'>
                  <button className='btn btn-xs'>Edit</button>
                  <button className='btn btn-xs'>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
