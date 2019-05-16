"use strict"

class GoodsItem {
    constructor (title, price) {
        this.title = title;
        this.price = price;
}
render() {
        return `<div class="goods-item">
        <img class="goods-item-img" src="./img/t-shirt.jpg">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        </div>`;
}

sum () {
        /*return parseInt(this.price);*/
    return this.price;
}
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods () {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
            { title: 'Car', price: 1000 },
        ];
    }
    render () {
        let listHtml = '';
        let sumGoodsHtml = 0;
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
            sumGoodsHtml = sumGoodsHtml + goodItem.sum();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        document.querySelector('.sum').innerHTML = 'Сумма всех товаров = ' + sumGoodsHtml;
    }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
