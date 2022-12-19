import { Photo } from "./Photo"

export interface Member {
  id: number
  userName: string
  photoUrl: string
  age: number
  knownAs: Date
  created: string
  lastActive: Date
  gender: string
  introduction: string
  lookingFor: string
  intrests: string
  city: string
  country: string
  photos: Photo[]
}


