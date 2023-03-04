export const navItems = [
    {
        name: 'rent an apartment',
        path: '/rent-an-apartment'
    },
    {
        name: 'buy an apartment',
        path: '/buy-an-apartment'
    },
    {
        name: 'invest in apartments',
        path: '/invest-in-apartments'
    },
];

export const compareData = [
    {
        id:1,
        name: 'Sole-Ownership',
        list_item: [
            {
                heading: 'Choose a property',
                info: 'Browse and select any of our pre-vetted properties that matchyour investment appetite.'
            },
            {
                heading: 'Get financing approval',
                info: 'Apply for financing in 5mins and get approval in 24hrs. 5% of the downpayment is required as original fee, and it refundable if you are not approved.'
            },
            {
                heading: 'Complete documentation',
                info: 'Apply for financing in 5mins and get approval in 24hrs. 5% of the downpayment is required as original fee, and it refundable if you are not approved.'
            },
            {
                heading: 'Take ownership',
                info: 'Property title will be transferred to you once payback is completed. You can buyout/sell property'
            },
        ]
    },
    {
        id:2,
        name: 'Co-Ownership',
        list_item: [
            {
                heading: 'Choose a property',
                info: 'Browse and select any of our pre-vetted properties that matchyour investment appetite.'
            },
            {
                heading: 'Buy shares',
                info: 'Review all terms, sign documents and pay for your shares'
            },
            {
                heading: 'Get ownership ceertificate',
                info: 'Your share certificate is your right of ownership to the shares you bought.'
            },
            {
                heading: 'Earn income & appreciation',
                info: 'Earn your share of rent and watch your shares appreciate while we manage the property.'
            },
        ]
    }
];

export const apartmentData = [
    {
        id: 1,
        name: 'Bellview Court, Block D, Lekki',
        image: require('../pages/house/images/buy_1.jpg'),
        type: '2 Bedrooms',
        status: 'Ongoing',
        down_payment: 26000000,
        apartment_status: 'available',
        price: 76000000,
        rent: '4M',
        returns: 14,
        appreciation: 20,
        apartment_details: ['2 bedrooms', '2 bathrooms', '45 sqm']
    },
    {
        id: 2,
        name: 'Bellview Court, Block F, Lekki',
        image: require('../pages/house/images/buy_2.jpg'),
        type: '3 Bedrooms',
        status: 'Completed',
        down_payment: 33000000,
        apartment_status: 'available',
        price: 98000000,
        rent: '4.6M',
        returns: 15,
        appreciation: 22,
        apartment_details: ['3 bedrooms', '3 bathrooms', '50 sqm']
    },
    {
        id: 3,
        name: 'Primegate Court, Block H, Lekki',
        image: require('../pages/house/images/buy_3.jpg'),
        type: '2 Bedrooms',
        status: 'Completed',
        down_payment: 26000000,
        apartment_status: 'available',
        price: 76000000,
        rent: '3.7M',
        returns: 18,
        appreciation: 23,
        apartment_details: ['2 bedrooms', '2 bathrooms', '45 sqm']
    },
    // {
    //     id: 4,
    //     name: 'Smithsan Court, Block D, Oniru',
    //     image: require('../pages/house/images/buy_1.jpg'),
    //     type: '2 Bedrooms',
    //     status: 'Ongoing',
    //     down_payment: 16000000,
    //     apartment_status: 'available',
    //     price: 76000000,
    //     rent: '4.3M',
    //     returns: 21,
    //     appreciation: 21,
    //     apartment_details: ['2 bedrooms', '2 bathrooms', '48 sqm']
    // },

];

export const investmentData = [
    {
        id: 1,
        name: 'Bellview Court, Block D, Lekki',
        image: require('../pages/house/images/buy_1.jpg'),
        type: '2 Bedrooms',
        status: 'Ongoing',
        share_price: 6000,
        purchase_status: 'buy',
        price: 76000000,
        total_returns: 84,
        hold_time: 4,
        available_shares: 13750,
        remaining_shares: '12,987',
        apartment_details: ['2 bedrooms', '2 bathrooms', '45 sqm']
    },
    {
        id: 2,
        name: 'Bellview Court, Block F, Lekki',
        image: require('../pages/house/images/buy_2.jpg'),
        type: '3 Bedrooms',
        status: 'Completed',
        share_price: 4000,
        purchase_status: 'sold out',
        price: 98000000,
        total_returns: 75,
        hold_time: 3,
        available_shares: 15750,
        remaining_shares: 11987,
        apartment_details: ['3 bedrooms', '3 bathrooms', '50 sqm']
    },
    {
        id: 3,
        name: 'Primegate Court, Block H, Lekki',
        image: require('../pages/house/images/buy_3.jpg'),
        type: '2 Bedrooms',
        status: 'Completed',
        share_price: 4500,
        purchase_status: 'buy',
        price: 76000000,
        total_returns: 78,
        hold_time: 4,
        available_shares: 17750,
        remaining_shares: 15987,
        apartment_details: ['2 bedrooms', '2 bathrooms', '45 sqm']
    },
    // {
    //     id: 4,
    //     name: 'Smithsan Court, Block D, Oniru',
    //     image: require('../pages/house/images/buy_4.jpg'),
    //     type: '2 Bedrooms',
    //     status: 'Ongoing',
    //     share_price: 4500,
    //     down_payment: 16000000,
    //     purchase_status: 'buy',
    //     price: 76000000,
    //     total_returns: 80,
    //     hold_time: 5,
    //     available_shares: 12750,
    //     remaining_shares: 10987,
    //     apartment_details: ['2 bedrooms', '2 bathrooms', '48 sqm']
    // },

];

export const rentData = [
    {
        id: 1,
        name: 'Bellview Court, Block D, Lekki',
        image: require('../pages/house/images/rent_1.jpg'),
        type: '2 Bedrooms',
        status: 'Ongoing',
        apartment_status: 'available',
        rent: 2200000,
        apartment_details: ['2 bedrooms', '2 bathrooms', '45 sqm']
    },
    {
        id: 2,
        name: 'Bellview Court, Block F, Lekki',
        image: require('../pages/house/images/rent_2.jpg'),
        type: '3 Bedrooms',
        status: 'Completed',
        rent: 2200000,
        apartment_status: 'filled',
        rent: 2600000,
        apartment_details: ['3 bedrooms', '3 bathrooms', '50 sqm']
    },
    {
        id: 3,
        name: 'Primegate Court, Block H, Lekki',
        image: require('../pages/house/images/rent_3.jpg'),
        type: '2 Bedrooms',
        status: 'Completed',
        rent: 1200000,
        apartment_status: 'available',
        apartment_details: ['2 bedrooms', '2 bathrooms', '45 sqm']
    },
    // {
    //     id: 4,
    //     name: 'Smithsan Court, Block D, Oniru',
    //     image: require('../pages/house/images/rent_4.jpg'),
    //     type: '2 Bedrooms',
    //     status: 'Ongoing',
    //     rent: 2600000,
    //     apartment_status: 'available',
    //     apartment_details: ['2 bedrooms', '2 bathrooms', '48 sqm']
    // },

];