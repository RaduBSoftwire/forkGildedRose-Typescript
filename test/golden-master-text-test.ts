import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here

describe('Regular items', function () {

    it('sellIn decrementation', function() {
        // Arrange
        const gildedRose = new GildedRose([new Item('other', 30, 20)]);
        // Act
        const items = gildedRose.updateQuality();
        // Assert
        expect(items[0].sellIn).to.equal(29);
    });

    it('Quality decay', function() {
        const gildedRose = new GildedRose([new Item('other', 30, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(19);
    });


    it('Quality cannot go below 0', function() {
        const gildedRose = new GildedRose([new Item('other', 30, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('Quality decay after sellIn < 0, quality < 50', function() {
        const gildedRose = new GildedRose([new Item('other', 0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(18);
    });

    it('Quality decay after sellIn < 0, quality = 0', function() {
        const gildedRose = new GildedRose([new Item('other', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

});

describe('Sulfuras', function () {

    it('sellIn decrementation', function() {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 30, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(30);
    });

    it('Quality decay before 0 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros',30, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });

    it('Quality decay after 0 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros',0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });

});

describe('Aged Brie', function () {

    it('sellIn decrementation', function() {
        const gildedRose = new GildedRose([new Item('Aged Brie', 30, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(29);
    });

    it('Quality decay before 0 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Aged Brie',20, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(21);
    });

    it('Quality decay after 0 sellIn, quality < 50', function() {
        const gildedRose = new GildedRose([new Item('Aged Brie',0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(22);
    });

    it('Quality decay after 0 sellIn, quality > 50', function() {
        const gildedRose = new GildedRose([new Item('Aged Brie',0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('Quality cannot go below 0', function() {
        const gildedRose = new GildedRose([new Item('Aged Brie', 30, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(1);
    });

});

describe('Backstage passes', function () {

    it('sellIn decrementation', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 30, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(29);
    });

    it('Quality decay before 10 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',15, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(21);
    });

    it('Quality decay between 10 and 5 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(22);
    });

    it('Quality decay between 5 and 0 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(23);
    });

    it('Quality decay after 0 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert',0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('Quality cannot go below 0', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
    });

    it('Quality cannot go further than 50', function() {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 50)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(50);
    });

});

describe('Conjured', function () {

    it('sellIn decrementation', function() {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 30, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(29);
    });

    it('Quality decay before 0 sellIn', function() {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake',15, 20)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(18);
    });

    it('Quality decay after 0 sellIn, quality > 0', function() {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake',0, 40)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(36);
    });

    it('Quality decay after 0 sellIn, quality = 0', function() {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake',0, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
    });

    it('Quality cannot go below 0', function() {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 30, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
    });

});

describe('Constructor Test', function () {

    it('Constructor', function() {
        const gildedRose = new GildedRose();
        const items = gildedRose.updateQuality();
        expect(gildedRose.items.length).to.equal(0);
    });

});