import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/ecommerce.webp";
import ImageTwo from "../../images/food.jpg";
import ImageThree from "../../images/makeover.webp";
import ImageFour from "../../images/movie.png";
import ImageFive from "../../images/pet.webp";

// import ImageOne from "../../images/image1.jpg";
// import ImageTwo from "../../images/image2.jpg";
// import ImageThree from "../../images/image3.jpg";
// import ImageFour from "../../images/image4.jpg";
// import ImageFive from "../../images/image5.jpg";
import "./styles.css";
import { useState } from "react";

const portfolioData = [
  {
    id: 3,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 5,
    name: "Restaurant",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Makeover",
    image: ImageThree,
    link: "",
  },
  {
    id: 1,
    name: "Movie Booking",
    image: ImageFour,
    link: "",
  },
  {
    id: 4,
    name: "Pet Adoption",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Makeover",
  },
  {
    filterId: 3,
    label: "Ecommerce",
  },
  {
    filterId: 4,
    label: "Pet",
  },
  {
    filterId: 5,
    label: "Food",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;