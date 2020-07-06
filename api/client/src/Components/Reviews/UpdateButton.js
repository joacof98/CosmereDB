import React, { useState } from "react";
import { Button, Icon, Modal, Header, Form, TextArea, Rating } from "semantic-ui-react";
import "../../css/reviews.css";

import {updateOneReview} from '../../util/queries';

function UpdateButton(props) {
  const { review_id, book, description, rating } = props.review;
  const [opened, setOpened] = useState(false);
  const [bookRating, setBookRating] = useState(rating);
  const [values, setValues] = useState({
      bookName: book,
      bookDesc: description
  })

  const handleRate = (e, { rating, maxRating }) => {
    setBookRating(rating);
  };

  const handleValues = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const onSubmit = async (e) => {
      e.preventDefault();
      await updateOneReview(
        review_id,
        values.bookName,
        values.bookDesc,
        bookRating
      );
      setOpened(false);
  }

  return (
    <>
      <Button color="teal" onClick={() => setOpened(true)}>
        <Icon name="pencil" /> Update
      </Button>

      <Modal open={opened}>
        <Modal.Header>
          <Header color="teal">Update your review</Header>
        </Modal.Header>

        <Modal.Content>
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Form.Input
                icon="book"
                iconPosition="left"
                placeholder="Title of the book"
                name="bookName"
                value={values.bookName}
                onChange={handleValues}
              />
            </Form.Field>
            <Form.Field>
              <TextArea
                icon="pencil alternate"
                placeholder="Your review"
                name="bookDesc"
                value={values.bookDesc}
                id="descUpdate"
                onChange={handleValues}
              />
            </Form.Field>
            <Form.Field>
              <b>Rating: </b>
              <Rating
                icon="heart"
                defaultRating={rating}
                maxRating={5}
                onRate={handleRate}
              />
            </Form.Field>
            <Button type="submit" color="teal">
              OK!
            </Button>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button color="red" onClick={() => setOpened(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default UpdateButton;
