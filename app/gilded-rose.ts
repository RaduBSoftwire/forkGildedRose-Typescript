export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

            // update sellIn
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }

            // differentiate between positive and negative sellIn values
            if (this.items[i].sellIn > 0) {


                switch (this.items[i].name) {
                    case 'Aged Brie':
                        this.items[i].quality = this.items[i].quality + 1
                        break;

                    case 'Backstage passes to a TAFKAL80ETC concert':
                        if (this.items[i].quality < 50) {

                            this.items[i].quality = this.items[i].quality + 1

                            if (this.items[i].sellIn < 11) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                            if (this.items[i].sellIn < 6) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        break;

                    case  'Sulfuras, Hand of Ragnaros':
                        break;

                    default:
                        if (this.items[i].quality > 0) {
                            this.items[i].quality = this.items[i].quality - 1
                        }
                }
            }

            else    // sellIn < 0

            {

                switch (this.items[i].name) {
                    case 'Aged Brie':
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 2
                        }
                        break;

                    case 'Backstage passes to a TAFKAL80ETC concert':
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                        break;

                    case  'Sulfuras, Hand of Ragnaros':
                        break;

                    default:
                        if (this.items[i].quality > 0) {
                            this.items[i].quality = this.items[i].quality - 2
                        }
                        break;
                }
            }
        }

        return this.items;
    }
}
