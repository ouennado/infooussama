import Link from "next/link";

const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <>
      <div className="dark:bg-dark relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
               ورومان على بلا
                </h1>
                <p className="text-body-color dark:text-dark-6 mb-5 text-base">
                ولذلك أطلق اليونان والرومان على بلاد العرب لفظة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
