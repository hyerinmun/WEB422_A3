import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';
import { Container } from 'react-bootstrap';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    id ? `https://web422-a1-inky.vercel.app/api/listings/${id}` : null
  );

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <Error statusCode={404} />;

  return (
    <Container>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </Container>
  );
}
