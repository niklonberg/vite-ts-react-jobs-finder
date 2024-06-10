import React from "react";
import Card from "./Card";
import HeadingThree from "./HeadingThree";

const HomeCards = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <HeadingThree>Find a Job</HeadingThree>
          <p>Find your next job in the React ecosystem</p>
        </Card>
        <Card>
          <HeadingThree>Post a Job</HeadingThree>
          <p>Post a job to find the best React developers</p>
        </Card>
        <Card>
          <HeadingThree>Learn React</HeadingThree>
          <p>Learn React with our free resources</p>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
