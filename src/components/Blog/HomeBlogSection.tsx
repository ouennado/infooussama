import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="INFO-TASJIL"
            title="Votre guide vers l’information, les services, et les opportunités."
            paragraph="est une plateforme numérique innovante qui vise à centraliser les dernières actualités, les services essentiels et les opportunités d’emploi tout en offrant des conseils personnalisés en matière d’orientation académique et professionnelle.

"
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 4).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
