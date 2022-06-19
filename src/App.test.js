import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home/Home";
import { MemoryRouter as Router } from "react-router-dom";
import SwiperSection from "./components/Home/SwiperSection/SwiperSection";

test("Home renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  //const text = await screen.findAllByText('Contact us')

  const homepage = await screen.findByTestId("homepage");
  expect(homepage).toBeInTheDocument();

 
});

test("Swiper section renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  //const text = await screen.findAllByText('Contact us')

  const element = await screen.findByTestId("swiperSection");
  expect(element).toBeInTheDocument();

  // eslint-disable-next-line testing-library/no-debugging-utils
 
});

test("Swiper section has correct title 1", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const element = await screen.findByTestId("swiperSection");
  expect(element).toHaveTextContent("Lorem ipsum dolor")
  expect(element).not.toHaveTextContent("asdasdasdasdasd") 
});

test("Swiper section has correct title 2", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const element = await screen.findByTestId("swiperSection");
  expect(element).toHaveTextContent("Ut enim blandit")
  expect(element).not.toHaveTextContent("asdasdasdasdasd") 
});

test("Swiper section has correct title 3", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const element = await screen.findByTestId("swiperSection");
  expect(element).toHaveTextContent("Quisque non tellus")
  expect(element).not.toHaveTextContent("asdasdasdasdasd") 
});



test("Home page Section2 renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  //const text = await screen.findAllByText('Contact us')

  const element = await screen.findByTestId("section2");
  expect(element).toBeInTheDocument();

 
 
});

test("Home page Section3 renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  //const text = await screen.findAllByText('Contact us')

  const element = await screen.findByTestId("section3");
  expect(element).toBeInTheDocument();


 
});

test("Home page Section4 renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  //const text = await screen.findAllByText('Contact us')

  const element = await screen.findByTestId("section4");
  expect(element).toBeInTheDocument();

  // eslint-disable-next-line testing-library/no-debugging-utils
 
});
