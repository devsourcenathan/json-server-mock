const source = require('@faker-js/faker')

var faker = source.faker;

const seedData = () => {
    // Générer des données factices pour chaque entité

    const entities = Array.from({ length: 12 }, () => ({
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
        contacts: Array.from({ length: 4 }).map(() => {
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
        reports: Array.from({ length: 3 }).map(() => {
            return {
                id: faker.string.uuid(),
                name: faker.finance.accountName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                address: faker.location.country(),
            }
        }),
    })
    )
    const currencies = Array.from({ length: 10 }, () => ({
        id: faker.string.uuid(),
        name: faker.finance.currencyCode(),
        currentValue: faker.finance.amount(),
        previousValue: faker.finance.amount(),
        date: faker.date.recent(),
    }))
    const documents = Array.from({ length: 12 }, () => ({
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
    )
    const groups = Array.from({ length: 12 }, () => ({
        id: faker.string.uuid(),
        name: faker.string.fromCharacters(['Invoices', "Reports", "Scan", "Draff"]),
        currency: faker.finance.currencyName(),
        jurisdiction: faker.location.countryCode(),
        product: faker.commerce.productName(),
        business: faker.commerce.department(),
        date: faker.date.recent(),
    })
    )
    const accounts = Array.from({ length: 3 }, () => ({
        id: faker.string.uuid(),
        iban: faker.finance.iban(),
        balance: faker.finance.amount(),
        last_transaction_date: faker.date.recent(),
        date: faker.date.recent(),
    })
    )
    const documentTypes = Array.from({ length: 6 }, () => ({
        id: faker.string.uuid(),
        label: faker.string.fromCharacters(['pdf', 'word', 'excel']),
        description: faker.lorem.text(),
        created_at: faker.date.past(),
    })
    )

    // Écrire les données factices dans le fichier `db.json`
    const fs = require('fs');
    const db = require('./db.json');
    db.entities = entities;
    db.currencies = currencies;
    db.documents = documents;
    db.groups = groups;
    db.accounts = accounts;
    db.documentTypes = documentTypes;
    fs.writeFileSync('./db.json', JSON.stringify(db));
};

seedData();
