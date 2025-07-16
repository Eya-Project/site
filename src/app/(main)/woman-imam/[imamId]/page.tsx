import { ImamHero } from "@/components/imam/ImamHero";
import PortableTextWrapper from "@/components/PortableText";
import { getImam } from "@/utils";

const page = async ({ params }: { params: { imamId: string } }) => {
  const imamId = params.imamId;
  const imam = await getImam(imamId);

  if (!imam) return <div>Imam not found</div>;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <ImamHero
        background={{
          img: imam.backgroundImage?.url || "",
          alt: imam.backgroundImage?.alt || "",
        }}
        profile={{ img: imam.profileImage.url, alt: imam.profileImage.alt }}
        name={imam.name}
        phone={imam.phone}
        email={imam.email}
        country={imam.country.name}
        description={imam.description}
      />

      <div className="container mx-auto p-4 md:max-w-[800px] text-black">
        <PortableTextWrapper value={imam.bio} />
      </div>
    </div>
  );
};

export default page;
