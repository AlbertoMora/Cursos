function printToConsole(constructor: Function) {
    console.log(constructor);
}

const lockPrototype = (constructor: Function) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

const printToConsoleConditional = (shouldPrint: boolean = false): Function => {
    if (shouldPrint) {
        return printToConsole;
    } else {
        return () => {};
    }
};

const CheckValidPokemonId = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const previewFunction = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('Id should be between 1 and 800');
            } else {
                return previewFunction(id);
            }
        };
    };
};

const readOnly = function (isWritable: boolean = true): Function {
    return (target: any, propertyKey: string) => {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);

                return 'Alberto';
            },
            set(this, value) {
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isWritable,
                    enumerable: false,
                });
            },
        };
        return descriptor;
    };
};

@lockPrototype
@printToConsoleConditional(true)
export class Pokemon {
    @readOnly()
    public publicApi: string = 'https://pokeapi.co';
    constructor(public name: string) {}

    @CheckValidPokemonId()
    savePokemonToDb(id: number) {
        console.log(`Pokemon guardado correctamente ${id}`);
    }
}
