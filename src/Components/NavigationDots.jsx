import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "contact", "work", "Skills", "Testimonial"].map(
        (items, index) => (
          <a
            href={`#${items}`}
            // onClick={() => setToggle(false)}
            key={items + index}
            className="app__navigation-dot"
            style={active === items ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
