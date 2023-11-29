import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

import categories from "@/data/db.json"


export async function GET(request: Request) {
  try {
    const dbPath = path.join(process.cwd(), "data", "db.json");

    const data = fs.readFileSync(dbPath);

    const parsedData = JSON.parse(data.toString())

    return NextResponse.json(parsedData.products)


  } catch (error: any) {
    console.log(error, "ERROR_MESSAGES_CATEGORIES");
    return new NextResponse("InteranlError", { status: 500 });
  }
}
