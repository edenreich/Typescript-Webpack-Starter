
import IItem from '@interfaces/item.interface';
import ICart from '@interfaces/cart.interface';

class Cart implements ICart {
    public constructor() {
        console.log("Cart was instantiated")
    }

    public addItem(item: IItem): boolean {
        console.log('Adding an item...');

        return true;
    }

    public removeItem(item: IItem): boolean {
        console.log('Removing an item...');

        return true;
    }
}

export = Cart;
