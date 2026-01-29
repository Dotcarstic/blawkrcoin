import dotenv from 'dotenv';
import { TwitterApi } from 'twitter-api-v2';

dotenv.config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function testBot() {
  try {
    // Teste l'API v1.1 (plus stable pour les bots)
    await client.v1.tweet("🚀 Test de tweet avec OAuth 1.0a !");
    console.log("✅ Tweet posté avec succès !");
  } catch (error) {
    console.error("❌ Erreur :", error);
    if (error.code === 403) {
      console.log("\n🔍 Causes possibles :");
      console.log("- ❌ OAuth 1.0a non activé ou mal configuré");
      console.log("- ❌ Clés OAuth 1.0a invalides");
      console.log("- ❌ URL du site web invalide (dépôt GitHub vide)");
    }
  }
}

testBot();
