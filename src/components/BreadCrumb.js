const BreadCrumb = ({ currentPage, screen_size_padding_x }) => {
  return (
    <nav
      className={`flex text-lg pt-28 md:pt-36 px-7 ${
        screen_size_padding_x ? screen_size_padding_x : "md:px-36"
      }`}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center">
        <li className="inline-flex items-center ">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-900 "
          >
            <svg
              className="fill-site-neutrals-700 inline w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.196 20.021 4 19.55 4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.35433 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C10.9833 3.76667 11.175 3.66667 11.375 3.6C11.575 3.53333 11.7833 3.5 12 3.5C12.2167 3.5 12.425 3.53333 12.625 3.6C12.825 3.66667 13.0167 3.76667 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.9293 9.38333 20 9.68333 20 10V19C20 19.55 19.8043 20.021 19.413 20.413C19.021 20.8043 18.55 21 18 21H13V15H11V21H6Z"></path>
            </svg>
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-700 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href={currentPage.toLowerCase()}
              className="ms-1 text-sm text-black font-semibold h"
            >
              {currentPage}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
