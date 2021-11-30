(() => {
    interface Customer {
        name: string;
        age: number;
        address?: Address;
        getFullAddress?: (id: string) => string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const customer: Customer = {
        name: 'Alberto',
        age: 26,
        address: {
            id: 123,
            zip: 'KTy45TR',
            city: 'Los Santos',
        },
    };

    const customer2: Customer = {
        name: 'Stranger',
        age: 40,
        getFullAddress(id: string) {
            return this.address?.city || '';
        },
    };
})();
