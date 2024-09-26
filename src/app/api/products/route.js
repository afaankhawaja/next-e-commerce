import dbConnect from '@/lib/db';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

// API for fetching products
export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let query = {};

    if (category) {
      query.category = category; // Filter by category
    }
    
    if (search) {
      query.title = { $regex: search, $options: 'i' }; // Case insensitive search
    }

    const products = await Product.find(query); // Fetch products based on the constructed query

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
