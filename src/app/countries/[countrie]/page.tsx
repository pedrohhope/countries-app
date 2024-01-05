import NavigateButton from "@/app/components/NavigateButton";

import getCountrieByName from "@/app/services/countrie-by-name.service";
import getCountries from "@/app/services/get-countries.service";

interface Params {
    params: {
        countrie: string
    }
}

export async function generateStaticParams() {
    const countries = await getCountries()

    return countries.map((countrie) => ({
        countrie: countrie.name.common
    }))
}

export default async function Page({ params }: Params) {
    const countrie = await getCountrieByName(params.countrie);

    const languagesArray = countrie.languages ? Object.values(countrie.languages) : [];
    const languages = languagesArray.slice(0, -1).join(', ') + (languagesArray.length > 1 ? ' and ' : '') + languagesArray.slice(-1);

    return (
        <div className="container mx-auto px-4">
            <NavigateButton
                title="Back"
                url="/"
                customStyle={{ marginBottom: '10px' }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={countrie.flags.svg} alt={countrie.flags.alt} className="w-full h-full" />
                </div>
                <div className="container mx-auto px-4">
                    <h1 className="font-bold text-2xl mb-10">{countrie.name.common}</h1>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-3">
                            <p className="font-bold">
                                Official name: <span className="font-normal">{countrie.name.official}</span>
                            </p>

                            <p className="font-bold">
                                Capital: <span className="font-normal">{countrie.capital}</span>
                            </p>

                            <p className="font-bold">
                                Region: <span className="font-normal">{countrie.region}</span>
                            </p>

                            <p className="font-bold">
                                Subregion: <span className="font-normal">{countrie.subregion}</span>
                            </p>

                            <p className="font-bold">
                                Capital: <span className="font-normal">{countrie.capital}</span>
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="font-bold">
                                Area: <span className="font-normal">{countrie.area}</span>
                            </p>

                            <p className="font-bold">
                                Population: <span className="font-normal">{countrie.population}</span>
                            </p>

                            <p className="font-bold">
                                Languages: <span className="font-normal">{languages}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}