"use client"
import { FC, useMemo, useState } from "react"
import { Input } from "../ui/input"
import FaqAccordion from "./FaqAccordion"

export interface FAQData {
  faqs: Array<{
    question: string
    answer: string
    links: Array<string>
  }>
}

const Faq: FC<FAQData> = ({ faqs }) => {
  const [search, setSearch] = useState("")

  const sortedQs = useMemo(() => {
    if (!search) return faqs;

    const searchLower = search.toLowerCase();
    const startsWithMatches: FAQData["faqs"] = [];
    const includesMatches: FAQData["faqs"] = [];

    // Categorize each FAQ
    faqs.forEach(faq => {
      const questionLower = faq.question.toLowerCase();
      if (questionLower.startsWith(searchLower)) {
        startsWithMatches.push(faq);
      } else if (questionLower.includes(searchLower)) {
        includesMatches.push(faq);
      }
    });

    // Return combined results with proper priority order
    return [...startsWithMatches, ...includesMatches];
  }, [faqs, search]);

  return (
    <div className="container py-[20px] flex flex-col gap-4 w-full">
      <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter your question" className="w-full" />
      <div className="px-[10px]">
        <FaqAccordion faqs={sortedQs} />
      </div>
    </div>
  )
}

export default Faq
