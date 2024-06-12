import Card from "./Card";
import HeadingThree from "./HeadingThree";
import CardText from "./CardText";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="px-4 py-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card customClasses="flex flex-col justify-between items-start">
          <div>
            <HeadingThree>For Developers</HeadingThree>
            <CardText>Find your next job in the React ecosystem.</CardText>
          </div>
          <Link
            className="bg-indigo-500 text-white px-4 py-2 rounded-md"
            to="/jobs"
          >
            Browse Jobs
          </Link>
        </Card>
        <Card customClasses="flex flex-col justify-between items-start">
          <div>
            <HeadingThree>For Employers</HeadingThree>
            <CardText>Post a job to find the best React developers.</CardText>
          </div>
          <Link
            to="/add-job"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md"
          >
            Post Job
          </Link>
        </Card>
        <Card customClasses="flex flex-col justify-between items-start">
          <div>
            <HeadingThree>Get Familiar With React</HeadingThree>
            <CardText>
              Learn React with free resources hand-picked by our senior
              developers.
            </CardText>
          </div>
          <Link
            to="/learning-resources"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md"
          >
            Learn
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
