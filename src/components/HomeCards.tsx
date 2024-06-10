import React from "react";
import Card from "./Card";
import HeadingThree from "./HeadingThree";
import CardText from "./CardText";

const HomeCards = () => {
  return (
    <section className="px-4 py-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <HeadingThree>Find a Job</HeadingThree>
          <CardText>Find your next job in the React ecosystem</CardText>
        </Card>
        <Card>
          <HeadingThree>Post a Job</HeadingThree>
          <CardText>Post a job to find the best React developers</CardText>
        </Card>
        <Card>
          <HeadingThree>Learn React</HeadingThree>
          <CardText>Learn React with our free resources</CardText>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
