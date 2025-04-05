import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import React from 'react';

const reviews = [
    {
      name: "Nasir Uddin",
      body: "I'm thoroughly impressed with Joseph and his team! They handle even the most challenging tasks with ease. They are incredibly friendly, honest, and professional. I highly recommend them for any plumbing needs."
    },
    {
      name: "Surya Reddy",
      body: "Excellent company to deal with, very professional in all the jobs they do. Honest and ethical in their business practices, with great communication. I have been satisfied with all the plumbing jobs they've done for me."
    },
    {
      name: "Yasemin Oztas",
      body: "Referred by a family member, we used their services on two occasions. Dillon and Daniel were professional and courteous, arriving on time and clearly explaining their procedures."
    },
    {
      name: "Paul Owen",
      body: "I recommend Light Water Plumbing for anyone seeking reliable plumbing services. Joseph was great, prompt, and reliable. His professionalism impressed me, and I plan to continue using his services."
    },
    {
      name: "Nisarg Khanna",
      body: "Joseph was extremely professional and quickly identified the root cause of our plumbing problem, saving us money and time after previous unsuccessful attempts by others."
    },
    {
      name: "Ian And Sarah Amores",
      body: "Called Joseph as our hot water system failed. He offered many options and was honest about what would work best, saving us from an unnecessary expensive choice."
    },
    {
      name: "Sourav Dewan",
      body: "I texted Joey, and he was at my place within hours. His timely arrival, professional demeanor, and quick identification of the issue were impressive."
    },
    {
      name: "Shell Carriglio",
      body: "Joey and Izaak used a pressure hose and camera to unclog our kitchen sinks, maintaining cleanliness by using plastic and a suction vacuum."
    },
    {
      name: "Amardeep Singh",
      body: "Joseph handled the plumbing for my house extension and LPG gas fitting. His professionalism and affordability made a usually stressful process smooth and reliable."
    },
    {
      name: "Natalie Mills",
      body: "We hired Joey for kitchen and bathroom renovations, concerned about keeping costs low for my pensioner Father-in-Law. Joey managed the projects with care, staying within budget and minimizing disruption."
    },
    {
      name: "Rizwan Zafar",
      body: "Joey was professional, punctual, and reasonable. His explanations were clear, and the quality of work was excellent, making him a reliable choice for plumbing needs."
    },
    {
      name: "Lachlan Marczynski",
      body: "Absolute professionals. Joey, Dylan, and the team are my first call for plumbing. Their service is top-notch, affordable, and always reliable."
    },
    {
      name: "Sehaj Walia",
      body: "Great professionals who were timely and efficient, providing spotless work at great value. I'm very satisfied with their service."
    },
    {
      name: "Lorraine Morris",
      body: "Called about a blocked drain and Joseph was here within two hours, fixing the problem efficiently. He was helpful and courteous."
    },
    {
      name: "Mark Downes",
      body: "Joseph and his team, especially Daniel, were prompt and professional. They quickly replaced our hot water system and were friendly throughout the service."
    },
    {
      name: "Jackie Malecki",
      body: "The service was professional. Joseph developed a cost-effective plan executed on time. He followed up post-job to ensure we were satisfied."
    },
    {
      name: "John Lawrence",
      body: "Joseph and his team installed a new hot water system efficiently. They were prompt, did a perfect job, and it was well-priced."
    },
    {
      name: "Logan Foreshew",
      body: "Joseph is not only a genuine person but also an exceptional professional. His work is top-notch and highly recommended."
    },
    {
      name: "Bill Perrott",
      body: "Joe installed a gas hot water tank on short notice. His professional service was reasonably priced and highly efficient."
    },
    {
      name: "Rozal Rose",
      body: "Joseph handled all plumbing work for our house extension with professionalism. He's honest, genuine, and offers affordable pricing."
    },
    {
      name: "Natasha Doran",
      body: "My gas hot water system failed on a public holiday. These guys were prompt, fixed it quickly, and charged less than others."
    },
    {
      name: "Anthony Labbad",
      body: "The best plumbing service I've used. Joseph was clear, efficient, and didn't overcharge, even on a weekend."
    },
    {
      name: "Diane Slater",
      body: "When our water heater had issues, Joseph helped us solve the problem over the phone instead of scheduling a costly visit."
    },
    {
      name: "Sourav Dutta",
      body: "Faced a hot water system breakdown at my aunt's in Glenmore Park. Found Light Water Plumbing and they resolved it swiftly."
    },
    {
      name: "Marie-Louise",
      body: "Joseph resolved our long-standing hot water issues promptly and efficiently. His responsiveness and expertise are highly commendable."
    },
    {
      name: "Billy Luo",
      body: "Excellent service today with professional tools. They also provided helpful advice and addressed other matters, highly recommended."
    },
    {
      name: "Man Lai",
      body: "Received great service over a call, avoiding an expensive callout. Later, they explained and efficiently repaired the issue on-site."
    },
    {
      name: "Lauren Clark",
      body: "Friendly and efficient, they repaired our toilet the same day I called. Their quick service was greatly appreciated."
    },
    {
      name: "Phil McKay",
      body: "They offered a quick plumbing solution at a good price. Their professional and efficient service is recommendable."
    },
    {
      name: "Bev S",
      body: "Very prompt and professional. They know their craft well and resolved our issues efficiently."
    },
    {
      name: "ThuKim Dam",
      body: "'Fast and fabulous' perfectly describes their service! They provided the best customer care and professionalism."
    },
    {
      name: "Jamaine Jackson",
      body: "Impeccable workmanship from a highly professional team. Their service was outstanding and is highly recommended."
    },
    {
      name: "Digna Smith",
      body: "Excellent service, including some great holiday advice. Your service is commendable and worth sharing."
    },
    {
      name: "Maria Mahabir",
      body: "Very efficient and reliable plumbing service that quickly resolved our issues. Thoroughly satisfied with the results."
    }
];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  body,
}: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full 2xl:w-[412px] lg:w-96 md:w-80 w-72 cursor-pointer overflow-hidden rounded-lg border p-6 py-8 text-left font-generalSans-medium text-textblack",
        "border-gray-950/[.1] bg-primary text-textWhite",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="p font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-base">{body}</blockquote>
    </figure>
  );
};

export default function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:60s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:60s]">
        {secondRow.map((review) => (
          <ReviewCard key={`dup-${review.name}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
    </div>
  );
}
