import getCountries from "@/app/services/get-countries.service";
import MainContent from "./MainContent";

export default async function Main() {
    const countries = await getCountries();

    return <MainContent countries={countries} />
}