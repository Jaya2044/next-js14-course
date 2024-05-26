"use client"
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

type detailsProps = {
  params: {
    reviewId: string;
    productId: string;
  };
};

export default function ReviewDetails({ params }: detailsProps) {

  const random = getRandomInt(2);

  if(random === 1) {
    throw new Error('Error loading review')
  }

  if(parseInt(params.reviewId) > 1000) {
    notFound()
  }
  return (
    <h2>
      Review {params.reviewId} for product {params.productId}
    </h2>
  );
}