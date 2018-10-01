import fs from 'fs'
import path from 'path'
import Loki from 'lokijs'
import beautify from 'json-beautify'

const data = require('./data.json')

let loki = null
let initCallback = null
let initialized = false

export let network = {
    config: null
}

export let marketplace = {
    config: null,
    products: null,
    assets: null
}

export let funding = {
    projects: null
}

export let setInitCallback = (cb) => {
    initCallback = cb
}

export const init = () => {
    console.log('[BlockHub] Initializing database...')
    
    const databaseInitialize = () => {
    }

    loki = new Loki(null, {
        autoload: false,
        autosave: false,
        autosaveInterval: 4000
    })

    loadDefault()

    initialized = true

    initCallback && initCallback()
}

export const instance = () => {
    return loki
}

export const loadDefault = () => {
    network.config = loki.addCollection('networkConfig');
    marketplace.config = loki.addCollection('marketplaceConfig');
    marketplace.products = loki.addCollection('marketplaceProducts');
    marketplace.assets = loki.addCollection('marketplaceAssets');
    funding.projects = loki.addCollection('fundingProjects');
    funding.config = loki.addCollection('fundingConfig');

    data.marketplace['$loki'] = 1
    data.funding['$loki'] = 1
    data.network['$loki'] = 1
    data.marketplace.id = '1'
    data.funding.id = '1'
    data.network.id = '1'

    try {
        updateCollection(network.config, data.network)
        updateCollection(marketplace.config, data.marketplace)
        updateCollection(marketplace.products, data.marketplace.products)
        updateCollection(marketplace.assets, data.marketplace.assets)
        updateCollection(funding.projects, data.funding.projects)
        updateCollection(funding.config, data.funding)
    }
    catch (e) {
        console.warn(e)
    }

    network.config.ensureId();
    network.config.ensureAllIndexes(true);
    marketplace.config.ensureId();
    marketplace.config.ensureAllIndexes(true);
    funding.config.ensureId();
    funding.config.ensureAllIndexes(true);
}

export const save = () => {
    console.log('[BlockHub] Saving database...')

    if (!initialized) {
        console.log('[BlockHub] Cannot save, not initialized.')
        return
    }

    data.network = network.config.data
    data.marketplace = marketplace.config.data
    data.marketplace.products = marketplace.products.data
    data.marketplace.assets = marketplace.assets.data
    data.funding = funding.config.data
    data.funding.projects = funding.projects.data

    fs.writeFile('./src/db/data.json', beautify(data, null, 2, 100), 'utf8', (err) => {
        if (err) {
            return console.log('[BlockHub] Error saving database', err)
        }

        console.log('[BlockHub] Database saved.')
    });
}

export const clean = () => {
    network.config.chain().remove()
    marketplace.config.chain().remove()
    marketplace.products.chain().remove()
    marketplace.assets.chain().remove()
    funding.projects.chain().remove()
    funding.config.chain().remove()
}

const updateCollection = (collection, data) => {
    collection.data = data
  // let obj = collection.findObject({
  //   'id': data.id
  // });

  // if (obj) {
  //   collection.update(data);
  // } else {
  //   collection.insert(data);
  // }
}

export const reload = () => {
    clean()

    loadDefault()
}

export const toObject = () => {
    return {
    }
}

init()