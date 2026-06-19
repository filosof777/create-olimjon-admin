export type TParams = {
  fields?: object[]
  include?: string | string[]
  append?: string | string[]
  limit?: number | string | any
  sort?: string | null
  filter?: {
    [key: string]: number | string | boolean | [] | object | undefined | null
  }
  page?: number | undefined | null | string | any
  extra?: {
    [key: string]: number | string | boolean | [] | object | undefined | null
  }
}

export type TMeta = {
  current_page: number | any
  count: number
  per_page: number
  page: number
  total: number
}

export type IMethod = 'post' | 'put' | 'delete' | 'get'
