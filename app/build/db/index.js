"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toObject = exports.reload = exports.clean = exports.save = exports.loadDefault = exports.instance = exports.init = exports.setInitCallback = exports.funding = exports.marketplace = exports.application = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _lokijs = _interopRequireDefault(require("lokijs"));

var _jsonBeautify = _interopRequireDefault(require("json-beautify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const data = require('./data.json');

let loki = null;
let initCallback = null;
let initialized = false;
let application = {
  config: null
};
exports.application = application;
let marketplace = {
  config: null,
  products: null,
  assets: null
};
exports.marketplace = marketplace;
let funding = {
  projects: null
};
exports.funding = funding;

let setInitCallback = cb => {
  initCallback = cb;
};

exports.setInitCallback = setInitCallback;

const init = () => {
  console.log('[BlockHub] Initializing database...');

  const databaseInitialize = () => {};

  loki = new _lokijs.default(null, {
    autoload: false,
    autosave: false,
    autosaveInterval: 4000
  });
  loadDefault();
  initialized = true;
  initCallback && initCallback();
};

exports.init = init;

const instance = () => {
  return loki;
};

exports.instance = instance;

const loadDefault = () => {
  application.config = loki.addCollection('applicationConfig');
  marketplace.config = loki.addCollection('marketplaceConfig');
  marketplace.products = loki.addCollection('marketplaceProducts');
  marketplace.assets = loki.addCollection('marketplaceAssets');
  funding.projects = loki.addCollection('fundingProjects');
  funding.config = loki.addCollection('fundingConfig');
  data.marketplace['$loki'] = 1;
  data.funding['$loki'] = 1;
  data.application['$loki'] = 1;
  data.marketplace.id = '1';
  data.funding.id = '1';
  data.application.id = '1';

  try {
    updateCollection(application.config, data.application);
    updateCollection(marketplace.config, data.marketplace);
    updateCollection(marketplace.products, data.marketplace.products);
    updateCollection(marketplace.assets, data.marketplace.assets);
    updateCollection(funding.projects, data.funding.projects);
    updateCollection(funding.config, data.funding);
  } catch (e) {
    console.warn(e);
  }

  application.config.ensureId();
  application.config.ensureAllIndexes(true);
  marketplace.config.ensureId();
  marketplace.config.ensureAllIndexes(true);
  funding.config.ensureId();
  funding.config.ensureAllIndexes(true);
};

exports.loadDefault = loadDefault;

const save = () => {
  console.log('[BlockHub] Saving database...');

  if (!initialized) {
    console.log('[BlockHub] Cannot save, not initialized.');
    return;
  }

  data.application = application.config.data;
  data.marketplace = marketplace.config.data;
  data.marketplace.products = marketplace.products.data;
  data.marketplace.assets = marketplace.assets.data;
  data.funding = funding.config.data;
  data.funding.projects = funding.projects.data;

  _fs.default.writeFile('./src/db/data.json', (0, _jsonBeautify.default)(data, null, 2, 100), 'utf8', err => {
    if (err) {
      return console.log('[BlockHub] Error saving database', err);
    }

    console.log('[BlockHub] Database saved.');
  });
};

exports.save = save;

const clean = () => {
  application.config.chain().remove();
  marketplace.config.chain().remove();
  marketplace.products.chain().remove();
  marketplace.assets.chain().remove();
  funding.projects.chain().remove();
  funding.config.chain().remove();
};

exports.clean = clean;

const updateCollection = (collection, data) => {
  collection.data = data; // let obj = collection.findObject({
  //   'id': data.id
  // });
  // if (obj) {
  //   collection.update(data);
  // } else {
  //   collection.insert(data);
  // }
};

const reload = () => {
  clean();
  loadDefault();
};

exports.reload = reload;

const toObject = () => {
  return {};
};

exports.toObject = toObject;
init();