import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch('https://web-422-a3-11fgndvpo-hyerinmuns-projects.vercel.app/api/listings/10006546')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch listing, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        resolve({ props: { listing: data } });
      })
      .catch((error) => {
        console.error('Error fetching listing:', error);
        resolve({ props: { listing: null } });
      });
  });
}

function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer - Hyerin Mun" />
      <Card>
        <Card.Body>
          <p>Hello! I am Hyerin Mun, a passionate web developer with expertise in GIS and programming.</p>
          <p>I love creating interactive applications and working on full-stack projects that enhance user experiences.</p>
          <p>Check out one of the listings below!</p>
          {listing ? (
            <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
              <a>View Listing</a>
            </Link>
          ) : (
            <p style={{ color: 'red' }}>Listing not available at the moment.</p>
          )}
        </Card.Body>
        {listing && <ListingDetails listing={listing} />}
      </Card>
    </>
  );
}

export default About;
