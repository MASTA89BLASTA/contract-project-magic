const bcrypt = require("bcrypt");
const { User, Card } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.create({
      login: "lisa",
      email: "lisa@mail.ru",
      password: await bcrypt.hash("123", 10),
      city: "Санкт Петербург",
      cash: 1000,
      Cards: [
        {
          name: "Adjany",
          img: "/Cards/Аджани.jpg",
          price: "200 tokens",
          level: "New",
        },
        {
          name: "Vivien",
          img: "/Cards/Вивьен.jpg",
          price: "100 tokens",
          level: "Medium",
        },
        {
          name: "Gideon",
          img: "/Cards/Гидеон.jpg",
          price: "180 tokens",
          level: "New",
        },
        {
          name: "Jase",
          img: "/Cards/Джейс.jpg",
          price: "200 tokens",
          level: "New",
        },
        {
          name: "Dominic",
          img: "/Cards/Доминик.jpg",
          price: "2000 tokens",
          level: "Exclusive",
        },
        {
          name: "Lilian",
          img: "/Cards/Лилиана.jpg",
          price: "300 tokens",
          level: "New",
        },
        {
          name: "Ob-Nyxlis",
          img: "/Cards/Об-Никсилис.jpg",
          price: "410 tokens",
          level: "New",
        },
        {
          name: "Renn",
          img: "/Cards/Ренн.jpg",
          price: "120 tokens",
          level: "Old",
        },
        {
          name: "Sorin",
          img: "/Cards/Сорин.jpg",
          price: "250 tokens",
          level: "New",
        },
        {
          name: "Stranger",
          img: "/Cards/Странница.jpg",
          price: "200 tokens",
          level: "Medium",
        },
        {
          name: "Tamyo",
          img: "/Cards/Тамиё.jpg",
          price: "300 tokens",
          level: "New",
        },
        {
          name: "Tezzered",
          img: "/Cards/Теззерет.jpg",
          price: "500 tokens",
          level: "New",
        },
        {
          name: "Tefery",
          img: "/Cards/Тефери.jpg",
          price: "150 tokens",
          level: "Medium",
        },
        {
          name: "Chandra",
          img: "/Cards/Чандра.jpg",
          price: "100 tokens",
          level: "Old",
        },
      ],
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
