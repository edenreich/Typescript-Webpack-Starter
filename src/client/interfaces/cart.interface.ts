
import IItem from './item.interface';

interface ICart {
    addItem: (item: IItem) => boolean;
    removeItem: (item: IItem) => boolean;
}

export = ICart;