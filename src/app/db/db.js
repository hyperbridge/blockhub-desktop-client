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

        this.marketplace = {}
        this.marketplace.apps = this.loki.addCollection('marketplaceApps', { indices: ['id'] })

        this.republic = {}
        this.republic.citizens = this.loki.addCollection('republicCitizens', { indices: ['id'] })

        this.republic.council = {}
        this.republic.council.delegates = this.loki.addCollection('republicCouncilDelegates', { indices: ['id'] })

        this.republic.elections = this.loki.addCollection('republicElections', { indices: ['id'] })

        this.accounts.insert([

        ])

        this.republic.council.delegates.insert([
            {
                name: 'Hyperbridge',
                address: "0x0",
                industry: "Technology"
            }
        ])

        this.republic.citizens.insert([
            {
                name: "eric",
                address: "0x0",
                apps: [
                    {
                        id: "0asdasd0a-adsasda-asdasd9",
                        name: "blockhub",
                        link: "http://something/blockhub.exe"
                    }
                ]
            }
        ])

        this.republic.elections.insert([
            {
                title: '2018 Election',
                description: 'We intend to do things. Learn more here: https://hyperbridge.org/election2018',
                startAt: '03-03-2018',
                endAt: '03-03-2019',
                nominees: [
                    {
                        address: "0x0",
                        name: "Microsoft"
                    },
                    {
                        address: "0x0",
                        name: "Google"
                    }
                ],
                winners: []
            },
            {
                title: '2019 Election',
                startAt: '03-03-2019',
                endAt: '03-03-2020',
                nominees: [
                    {
                        address: "0x0",
                        name: "Microsoft"
                    },
                    {
                        address: "0x0",
                        name: "Google"
                    }
                ],
                winners: [
                    {
                        address: "0x0",
                        name: "Google"
                    }
                ]
            }
        ])

        this.marketplace.apps.insert([
            {
                id: 'sadas3asdasd-asd34asd3-adsas3',
                name: 'Battlerite',
                type: 'game',
                downloads: 4000,
                owner: '0x0',
                author: {
                    id: '0x0'
                },
                republicTags: ['game', 'upcoming'],
                authorTags: ['moba']
            },
            {
                id: 'vsdvs-asd34asfdssd3-ad434sas3',
                name: 'Fortnite',
                type: 'game',
                downloads: 4000,
                owner: '0x0',
                author: {
                    id: '0x0'
                },
                republicTags: ['game', 'specials'],
                authorTags: ['fps']
            },
            {
                id: "29dsa90-asdsad9adas-asdadas-asdasd",
                name: "World of Warcraft",
                type: 'game',
                downloads: 20,
                republicTags: ['game', 'specials'],
                authorTags: ['mmo']
            },
            {
                id: "29dsa90-3434asd-asdadas-asdasd",
                name: "Divvy",
                type: 'app',
                downloads: 0,
                republicTags: ['productivity', 'specials'],
                authorTags: ['hotkeys']
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