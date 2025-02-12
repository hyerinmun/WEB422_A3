import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ListingDetails({ listing }) {
  if (!listing) {
    return <p style={{ color: 'red' }}>Listing details not available.</p>;
  }

  return (
    <Container>
      <Row>
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = 'https://placehold.co/600x400?text=Photo+Not+Available';
            }}
            className="img-fluid w-100"
            src={listing.images?.picture_url || 'https://placehold.co/600x400?text=Photo+Not+Available'}
            alt="Listing Image"
          />
          <br />
          <br />
        </Col>
        <Col lg>
          <p>{listing.neighborhood_overview || 'No description available.'}</p>
          <br />
          <br />
          <strong>Price:</strong> ${listing.price?.toFixed(2) || 'N/A'}<br />
          <strong>Room:</strong> {listing.room_type || 'N/A'}<br />
          <strong>Bed:</strong> {listing.bed_type || 'N/A'} ({listing.beds || 'N/A'})<br />
          <br />
          <strong>Rating:</strong> {listing.review_scores?.review_scores_rating || 'N/A'}/100 ({listing.number_of_reviews || 0} Reviews)<br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default ListingDetails;