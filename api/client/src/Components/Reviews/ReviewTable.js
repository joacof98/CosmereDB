import React, { useState, useEffect, Fragment } from "react";
import {
  Table,
  Rating,
  Header,
  Segment,
} from "semantic-ui-react";
import { getAllData } from "../../util/queries";
import "../../css/reviews.css";

import ReviewModal from './ReviewModal';

function ReviewTable() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const reviews = await getAllData("reviews");
      setReviews(reviews.data);
    }
    getReviews();
  }, [reviews]);

  return (
    <Fragment>
      <Table columns={3} collapsing padded id="tableReviews" color="teal">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>All books reviews</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {Object.keys(reviews).length > 0 ? (
          <Table.Body>
            <div>
              {reviews.map((review) => (
                <Table.Row key={review.review_id}>
                  <Table.Cell>
                    <Header as="h4">{review.book}</Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Rating
                      disabled
                      icon="heart"
                      defaultRating={review.rating}
                      maxRating={review.rating}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    {review.description.substring(0, 50) + " ..."}{" "}
                    <ReviewModal review={review} />
                  </Table.Cell>
                </Table.Row>         
              ))}
            </div>
          </Table.Body>
        ) : (
          <Segment raised padded>
            <Header textAlign="center" as="h3">
              No reviews added yet.
            </Header>
          </Segment>
        )}
      </Table>
    </Fragment>
  );
}

export default ReviewTable;
