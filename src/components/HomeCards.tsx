import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-bold text-xl mb-2">Find a Job</h3>
          <p>Find your next job in the React ecosystem</p>
        </Card>
        <Card>
          <h3 className="font-bold text-xl mb-2">Post a Job</h3>
          <p>Post a job to find the best React developers</p>
        </Card>
        <Card>
          <h3 className="font-bold text-xl mb-2">Learn React</h3>
          <p>Learn React with our free resources</p>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
