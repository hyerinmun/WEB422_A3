import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
  try {
    const res = await fetch('https://web-422-a3-11fgndvpo-hyerinmuns-projects.vercel.app/api/listings/10006546');
    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }
    const data = await res.json();

    return {
      props: {
        listing: data,
      },
    };
  } catch (error) {
    console.error('Error fetching listing:', error);
    return {
      props: {
        listing: null,
      },
    };
  }
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
            <p>Listing not available.</p>
          )}
        </Card.Body>
        {listing && <ListingDetails listing={listing} />}
      </Card>
    </>
  );
}

export default About;
