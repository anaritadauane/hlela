import { useQuery } from "react-query";
import { categoriesApi } from "../src/api/api";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Categories = () => {
  const { data, isLoading } = useQuery("categories", categoriesApi);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className='bg-gray-50 p-8'>
        <div className='max-w-7xl mx-auto text-center mb-12'>
          <h1 className='text-3xl font-bold'>What are you looking for?</h1>
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Search'
              className='w-full md:w-1/2 p-3 border rounded-full'
            />
          </div>
        </div>
        <div className='max-w-7xl mx-auto text-center mb-12'>
          <h2 className='text-2xl font-bold mb-8'>
            Explore companies by category
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {data.map(
              (category: {
                id: number;
                name: string;
                description: string;
                businesses: {
                  id: number;
                  name: string;
                  description: string;
                  website: string;
                  phoneNumber: string;
                  email: string;
                  address: string;
                  averageRating: string;
                  numberOfRatings: string;
                  categoryId: number;
                }[];
              }) => (
                <div
                  key={category.id}
                  className={`p-6 rounded-lg shadow-lg bg-violet-100`}
                >
                  {/* <div className="text-3xl mb-4">{category.icon}</div> */}
                  <h3 className='text-xl font-thin mb-4'>{category.name}</h3>
                  <ul className='text-left'>
                    {/* Code to display the businesses */}
                    {category.businesses.map((business) => (
                      <li key={business.id} className='mb-2'>
                        {business.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
