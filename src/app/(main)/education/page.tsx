import Faq, { FAQData } from "@/components/faq/Faq";
import HeroBanner from "@/components/HeroBanner";
import { client } from "@/sanity/lib/client";
import { getHeroData } from "@/utils";

const getFaqs = async (): Promise<FAQData | null> => {
  try {
    const data = await client.fetch<FAQData["faqs"]>(`
      *[_type == "faq"] {
        question,
        answer,
        links
      }
    `)
    return { faqs: data }
  } catch (error) {
    console.log(error)
    return null
  }
}

const page = async () => {
  const heroData = await getHeroData("Education-Hub")
  const faqs = await getFaqs()
  if (!heroData) return <></>
  if (!faqs) return <></>

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <HeroBanner {...heroData} />
      <Faq faqs={faqs.faqs} />
    </div>
  )
};

export default page;
