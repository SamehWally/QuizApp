export interface IGroupResponse {
  _id: string
  name: string
  status: string
  instructor: string
  students: any[]
  max_students: number
}
export interface IGroupRequest {
    name:string,
    students: string[]
}
export interface StudentInterface {
  _id: string
  first_name: string
  last_name: string
  email: string
  status: string
  role: string
}
