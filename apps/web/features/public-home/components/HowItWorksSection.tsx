type Step = {
  id: number;
  title: string;
  description: string;
  iconSrc: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Choose your Tasker",
    description: "Browse trusted professionals by skills, reviews and price",
    iconSrc: "/icons/calender.svg",
  },
  {
    id: 2,
    title: "Submit the Charges",
    description:
      "Deposit money in your wallet and send us, We will hold it until the tasker gets the job done",
    iconSrc: "/icons/search.svg",
  },
  {
    id: 3,
    title: "Get it Done",
    description:
      "Your tasker arrives and gets the job done, pay securely online",
    iconSrc: "/icons/tick.svg",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative bg-background py-28 overflow-hidden">
      {/* Decorative dune — top left */}
      <div
        className="absolute -top-10 -left-10 w-52 h-52 rounded-full overflow-hidden pointer-events-none opacity-70"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dunes.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-14">
        <h2
          className="font-display font-normal uppercase text-[#501B0E] mb-3"
          style={{
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: "134%",
            letterSpacing: "2px",
          }}
        >
          How Latache Works
        </h2>
        <p
          className="text-[#501B0E]"
          style={{ fontSize: "16px", fontWeight: 300, lineHeight: "134%" }}
        >
          Simple steps to get your to-do-list done
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 cursor-default"
            >
              {/* Icon box */}
              <div
                className="w-25 h-25 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F8F2E9" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.iconSrc}
                  alt=""
                  className="w-14 h-14"
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[#501B0E] mb-2"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "26px",
                  letterSpacing: "0%",
                }}
              >
                {step.id}.&nbsp; {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#501B0E] max-w-xs"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0.84px",
                  textAlign: "center",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
