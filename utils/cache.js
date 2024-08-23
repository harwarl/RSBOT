import { client } from "../database/redis.js"
import * as uuid from "uuid"

export const saveRedis = async (object) => {
  const key = uuid.v4()
  await client.set(key, object)
  return key
}

export const getRedis = async (key) => {
  return await client.get(key)
}
