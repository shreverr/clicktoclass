import axios from "axios";

export const revalidate = 0;

export async function GET() {
  try {
    const sheetId = process.env.TIME_TABLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const range = 'Sheet1!A2:G'

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`

    const values = (await axios.get(url)).data.values;
    console.log('fetched sheets data', values);

    return Response.json({ status: 'Success', values });
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}
