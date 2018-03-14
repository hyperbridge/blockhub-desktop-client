import Loki from 'lokijs'

class DB {
    constructor() {
        const databaseInitialize = () => {

        }

        const idbAdapter = (new Loki()).getIndexedAdapter()

        this.loki = new Loki('main.db', {
            adapter: new idbAdapter('main.db'),
            autoload: true,
            autoloadCallback: databaseInitialize,
            autosave: true,
            autosaveInterval: 4000
        })

        this.accounts = this.loki.addCollection('accounts', { indices: ['id'] })
        this.citizens = this.loki.addCollection('citizens', { indices: ['id'] })
        this.apps = this.loki.addCollection('apps', { indices: ['id'] })

        this.accounts.insert([

        ])
        
        this.citizens.insert([

        ])

        this.apps.insert([
            {
                id: 'sadas3asdasd-asd34asd3-adsas3',
                name: 'Battlerite',
                type: 'game',
                downloads: 4000,
                owner: '0x0',
                author: {
                    id: '0x0'
                }
            },
            {
                id: 'vsdvs-asd34asfdssd3-ad434sas3',
                name: 'Fortnite',
                type: 'game',
                downloads: 4000,
                owner: '0x0',
                author: {
                    id: '0x0'
                }
            }
        ])

        // debugger;
        // // manually save
        // this.loki.saveDatabase(function (err) {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         console.log("saved... it can now be loaded or reloaded with up to date data");
        //     }
        // });

    }
}

export default new DB()