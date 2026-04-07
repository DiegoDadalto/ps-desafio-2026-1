'use server'

import { api } from '@/services/api'
import { sportsItemType } from '@/types/sportsItem';
import { revalidatePath } from 'next/cache'
import { Dispatch, SetStateAction } from 'react';

export async function createSportsItem(form: FormData) {
    const res = await api('POST', '/equipments', { data: form });

    if (!res.error) {
        revalidatePath('/admin/artigos-esportivos')
    }

    return JSON.stringify(res);
}

export async function updateSportsItem(form: FormData) {
    const res = await api('POST', `/equipments/${form.get('id')}`, { data: form });

    if (!res.error) {
        revalidatePath('/admin/artigos-esportivos')
    }

    return JSON.stringify(res);
}

export async function destroySportsItem(id: string) {
    const res = await api('DELETE', `/equipments/${id}`);

    if (!res.error) {
        revalidatePath('/admin/artigos-esportivos')
    }

    return JSON.stringify(res);
}

export async function handleBuy(id: string, item: sportsItemType) {
    const { response, error } = await api('PUT', `/equipments/${id}`, { data: { amount: item.amount } });
    console.log("Resposta da API:", response)
    console.log(`Erro da API: ${error}`)

    if (response) {
        console.error(error?.message);
    }

    return JSON.stringify(response);
}
