"use client";
import { ICountrie, Region } from "@/app/@types/interfaces";
import Card from "@/app/components/Card";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";


interface Props {
    countries: ICountrie[]
}
export default function MainContent({
    countries
}: Props) {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState<Region>('All');
    const [page, setPage] = useState(1);
    const continents: Region[] = ['All', 'Americas', 'Europe', 'Africa', 'Asia', 'Oceania'];
    const router = useRouter()


    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    }

    const onSelectContinent = (continent: string) => {
        setRegion(continent as Region)
    }

    const filteredCountries = useMemo(() => {
        if (!countries) return;
        if (region === 'All') {
            const filter = countries.filter((countrie) => countrie.name.common.toLowerCase().includes(search.toLowerCase()))
            return filter;
        }

        const filter = countries.filter(countrie => countrie.name.common.toLowerCase().includes(search.toLowerCase()) && countrie.region === region)
        const ceil = Math.ceil(filter.length / 15)

        if (page > ceil) setPage(ceil);
        if (page === 0) setPage(1)

        return filter;
    }, [search, region, countries])

    const countriePreview = useMemo(() => {
        if (!filteredCountries) return;
        const currentCountries = filteredCountries.slice((page - 1) * 16, page * 16)

        return currentCountries;
    }, [countries, page, filteredCountries])

    const prevPage = () => {
        if (!countriePreview) return;
        if (page === 1) return;
        setPage(page - 1)
    }
    const nextPage = () => {
        if (!filteredCountries) return;
        const ceil = Math.ceil(filteredCountries.length / 16)
        if (page >= ceil) return;
        setPage(page + 1)
    }

    const count = useMemo(() => {
        if (!filteredCountries) return;
        const ceil = Math.ceil(filteredCountries.length / 16)
        return `${page} / ${ceil}`
    }, [page, filteredCountries])

    const redirectCountrieDetailsPage = (countrie: string) => {
        console.log('push')
        router.push(`/countries/${countrie}`)
    }


    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between mb-6">
                <input
                    className="p-2 rounded-sm w-72 h-12"
                    type="text"
                    placeholder="Search for a country..."
                    value={search}
                    onChange={onChangeSearch}
                />
                <select
                    className="p-2 rounded-sm w-72 h-12"
                    onChange={(e) => onSelectContinent(e.target.value)}
                >
                    {continents.map((option) => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
            </div>
            {!countriePreview?.length ? (
                <div className="flex justify-center items-center h-96">
                    <p className="text-2xl">No results</p>
                </div>
            ) : (
                <div>
                    <button onClick={prevPage}>
                        Previous page
                    </button>
                    {count}
                    <button onClick={nextPage}>
                        Next page
                    </button>
                </div>
            )}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {countriePreview?.map((countrie) => (
                    <Card key={countrie.name.common} onClick={() => redirectCountrieDetailsPage(countrie.name.common)}>
                        <div className="flex justify-center">
                            <img src={countrie.flags.png} alt={countrie.name.common} className="w-full h-52" />
                        </div>
                        <div className="mt-4 p-6">
                            <h3 className="text-lg font-semibold">{countrie.name.common}</h3>
                            <p className="text-sm">Population: {countrie.population}</p>
                            <p className="text-sm">Region: {countrie.region}</p>
                            <p className="text-sm">Capital: {countrie.capital}</p>
                        </div>
                    </Card>
                ))}
            </div>

        </div>
    )
}
