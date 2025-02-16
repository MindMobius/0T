import { readFileSync } from 'fs'
import { join } from 'path'

type GameElement = {
  id: number
  name: string
}

type GameDataType = {
  game_elements: {
    organizations: {
      city: GameElement[]
      company: GameElement[]
      construct: GameElement[]
      commerce: GameElement[]
    }
    resources: {
      currency: GameElement[]
      mineral: GameElement[]
      weapon: GameElement[]
      armor: GameElement[]
      token: GameElement[]
    }
    characters: {
      npc: GameElement[]
      monster: GameElement[]
      boss: GameElement[]
    }
  }
}

export class GameData {
  private static instance: GameData
  private data: GameDataType['game_elements']

  private constructor() {
    const filePath = join(process.cwd(), 'public', 'game_elements.json')
    this.data = JSON.parse(readFileSync(filePath, 'utf-8')).game_elements
  }

  public static getInstance(): GameData {
    if (!GameData.instance) {
      GameData.instance = new GameData()
    }
    return GameData.instance
  }

  public getRandomElement<
    T extends keyof GameDataType['game_elements'],
    S extends keyof GameDataType['game_elements'][T]
  >(
    category: T,
    subCategory: S
  ): string {
    const elements = this.data[category][subCategory] as GameElement[]
    return elements[Math.floor(Math.random() * elements.length)].name
  }
  
  public getRandomResource(): string {
    return this.getRandomElement('resources', 'currency')
  }

  public getRandomMineral(): string {
    return this.getRandomElement('resources', 'mineral')
  } 

  public getRandomWeapon(): string {
    return this.getRandomElement('resources', 'weapon')
  }

  public getRandomArmor(): string {
    return this.getRandomElement('resources', 'armor')
  }
    
  public getRandomCity(): string {
    return this.getRandomElement('organizations', 'city')
  }

  public getRandomCompany(): string {
    return this.getRandomElement('organizations', 'company')
  }

  public getRandomNPC(): string {
    return this.getRandomElement('characters', 'npc')
  }

  public getRandomMonster(): string {
    return this.getRandomElement('characters', 'monster')
  }

  public getRandomBoss(): string {
    return this.getRandomElement('characters', 'boss')
  }
}

export const gameData = GameData.getInstance() 