// const { Query } = require("mongoose");
const { Sequelize } = require("sequelize");

class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
    this.queryOptions = {};
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            [Sequelize.Op.like]: `%${this.queryStr.keyword}%`,
          },
        }
      : {};
    this.queryOptions.where = { ...keyword };
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    //Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    //Filter for price and rating

    // console.log(queryCopy);

    // let queryStr = JSON.stringify(queryCopy);
    // queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    // this.query = this.query.find(JSON.parse(queryCopy));

    // console.log(queryCopy);

    return this;
  }

  getOptions() {
    return this.queryOptions;
  }
}

module.exports = ApiFeatures;
