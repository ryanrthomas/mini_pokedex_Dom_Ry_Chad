const { PrismaClient } = require('../generated/prisma');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
    // Clean existing data
    await prisma.weaponStats.deleteMany();
    await prisma.weapon.deleteMany();
    await prisma.backpack.deleteMany();
    await prisma.hero.deleteMany();

    const classes = ["TANK", "ASSASSIN", "MAGE", "FOUNTAIN_GUARD"];
    const rarity = ["COMMON", "UNCOMMON", "RARE", "HEROIC", "LEGENDARY", "MYTHICAL"]
    // Create 5 heroes and backpacks
    const heroes = [];
    for (let i = 0; i < 5; i++) {
        const hero = await prisma.hero.create({
            data: {
                name: faker.person.zodiacSign(),
                class: classes[Math.floor(Math.random() * 3)],
                level: Math.floor(Math.random() * 100) + 1
            },
        });
    
        const backpack = await prisma.backpack.create({
            data: {
                hero_id: hero.id,
                backpack_size: Math.floor(Math.random() * hero.level) + 1
            },
        });

        heroes.push({...hero, backpack});
        console.log(`Created hero: ${hero.name}`);
    }

    for (const hero of heroes) {
        const backpack = await prisma.backpack.findUnique({
            where: { hero_id: hero.id }
        });

        const weaponCount = faker.number.int({ min: Math.floor(hero.level/10), max: 10 });
        for (let i = 0; i < weaponCount; i++) {
            const weapon = await prisma.weapon.create({
                data: {
                    name: faker.word,
                    rarity: rarity[Math.floor(Math.random() * rarity.length)],
                    description: faker.lorem.lines(),
                    hero_id: hero.id,
                    backpack_id: backpack.id
                },
            });
        console.log(`Forged weapon: ${weapon.name}`);
        console.log(`Weapon Rarity: ${weapon.rarity}`);
            
        await prisma.weaponStats.create({
            data: {
                weapon_id: weapon.id,
                weapon_str: hero.class === "TANK" ? Math.floor(Math.random() * hero.level/2) + 20 :
                            hero.class === "ASSASSIN" ? Math.floor(Math.random() * hero.level*2) + 20 :
                            hero.class === "MAGE" ? Math.floor(Math.random() * hero.level*1.5) + 20 :
                            Math.floor(Math.random() * hero.level * 100000) * 100000,

                weapon_def: hero.class === "TANK" ? Math.floor(Math.random() * hero.level*2) + 20 :
                            hero.class === "ASSASSIN" ? Math.floor(Math.random() * hero.level/2) + 20 :
                            hero.class === "MAGE" ? Math.floor(Math.random() * hero.level/1.5) + 20 :
                            Math.floor(Math.random() * hero.level * 100000) * 100000, 

                weapon_int: hero.class === "TANK" ? Math.floor(Math.random() * hero.level/3) + 20 :
                            hero.class === "ASSASSIN" ? Math.floor(Math.random() * hero.level/2) + 20 :
                            hero.class === "MAGE" ? Math.floor(Math.random() * hero.level/1.2) + 20 :
                            Math.floor(Math.random() * hero.level * 100000) * 100000,

                weapon_crit: hero.class === "TANK" ? Math.floor(Math.random() * hero.level*.01) + 20 :
                                hero.class === "ASSASSIN" ? Math.floor(Math.random() * hero.level*10) + 20 :
                                hero.class === "MAGE" ? Math.floor(Math.random() * hero.level*2) + 20 :
                                Math.floor(Math.random() * hero.level * 100000) * 100000, 
            },
        });
        
    }}
}


main()
    .then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
