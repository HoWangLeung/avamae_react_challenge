/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home/Home";
import { MemoryRouter as Router } from "react-router-dom";
import SwiperSection from "./components/Home/SwiperSection/SwiperSection";
import {logRoles} from '@testing-library/dom'
// test("Home renders without crash", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );

//   const homepage = await screen.findByTestId("homepage");
//   expect(homepage).toBeInTheDocument();

 
// });

// test("Swiper section renders without crash", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );

 

//   const element = await screen.findByTestId("swiperSection");
//   expect(element).toBeInTheDocument();



 
// });

// test("Swiper section has correct title 1", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );

//   const element = await screen.findByTestId("swiperSection");
//   expect(element).toHaveTextContent("Lorem ipsum dolor")
//   expect(element).not.toHaveTextContent("asdasdasdasdasd") 
// });

// test("Swiper section has correct title 2", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );

//   const element = await screen.findByTestId("swiperSection");
//   expect(element).toHaveTextContent("Ut enim blandit")
//   expect(element).not.toHaveTextContent("asdasdasdasdasd") 
// });

// test("Swiper section has correct title 3", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );

//   const element = await screen.findByTestId("swiperSection");
//   expect(element).toHaveTextContent("Quisque non tellus")
//   expect(element).not.toHaveTextContent("asdasdasdasdasd") 
// });







// test("Home page Section2 renders without crash", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );

 
//   const element = await screen.findByTestId("section2");
//   expect(element).toBeInTheDocument();

 
// });

// test("Home page Section3 renders without crash", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );

//   const element = await screen.findByTestId("section3");
//   expect(element).toBeInTheDocument();


 
// });

// test("Home page Section4 renders without crash", async () => {
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );


//   const element = await screen.findByTestId("section4");
//   expect(element).toBeInTheDocument();
//   // screen.debug(undefined,Infinity)
 
// });


test("Swiper image 1 render without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const elements = await screen.findAllByRole('img',{})
    // console.log(elements);
    elements.forEach(d=>{
      console.log("HELLO");
      logRoles(d)
    })
});
