import React, { useState } from "react";
import {
  Modal,
  Header,
  Button,
  Icon,
  Popup,
} from "semantic-ui-react";
import "../../css/reviews.css";
import { deleteOneReview } from "../../util/queries";

import UpdateButton from './UpdateButton';

function ReviewModal(props) {
  const [opened, setOpened] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { review_id, book, description } = props.review;

  const deleteReview = async () => {
    const res = await deleteOneReview(review_id)
    setOpened(false);
    setConfirm(false);
    console.log(res);
  }

  return (
    <div>
      <Popup
        content="See more"
        trigger={
          <Button
            basic
            icon="plus"
            size="mini"
            floated="right"
            onClick={() => {
              setOpened(true);
            }}
          />
        }
      />

      {/* MODAL FOR EXPAND INFORMATION */}
      <Modal open={opened}>
        <Modal.Header id="heroHeader">
          <Header as="h1" id="titleModal">
            {book}
          </Header>
          <Button
            icon="close"
            size="small"
            floated="right"
            color="red"
            onClick={() => {
              setOpened(false);
            }}
          />
        </Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <Header as="h4" color="red">
              Your toughts:
            </Header>
            <p id="modalDesc">{description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <UpdateButton review={props.review} />
          <Button color="red" onClick={() => setConfirm(true)}>
            <Icon name="trash" /> Delete
          </Button>
        </Modal.Actions>
      </Modal>
      
      {/* MODAL FOR CONFIRMATION */}
      <Modal open={confirm} size="mini">
        <Modal.Header>Delete your review?</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your review?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setConfirm(false)}>
            No
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yes"
            onClick={deleteReview}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default ReviewModal;
