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
                id: '1',
                name: 'Word',
                type: 'app',
                downloads: 1000,
                owner: '0x0',
                author: {
                    id: '0x0'
                },
                republicTags: ['app', 'upcoming'],
                authorTags: ['office']
            },
            {
                id: '5',
                name: 'Far Cry® 5',
                version: '1',
                shortDescription: 'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed & his siblings, the Heralds, to spark the fires of resistance & liberate the besieged community.',
                about: `Far Cry comes to America in the latest installment of the award-winning franchise.

Welcome to Hope County, Montana, land of the free and the brave but also home to a fanatical doomsday cult known as Eden’s Gate.Stand up to cult leader Joseph Seed, and his siblings, the Heralds, to spark the fires of resistance and liberate the besieged community.

FIGHT AGAINST A DEADLY CULT
Free Hope County in solo or two- player co-op.Recruit Guns and Fangs for hire to help defeat the cult.

A WORLD THAT HITS BACK
Wreak havoc on the cult and its members but beware of the wrath of Joseph Seed and his followers.

CARVE YOUR OWN PATH
Build your character and choose your adventure in the largest customizable Far Cry game ever!

DYNAMIC TOYS
Take control of iconic muscle cars, ATV's, planes and a lot more to engage the cult forces in epic fights.

RE-DEFINED STEALTH MECHANICS
Enhance your gameplay with eye tracking. Tag enemies by looking at them to increase your stealth skills and help your teammates spot threats. 
Compatible with all Tobii Eye Tracking gaming devices.

Additional notes: Eye tracking features available with Tobii Eye Tracking.`,
                type: 'game',
                downloads: 4000,
                owner: '0x0',
                author: {
                    id: '0x0'
                },
                releaseDate: '26 Mar, 2018',
                website: "http://far-cry.ubisoft.com",
                developers: [
                    {
                        id: '0x0',
                        name: 'Ubisoft Montreal'
                    },
                    {
                        id: '0x0',
                        name: 'Red Storm'
                    }
                ],
                publishers: [,
                    {
                        id: '0x0',
                        name: 'Ubisoft'
                    }
                ],
                republicTags: ['game', 'upcoming'],
                authorTags: ['moba'],
                genre: ['Action', 'Adventure'],
                features: [
                    'Single-player',
                    'Multi-player',
                    'Co-op',
                    'Captions available',
                    'In-App Purchase',
                    'Partial Controller Support',
                    'Includes level editor'
                ],
                systemRequirements: {
                    minimum: {

                    },
                    recommended: {

                    }
                },
                copyright: '© 2018 Ubisoft Entertainment. All Rights Reserved. Far Cry, Ubisoft and the Ubisoft logo are registered or unregistered trademarks of Ubisoft Entertainment in the US and/or other countries. Based on Crytek’s original Far Cry directed by Cevat Yerli. Powered by Crytek’s technology “CryEngine”.',
                reviewKey: 'aaa',
                similarKey: 'aaa',
                rating: [
                    {
                        agency: 'ESRB',
                        title: 'Mature',
                        image: 'https://steamstore-a.akamaihd.net/public/images/ratings/esrb_m.gif',
                        warnings: [
                            'Blood and Gore',
                            'Intense Violence',
                            'Sexual Themes',
                            'Strong Language',
                            'Use of Drugs and Alcohol',
                            'Online Interactions Not Rated by the ESRB'
                        ]
                    }
                ]
            },
            {
                id: '2',
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
                id: "3",
                name: "World of Warcraft",
                type: 'game',
                downloads: 20,
                republicTags: ['game', 'specials'],
                author: {
                    id: '0x0'
                },
                authorTags: ['mmo']
            },
            {
                id: "4",
                name: "Divvy",
                type: 'app',
                downloads: 0,
                republicTags: ['app', 'productivity', 'specials'],
                author: {
                    id: '0x0'
                },
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