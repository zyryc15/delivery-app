import { CardProducts } from "../../components/CardProducts";
import { products } from "../../components/Products";
import { Button } from "../../components/Button";
export const StoreProfile = () => {
  return (
    <>
      <section className="px-3 py-5 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">
              Store Name
            </p>
            <p className="text-xl font-bold md:text-2xl">Quezon, Bukidnon</p>
            <p className="mt-2 text-sm md:text-lg">20 Minutes</p>
            <Button text="open" />
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
              src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/346625386_641337093994993_3144803195023950270_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsNtsv9ah0XPZDa_XS5JS70kHLPQWwIFXSQcs9BbAgVdkCAap-kfNcL2GRsOuE56X4Cr34oH6LfWZSiIWCUFbK&_nc_ohc=PBuc_FWe7UIAX-iBD4h&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&oh=00_AfDbQMpZ7y7sk7_YwSw6iZNam4XvywKMhFAOUOFcG0s4Bw&oe=653C5B16"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-8 mb-5">
        {products.map((product, index) => (
          <CardProducts key={index} product={product} />
        ))}
      </section>
    </>
  );
};
