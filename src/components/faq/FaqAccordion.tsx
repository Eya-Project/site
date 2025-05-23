import { FAQData } from "./Faq"
import { FC } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FaqAccordion: FC<FAQData> = ({ faqs }) => {
  return (
    <Accordion type="multiple">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`index-${i}`}>
          <AccordionTrigger className="cursor-pointer">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            <p>
              {faq.answer}
            </p>
            {faq.links && faq.links.length > 0 && <div>
              {faq.links.map((link, i) => <a key={i} target="_black" href={link} className="text-blue-600">{link}</a>)}
            </div>}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
