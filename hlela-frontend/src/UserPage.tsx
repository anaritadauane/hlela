import { useQuery } from "react-query";
import { usersApi } from "./api/api";

const UsersPage = () => {
  const { data, isLoading } = useQuery("users", usersApi);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }

  return (
    <ul>
      {data.map(
        (user: {
          id: number;
          firstName: string;
          username: string;
          email: string;
        }) => (
          <li key={user.id}>{user.firstName}</li>
        )
      )}
    </ul>
  );
};

export default UsersPage;
