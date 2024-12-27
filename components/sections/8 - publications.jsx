"use server";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "Kamiak Sophomore on a Mission to Assist Nonprofits",
    date: "July 2023",
    released: true,
    badge: "News",
    company: "Mukilteo Beacon",
    image:
      "https://www.mukilteobeacon.com/home/cms_data/dfault/photos/stories/id/9/8/24798/.TEMP/s_topTEMP900x420-6795.jpeg",
    imageAlt: "A photo of Ruslan Mukhamedvaleev",
    link: "https://www.mukilteobeacon.com/story/2023/07/12/schools/kamiak-sophomore-on-a-mission-to-assist-nonprofits/24798.html",
    short:
      "Kamiak High School sophomore Ruslan Mukhamedvaleev is on a mission to help nonprofits and other organizations with their websites and other technology needs.",
  },
  {
    title:
      "14 AI projects to watch: Mozilla's first Builders Accelerator cohort kicks off",
    date: "September 2024",
    released: true,
    badge: "News",
    company: "Mozilla",
    image: "/mozilla.png",
    imageAlt:
      "14 AI projects to watch: Mozilla's first Builders Accelerator cohort kicks off",
    link: "https://blog.mozilla.org/en/mozilla/14-ai-projects-to-watch-mozillas-first-builders-accelerator-cohort-kicks-off/",
    short:
      "Calling on AI and machine learning engineers passionate about open source and local AI, nearly 200 applicants from 44 countries stepped up to push the boundaries of what's possible with running models directly on personal devices instead of relying on the cloud.",
  },
  {
    title:
      "The State of Ukrainian Language Library Collections in U.S. Public Libraries",
    date: "TBD 2025",
    released: false,
    badge: "Research",
    company: "Washington State University",
    image:
      "https://www.mukilteobeacon.com/home/cms_data/dfault/photos/stories/id/9/8/24798/.TEMP/s_topTEMP900x420-6795.jpeg",
    imageAlt: "A photo of Ruslan Mukhamedvaleev",
    link: "https://www.mukilteobeacon.com/story/2023/07/12/schools/kamiak-sophomore-on-a-mission-to-assist-nonprofits/24798.html",
    short:
      "This project sought to address the problem of identifying which US libraries were already collecting new Ukrainian language materials. By discovering which US libraries were already successfully collecting Ukrainian language books, we hoped to collect useful information on vendors and suppliers for Ukrainian books, in order to help libraries with limited collections navigate this new collections area.",
  },
];

export default async function Publications() {
  return (
    <section aria-labelledby="publications-heading" className="mt-12">
      <h2
        id="publications-heading"
        className="font-semibold tracking-tight text-black text-xl"
      >
        Publications
      </h2>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />
      <div className="mt-6 grid grid-cols-3 gap-4">
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="col-span-3"
            itemScope
            itemType={
              pub.badge === "Research"
                ? "https://schema.org/ScholarlyArticle"
                : "https://schema.org/NewsArticle"
            }
          >
            {pub.released ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${pub.title}`}
              >
                <div className="mt-0 bg-neutral-100/50 p-6 rounded-lg flex flex-col sm:flex-row sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/50 transition-all">
                  <div>
                    <div className="flex justify-between">
                      <h3
                        className="text-base font-semibold"
                        itemProp="publisher"
                      >
                        {pub.company}
                      </h3>
                      <Badge
                        style={{
                          height: "fit-content",
                          paddingTop: "4px",
                          paddingBottom: "4px",
                        }}
                        className={
                          pub.badge === "News"
                            ? "bg-black-300/5 border hover:bg-black-300/5 border-black/10 text-black"
                            : "bg-purple-500/10 text-purple-700 border border-purple-500/30"
                        }
                      >
                        {pub.badge}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <p
                        className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                        itemProp="headline"
                      >
                        {pub.title}
                      </p>
                      <p
                        className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                        itemProp="datePublished"
                      >
                        {pub.date}
                      </p>
                    </div>
                    <p
                      className="mt-2 text-sm sm:text-base leading-6 text-neutral-700/75"
                      itemProp="abstract"
                    >
                      {pub.short}
                    </p>
                    <meta itemProp="author" content={pub.company} />
                    <meta itemProp="image" content={pub.image} />
                  </div>
                </div>
              </a>
            ) : (
              <div className="mt-0 cursor-not-allowed bg-neutral-100/50 p-6 rounded-lg flex flex-col sm:flex-row sm:justify-between border-neutral-200/50 border hover:border-neutral-300/50 hover:bg-neutral-200/60 transition-all">
                <div>
                  <div className="flex justify-between">
                    <h3
                      className="text-base font-semibold"
                      itemProp="publisher"
                    >
                      {pub.company}
                    </h3>
                    <Badge
                      style={{
                        height: "fit-content",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                      }}
                      className={
                        pub.badge === "News"
                          ? "bg-blue-300/5 border border-black/10 text-black"
                          : "bg-purple-500/10 text-purple-700 border border-purple-500/30 hover:bg-purple-500/10"
                      }
                    >
                      {pub.badge}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p
                      className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                      itemProp="headline"
                    >
                      {pub.title}
                    </p>
                    <p
                      className="mt-2 text-sm sm:text-base font-medium leading-6 text-neutral-800/80"
                      itemProp="datePublished"
                    >
                      {pub.date}
                    </p>
                  </div>
                  <p
                    className="mt-2 text-sm sm:text-base leading-6 text-neutral-700/75"
                    itemProp="abstract"
                  >
                    {pub.short}
                  </p>
                  <meta itemProp="author" content={pub.company} />
                  <meta itemProp="image" content={pub.image} />
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
