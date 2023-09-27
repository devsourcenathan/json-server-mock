//import { faker } from '@faker-js/faker';

module.exports = () => {

    const source = require('@faker-js/faker')

    var faker = source.faker;

    const data = {
        "dashboard": [],
        "corporates": [],
        "entities": [],
        "currencies": [],
        "documents": [],
        "groups": [],
        "accounts": [],
        "documents_type": [],
    }

    Array.from({ length: 100 }).forEach(() => {
        data.corporates.push({
            id: faker.string.uuid(),
            title: faker.company.name(),
            description: faker.company.catchPhraseDescriptor(),
            date: faker.date.recent(),
            price: faker.string.numeric(3),

            createdOn: faker.date.past(),
        })
    })

    Array.from({ length: 100 }).forEach(() => {
        data.entities.push({
            id: faker.string.uuid(),
            fullName: faker.company.name(),
            activity: faker.company.catchPhraseDescriptor(),
            date: faker.date.recent(),
            vat: faker.string.numeric(8),
            registrationNumber: faker.finance.accountNumber(),
            type: faker.string.fromCharacters(['fund', 'corporate']),
            group: faker.string.fromCharacters(['Invoices', "Reports", "Scan", "Draff"]),
            address: faker.location.country(),
            currency: faker.finance.currencyName(),
            jurisdiction: faker.location.countryCode(),
            generalPartner: faker.company.name(),
            assetsManager: faker.company.name(),
            productType: faker.commerce.product(),
            stats: {
                cash_in: faker.finance.amount(),
                cash_out: faker.finance.amount(),
            },
            contacts: Array.from({ length: 12 }).map(() => {
                return {
                    id: faker.string.uuid(),
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                    phone: faker.phone.number(),
                    address: faker.location.country()
                }
            }),
            banks: Array.from({ length: 2 }).map(() => {
                return {
                    id: faker.string.uuid(),
                    name: faker.finance.accountName(),
                    email: faker.internet.email(),
                    phone: faker.phone.number(),
                    address: faker.location.country(),
                }
            }),
            reports: Array.from({ length: 8 }).map(() => {
                return {
                    id: faker.string.uuid(),
                    name: faker.finance.accountName(),
                    email: faker.internet.email(),
                    phone: faker.phone.number(),
                    address: faker.location.country(),
                }
            }),
            // investies: Array.from({length: 3}).map(() => {
            //     return {
            //         id: faker.string.uuid(),
            //     }
            // })
        })
    })

    Array.from({ length: 10 }).forEach(() => {
        data.currencies.push({
            id: faker.string.uuid(),
            name: faker.finance.currencyCode(),
            currentValue: faker.finance.amount(),
            previousValue: faker.finance.amount(),
            date: faker.date.recent(),
        })
    })

    Array.from({ length: 100 }).forEach(() => {
        data.documents.push({
            id: faker.string.uuid(),
            type: {
                id: faker.string.uuid(),
                label: faker.string.fromCharacters(['pdf', 'word', 'excel']),
                description: faker.lorem.sentence(),
                created_at: faker.date.recent(),
            },
            transaction: faker.finance.transactionType(),
            upload_by: faker.person.fullName(),
            upload_date: faker.date.recent(),
        })
    })

    Array.from({ length: 100 }).forEach(() => {
        data.groups.push({
            id: faker.string.uuid(),
            name: faker.string.fromCharacters(['Invoices', "Reports", "Scan", "Draff"]),
            currency: faker.finance.currencyName(),
            jurisdiction: faker.location.countryCode(),
            product: faker.commerce.productName(),
            business: faker.commerce.department(),
            date: faker.date.recent(),
        })
    })

    Array.from({ length: 3 }).forEach(() => {
        data.accounts.push({
            id: faker.string.uuid(),
            iban: faker.finance.iban(),
            balance: faker.finance.amount(),
            last_transaction_date: faker.date.recent(),
            date: faker.date.recent(),
        })
    })

    Array.from({ length: 6 }).forEach(() => {
        data.documents_type.push({
            id: faker.string.uuid(),
            label: faker.string.fromCharacters(['pdf', 'word', 'excel']),
            description: faker.lorem.text(),
            created_at: faker.date.past(),
        })
    })

    return data;
}