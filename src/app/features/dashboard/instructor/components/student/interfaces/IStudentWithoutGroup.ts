export interface IStudentWithoutGroup {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  role: string;
  avg_score?: number;
  fullName?: string;
}
