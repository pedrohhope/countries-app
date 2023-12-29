import { ICountrie } from "@/app/@types/interfaces"
import getCountrieByName from "@/app/services/countrie-by-name.service";
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

interface Params {
    params: {
        countrie: string
    }
}

export default async function Page({ params }: Params) {
    const countrie = await getCountrieByName(params.countrie);

    return (
        <>
            <p>{countrie.name.common}</p>
        </>
    )
}