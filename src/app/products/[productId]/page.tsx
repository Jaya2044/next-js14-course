import { Metadata } from "next";

type productProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: productProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: productProps) {
  return (
    <div>
      <h2>Details about product {params.productId}</h2>
    </div>
  );
}
