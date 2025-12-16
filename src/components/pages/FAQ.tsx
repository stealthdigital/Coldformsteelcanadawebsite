import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { FAQSchema } from '../schema/FAQSchema';
import { HeadMeta } from '../HeadMeta';

interface FAQProps {
  onNavigate: (page: string) => void;
}

export function FAQ({ onNavigate }: FAQProps) {
  const faqs = [
    {
      id: 'q1',
      question: 'What is cold formed steel and how is it different from wood framing?',
      answer: 'Cold formed steel is high strength galvanized steel shaped into studs and wall panels using automated roll forming machines. It does not warp, twist, shrink, or rot. Unlike wood, it is non combustible and resistant to pests and moisture.\n\nHomeowners notice the difference in straighter walls, cleaner finishes, and fewer long term repairs.'
    },
    {
      id: 'q2',
      question: 'Why is cold formed steel more precise than wood?',
      answer: 'Steel framing is produced in a controlled factory using equipment like FrameCAD. Each component is cut, punched, and labeled with tolerances as tight as 1.6 millimeters. Lumber often varies by 6.4 millimeters or more.\n\nThis precision means fewer corrections on site, no shimming, better alignment, and higher quality finish work.'
    },
    {
      id: 'q3',
      question: 'Is steel framing more expensive than wood?',
      answer: 'Sometimes, but not always. Materials can cost 10 to 15 percent more in some regions, but steel often becomes cheaper once speed, labour savings, reduced waste, and predictable pricing are factored in.\n\nWood prices can swing widely. Steel prices remain stable.\n\nIn many cases, the total project cost is equal or lower with steel.'
    },
    {
      id: 'q4',
      question: 'How fast is a steel framed build?',
      answer: 'Most homes and ADUs are framed in 4 to 5 days once the foundation is ready. A comparable wood structure usually takes 14 to 21 days.\n\nFaster framing reduces labour costs, carrying costs, and weather delays, and gets homeowners into their space sooner.'
    },
    {
      id: 'q5',
      question: 'Do I still need a permit for an ADU or home built with cold formed steel?',
      answer: 'Yes. Every municipality in Canada requires permits for new dwellings, including ADUs. Cold formed steel is fully code compliant and approved across Canada, but each city still needs to review zoning, setbacks, engineering, and drawings for the specific property.\n\nCold Form Steel Canada assists with zoning checks, drawings, permits, and communication with your municipality.'
    },
    {
      id: 'q6',
      question: 'Can I act as the Owner Builder?',
      answer: 'Yes. Many clients choose this route because:\n• You avoid general contractor markup which often ranges from 10 to 30 percent\n• You are eligible to reclaim HST on new residential construction\n• Our Engineer of Record provides the structural oversight the municipality requires\n\nThis is one of the fastest ways to lower total project cost.'
    },
    {
      id: 'q7',
      question: 'How does financing work for steel homes and ADUs?',
      answer: 'Financing is available through our lending partners with approval times as fast as 24 hours. Most homeowners put 25 percent down and finance the rest over 10 to 25 years.\n\nPayments on a typical ADU often fall between 1,000 and 1,400 dollars per month depending on rate and term. Many ADUs rent for more than that, which allows the unit to pay for itself.'
    },
    {
      id: 'q8',
      question: 'Does steel framing affect Wi-Fi or cell service?',
      answer: 'No. This is a common internet myth. Steel studs do not create a sealed barrier or Faraday cage. Walls have openings, windows, doors, and interior finishes that allow signal movement.\n\nClients report no issues with wireless performance inside steel framed homes.'
    },
    {
      id: 'q9',
      question: 'Is steel better for Canadian weather and climate?',
      answer: 'Yes. Steel framing is produced indoors and does not absorb moisture. Wood framing built on site can swell, shrink, or twist when exposed to rain, humidity, or cold temperatures.\n\nSteel maintains its shape and strength regardless of seasonal changes.'
    },
    {
      id: 'q10',
      question: 'Is steel more fire resistant than wood?',
      answer: 'Yes. Cold formed steel is non combustible and achieves high fire resistance ratings. This often results in lower insurance premiums and higher safety performance.'
    },
    {
      id: 'q11',
      question: 'What about thermal bridging and energy loss?',
      answer: 'Modern steel wall assemblies use continuous exterior insulation, insulated cavity fill, and thermal break strips where needed. This eliminates the concerns often discussed online.\n\nA properly designed steel wall can achieve R20 to R30 performance which meets or exceeds Canadian energy code requirements.'
    },
    {
      id: 'q12',
      question: 'Can municipalities reject steel framing?',
      answer: 'Municipalities across Canada approve cold formed steel regularly. Engineering is clear and predictable, which can reduce inspection issues.\n\nCold Form Steel Canada has a strong track record of successful permit approvals across multiple provinces.'
    },
    {
      id: 'q13',
      question: 'What foundations work with steel framed homes and ADUs?',
      answer: 'Common options include:\n• Concrete slabs\n• ICF\n• Frost protected shallow foundations\n• Helical piles\n• Grade beams\n\nYour site conditions, soil, frost depth, and municipal requirements determine the correct choice. We help you select the right foundation for your region.'
    },
    {
      id: 'q14',
      question: 'Is steel loud or does it creak?',
      answer: 'Steel framing is quieter than wood. Wood expands and contracts with humidity which causes creaking. Steel does not expand or shrink in the same way and maintains consistent dimensions.'
    },
    {
      id: 'q15',
      question: 'Does steel framing rust over time?',
      answer: 'Cold formed steel is galvanized and highly resistant to corrosion. The zinc coating protects the material for decades. Indoors and protected by building materials, the lifespan commonly exceeds 100 years.'
    },
    {
      id: 'q16',
      question: 'Can I hang cabinets, shelves, or TVs on steel framing?',
      answer: 'Yes. Steel studs accept standard fasteners designed for metal framing. In many cases, mounting is easier because steel is straight and consistent.'
    },
    {
      id: 'q17',
      question: 'What is the environmental impact of steel?',
      answer: 'Steel is one of the most recyclable materials in construction. Cold formed steel often contains 25 percent or more recycled content and is 98 percent recyclable at end of life. It also creates far less waste on job sites because every piece is manufactured to exact length.'
    },
    {
      id: 'q18',
      question: 'Will trades know how to work on a steel framed home?',
      answer: 'Yes. Electricians, plumbers, and HVAC technicians work with steel studs regularly in commercial and residential buildings. The process is well understood across Canada.'
    },
    {
      id: 'q19',
      question: 'What finishes can I use inside a steel home?',
      answer: 'Any finish used in wood homes works with steel framing:\n• Drywall\n• Stone\n• Tile\n• Cabinets\n• Flooring\n• Trim\n• Exterior siding and cladding\n\nEverything looks the same once finished. The difference is that the underlying structure is straighter and more stable.'
    },
    {
      id: 'q20',
      question: 'What makes Cold Form Steel Canada different from other steel builders?',
      answer: 'Homeowners choose us because:\n• Fast framing in 4 to 5 days\n• Permit ready drawings\n• Zoning and permit support\n• Financing options in 24 hours\n• Transparent pricing with no surprises\n• Owner Builder savings and HST reclaim options\n• Precision FrameCAD manufacturing\n• Strong municipal relationships and permit success\n• Interior quality and finishes that surprise most clients\n\nWe focus on clear information, predictable outcomes, and an efficient process from start to finish.'
    },
    {
      id: 'q21',
      question: 'Can I get a full cost breakdown for my property?',
      answer: 'Yes. We can provide:\n• Shell costs\n• Turnkey options\n• Monthly financing estimates\n• Permit requirements\n• Site preparation costs\n• Foundation recommendations\n\nTurnaround time is usually one business day.'
    },
    {
      id: 'q22',
      question: 'How do I get started?',
      answer: 'You can:\n• Choose an ADU or home model\n• Request a zoning check\n• Ask for a financing estimate\n• Book a consultation\n• Request access to our floor plans and specifications\n\nCold Form Steel Canada will walk you through the entire process step by step.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeadMeta 
        title="FAQs About Cold-Form Steel Construction | Cold Form Steel Canada"
        description="Get answers to 22 common questions about cold-form steel homes, ADUs, permits, financing, and construction. Learn about build times, costs, durability, and why steel is better than wood framing in Canada."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Steel+Construction+FAQs"
      />
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="text-white/90 max-w-2xl">
            Cold Form Steel Canada
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border border-primary/20 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-foreground/80 leading-relaxed">
                  {faq.id === 'q1' ? (
                    <>
                      <p className="mb-4">
                        Cold formed steel is high strength galvanized steel shaped into studs and wall panels using automated roll forming machines. It does not warp, twist, shrink, or rot. Unlike wood, it is non combustible and resistant to pests and moisture.
                      </p>
                      <p className="mb-4">
                        Homeowners notice the difference in straighter walls, cleaner finishes, and fewer long term repairs.
                      </p>
                      <button
                        onClick={() => onNavigate('steel-vs-wood')}
                        className="text-accent hover:underline font-medium"
                      >
                        Read the full steel vs. wood comparison →
                      </button>
                    </>
                  ) : faq.id === 'q2' ? (
                    <>
                      <p className="mb-4">
                        Steel framing is produced in a controlled factory using equipment like{' '}
                        <button
                          onClick={() => onNavigate('framecad')}
                          className="text-accent hover:underline font-medium"
                        >
                          FrameCAD
                        </button>
                        . Each component is cut, punched, and labeled with tolerances as tight as 1.6 millimeters. Lumber often varies by 6.4 millimeters or more.
                      </p>
                      <p>
                        This precision means fewer corrections on site, no shimming, better alignment, and higher quality finish work.
                      </p>
                    </>
                  ) : faq.id === 'q3' ? (
                    <>
                      <p className="mb-4">
                        Sometimes, but not always. Materials can cost 10 to 15 percent more in some regions, but steel often becomes cheaper once speed, labour savings, reduced waste, and predictable pricing are factored in.
                      </p>
                      <p className="mb-4">
                        Wood prices can swing widely. Steel prices remain stable.
                      </p>
                      <p className="mb-4">
                        In many cases, the total project cost is equal or lower with steel.
                      </p>
                      <button
                        onClick={() => onNavigate('cost-drivers')}
                        className="text-accent hover:underline font-medium"
                      >
                        Learn what drives construction costs →
                      </button>
                    </>
                  ) : faq.id === 'q4' ? (
                    <>
                      <p className="mb-4">
                        Most homes and ADUs are framed in 4 to 5 days once the foundation is ready. A comparable wood structure usually takes 14 to 21 days.
                      </p>
                      <p className="mb-4">
                        Faster framing reduces labour costs, carrying costs, and weather delays, and gets homeowners into their space sooner.
                      </p>
                      <button
                        onClick={() => onNavigate('five-day-build')}
                        className="text-accent hover:underline font-medium"
                      >
                        See how the 5-day build works →
                      </button>
                    </>
                  ) : faq.id === 'q5' ? (
                    <>
                      <p className="mb-4">
                        Yes. Every municipality in Canada requires permits for new dwellings, including ADUs. Cold formed steel is fully code compliant and approved across Canada, but each city still needs to review zoning, setbacks, engineering, and drawings for the specific property.
                      </p>
                      <p className="mb-4">
                        Cold Form Steel Canada assists with zoning checks, drawings, permits, and communication with your municipality.
                      </p>
                      <button
                        onClick={() => onNavigate('permit')}
                        className="text-accent hover:underline font-medium"
                      >
                        Read our complete permit guide →
                      </button>
                    </>
                  ) : faq.id === 'q7' ? (
                    <>
                      <p className="mb-4">
                        Financing is available through our lending partners with approval times as fast as 24 hours. Most homeowners put 25 percent down and finance the rest over 10 to 25 years.
                      </p>
                      <p className="mb-4">
                        Payments on a typical ADU often fall between 1,000 and 1,400 dollars per month depending on rate and term. Many ADUs rent for more than that, which allows the unit to pay for itself.
                      </p>
                      <button
                        onClick={() => onNavigate('financing')}
                        className="text-accent hover:underline font-medium"
                      >
                        Learn more about financing options →
                      </button>
                    </>
                  ) : faq.id === 'q8' ? (
                    <>
                      <p className="mb-4">
                        No. This is a common internet myth. Steel studs do not create a sealed barrier or Faraday cage. Walls have openings, windows, doors, and interior finishes that allow signal movement.
                      </p>
                      <p className="mb-4">
                        Clients report no issues with wireless performance inside steel framed homes.
                      </p>
                      <button
                        onClick={() => onNavigate('reddit-myths')}
                        className="text-accent hover:underline font-medium"
                      >
                        Read more myths debunked →
                      </button>
                    </>
                  ) : faq.id === 'q15' ? (
                    <>
                      <p className="mb-4">
                        Cold formed steel is galvanized and highly resistant to corrosion. The zinc coating protects the material for decades. Indoors and protected by building materials, the lifespan commonly exceeds 100 years.
                      </p>
                      <button
                        onClick={() => onNavigate('steel-rust')}
                        className="text-accent hover:underline font-medium"
                      >
                        Deep dive: Will my steel frame rust? →
                      </button>
                    </>
                  ) : faq.id === 'q20' ? (
                    <>
                      <p className="mb-4">
                        Homeowners choose us because:
                      </p>
                      <ul className="space-y-1 mb-4 ml-4 list-disc">
                        <li>Fast framing in 4 to 5 days</li>
                        <li>Permit ready drawings</li>
                        <li>Zoning and permit support</li>
                        <li>Financing options in 24 hours</li>
                        <li>Transparent pricing with no surprises</li>
                        <li>Owner Builder savings and HST reclaim options</li>
                        <li>Precision FrameCAD manufacturing</li>
                        <li>Strong municipal relationships and permit success</li>
                        <li>Interior quality and finishes that surprise most clients</li>
                      </ul>
                      <p className="mb-4">
                        We focus on clear information, predictable outcomes, and an efficient process from start to finish.
                      </p>
                      <button
                        onClick={() => onNavigate('success-stories')}
                        className="text-accent hover:underline font-medium"
                      >
                        See our success stories →
                      </button>
                    </>
                  ) : faq.id === 'q22' ? (
                    <>
                      <p className="mb-4">
                        You can:
                      </p>
                      <ul className="space-y-1 mb-4 ml-4 list-disc">
                        <li>Choose an ADU or home model</li>
                        <li>Request a zoning check</li>
                        <li>Ask for a financing estimate</li>
                        <li>Book a consultation</li>
                        <li>Request access to our floor plans and specifications</li>
                      </ul>
                      <p className="mb-4">
                        Cold Form Steel Canada will walk you through the entire process step by step.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={() => onNavigate('piccolo')}
                          className="text-accent hover:underline font-medium"
                        >
                          View Piccolo model →
                        </button>
                        <button
                          onClick={() => onNavigate('medio')}
                          className="text-accent hover:underline font-medium"
                        >
                          View Medio model →
                        </button>
                        <button
                          onClick={() => onNavigate('contact')}
                          className="text-accent hover:underline font-medium"
                        >
                          Contact us →
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="whitespace-pre-line">{faq.answer}</div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-background-light rounded-lg border border-primary/20 text-center">
          <h3 className="mb-4">Still have questions?</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Our team is ready to answer any questions you have about cold formed steel construction, ADUs, pricing, permits, or financing.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}