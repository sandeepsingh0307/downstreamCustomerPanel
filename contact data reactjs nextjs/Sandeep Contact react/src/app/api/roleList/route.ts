import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = process.env.BASE_URL || "https://contactwindos.azurewebsites.net";

export async function GET(request: Request) {
    // const response = await axios.get(`${baseUrl}/roles/listRoles`);
    // const data = response.data;
    // return NextResponse.json({
    //     body: data,
    // });
    return true;
}

