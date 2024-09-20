import { Collapse } from "antd";
import "./faq.css";
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Do we offer any warranties on our cars?",
    children: <div className="faq-col-body">
      <p>There is a limited warranty on the parts and components of the car. There are also warranties for the paint, tires, and other parts.</p>
      <p>The limited warranty is what you are entitled to when the car is purchased. The warranty for the paint, tires, and other parts are only good for so long as the car is in use.</p>
    </div>,
  },
  {
    key: "2",
    label: "Do you need to pay for your car in full before you get it?",
    children: <div className="faq-col-body">
      <p>It's a common misconception that you need to pay for your car in full before you get it. You can actually purchase a car with financing. This is an option that many people don't know about and should take advantage of.</p>
      <p>The best way to finance your car is by getting a loan from the dealership or bank. This way, you will have the money upfront and won't have to worry about payments every month.</p>
    </div>,
  },
  {
    key: "3",
    label: "What is the average cost of a new car these days?",
    children: <div className="faq-col-body">
      <p>The average cost of a new car these days is $36,000.</p>
      <p>This number includes the price of the car and all the extras that come with it like the warranty, taxes, and title transfer.</p>
      <p>The average cost of a new car is $36,000.</p>
      <p>The average cost of a new car these days is $36,000. The number includes the price of the car and all the extras that come with it like the warranty, taxes, and title transfer.</p>
    </div>,
  },
];
const FaqPage = () => {
  return (
    <>
      <section className="faq-page">
        <div className="faq-head">
          <div>
            <span>Home</span> / <span>Faq</span>
          </div>
        </div>
        <div className="my-container">
          <div className="faq-body">
            <h3>Shipping information</h3>
            <Collapse items={items} defaultActiveKey={["1"]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
