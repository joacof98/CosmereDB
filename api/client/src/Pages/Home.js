import React, { useState } from "react";
import "../css/home.css";
import { data } from "../util/dataDropdown";
import { Link } from "react-router-dom";
import { Segment, Button, Dropdown, Form, Divider } from "semantic-ui-react";
import { validateInputData } from "../util/validator";

import NoDataMsj from '../Components/NoDataMsj';
import SearchInfo from '../Components/SearchInfo';
import Footer from '../Components/Footer';

function Home() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});

  const handleDropdown = (e, { value }) => {
    setSearch(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await validateInputData(search);
    setResult(res);
  };

  return (
    <div className="App">
      <Segment id="hero" textAlign="center">
        <h1 id="title">Cosmere Finder</h1>
        <Form onSubmit={handleSearch}>
          <Dropdown
            name="search"
            placeholder="Search for characters, planets, books ..."
            search
            selection
            options={data}
            id="dropdownInput"
            onChange={handleDropdown}
          />

          <Button type="submit" id="btnSearch" color="teal">
            Search
          </Button>
        </Form>

        <Divider id="divider" inverted horizontal>
          Or
        </Divider>
        <Button
          color="teal"
          content="Add a review"
          icon="add"
          labelPosition="left"
          as={Link}
          to="/reviews"
        />
      </Segment>

      {Object.keys(result).length > 0 ? (
        <SearchInfo info={result.data} />
      ) : (
        <NoDataMsj />
      )}

      <Footer />
    </div>
  );
}

export default Home;
