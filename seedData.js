const source = require('@faker-js/faker')

var faker = source.faker;

const seedData = () => {
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
    })
    )
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

    const incomes = Array.from({ length: 3 }, () => ({
        id: faker.string.uuid(),
        code: faker.finance.routingNumber(),
        description: faker.commerce.productAdjective(),
        amount: faker.finance.amount(),
        entity_type: faker.string.fromCharacters(['fund', 'corporate', 'bank'])
    })
    )

    const reports = Array.from({ length: 2 }, () => ({
        id: faker.string.uuid(),
        created_at: faker.date.past(),
        description: faker.commerce.productAdjective(),
        user: {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
        },
        assets: Array.from({ length: 3 }).map(() => {
            return {
                id: faker.string.uuid(),
                year: faker.date.past().getDate(),
                current_assets: {
                    cash: faker.finance.amount(),
                    account_receivable: faker.finance.amount(),
                    inventory: faker.finance.amount(),
                    short_term_investment: faker.finance.amount(),
                    prepaid_experts: faker.finance.amount(),
                },
                fixed_assets: {
                    long_term_investment: faker.finance.amount(),
                    land: faker.finance.amount(),
                    buildings: faker.finance.amount(),
                    plant_and_equipment: faker.finance.amount(),
                    furniture_and_fixture: faker.finance.amount(),
                },
                current_liabilities: {
                    account_payable: faker.finance.amount(),
                    short_term_note: faker.finance.amount(),
                    current_portion: faker.finance.amount(),
                    interet_payable: faker.finance.amount(),
                    accrued_payroll: faker.finance.amount(),
                    taxes_payable: faker.finance.amount(),
                }
            }
        }),
        entity_type: faker.string.fromCharacters(['fund', 'corporate', 'bank'])
    })
    )

    const cash_flow = {
        id: faker.string.uuid(),
        data: Array.from({ length: 2 }).map(() => {
            return {
                id: faker.string.uuid(),
                year: faker.date.recent().getDate(),
                operatin_activities: {
                    net_income: faker.finance.amount(),
                    depreciation: faker.finance.amount(),
                    deferred_taxes: faker.finance.amount(),
                    account_receivable: faker.finance.amount(),
                    others_assets_liabilities: faker.finance.amount(),
                    inventory: faker.finance.amount(),
                },
                financing_activities: {
                    cash_dividents_paid: faker.finance.amount(),
                    repurchase: faker.finance.amount(),
                    issuance: faker.finance.amount(),
                    change_in_current_debt: faker.finance.amount(),
                    change_in_ling_term_debt: faker.finance.amount(),
                    others_funds: faker.finance.amount(),
                },
                net_cash_flow: {
                    operating_cash_flow: faker.finance.amount(),
                    capital: faker.finance.amount(),
                },
                free_cash_flow: faker.finance.amount(),

            }
        })
    }

    const reporting = Array.from({ length: 10 }, () => ({
        id: faker.string.uuid(),
        iban: faker.finance.iban(),
        balance: faker.finance.amount(),
        transaction_date: faker.date.past(),
        entity_type: faker.string.fromCharacters(['fund', 'corporate', 'bank'])
    })
    )

    const fs = require('fs');
    const db = require('./db.json');
    if (db.entities.length < 1) {
        db.entities = entities;
        db.currencies = currencies;
        db.documents = documents;
        db.groups = groups;
        db.accounts = accounts;
        db.documents_type = documentTypes;
        db.incomes = incomes;
        db.reports = reports;
        db.cash_flow = cash_flow;
        db.reporting = reporting;
        fs.writeFileSync('./db.json', JSON.stringify(db));
    }
};

seedData();
