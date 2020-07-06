import React from "react";
import "../css/reviews.css";
import { Segment, Container } from "semantic-ui-react";

import ReviewForm from "../Components/Reviews/ReviewForm";
import ReviewTable from "../Components/Reviews/ReviewTable";
import Footer from "../Components/Footer";

function Reviews() {
  return (
    <div>
    <Segment id="heroR" textAlign="center">
      <h1 id="titleReviews">Add a review</h1>
      <Container>
        <ReviewForm />
        <ReviewTable />
      </Container>
      <Footer />
    </Segment>
    </div>
  );
}

export default Reviews;
