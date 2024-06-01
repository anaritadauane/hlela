// import { useQuery } from "react-query";
// import { categoriesApi } from "../api/api";

export const CategoriesList = () => {
  //   const { data } = useQuery("categories", categoriesApi);
  const getRandomColor = () => {
    const colors = [
      "yellow-200",
      "lime-200",
      "green-200",
      "indigo-200",
      "rose-200",
      "violet-200",
      "pink-200",
      "fuchsia-200",
      "purple-200",
      "blue-200",
      "orange-200",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const data = [
    {
      id: 2,
      name: "Retail Stores",
      description:
        "Users share their shopping experiences at different retail stores, including clothing boutiques, electronics shops, and more.",
    },
    {
      id: 3,
      name: "Travel and Accommodation",
      description:
        "Users can review hotels, hostels, vacation rentals, and travel agencies, providing insights into accommodations and travel services.",
    },
    {
      id: 4,
      name: "Health and Wellness Services",
      description:
        " This category covers reviews of healthcare providers, fitness centers, spas, and wellness clinics, helping users make informed decisions about their health and well-being.",
    },
    {
      id: 1,
      name: "Restaurants and Cafes",
      description:
        "Users can review and rate their dining experiences at various restaurants and cafes, helping others find the best places to eat in their area.",
    },
    {
      id: 5,
      name: "Home Services",
      description:
        "Users can rate and review services such as plumbers, electricians, cleaners, and handymen, assisting others in finding reliable professionals for their home needs.",
    },
    {
      id: 6,
      name: "Automotive Services",
      description:
        "Reviews in this category focus on auto repair shops, car dealerships, and car rental companies, helping users find trustworthy automotive services.",
    },
    {
      id: 7,
      name: "Education and Tutoring",
      description:
        "Users can share their experiences with educational institutions, tutoring services, online courses, and learning platforms, aiding others in making educational choices.",
    },
    {
      id: 8,
      name: "Technology Products",
      description:
        "Users can review various tech gadgets, software applications, and online services, offering insights into their performance and usability.",
    },
    {
      id: 9,
      name: "Financial Services",
      description:
        "Reviews in this category cover banks, credit unions, insurance companies, and investment firms, assisting users in making financial decisions.",
    },
  ];
  console.log(data);
  const randomColor = getRandomColor();
  console.log(randomColor);

  return (
    <div className='bg-base-100 max-w-6xl mx-auto p-8'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold content-center'>Explore categories</h2>
        <button className='btn btn-sm rounded-full'>View All</button>
      </div>
      <div className='grid grid-rows-3 grid-flow-col gap-4 pb-8'>
        {data.map(
          (category: { id: number; name: string; description: string }) => (
            <div
              key={category.id}
              className={`flex items-center space-x-3 bg-${getRandomColor()} rounded-full`}
            >
              <p className='p-4 text-sm'>{category.name}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
