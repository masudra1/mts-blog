import { useContext } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { BlogContext } from "../context/BlogContext";
import { useTranslation } from "react-i18next";

function Sports() {
  const { blogs, loading } = useContext(BlogContext);

  // Filter only Entertainment blogs and reverse to show latest first
  const entertainmentBlogs = blogs
    .filter((blog) => blog.category === "Sports" || blog.category === "খেলাধুলা")
    .reverse();
  const { t } = useTranslation();


  if (loading) return <LoadingSpinner />;


  return (
    <div className="mt-20 w-full bg-white shadow-md rounded-lg pb-14">
      <h1 className="text-4xl font-bold my-10 text-center">{t("sports")}</h1>

      <div className="w-full max-w-[1400px] px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4">
        {/* Column 1 */}
        <div>
          {entertainmentBlogs.slice(1, 5).map((item) => (
            <div
              key={item._id}
              className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4 first:mt-0 rounded-md"
            >
              <img
                className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                src={
                  item?.imageUrl ||
                  "https://source.unsplash.com/600x400/?entertainment"
                }
                alt={item?.title}
              />
              <div className="p-2">
                <Link
                  to={`/blogs/${item._id}`}
                  className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {item?.title?.split(" ").slice(0, 4).join(" ") + "..."}
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Column 2 */}
        <div>
          {entertainmentBlogs.slice(0, 1).map((item) => (
            <div
              key={item._id}
              className="bg-blue-50 p-2 mt-4 first:mt-0 rounded-md"
            >
              <img
                className="w-full h-64 sm:h-72 lg:h-78 object-cover object-top overflow-hidden transition-all duration-300 hover:scale-105"
                src={
                  item?.imageUrl ||
                  "https://source.unsplash.com/600x400/?entertainment"
                }
                alt={item?.title}
              />
              <div className="p-2">
                <Link
                  to={`/blogs/${item._id}`}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {item?.title?.split(" ").slice(0, 6).join(" ") + "..."}
                </Link>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {item?.content?.split(" ").slice(0, 70).join(" ") + '...'}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* Column 3 */}
        <div>
          {entertainmentBlogs.slice(5, 9).map((item) => (
            <div
              key={item._id}
              className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4 first:mt-0 rounded-md"
            >
              <img
                className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                src={
                  item?.imageUrl ||
                  "https://source.unsplash.com/600x400/?entertainment"
                }
                alt={item?.title}
              />
              <div className="p-2">
                <Link
                  to={`/blogs/${item._id}`}
                  className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {item?.title?.split(" ").slice(0, 4).join(" ") + "..."}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sports;
