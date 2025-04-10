import axios, { AxiosError } from 'axios'
import { Product } from '@/utils/types'


const BASE_API_URL = import.meta.env.VITE_BACKEND_API_URL


export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(`${BASE_API_URL}/api/products`)
        console.log(`Products: ${response.data}`)
        return response.data
    } catch(error) {
        const axiosError = error as AxiosError;
        console.log(`Error fetching products: ${axiosError.message}`)
        throw axiosError 
    }
}

export const fetchSingleProduct = async (productId: string): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(`${BASE_API_URL}/api/products/${productId}`)
        console.log(`Products: ${response.data}`)
        return response.data
    } catch(error) {
        const axiosError = error as AxiosError;
        console.log(`Error fetching product: ${axiosError.message}`)
        throw axiosError 
    }
}