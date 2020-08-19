const ItemModel = require('../models/mongoose/Item');

async function getAll() {
  // sort the result in descending order by creation date
  return ItemModel.find({}).sort({ createdAt: -1 });
}

// implement fucntion getOne ( for a single record )
async function getOne(itemId) {
  return ItemModel.findOne({ _id: itemId });
}

async function create(data) {
  // create a user object for the model
  const item = new ItemModel(data);
  return item.save();
}

// takes on itemId and data to be passed
async function update(itemId, data) {
  // first load item to be update
  const item = await getOne(itemId);

  if (!item) throw new Error('could not find the required item');

  // to update item we iterate through
  Object.keys(data).forEach((key) => {
    item[key] = data[key];
  });
  return item.save();
}

// implement remove function
async function remove(query) {
  const result = await ItemModel.remove(query);
  return result.n;
}

// export the modules
module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
