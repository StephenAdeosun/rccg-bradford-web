import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type VacancyTab = "Key duties" | "Requirements" | "How to apply";

type Vacancy = {
  title: string;
  category: string;
  summary: string;
  employment: string;
  openings?: string;
  icon: LucideIcon;
  accent: string;
  duties: string[];
  requirements: string[];
  applicationSubject: string;
  applicationIntro: string;
  applicationNotes: string[];
};

const vacancies: Vacancy[] = [
  {
    title: "Minister of Religion / Clergy",
    category: "Pastoral ministry",
    summary:
      "Provide pastoral leadership, nurture spiritual growth and serve our church and wider community.",
    employment: "Ministerial role",
    openings: "2 vacancies",
    icon: HeartHandshake,
    accent: "from-violet-600 to-indigo-700",
    duties: [
      "Preach and teach the Word of God in accordance with biblical principles and RCCG doctrines.",
      "Lead worship services, prayer meetings, Bible studies and other religious programmes.",
      "Provide pastoral care, spiritual guidance, counselling and support to church members.",
      "Coordinate evangelism, discipleship, missionary and community outreach activities.",
      "Support the spiritual development of children, young people, adults and families.",
      "Conduct religious ceremonies and other ministerial duties, as authorised.",
      "Support church leadership with planning, administration and delivery of church programmes.",
      "Train, mentor and support church workers, ministry leaders and volunteers.",
      "Promote Christian values, unity and fellowship in the church and wider community.",
      "Engage with our multicultural congregation, including Nigerian and wider African communities.",
      "Uphold the church’s safeguarding policies and procedures.",
    ],
    requirements: [
      "Be a committed Christian with a demonstrable calling to pastoral ministry.",
      "Have relevant ministerial training, theological qualifications or equivalent ministry experience.",
      "Demonstrate sound biblical knowledge and a good understanding of RCCG doctrines, values and practices.",
      "Have experience in pastoral ministry, preaching, teaching or church leadership.",
      "Have knowledge and understanding of Nigerian culture, traditions and customs.",
      "Have a working knowledge of at least one Nigerian language, such as Yoruba, Igbo or Hausa, to support pastoral care and engagement.",
      "Bring excellent communication, interpersonal, organisational and leadership skills.",
      "Demonstrate integrity, spiritual maturity, compassion and commitment to Christian service.",
      "Work effectively in a diverse and multicultural environment, with flexibility for evenings, weekends and religious holidays.",
      "Be willing to undertake relevant safeguarding and DBS checks, where applicable.",
      "Previous RCCG ordination is desirable but not essential. Candidates from other Christian denominations with relevant ministry experience who are willing to uphold RCCG doctrines and practices will also be considered.",
    ],
    applicationSubject: "Application for Minister of Religion / Clergy",
    applicationIntro:
      "Send your CV and a formal application letter outlining your qualifications, ministerial experience and suitability for the position.",
    applicationNotes: [
      "Visa sponsorship is available under the Minister of Religion (T2) route for eligible candidates, subject to UKVI and Home Office requirements.",
      "Applications are welcome from suitably qualified candidates in the UK and overseas.",
      "Applications are reviewed on a rolling basis until the position is filled. Early applications are encouraged.",
      "Closing date: ongoing until the position is filled.",
      "Only shortlisted candidates will be contacted.",
    ],
  },
  {
    title: "Receptionist / Administrative Support Officer",
    category: "Church administration",
    summary:
      "Be a welcoming first point of contact and provide organised administrative support to our church team.",
    employment: "Part-time · 20 hours per week",
    icon: BriefcaseBusiness,
    accent: "from-amber-500 to-orange-600",
    duties: [
      "Welcome church members, visitors and guests in a friendly, professional manner; respond to calls, emails and general enquiries.",
      "Manage reception and day-to-day office operations, appointments, meetings, calendars and church schedules.",
      "Provide administrative support to the pastoral team and church leadership.",
      "Maintain accurate membership records, databases and administrative documents.",
      "Prepare correspondence, reports, meeting minutes and other official documents.",
      "Assist with planning and coordinating services, programmes, conferences and community events.",
      "Support communication with church departments, volunteers and external stakeholders.",
      "Assist with church communications, social media platforms and announcements.",
      "Maintain office supplies and support general procurement activities.",
      "Handle confidential information in accordance with data protection requirements.",
      "Undertake other reasonable administrative duties assigned by church leadership.",
    ],
    requirements: [
      "Have relevant qualifications or experience in reception, administration, customer service or office management.",
      "Bring excellent written and verbal communication, organisational and time-management skills.",
      "Be proficient in Microsoft Office, including Word, Excel, PowerPoint and Outlook.",
      "Be able to work independently and as part of a team, with professionalism, integrity, discretion and attention to detail.",
      "Have a friendly, approachable and welcoming personality.",
      "Understand Christian values and be willing to uphold the ethos of RCCG.",
      "Have knowledge and understanding of Nigerian culture and traditions; a working knowledge of a Nigerian language is ideal.",
      "Be comfortable in a diverse, multicultural environment and willing to work flexibly, including occasional evenings and weekends.",
      "Church, charity, religious organisation or community-based experience is desirable but not essential.",
    ],
    applicationSubject:
      "Application for Receptionist / Administrative Support Officer",
    applicationIntro:
      "Send your CV and a formal application letter outlining your qualifications, experience and suitability for the position.",
    applicationNotes: [
      "Part-time role: 20 hours per week.",
      "Applications are reviewed on a rolling basis until a suitable candidate is appointed. Early applications are encouraged.",
      "Closing date: ongoing until the position is filled.",
      "Only shortlisted candidates will be contacted.",
    ],
  },
  {
    title: "Church Facilities Support Officer",
    category: "Facilities & premises",
    summary:
      "Help keep our church premises safe, secure, well maintained and ready for services and community activities.",
    employment: "Part-time · hours to be agreed",
    icon: Wrench,
    accent: "from-emerald-500 to-teal-700",
    duties: [
      "Act as a designated keyholder; open and secure the church before and after services, meetings, programmes and events.",
      "Ensure doors, windows, entrances and exits are secured when the building is not in use.",
      "Conduct routine security and safety checks and operate security and alarm systems, where applicable.",
      "Carry out basic DIY repairs and minor maintenance within your competence.",
      "Inspect the building, fixtures, fittings and equipment; report issues requiring specialist contractors.",
      "Liaise with contractors and service providers when maintenance work is needed.",
      "Manage lighting, heating and other building facilities appropriately.",
      "Set up and dismantle furniture and equipment; keep emergency exits and access routes clear.",
      "Maintain appropriate records of maintenance activities, repairs and security incidents.",
      "Support health and safety, fire safety and building management procedures.",
      "Respond to urgent premises-related issues, where reasonably required, and undertake other reasonable facilities duties.",
    ],
    requirements: [
      "Have good practical knowledge of DIY, general building maintenance and minor repairs.",
      "Caretaking, facilities management, property maintenance or similar experience is helpful but not essential.",
      "Be trustworthy, dependable, punctual and security-conscious.",
      "Have a basic understanding of health and fire safety procedures.",
      "Demonstrate practical problem-solving, attention to detail and good communication and organisational skills.",
      "Be able to work independently with minimal supervision.",
      "Be capable of undertaking the physical duties of the role, with reasonable adjustments where required.",
      "Respect Christian values and be willing to uphold the ethos of RCCG.",
      "Be flexible to work early mornings, evenings, weekends and religious holidays in line with church activities.",
      "Keyholder experience or work in a church, community centre, school or commercial premises is desirable but not essential.",
    ],
    applicationSubject:
      "Application for Church Caretaker / Facilities Support Officer",
    applicationIntro:
      "Send your CV and a formal application letter outlining your experience, practical skills and suitability for the position.",
    applicationNotes: [
      "Part-time role; working hours to be agreed.",
      "Applications are reviewed on a rolling basis until a suitable candidate is appointed. Early applications are encouraged.",
      "Closing date: ongoing until the position is filled.",
      "Only shortlisted candidates will be contacted.",
    ],
  },
];

const tabs: VacancyTab[] = ["Key duties", "Requirements", "How to apply"];

function VacancyCard({ vacancy, index }: { vacancy: Vacancy; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<VacancyTab>("Key duties");
  const Icon = vacancy.icon;
  const panelId = `vacancy-details-${index}`;
  const emailHref = `mailto:rccgbradford@gmail.com?subject=${encodeURIComponent(
    vacancy.applicationSubject
  )}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.34)]">
      <div className={`h-1.5 bg-gradient-to-r ${vacancy.accent}`} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            {vacancy.category}
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-800">
            <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>

        <h3 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          {vacancy.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {vacancy.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-y border-slate-100 py-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-violet-700" aria-hidden="true" />
            Bradford, West Yorkshire
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 size={16} className="text-violet-700" aria-hidden="true" />
            {vacancy.employment}
          </span>
          {vacancy.openings && (
            <span className="inline-flex items-center gap-2">
              <CheckCircle2
                size={16}
                className="text-violet-700"
                aria-hidden="true"
              />
              {vacancy.openings}
            </span>
          )}
        </div>

        {vacancy.title === "Minister of Religion / Clergy" && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
            <ShieldCheck size={17} aria-hidden="true" />
            Visa sponsorship available for eligible candidates
          </p>
        )}

        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="mt-6 flex w-full items-center justify-between rounded-lg border border-violet-200 px-4 py-3 text-left text-sm font-bold text-violet-900 transition hover:border-violet-800 hover:bg-violet-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
        >
          {isExpanded ? "Hide role details" : "View role details"}
          <ArrowUpRight
            size={18}
            className={`transition-transform ${isExpanded ? "rotate-45" : ""}`}
            aria-hidden="true"
          />
        </button>

        {isExpanded && (
          <div id={panelId} className="mt-5 border-t border-slate-100 pt-5">
            <div
              className="flex flex-wrap gap-2"
              aria-label={`${vacancy.title} information`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-3.5 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 sm:text-sm ${
                    activeTab === tab
                      ? "bg-violet-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-violet-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Key duties" && (
              <ul className="mt-5 space-y-3">
                {vacancy.duties.map((duty) => (
                  <li
                    key={duty}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {duty}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "Requirements" && (
              <ul className="mt-5 space-y-3">
                {vacancy.requirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {requirement}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "How to apply" && (
              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  {vacancy.applicationIntro}
                </p>
                <a
                  href={emailHref}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-violet-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
                >
                  Email your application
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <p className="mt-3 break-all text-center text-sm font-medium text-violet-900">
                  rccgbradford@gmail.com
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email subject
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {vacancy.applicationSubject}
                </p>
                <ul className="mt-4 space-y-2">
                  {vacancy.applicationNotes.map((note) => (
                    <li
                      key={note}
                      className="flex gap-2 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Vacancies() {
  return (
    <section
      aria-labelledby="vacancies-heading"
      className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-900 shadow-sm">
            <HeartHandshake size={15} aria-hidden="true" />
            Join our team
          </span>
          <h2
            id="vacancies-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Make a difference{" "}
            <span className="text-violet-800">with us</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Explore current opportunities to serve at RCCG Chapel of His Glory,
            Bradford. Select a role to view its duties, requirements and
            application details.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-3 lg:gap-6">
          {vacancies.map((vacancy, index) => (
            <VacancyCard
              key={vacancy.title}
              vacancy={vacancy}
              index={index}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          All positions are based in Bradford, West Yorkshire.
        </p>
      </div>
    </section>
  );
}
