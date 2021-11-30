import powers from './data/powers';
import { Power } from './data/powers';

class Fighter {
    constructor(
        public name: string,
        public type: string,
        public id: number,
        public age: number,
        public powerId: number
    ) {}

    get power(): string {
        return powers.find((power: Power) => power.id === this.powerId)?.desc || 'Not found';
    }
}

export class Fighter2 {
    constructor(public name: string) {}
}

export default Fighter;
