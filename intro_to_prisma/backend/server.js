import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors"

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/heroes', async (req, res) => {
    try {
        const heroes = await prisma.hero.findMany({
            include: {
                weapon: {
                    include: {
                        weapon_stats: true
                    }
                },
                backpack: true
            }
        });
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/weapons', async (req, res) => {
    try {
        const weapons = await prisma.weapon.findMany({
            include: {
                weapon_stats: true,
                hero: true
            }
        });
        res.json(weapons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/weapon-stats', async (req, res) => {
    try {
        const weaponStats = await prisma.weaponStats.findMany({
            include: {
                weapon: {
                    include: {
                        hero: true
                    }
                }
            }
        });
        res.json(weaponStats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
