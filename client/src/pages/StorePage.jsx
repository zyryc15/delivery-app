import { CardStore } from "../components/CardStore";
import { SearchBar } from "../components/SearchBar";

const stores = [
  {
    storeID: 1,
    name: "Angel's burger",
    image:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/346625386_641337093994993_3144803195023950270_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsNtsv9ah0XPZDa_XS5JS70kHLPQWwIFXSQcs9BbAgVdkCAap-kfNcL2GRsOuE56X4Cr34oH6LfWZSiIWCUFbK&_nc_ohc=PBuc_FWe7UIAX-iBD4h&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&oh=00_AfDbQMpZ7y7sk7_YwSw6iZNam4XvywKMhFAOUOFcG0s4Bw&oe=653C5B16",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, et non eaque, repellendus quidem ut at vero nam pariatur voluptatibus quibusdam! Ullam repellendus alias dolor sapiente. Ipsam doloremque quis iste.",
    preparationTime: 20,
  },
  {
    storeID: 2,
    name: "Jollibee",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Jollibee_2011_logo.svg/1200px-Jollibee_2011_logo.svg.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, et non eaque, repellendus quidem ut at vero nam pariatur voluptatibus quibusdam! Ullam repellendus alias dolor sapiente. Ipsam doloremque quis iste.",
    preparationTime: 30,
  },
  {
    storeID: 3,
    name: "Mc Donald",
    image:
      "data:image/png;base64,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",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, et non eaque, repellendus quidem ut at vero nam pariatur voluptatibus quibusdam! Ullam repellendus alias dolor sapiente. Ipsam doloremque quis iste.",
    preparationTime: 20,
  },
  {
    storeID: 4,
    name: "Moonleaf",
    image:
      "https://static.wixstatic.com/media/48260f_2f6dda95a0164a83bb8e99267c93e66d~mv2.jpg/v1/fill/w_672,h_666,al_c,q_85/4th%20photo.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, et non eaque, repellendus quidem ut at vero nam pariatur voluptatibus quibusdam! Ullam repellendus alias dolor sapiente. Ipsam doloremque quis iste.",
    preparationTime: 20,
  },
  {
    storeID: 5,
    name: "Kainan ni Masing",
    image:
      "https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, et non eaque, repellendus quidem ut at vero nam pariatur voluptatibus quibusdam! Ullam repellendus alias dolor sapiente. Ipsam doloremque quis iste.",
    preparationTime: 20,
  },
  {
    storeID: 6,
    name: "Jack Jack",
    image:
      "https://fastly.4sqi.net/img/general/600x600/39480260_bJZ_Nvdsq4cOofFLYricx8wlZxT5Iz88hHIJuzBKpT8.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, et non eaque, repellendus quidem ut at vero nam pariatur voluptatibus quibusdam! Ullam repellendus alias dolor sapiente. Ipsam doloremque quis iste.",
    preparationTime: 20,
  },
];
export const StorePage = () => {
  return (
    <>
      <SearchBar
        placeholder="Search for your trusted store..."
        title="Just Relax, Let "
      />
      <div className="pt-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Shop from this Stores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <CardStore key={index} store={store} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
