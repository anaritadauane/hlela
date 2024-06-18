import { useQuery } from "react-query";
import { categoriesApi } from "../src/api/api";

const BlogPage = () => {
  const { data } = useQuery("categories", categoriesApi);
  console.log(data);

  return (
    <div className=''>
      {data.map(
        (category: { id: number; name: string; description: string }) => (
          <p key={category.id} className={``}>
            {category.name}
          </p>
        )
      )}
    </div>
  );
};

export default BlogPage;
