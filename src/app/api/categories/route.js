import dbConnect from '@/lib/db';
import Product from '@/models/product';
import { NextResponse } from 'next/server';

// API for fetching distinct product categories
export async function GET() {
  try {
    await dbConnect();
    
    // Get distinct categories from the product collection
    const categories = await Product.distinct('category');
    
    return NextResponse.json(categories); // Return categories as JSON
  } catch (error) {
    console.error('Error fetching categories:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
