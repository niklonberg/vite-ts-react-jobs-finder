import Card from "./Card";
import HeadingThree from "./HeadingThree";
import CardText from "./CardText";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="px-4 py-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <HeadingThree>For Developers</HeadingThree>
          <CardText>Find your next job in the React ecosystem.</CardText>
          <Link to="/jobs">Browse Jobs</Link>
        </Card>
        <Card>
          <HeadingThree>For Employers</HeadingThree>
          <CardText>Post a job to find the best React developers.</CardText>
          <Link to="/add-job">Post Job</Link>
        </Card>
        <Card>
          <HeadingThree>Get Familiar With React</HeadingThree>
          <CardText>
            Learn React with free resources hand-picked by our senior
            developers.
          </CardText>
          <Link to="/learning-resources">Learn</Link>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
