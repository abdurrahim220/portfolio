import React from "react";

const About = () => {
  return (
    <div id="about" className="my-10">
      
      <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold ">Education</h3>
                <span className="text-sm font-bold tracking-tighter uppercase dark:text-gray-400">
                  Those qualification I have achieved.
                </span>
              </div>
            </div>

            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-tighter">
                    Computer Science and Engineering
                  </h3>
                  <time className="text-xs tracking-tighter uppercase dark:text-gray-400">
                    2021-2025
                  </time>
                  <p className="mt-3">
                    As a Bachelor of Science in Computer Science and Engineering
                    (CSE) student at Southeast University, I have gain a solid
                    understanding of the theoretical and practical aspects of
                    computer science and engineering. I will delve into a range
                    of subjects, including programming, computer organization
                    and architecture, algorithms and complexity theory, software
                    engineering, networking and communications, and artificial
                    intelligence. Additionally, I will have the opportunity to
                    explore electives and specialize in a particular area of
                    computer science. Upon graduation, I will be well-equipped
                    for a variety of careers in the computer science and
                    engineering industry, or to pursue further studies in the
                    field.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-tighter">
                    Full-Stack Web Developer
                  </h3>
                  <time className="text-xs tracking-tighter uppercase dark:text-gray-400">
                    dec 2022
                  </time>
                  <p className="mt-3">
                    I learn full-stack web development course from programming
                    hero.From this course I build strong foundation in the
                    latest JavaScript frameworks and technologies.As a
                    full-stack web developer i possesses expertise in both
                    front-end and back-end web development. They are responsible
                    for the entire web development process, from designing and
                    implementing the user interface (UI) to building and
                    maintaining the server-side logic.Now I hold technical
                    skills, experience, and passion for creating engaging and
                    functional web applications.
                  </p>
                </div>

                {/* <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-tighter">
                    Pellentesque habitant morbi
                  </h3>
                  <time className="text-xs tracking-tighter uppercase dark:text-gray-400">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                    velit consectetur nisl, sit amet condimentum lacus orci nec
                    purus. Mauris quis quam suscipit, vehicula felis id,
                    vehicula enim.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
