import { client } from './index'

export interface Djinni {
  _id: string
  name: string
  element: string
  description: string
  hp: number
  pp: number
  atk: number
  def: number
  agi: number
  lck: number
  damage: string
  battleEffect: string
  image: string
  icon: string
  star: string
}

export const getDjinn = () => client.get<{ data: { djinn: Djinni[] } }>('/djinn', { params: { sort: '-element,name' } })

export const getDjinni = (djinniId: string) => client.get<{ data: { djinni: Djinni } }>(`/djinn/${djinniId}`)

export const createDjinni = (djinni: object) => client.post<Djinni>('/djinn', djinni)

export const deleteDjinni = (djinniId: string) => client.delete<Djinni>(`/djinn/${djinniId}`)
