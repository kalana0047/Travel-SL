import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/rest.css";
import RestCard from "./../shared/RestCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Rests = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: rests,
    loading,
    error,
  } = useFetch(`${BASE_URL}/rests?page=${page}`);
  const { data: restCount } = useFetch(`${BASE_URL}/rests/search/getRestCount`);

  useEffect(() => {
    const pages = Math.ceil(restCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, restCount, rests]);

  return (
    <>
      <CommonSection title={"Restaurants & Bars"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {rests?.map(rest => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={rest._id}>
                  <RestCard rest={rest} />
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Rests;
