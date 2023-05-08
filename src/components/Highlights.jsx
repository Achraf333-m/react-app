import Highlight from "./ui/Highlight";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why Choose <span className="purple">Library</span>
          </h2>
          <ul className="highlights__wrapper">
            <Highlight
              icon="bolt"
              subtitle="Quick and Easy Access"
              para="Get acces to the books you purchased instantly"
            />
            <Highlight
              icon="book-open"
              subtitle="10 000+ Books"
              para="Library has books in all your favorite genres"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
