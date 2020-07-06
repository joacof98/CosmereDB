import React, { useState } from "react";
import {
  Form,
  Button,
  Segment,
  Input,
  Rating,
  TextArea,
  Message,
} from "semantic-ui-react";
import {addOneReview} from '../../util/queries';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [bookName, setBookName] = useState("");
  const [bookDesc, setBookDesc] = useState("");
  const [visibleError, setVisibleError] = useState(false);

  const handleRate = (e, { rating, maxRating }) => {
    setRating(rating);
  };

  const addReview = async (e) => {
    e.preventDefault();
    if(bookName === "" || bookDesc === "" || rating === 0) {
      setVisibleError(true);
    } else {
      setVisibleError(false);
      await addOneReview(rating, bookName, bookDesc)
      setBookName("");
      setBookDesc("");
    } 
  }

  return (
    <Segment id="form" color="teal" padded textAlign="left">
      <Form onSubmit={addReview}>
        <Form.Field>
          <label>Book Name</label>
          <Input
            value={bookName}
            icon="book"
            iconPosition="left"
            placeholder="Enter the book name"
            onChange={(e) => setBookName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <TextArea
            value={bookDesc}
            icon="heart"
            placeholder="Enter a review for the book"
            onChange={(e) => setBookDesc(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Rating</label>
          <Rating
            icon="heart"
            defaultRating={0}
            maxRating={5}
            onRate={handleRate}
          />
        </Form.Field>
        <Button color="teal" type="submit">
          Submit
        </Button>

        {visibleError ? (
          <Message negative floating>
            The fields cant be empty
          </Message>
        ) : null}
      </Form>
    </Segment>
  );
}

export default ReviewForm;
