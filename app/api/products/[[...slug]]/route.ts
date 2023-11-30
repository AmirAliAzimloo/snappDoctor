import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ProductType } from "@/types";
interface IParams {
  slug?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const { slug } = params;

    const dbPath = path.join(process.cwd(), "data", "db.json");

    const data = fs.readFileSync(dbPath);

    const parsedData = JSON.parse(data.toString());
 
    const pageIndex = Number(request.url?.split("?page=")?.[1]?.split("&")?.[0]) || 1;


    const endIndex = pageIndex * 10;
    const startIndex = endIndex - 10;

    if (!slug || slug == "all") {
      const paginatedProducts = parsedData.products.slice(startIndex, endIndex);
      return NextResponse.json({
        products:[...paginatedProducts],
        total: parsedData.products.length,
    });
    } else if (slug && slug?.[0]?.toString() !== "search" ) {
      const filteredDataByCategory = parsedData.products.filter(
        (data: ProductType) => {
          return data.category == slug;
        }
      );

      const paginatedFilteredProducts = filteredDataByCategory.slice(
        startIndex,
        endIndex
      );

      return NextResponse.json({
        products:[...paginatedFilteredProducts],
         total: filteredDataByCategory.length,
    });
    }else if(slug && slug?.[0]?.toString() == "search" ){
      const filteredDataBySearch = parsedData.products.filter(
        (data: ProductType) => {
          return data.title.toLowerCase().includes(slug?.[1].toLowerCase());
        }
      );

      const paginatedFilteredProducts = filteredDataBySearch.slice(
        startIndex,
        endIndex
      );

      return NextResponse.json({
        products:[...paginatedFilteredProducts],
         total: filteredDataBySearch.length,
     });
    }
  } catch (error: any) {
    // console.log(error, "ERROR_MESSAGES_CATEGORIES");
    return new NextResponse("InteranlError", { status: 500 });
  }
}
