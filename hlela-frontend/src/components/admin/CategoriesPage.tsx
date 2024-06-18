import { useQuery } from "react-query";
import { categoriesApi } from "../../api/api";

const CategoriesPage = () => {
  const { data, isLoading } = useQuery("categories", categoriesApi);
  console.log(data);

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
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through data to generate table rows */}
          {data.map(
            (category: {
              id: number;
              name: string;
              description: string;
              subcategories: {
                name: string;
              }[];
            }) => (
              <tr key={category.id}>
                <th>{category.id}</th>
                <td>{category.name}</td>
                <td>{category.description}</td>
                {/* <td>
                  {category.subcategories.map(
                    (subcategory: { name: string }) => subcategory.name
                  )}
                  <br />
                </td> */}
                <td className='flex justify-between'>
                  <button className='btn btn-ghost btn-xs'>Edit</button>
                  <button className='btn btn-ghost btn-xs'>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesPage;
