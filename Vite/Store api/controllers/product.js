const Product = require("../model/Product");
async function getStaticProducts(req, res) {
  try {
    // const products = await Product.find({
    //   featured: true,
    //   company: "homeTown",
    // });

    // const products = await Product.find({
    //   name: { $regex: "Table", $options: "i" },
    // });

    const products = await Product.find({
      // price: { $gt: 50 },
      // price: { $lt: 50 },
      // price: { $gte: 50 },
      // price: { $lte: 50 },
      price: { $eq: 109 },
    });

    // const result = product.find({});

    res.status(200).json({
      products: products,
      length: products.length,
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error getting products" });
  }
}

async function getProducts(req, res) {
  // req.param
  // req.query
  // req.body
  const { featured, company, name, numericFilters } = req.query;
  const queryObject = {};
  try {
    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }

    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    if (numericFilters) {
      // "price>=50,rating>4" => {price:{$gte:109},rating:{$gt:4}},
      const operatorMap = {
        ">": "$gt",
        "<": "$lt",
        ">=": "$gte",
        "<=": "$lte",
        "=": "$eq",
      };

      const regEx =/\b(<|>|>=|<=|=)\b/g;

      let filters = numericFilters.replace(regEx, function (match) {
        return `-${operatorMap[match]}-`;
      });
      // "price>=50,rating>4" => "price-$gte-50,rating-$gt-4"

      const options = ["price", "rating"];

      filters = filters.split(",").forEach(function (item) {
        const [field, operator, value] = item.split("-");
        if (options.includes(field)) {
          queryObject[field] = { [operator]: value };
        }
      });
      // "price-$gte-50,rating-$gt-4".split(",") =>
      // ["price-$gte-50", "rating-$gt-4"]
    }

    const products = await Product.find(queryObject);

    res.status(200).json({
      products: products,
      length: products.length,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Error getting products" });
  }
}

module.exports = { getProducts, getStaticProducts };