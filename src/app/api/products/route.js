import dbConnect from '@/lib/db';
import Product from '@/models/product';

export async function GET(req) {
  await dbConnect();

  const products = await Product.find({});

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}
