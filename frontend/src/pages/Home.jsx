import React from "react";
import LayoutHomePage from "../components/LayoutHomePage";
import Slider from "react-slick";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Update,
  StarOutline,
  PlayLesson,
  School,
  RecordVoiceOver,
  LocalLibrary,
} from "@mui/icons-material";

export default function Home({ setLoading, active, setActive }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settingsTestimonial = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutHomePage
      setLoading={setLoading}
      active={active}
      setActive={setActive}
    >
      <section className="pt-24 max-w-screen-2xl">
        <div className="slider-container">
          <Slider {...settings}>
            <div key="1">
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="px-10 w-full md:w-1/2">
                  <span className="text-sm text-gray-400">
                    Unlock Your Potential
                  </span>
                  <p className="text-5xl text-slate-800 font-bold mt-10 leading-tight">
                    Welcome to Study House, your gateway to academic success!
                  </p>
                  <span className="text-gray-600 mt-10">
                    Explore our comprehensive collection of study materials,
                    expert tutorials, and interactive resources designed to
                    empower learners of all levels.
                  </span>
                </h2>
                <div className="overflow-hidden relative w-full md:w-1/2">
                  <img
                    src="/images/study1.png"
                    alt="Study"
                    className="w-full h-full mt-5 md:h-[35rem] object-contain"
                    width={"auto"}
                    height={"auto"}
                    srcSet="/images/study1.png"
                  />
                </div>
              </div>
            </div>
            <div key="2">
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="px-10 w-full md:w-1/2">
                  <span className="text-sm text-gray-400 ml-5">
                    Unlock Your Potential
                  </span>
                  <p className="text-5xl text-slate-800 font-bold mt-10 leading-tight">
                    Welcome to Study House, your gateway to academic success!
                  </p>
                  <span className="text-gray-600 mt-10">
                    Explore our comprehensive collection of study materials,
                    expert tutorials, and interactive resources designed to
                    empower learners of all levels.
                  </span>
                </h2>
                <div className="overflow-hidden relative w-full md:w-1/2">
                  <img
                    src="/images/study2.png"
                    alt="Study"
                    className="w-full h-full mt-5 md:h-[35rem] object-contain"
                    width={"auto"}
                    height={"auto"}
                    srcSet="/images/study2.png"
                  />
                </div>
              </div>
            </div>
            <div key="3">
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="px-10 w-full md:w-1/2">
                  <span className="text-sm text-gray-400 ml-5">
                    Unlock Your Potential
                  </span>
                  <p className="text-5xl text-slate-800 font-bold mt-10 leading-tight">
                    Welcome to Study House, your gateway to academic success!
                  </p>
                  <span className="text-gray-600 mt-10">
                    Explore our comprehensive collection of study materials,
                    expert tutorials, and interactive resources designed to
                    empower learners of all levels.
                  </span>
                </h2>
                <div className="overflow-hidden relative w-full md:w-1/2">
                  <img
                    src="/images/study3.png"
                    alt="Study"
                    className="w-full h-full mt-5 md:h-[35rem] object-contain"
                    width={"auto"}
                    height={"auto"}
                    srcSet="/images/study3.png"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex flex-row items-center justify-center w-full pt-20">
          <img
            src="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202331_330x62.png?v=1613532673"
            alt="GeekWire"
            srcset="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202331_330x62.png?v=1613532673"
            className="mx-3 md:mx-10 w-14 md:w-20 lg:w-48"
            width={"auto"}
            height={"auto"}
          />
          <img
            src="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202312_330x50.png?v=1613532673"
            alt="GeekWire"
            srcset="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202312_330x50.png?v=1613532673"
            className="mx-3 md:mx-10 w-14 md:w-20 lg:w-48"
            width={"auto"}
            height={"auto"}
          />
          <img
            src="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202323_330x66.png?v=1613532673"
            alt="GeekWire"
            srcset="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202323_330x66.png?v=1613532673"
            className="mx-3 md:mx-10 w-14 md:w-20 lg:w-48"
            width={"auto"}
            height={"auto"}
          />
          <img
            src="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202336_330x85.png?v=1613532673"
            alt="GeekWire"
            srcset="https://ikuddle.com/cdn/shop/files/WeChat_Image_20200427202336_330x85.png?v=1613532673"
            className="mx-3 md:mx-10 w-14 md:w-20 lg:w-48"
            width={"auto"}
            height={"auto"}
          />
        </div>
        <div className="pt-36 px-10">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-4/12 mr-5">
              <h2 className="font-bold text-4xl">
                Learning Success with Study House
              </h2>
              <p className="mt-5">
                Find out how Study House has been a crucial part of many
                students' academic success. Our testimonials reflect the quality
                and reliability of our study resources.
              </p>
            </div>
            <div className="slider-container w-full md:w-4/6 mt-5">
              <Slider {...settingsTestimonial}>
                <div className="flex flex-row items-center bg-white rounded-2xl p-5 shadow-md !w-72 mx-2">
                  <div className="flex flex-row items-center">
                    <img
                      src="/images/img-usr.png"
                      alt=""
                      srcset="/images/img-usr.png"
                      className="mr-5"
                    />
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-bold">David Sales</h3>
                      <p className="text-gray-400 text-sm">New York City</p>
                      <div className="flex flex-row items-center">
                        <Star className="text-yellow-400 !text-sm" />
                        <Star className="text-yellow-400 !text-sm" />
                        <Star className="text-yellow-400 !text-sm" />
                        <Star className="text-yellow-400 !text-sm" />
                        <StarOutline className="text-yellow-400 !text-sm" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-5">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt, qui minima non quis quibusdam eius! Eligendi
                    tenetur quibusdam rem necessitatibus, fugit dolor quae sunt
                    suscipit sint, officiis aut dolore dignissimos!"
                  </p>
                  <p className="flex flex-row items-center mt-5">
                    <Update />
                    <span className="ml-1">3 days ago</span>
                  </p>
                </div>
                <div className="flex flex-row items-center bg-white rounded-2xl p-5 shadow-md !w-72 mx-2">
                  <div className="flex flex-row items-center">
                    <img
                      src="/images/img-usr.png"
                      alt=""
                      srcset="/images/img-usr.png"
                      className="mr-5"
                    />
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-bold">David Sales</h3>
                      <p className="text-gray-400 text-sm">New York City</p>
                      <div className="flex flex-row items-center">
                        <Star className="text-yellow-400 !text-sm" />
                        <Star className="text-yellow-400 !text-sm" />
                        <Star className="text-yellow-400 !text-sm" />
                        <Star className="text-yellow-400 !text-sm" />
                        <StarOutline className="text-yellow-400 !text-sm" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-5">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt, qui minima non quis quibusdam eius! Eligendi
                    tenetur quibusdam rem necessitatibus, fugit dolor quae sunt
                    suscipit sint, officiis aut dolore dignissimos!"
                  </p>
                  <p className="flex flex-row items-center mt-5">
                    <Update />
                    <span className="ml-1">3 days ago</span>
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="pt-36 px-10">
          <div className="flex flex-row items-center justify-between">
            <div className="w-full">
              <span className="text-sm text-gray-400 ml-5">
                Study House: Where Learning Comes Alive
              </span>
              <h2 className="text-3xl text-slate-800 font-bold mt-3 leading-tight">
                Layanan Pembelajaran Kami
              </h2>
              <div className="flex flex-col items-start md:flex-row md:items-center justify-between w-full mt-3">
                <span className="text-gray-600 w-full md:w-1/2">
                  Join Study House to discover a vibrant community of learners.
                  Get access to comprehensive resources that make learning
                  exciting and effective.
                </span>
                <a className="flex flex-row items-center mt-5" href="">
                  <span>Learn More</span>
                  <ChevronRight className="!text-md ml-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
            <div class="max-w-sm border border-gray-200 rounded-2xl overflow-hidden shadow bg-white my-5 mx-3">
              <a
                href="#"
                className="block md:h-44 xl:h-56 overflow-hidden relative"
              >
                <img
                  class="rounded-t-lg"
                  src="/images/sd.jpg"
                  alt=""
                  srcSet="/images/sd.jpg"
                  width={"auto"}
                  height={"auto"}
                  className="object-contain"
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500">
                    SD
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Matematics, Indonesian Language, All Studies Program.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="max-w-sm border border-gray-200 rounded-2xl overflow-hidden shadow bg-white my-5 mx-3">
              <a
                href="#"
                className="block md:h-44 xl:h-56 overflow-hidden relative"
              >
                <img
                  class="rounded-t-lg"
                  src="/images/smp.jpg"
                  alt=""
                  srcSet="/images/smp.jpg"
                  width={"auto"}
                  height={"auto"}
                  className="object-contain"
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500">
                    SMP
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Matematics, Physics, English Language, Indonesian Language,
                  All Studies Program.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="max-w-sm border border-gray-200 rounded-2xl overflow-hidden shadow bg-white my-5 mx-3">
              <a
                href="#"
                className="block md:h-44 xl:h-56 overflow-hidden relative"
              >
                <img
                  class="rounded-t-lg"
                  src="/images/sma.jpg"
                  alt=""
                  srcSet="/images/sma.jpg"
                  width={"auto"}
                  height={"auto"}
                  className="object-contain"
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500">
                    SMA
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Matematics, Physics, English Language, All Studies Program.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 mx-10 bg-yellow-50 py-10 rounded-3xl px-5">
          <div className="w-full flex justify-start">
            <svg
              width="81"
              height="56"
              viewBox="0 0 81 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 flex flex-row justify-start"
            >
              <path
                d="M80 22C65.6667 18.3334 33 19.6 17 54M67.5 5.40456C53.1667 1.73789 20.5 3.00456 4.5 37.4046"
                stroke="black"
                stroke-width="8"
              />
            </svg>
          </div>
          <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center py-5 !leading-normal">
            Join Study House: Your Gateway to Unparalleled Academic Resources
            and Community Support
          </h3>
          <div className="flex flex-row justify-center items-center mt-5 space-x-3">
            <a
              className="px-5 py-3 text-sm text-center rounded-full text-white bg-blue-600"
              href=""
            >
              Become a Student
            </a>
          </div>
          <div className="w-full flex justify-end">
            <svg
              width="81"
              height="56"
              viewBox="0 0 81 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 flex flex-row justify-end"
            >
              <path
                d="M1 34C15.3333 37.6666 48 36.4 64 1.99998M13.5 50.5954C27.8333 54.2621 60.5 52.9954 76.5 18.5954"
                stroke="black"
                stroke-width="8"
              />
            </svg>
          </div>
        </div>
        <div className="pt-36 px-10">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="w-full md:w-1/2">
              <span className="text-sm text-gray-400 ml-5">
                Why Choose Study House?
              </span>
              <h2 className="text-3xl text-slate-800 font-bold mt-3 leading-tight">
                Interactive <span className="text-blue-500">Learning</span>{" "}
                Tools?
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-start justify-between w-full mt-3">
                <span className="text-gray-600 w-full lg:w-1/2">
                  Study House provides a variety of interactive tools that make
                  learning engaging and effective. From quizzes and flashcards
                  to interactive simulations and games, our tools are designed
                  to reinforce learning and make studying enjoyable.
                </span>
                <a className="flex flex-row items-center my-5" href="">
                  <span>Enroll More</span>
                  <ChevronRight className="!text-md ml-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-t-full bg-white hover:bg-blue-50 border-[1px] border-gray-200 p-10 m-5">
              <div className="flex flex-col justify-center items-center space-y-3 py-10 md:py-5">
                <div className="rounded-full bg-blue-200 p-4 w-14 h-14">
                  <PlayLesson className="text-blue-600" />
                </div>
                <h3 className="text-center font-bold text-lg">
                  Access to a Wide Range of High-Quality Materials
                </h3>
                <p className="text-xs">
                  Study House offers an extensive library of study materials
                  that cover a vast array of subjects and topics. From in-depth
                  notes and detailed explanations to practice tests and video
                  tutorials, our resources are designed to cater to different
                  learning styles and levels.
                </p>
              </div>
            </div>
            <div className="rounded-b-full bg-white hover:bg-blue-50 border-[1px] border-gray-200 p-10 m-5">
              <div className="flex flex-col justify-center items-center space-y-3 py-10 md:py-5">
                <div className="rounded-full bg-blue-200 p-4 w-14 h-14">
                  <School className="text-blue-600" />
                </div>
                <h3 className="text-center font-bold text-lg">
                  Expert Guidance and Support
                </h3>
                <p className="text-xs">
                  At Study House, you are supported by a team of seasoned
                  educators and industry experts who are dedicated to helping
                  you achieve your academic goals.
                </p>
              </div>
            </div>
            <div className="rounded-t-full bg-white hover:bg-blue-50 border-[1px] border-gray-200 p-10 m-5">
              <div className="flex flex-col justify-center items-center space-y-3 py-10 md:py-5">
                <div className="rounded-full bg-blue-200 p-4 w-14 h-14">
                  <RecordVoiceOver className="text-blue-600" />
                </div>
                <h3 className="text-center font-bold text-lg">
                  Personalized Learning Experience
                </h3>
                <p className="text-xs">
                  At Study House, you are supported by a team of seasoned
                  educators and industry experts who are dedicated to helping
                  you achieve your academic goals.
                </p>
              </div>
            </div>
            <div className="rounded-b-full bg-white hover:bg-blue-50 border-[1px] border-gray-200 p-10 m-5">
              <div className="flex flex-col justify-center items-center space-y-3 py-10 md:py-5">
                <div className="rounded-full bg-blue-200 p-4 w-14 h-14">
                  <LocalLibrary className="text-blue-600" />
                </div>
                <h3 className="text-center font-bold text-lg">
                  Expert Guidance and Support
                </h3>
                <p className="text-xs">
                  We recognize that each student has unique learning needs and
                  preferences. Study House offers personalized learning paths
                  that adapt to your progress and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutHomePage>
  );
}
