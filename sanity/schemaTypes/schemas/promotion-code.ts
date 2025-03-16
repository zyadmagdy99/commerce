import { defineField, defineType } from "sanity";


export const promotionCode = defineType({
    name: 'promotionCode',
    title: 'Promotion Code',
    type: 'document',
    fields: [
        defineField({
            name: 'code',
            title: 'Code',
            type: 'string',
        }),
        defineField({
            name: 'discountPercentage',
            title: 'Descount Percentage (%)',
            type: 'number',
        }),
        defineField({
            name: 'expirationDate',
            title: 'Expiration Date',
            type: 'date',
        }),

    ]
        
})