import HeroBanner from "@/components/HeroBanner";
import ImamList from "@/components/imam/ImamList";
import { getHeroData, getImams } from "@/utils";

const page = async () => {
  const heroData = await getHeroData("Find-Woman-Imam")
  const imamData = await getImams()
  if (!imamData) return <></>
  if (!heroData) return <></>

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <HeroBanner {...heroData} />
      <ImamList imams={imamData} />
    </div>
  )
};

export default page;
