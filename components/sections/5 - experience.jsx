"use server";

import Image from "next/image";

const roles = [
  {
    title: "Research Assistant",
    previousTitle: "Research Intern",
    company: "Washington State University",
    icon: "/wsu.png",
    date: "Aug 2023 - Present",
    description: [
      "Created huge XLSX dataset of libraries by developing a Python script to collect data from WorldCat API.",
      "Collected, cleaned, and filtered thousands of rows of data before making a visualization using Tableau.",
      "Co-authored research poster for presentation at WSU Academic Showcase 24 & WSU Everett Symposium.",
      "Co-authoring research paper about the state of Ukrainian literature across U.S. libraries. Submitted for ACH 24.",
    ],
    items: [
      {
        image: "/wsu.png",
        alt: "Washington State University",
        link: "https://www.ukrainianbookproject.com/",
      },
      {
        image: "/wsu-poster.png",
        alt: "WSU Academic Showcase 24 Poster",
        link: "https://www.figma.com/design/a587LZy952mJq3tZyj4hvF/Mapping-Ukrainian-collections-in-U.S.-public-libraries%E2%80%8B?node-id=0-1&t=LOb1BWCWKX4nmtmA-1",
      },
    ],
  },
  {
    title: "President of the Board",
    previousTitle:
      "Vice President of the Board, Director of Public Relations, Team Captain",
    company: "Mukilteo Robotics",
    date: "Nov 2022 - Present",
    description: [
      "Grew the organization to 45 active members who participated during the 2023 - 2024 season as competitors or collegiate mentors (an increase from 23 total members the previous season with a YoY growth of 96%)",
      "As the first-ever Director of Public Relations for Mukilteo Robotics, I created all branding elements from scratch, including colors, fonts, visual elements, and messaging, to ensure a solid and consistent identity.",
      "Helped raise over $21,000 (in-season costs, not including $11,000 raised for world championship) for the organization via fundraising efforts. Co-writer of Analog Devices grant proposal that secured $5,000 in funding.",
    ],
    items: [
      {
        image: "/mr.jpeg",
        alt: "Mukilteo Robotics",
        link: "https://www.mukilteorobotics.org/",
      },
      {
        image: "/mr-report.png",
        alt: "Mukilteo Robotics Annual Report",
        link: "https://www.mukilteorobotics.org/2023-2024-Report.pdf",
      },
    ],
  },
  {
    title: "Vice Chairman",
    previousTitle: "Council Member",
    company: "Legislative Youth Advisory Council (LYAC)",
    date: "July 2023 - Present",
    description: [
      "One of twelve students selected by the lieutenant governor's office from across Washington State to serve as a youth advisor to state legislators. Recently elected to serve as Vice Chairman for next year.",
      "Working on language access in education legislation to help ELL students get the support they need.",
      "Panelist for the 2024 Washington State Action Day, along with Senator Torres, Katherine Mahoney, and Stacy Osoria. Spoke about the importance of youth voice in policy-making to over 80+ in-person attendees. ",
      "Panelist for The Role of Artificial Intelligence in Education LEVinar hosted by the League of Education Voters. Discussed the potential benefits and drawbacks of AI in education to over 35+ live attendees.",
    ],
    items: [
      {
        image: "/lyac.png",
        alt: "Legislative Youth Advisory Council",
        link: "https://walyac.org/",
      },
    ],
  },
  {
    title: "Founder, Executive Director",
    company: "FOYM.",
    date: "July 2023 - Present",
    description: [
      "Collaborating with nonprofits and organizations to design and develop websites that enhance their reach and influence, all at no cost.",
      "Designing, developing, and programming modern websites using technologies like HTML, CSS, Figma, React, Next.JS, & Tailwind CSS.",
    ],
    items: [
      {
        image: "/foym.png",
        alt: "FOYM",
        link: "https://www.foym.org/",
      },
    ],
  },
  {
    title: "Director of Front-End Development",
    previousTitle: "Front-End Lead",
    company: "4Human Corporation",
    date: "Dec 2023 - Sep 2024",
    description: [
      "Directing front-end development for the entire 4Human organization. Personally executing the development of the 4Human website.",
      "Overseeing developers creating and developing front-end interfaces for multiple full-stack applications built in collaboration with other organizations.",
    ],
    items: [
      {
        image: "/4h.png",
        alt: "4Human Corporation",
        link: "https://www.4human.co/",
      },
    ],
  },
];

export default async function Experience() {
  return (
    <div className="mt-12">
      <h1 className="font-semibold tracking-tight text-black text-xl">
        Experience
      </h1>
      <div className="mt-3 scale-[101%]  border-b border-neutral-200 " />
      {roles.map((role) => (
        <div key={role.company} className="mt-6">
          <div className="flex">
            {/* <div className="flex">
              <Image
                src={role.icon || "/wsu.png"}
                alt={role.company}
                width={60}
                height={60}
                className="rounded-md border border-neutral-400/50 shadow-inner mr-2"
              />
            </div> */}
            <div>
              <h2 className="text-lg tracking-tight font-semibold">
                {role.title}
              </h2>
              {role.previousTitle && (
                <p className="mt-1 mb-1 text-sm sm:text-base font-medium leading-4 text-neutral-800/60 italic">
                  Previously: {role.previousTitle}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">
              {role.company}
            </p>
            <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80">
              {role.date}
            </p>
          </div>
          <div className="mt-2 text-sm sm:text-base leading-6 text-neutral-600/80">
            <ol className="list-outside ml-4">
              {role.description.map((desc, index) => (
                <li key={index} className="mt-2 list-outside list-disc">
                  {Array.isArray(desc)
                    ? desc.map((d, i) => (
                        <p key={i} className="mt-2">
                          {d}
                        </p>
                      ))
                    : desc}
                </li>
              ))}
            </ol>
          </div>
          {role.items && (
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {role.items.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mr-2 rounded-md relative shadow-sm h-20"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="rounded-md object-cover border aspect-video border-neutral-400/50 shadow-inner w-full"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
