import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ChevronDownIcon,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb
        currentPage="Custom-Software"
        screen_size_padding_x="xl:px-36"
      />
      <section className=" px-7 xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          CUSTOM SOFTWARE DEVELOPMENT COMPANY
        </div>
        <div className="my-6 flex w-full ">
          <div className="flex flex-col gap-4 lg:gap-0 justify-between py-10 lg:pr-20 w-full lg:w-[670px] xl:w-[820px]">
            <h1 className=" text-gray-900/90 font-medium my-4 text-4xl sm:text-5xl xl:text-6xl">
              Build unique software, tailored to your business needs.&nbsp;
            </h1>
            <p className=" text-gray-900/70 my-4  text-xl ">
              Access the top 1% of LATAM tech talent within 2 weeks. Create
              secure, custom solutions to engage users and streamline business
              operations.
            </p>
            <a href="/basic-detail" className="w-fit">
              <button className="bg-orange-600/95  text-white text-lg md:text-xl font-medium sm:font-normal px-3 py-2 sm:px-5 sm:py-3 rounded-lg">
                Level Up Your Custom Software Development
              </button>
            </a>
          </div>
          <div>
            <img
              className="h-[400px] w-[300px] xl:w-[550px] object-cover rounded-l-2xl xl:absolute lg:block hidden"
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_828/v1702562452/www/core/custom_software_development_services_9fe8d577d4.png"
              alt="custom-software"
            />
          </div>
        </div>
      </section>

      <section className=" px-7 xl:px-36 pb-16">
        <div>
          <h1 className="text-3xl md:text-5xl mb-10">
            Custom Software Development Services
            <br /> We Provide
          </h1>
          <div>
            <div className="flex flex-col md:flex-row gap-20 mb-10">
              <div>
                <hr />
                <div className="flex">
                  <div className="px-1">
                    <svg
                      className="fill-site-primary-600 w-6 h-6 text-orange-500 mt-[1.1rem]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01267 9.35433 5.738 9.363C5.46267 9.371 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.246 7.81233 15.238 7.537C15.2293 7.26233 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"></path>
                    </svg>
                  </div>
                  <div className="pr-10">
                    <h3 className="text-xl py-3">
                      Custom Software Development
                    </h3>
                    <p className="text-md text-gray-900/80">
                      Custom software development allows organizations to
                      optimize workflows, enhance productivity, and gain a
                      competitive edge by building technologies aligned with
                      their business objectives. Custom software solutions also
                      provide flexibility and can be adapted to evolving needs.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex">
                  <div className="px-1">
                    <svg
                      className="fill-site-primary-600 w-6 h-6 text-orange-500 mt-[1.1rem]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01267 9.35433 5.738 9.363C5.46267 9.371 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.246 7.81233 15.238 7.537C15.2293 7.26233 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"></path>
                    </svg>
                  </div>
                  <div className="pr-10">
                    <h3 className="text-xl py-3">
                      Enterprise Software Development
                    </h3>
                    <p className="text-md text-gray-900/80">
                      Custom software development allows organizations to
                      optimize workflows, enhance productivity, and gain a
                      competitive edge by building technologies aligned with
                      their business objectives. Custom software solutions also
                      provide flexibility and can be adapted to evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-20 mb-10">
              <div>
                <hr />
                <div className="flex">
                  <div className="px-1">
                    <svg
                      className="fill-site-primary-600 w-6 h-6 text-orange-500 mt-[1.1rem]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01267 9.35433 5.738 9.363C5.46267 9.371 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.246 7.81233 15.238 7.537C15.2293 7.26233 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"></path>
                    </svg>
                  </div>
                  <div className="pr-10">
                    <h3 className="text-xl py-3">
                      Software Product Development
                    </h3>
                    <p className="text-md text-gray-900/80">
                      Custom software development allows organizations to
                      optimize workflows, enhance productivity, and gain a
                      competitive edge by building technologies aligned with
                      their business objectives. Custom software solutions also
                      provide flexibility and can be adapted to evolving needs.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex">
                  <div className="px-1">
                    <svg
                      className="fill-site-primary-600 w-6 h-6 text-orange-500 mt-[1.1rem]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01267 9.35433 5.738 9.363C5.46267 9.371 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.246 7.81233 15.238 7.537C15.2293 7.26233 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"></path>
                    </svg>
                  </div>
                  <div className="pr-10">
                    <h3 className="text-xl py-3">
                      Software Integration Services
                    </h3>
                    <p className="text-md text-gray-900/80">
                      Custom software development allows organizations to
                      optimize workflows, enhance productivity, and gain a
                      competitive edge by building technologies aligned with
                      their business objectives. Custom software solutions also
                      provide flexibility and can be adapted to evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-20 mb-10">
              <div>
                <hr />
                <div className="flex">
                  <div className="px-1">
                    <svg
                      className="fill-site-primary-600 w-6 h-6 text-orange-500 mt-[1.1rem]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01267 9.35433 5.738 9.363C5.46267 9.371 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.246 7.81233 15.238 7.537C15.2293 7.26233 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"></path>
                    </svg>
                  </div>
                  <div className="pr-10">
                    <h3 className="text-xl py-3">
                      Custom Software Development
                    </h3>
                    <p className="text-md text-gray-900/80">
                      Custom software development allows organizations to
                      optimize workflows, enhance productivity, and gain a
                      competitive edge by building technologies aligned with
                      their business objectives. Custom software solutions also
                      provide flexibility and can be adapted to evolving needs.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex">
                  <div className="px-1">
                    <svg
                      className="fill-site-primary-600 w-6 h-6 text-orange-500 mt-[1.1rem]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01267 9.35433 5.738 9.363C5.46267 9.371 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.246 7.81233 15.238 7.537C15.2293 7.26233 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"></path>
                    </svg>
                  </div>
                  <div className="pr-10">
                    <h3 className="text-xl py-3">
                      Custom Software Development
                    </h3>
                    <p className="text-md text-gray-900/80">
                      Custom software development allows organizations to
                      optimize workflows, enhance productivity, and gain a
                      competitive edge by building technologies aligned with
                      their business objectives. Custom software solutions also
                      provide flexibility and can be adapted to evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-7 xl:px-36 pb-16">
        <h1 className="text-3xl md:text-5xl mb-10">
          Best Practices for Custom Software <br />
          Development
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl md:text-3xl font-normal text-gray-900/80 hover:underline hover:text-orange-500/95 ">
              Planning and Requirements
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Setting Clear Goals</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Start by defining the project's specific requirements and
                  scope to ensure clarity and focus.
                </p>
              </div>
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Collaborative Input</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Involve key stakeholders in the requirements gathering process
                  to gather diverse perspectives and needs.
                </p>
              </div>
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Methodology Selection</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Choose between agile or waterfall development methodologies
                  based on the project's nature and goals.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl md:text-3xl font-normal text-gray-900/80">
              Design and Development
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Setting Clear Goals</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Start by defining the project's specific requirements and
                  scope to ensure clarity and focus.
                </p>
              </div>
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Collaborative Input</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Involve key stakeholders in the requirements gathering process
                  to gather diverse perspectives and needs.
                </p>
              </div>
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Methodology Selection</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Choose between agile or waterfall development methodologies
                  based on the project's nature and goals.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl md:text-3xl font-normal text-gray-900/80 text-left">
              Project Management and Communication
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Setting Clear Goals</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Start by defining the project's specific requirements and
                  scope to ensure clarity and focus.
                </p>
              </div>
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Collaborative Input</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Involve key stakeholders in the requirements gathering process
                  to gather diverse perspectives and needs.
                </p>
              </div>
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">Methodology Selection</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  Choose between agile or waterfall development methodologies
                  based on the project's nature and goals.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="px-7 xl:px-36 pb-16 mb-20">
        <h1 className="text-3xl md:text-5xl mb-10">FAQs</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-normal">
              How does custom software development differ from off-the-shelf
              software?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-slate-900/80 p-3">
              <p>
                Custom software development is designed to meet the needs of a
                particular user or business, while off-the-shelf software is
                developed for a broader audience. One of the main advantages of
                custom solutions is that they are flexible and can fit in with a
                company's other systems and software, while off-the-shelf
                solutions are less flexible and not designed with the business
                in mind.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-normal">
              What are the benefits of developing custom software?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-slate-900/80 p-3">
              <p>
                There are many benefits to developing custom software, including
                personalization, efficiency, and scalability. Custom software
                developers design and build the systems with your infrastructure
                and current systems in mind, which means they will integrate
                seamlessly with your other software. Ultimately, this leads to
                greater productivity and reliability.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Footer />
    </>
  );
};

export default page;
