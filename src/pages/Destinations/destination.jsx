import image1 from "../../assets/destinations/ChogoriaFalls.jpg";
import image2 from "../../assets/destinations/LakeNakuru.jpg";
import image3 from "../../assets/destinations/Maasai.jpg";
import image4 from "../../assets/destinations/MtKenya.jpg";
import image6 from "../../assets/destinations/Tsavo.jpg";
import image5 from "../../assets/destinations/RiftValley.jpg";
import image7 from "../../assets/destinations/MtRwenzori.jpg";
import image8 from "../../assets/hero-section/diani4.jpg";
import "./destination.css";
import { IoPrint } from "react-icons/io5";
export default function Destinaton() {
  return (
    <>
      <div className="cards">
        <Card
          cardImage={image1}
          name={"Chogoria Falls"}
          description={
            "Chogoria Falls is a breathtaking waterfall located along the Chogoria route of Mount Kenya. Nestled within dense montane forests, the falls cascade down rugged cliffs, creating a stunning natural spectacle. Hikers and nature lovers often visit Chogoria Falls while trekking to Lake Ellis and Mugi Hill. The surrounding landscape features lush greenery, unique alpine flora, and diverse wildlife, making it a serene and picturesque destination. The falls are a hidden gem for adventurers seeking a less crowded yet scenic experience on Mount Kenya."
          }
          priceGroup={500}
          priceIndividual={520}
        />
        <Card
          cardImage={image2}
          name={"Lake Nakuru"}
          description={
            "Lake Nakuru is a world-famous soda lake in Kenya’s Rift Valley,    renowned for its breathtaking flocks of flamingos that paint the shoreline pink.In addition to flamingos, the park is home to rhinos, giraffes, zebras, and the elusive leopard. The shimmering waters of the lake, surrounded by acacia woodlands and rocky escarpments, create a stunning backdrop for wildlife photography and nature exploration. With over 4000 bird species, I thinks is natures paradise for bird watchers. Lake Nakuru is a must-visit destination for anyone seeking a unique safari experience."
          }
          priceGroup={600}
          priceIndividual={609}
        />
        <Card
          cardImage={image3}
          name={"Masaai Land"}
          description={
            "The Maasai People are a renowned ethnic group in East Africa, primarily residing in Kenya and Tanzania. Known for their rich culture, they are famous for their vibrant red shukas, intricate beadwork, and traditional jumping dance.The Maasai are semi-nomadic pastoralists who rely on cattle for sustenance. Their society follows age-set traditions, with warriors playing a key role in protecting the community.Visitors to Maasai villages experience authentic traditions, including storytelling, music, and crafts. Despite modernization, the Maasai preserve their customs, making them a symbol of Africa’s cultural heritage."
          }
          priceGroup={"Free"}
          priceIndividual={"Free"}
        />
        <Card
          cardImage={image4}
          name={"Mt Kenya"}
          description={
            "Mount Kenya is Africa’s second-highest peak, standing at 5,199 meters. Located in central Kenya, it features rugged summits, glaciers, and alpine meadows, offering breathtaking scenery.The mountain has three main peaks—Batian, Nelion, and Point Lenana—popular among climbers and trekkers. Its slopes are home to diverse wildlife, including elephants, buffaloes, and unique plant species like giant lobelias.Mount Kenya is a UNESCO World Heritage Site and a vital water source for the country. The mountain’s rich ecosystem and cultural significance make it a must-visit destination for adventure and nature lovers."
          }
          priceGroup={"650"}
          priceIndividual={"669"}
        />
        <Card
          cardImage={image5}
          name={"Rift Valley"}
          description={
            "The Rift Valley is a vast geological wonder stretching across East Africa, with stunning escarpments, lakes, and diverse ecosystems. In Kenya, it is home to breathtaking landscapes, including Lake Nakuru, Lake Naivasha, and the Great Rift Valley escarpments.The valley was formed by tectonic movements, creating deep rifts and volcanic formations like Mount Longonot. It supports rich biodiversity, including flamingos, rhinos, and unique plant species.Beyond nature, the Rift Valley hosts various communities, such as the Maasai, who maintain traditional lifestyles. Its beauty and historical significance make it a prime destination for travelers and researchers alike."
          }
          priceGroup={"200"}
          priceIndividual={"229"}
        />
        <Card
          cardImage={image6}
          name={"Tsavo"}
          description={
            "Tsavo is Kenya’s largest national park, divided into Tsavo East and Tsavo West, covering over 22,000 square kilometers. It is famous for its red elephants, vast savannas, and dramatic landscapes.Tsavo East is known for its open plains, the Galana River, and the stunning Lugard Falls, while Tsavo West features volcanic formations, Mzima Springs, and diverse wildlife.Did I forget to metion the renowed bi five sits comfortably in this rich ecosystem? The park is home to lions, leopards, rhinos, elephants, buffallos and over 500 bird species.Rich in history and natural beauty, Tsavo offers a true wilderness experience, making it a top destination for safari enthusiasts and nature lovers."
          }
          priceGroup={"1000"}
          priceIndividual={"1050"}
        />
        <Card
          cardImage={image7}
          name={"Mt Rwenzori"}
          description={
            "Mount Rwenzori is a spectacular mountain range on the border of Uganda and the Democratic Republic of Congo, reaching 5,109 meters at Margherita Peak. Known as the Mountains of the Moon, it features rugged peaks, glaciers, and misty valleys.The mountain is home to unique alpine vegetation, including giant lobelias and heathers. It also supports diverse wildlife, such as Rwenzori turacos, chimpanzees, and forest elephants.A UNESCO World Heritage Site, Rwenzori National Park attracts trekkers and climbers seeking challenging routes and breathtaking scenery, making it one of Africa’s most remarkable adventure destinations."
          }
          priceGroup={"999"}
          priceIndividual={"1010"}
        />
        <Card
          cardImage={image8}
          name={"Diani"}
          description={
            "Diani Beach is a stunning tropical paradise on Kenya’s south coast, known for its pristine white sands and turquoise waters. Stretching along the Indian Ocean, it offers a perfect blend of relaxation and adventure.The beach is ideal for water sports like snorkeling, kite surfing, and diving, with vibrant coral reefs teeming with marine life. Visitors can also explore nearby Shimba Hills National Reserve or take a dhow cruise.With luxurious resorts, lively nightlife, and breathtaking sunsets, Diani Beach is a top destination for honeymooners, beach lovers, and travelers seeking a serene coastal escape."
          }
          priceGroup={"1200"}
          priceIndividual={"1250"}
        />
      </div>
    </>
  );
}

function Card({ cardImage, name, description, priceGroup, priceIndividual }) {
  return (
    <>
      <div className="card-container">
        <div className="card-image-wrapper">
          <img src={cardImage} alt="" />
        </div>
        <div className="card-name">{name}</div>
        <div className="card-description">{description}</div>
        <div className="card-price-group">
          Group Price Per Head @ <span className="pr">$ {priceGroup}</span>
        </div>
        <div className="card-indvidual-price">
          Price For Single's @{" "}
          <span className="pr">$ {priceIndividual}</span>{" "}
        </div>
        <div className="card-btn">
          <button className="card-button">
            <span className="btn-name">Explore Now</span>
          </button>
        </div>
      </div>
    </>
  );
}
