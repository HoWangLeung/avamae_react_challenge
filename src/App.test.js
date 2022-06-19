/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home/Home";
import { MemoryRouter as Router } from "react-router-dom";
import SwiperSection from "./components/Home/SwiperSection/SwiperSection";
import { logRoles } from "@testing-library/dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("Contact page renders without crash", async () => {
  render(
      <Contact />
  );

  const header = await screen.findByText('Contact us')
  const subtitle = await screen.findByText('Populo facillsi nam no, dolor deleniti deserulsse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.')
  expect(header).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()

});

test("Contact page  checkbox onClick should render address fields input ", async () => {
  const user = userEvent.setup();

  render(<Contact />);

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).toBeInTheDocument();
   
  expect(screen.queryByText('State/County')).not.toBeInTheDocument()
  await user.click(checkbox);
  expect(screen.getByText('State/County')).toBeInTheDocument()

 
  logRoles(checkbox);
  screen.debug();
});


test("Home renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const homepage = await screen.findByTestId("homepage");
  expect(homepage).toBeInTheDocument();

});

test("Swiper section renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const element = await screen.findByTestId("swiperSection");
  expect(element).toBeInTheDocument();

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

  const element = await screen.findByTestId("section2");
  expect(element).toBeInTheDocument();

});

test("Home page Section3 renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const element = await screen.findByTestId("section3");
  expect(element).toBeInTheDocument();

});

test("Home page Section4 renders without crash", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const element = await screen.findByTestId("section4");
  expect(element).toBeInTheDocument();
  // screen.debug(undefined,Infinity)

});

test("About page renders without crash", async () => {
  render(
      <About />
  );

  const header = await screen.findByText('About us')
  const subtitle = await screen.findByText('Populo facllisi nam no,dolor deleniti deseruisse ne cum,nam quodsi alliquam eligendi ne.Ferri euismod accusata te nec, summo accumsan at vix.')
  expect(header).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()

});

