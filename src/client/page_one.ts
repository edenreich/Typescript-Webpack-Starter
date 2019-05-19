
import Cart from '@components/cart.component';
import ICart from '@interfaces/cart.interface';
import IItem from '@interfaces/item.interface';

const cart: ICart = new Cart();

const item: IItem = {
    name: 'Example item',
    price: 10.0,
    quantity: 1,
};

cart.addItem(item);
