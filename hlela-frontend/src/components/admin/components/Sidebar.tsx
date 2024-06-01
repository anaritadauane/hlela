import { useState } from "react";
import UsersPage from "../../../UserPage";
import CategoriesPage from "../../../CategoriesPage";
const UsersContent = () => (
  <div>
    <div className='flex justify-between'>
      <p className='font-bold self-center'>All Users</p>
      <button className='btn btn-secondary btn-sm rounded-full'>
        Add Users
      </button>
    </div>
    <UsersPage />
  </div>
);
const CategoriesContent = () => (
  <div>
    <div className='flex justify-between'>
      <p className='font-bold self-center'>All Categories</p>
      <button className='btn btn-secondary btn-sm rounded-full'>
        Add Categories
      </button>
    </div>
    <CategoriesPage />
  </div>
);
const Sidebar = () => {
  const [activeContent, setActiveContent] = useState({
    text: "Users",
    content: <UsersContent />,
  });

  const links = [
    { text: "Users", content: <UsersContent /> },
    { text: "Categories", content: <CategoriesContent /> },
  ];
  return (
    <div>
      <div>
        <div className='font-RobotoMono drawer lg:drawer-open' id='sidebar'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content px-10 py-4'>
            {/* Display active content */}
            {activeContent.content}
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-2'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
              {/* Map through the links array to generate dynamic links */}
              {links.map((link, index) => (
                <li className='p-1' key={index}>
                  {/* On click, update the active content */}
                  <button onClick={() => setActiveContent(link)}>
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
