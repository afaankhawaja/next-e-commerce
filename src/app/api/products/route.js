import dbConnect from '@/lib/db';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

// API for fetching products
export async function GET(request) {
  try {
    await dbConnect(); // Ensure DB connection is established

    // Extract category from the query string
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let products;

    if (category) {
      // Fetch products by category if category is provided
      products = await Product.find({ category });
    } else {
      // Fetch all products if no category is provided
      products = await Product.find({});
    }

    return NextResponse.json(products); // Send products back to the client
  } catch (error) {
    console.error('Error fetching products:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
