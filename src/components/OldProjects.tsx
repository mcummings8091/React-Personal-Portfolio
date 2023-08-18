import CarouselProject from "./CarouselProject";
import StyledHeader from "./StyleComponents/StyledHeader";

const OldProjects = () => {
  return (
    <>
      <StyledHeader style={{ marginTop: "5rem" }}>Old Projects</StyledHeader>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CarouselProject
              title="Skateboarding Documentation"
              src="images/skatedoc.png"
              link="/project1"
            ></CarouselProject>
          </div>
          <div className="carousel-item">
            <CarouselProject
              title="Personal Portfolio (Old)"
              src="images/oldportfolio.png"
              link="/project1"
            ></CarouselProject>
          </div>
          <div className="carousel-item">
            <CarouselProject
              title="Mock Skateshop Webpage"
              src="images/skatestore.png"
              link="/project1"
            ></CarouselProject>
          </div>
          <div className="carousel-item">
            <CarouselProject
              title=" Mock Skateboarding Survey"
              src="images/skatesurvey.png"
              link="/project1"
            ></CarouselProject>
          </div>
          <div className="carousel-item">
            <CarouselProject
              title="Anakin Skywalker Character Webpage"
              src="images/tributepage.png"
              link="/project1"
            ></CarouselProject>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default OldProjects;
